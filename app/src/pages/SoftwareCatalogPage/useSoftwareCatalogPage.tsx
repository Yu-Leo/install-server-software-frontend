import {useEffect, useState} from "react";
import {selectApp} from "../../core/store/slices/selectors";
import {useDispatch, useSelector} from "../../core/store";
import {api} from "../../core/api";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";

import {ChangeEvent} from "../../App.typing.tsx";
import {saveSearchSoftwareTitle} from "../../core/store/slices/appSlice.ts";
import {Software} from "../../core/api/Api.ts";
import {saveISRId} from "../../core/store/slices/userSlice.ts";


export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<Software[]>([]);
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    const ISRId = useSelector(state => state.user.ISRId); // Подписка на состояние value
    const [isPageActive, setIsPageActive] = useState(false);
    const {searchSoftwareTitle} = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleSearchSoftwareClick = () => {
        setIsPageActive(false)
        api.software.softwareList({software_title: searchSoftwareTitle})
            .then((data) => {
                setSoftwareList(data.data.software);
                dispatch(saveISRId(data.data.install_software_request_id || 0))
                setItemsInCart(data.data?.items_in_cart || 0)
                setIsPageActive(true)
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
                dispatch(saveISRId(1))
                setItemsInCart(INSTALL_SOFTWARE_REQUEST_MOCK.software_list.length)
                setIsPageActive(true)
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        dispatch(saveSearchSoftwareTitle(e.target.value))
    };

    useEffect(handleSearchSoftwareClick, []);

    return {
        softwareList,
        ISRId,
        itemsInCart,
        searchSoftwareTitle,
        isPageActive,
        updateCatalogPageFunc: handleSearchSoftwareClick,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};