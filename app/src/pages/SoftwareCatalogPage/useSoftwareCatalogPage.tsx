import {useEffect, useState} from "react";
import {selectApp} from "../../core/store/slices/selectors";
import {useSelector, useDispatch} from "../../core/store";
import {api} from "../../core/api";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";

import {ChangeEvent} from "../../App.typing.tsx";
import {saveSearchSoftwareTitle} from "../../core/store/slices/appSlice.ts";
import {Software} from "../../core/api/Api.ts";

export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<Software[]>([]);
    const [installSoftwareRequestId, setInstallSoftwareRequestId] = useState<number>();
    const [itemsInCart, setItemsInCart] = useState<number>(0);

    const {searchSoftwareTitle} = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleSearchSoftwareClick = () => {
        api.software.softwareList({software_title: searchSoftwareTitle})
            .then((data) => {
                setSoftwareList(data.data.software);
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        dispatch(saveSearchSoftwareTitle(e.target.value))
    };

    useEffect(() => {
        api.software.softwareList({software_title: searchSoftwareTitle})
            .then((data) => {
                setSoftwareList(data.data.software);
                setInstallSoftwareRequestId(data.data.install_software_request_id || 0)
                setItemsInCart(data.data?.items_in_cart || 0)
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
                setInstallSoftwareRequestId(1)
                setItemsInCart(INSTALL_SOFTWARE_REQUEST_MOCK.software_list.length)
            });
    }, []);

    return {
        softwareList,
        installSoftwareRequestId,
        itemsInCart,
        searchSoftwareTitle,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};