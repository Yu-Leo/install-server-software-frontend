import {useEffect, useState} from "react";
import {selectApp, selectUser} from "../../core/store/slices/selectors";
import {useDispatch, useSelector} from "../../core/store";
import {api} from "../../core/api";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";

import {ChangeEvent} from "../../App.typing.tsx";
import {saveSearchSoftwareTitle} from "../../core/store/slices/appSlice.ts";
import {Software} from "../../core/api/Api.ts";


export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<Software[]>([]);
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    const [isPageActive, setIsPageActive] = useState(false);
    const [ISRId, setISRId] = useState(1);
    const {searchSoftwareTitle} = useSelector(selectApp);
    const {isManager} = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleSearchSoftwareClick = () => {
        setIsPageActive(false)
        api.software.softwareList({software_title: searchSoftwareTitle})
            .then((data) => {
                setSoftwareList(data.data.software);
                // dispatch(saveISRId(data.data.install_software_request_id || 0))
                setISRId(data.data.install_software_request_id || 0)
                setItemsInCart(data.data?.items_in_cart || 0)
                setIsPageActive(true)
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
                setISRId(1)
                setItemsInCart(INSTALL_SOFTWARE_REQUEST_MOCK.software_list.length)
                setIsPageActive(true)
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        dispatch(saveSearchSoftwareTitle(e.target.value))
    };

    useEffect(handleSearchSoftwareClick,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return {
        softwareList,
        ISRId,
        itemsInCart,
        searchSoftwareTitle,
        isPageActive,
        isManager,
        updateCatalogPageFunc: handleSearchSoftwareClick,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};