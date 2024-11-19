import {useEffect, useState} from "react";
import {selectApp} from "../../core/store/slices/selectors";
import {useDispatch, useSelector} from "../../core/store";
import {api} from "../../core/api";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";

import {ChangeEvent} from "../../App.typing.tsx";
import {saveSearchInListSoftwareTitle} from "../../core/store/slices/appSlice.ts";
import {Software} from "../../core/api/Api.ts";


export const useSoftwareListPage = () => {
    const [softwareList, setSoftwareList] = useState<Software[]>([]);
    const [isPageActive, setIsPageActive] = useState(false);
    const {searchInListSoftwareTitle} = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleSearchSoftwareClick = () => {
        setIsPageActive(false)
        api.software.softwareList({software_title: searchInListSoftwareTitle})
            .then((data) => {
                setSoftwareList(data.data.software);
                setIsPageActive(true)
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchInListSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
                setIsPageActive(true)
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        dispatch(saveSearchInListSoftwareTitle(e.target.value))
    };

    useEffect(handleSearchSoftwareClick,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return {
        softwareList,
        searchInListSoftwareTitle,
        isPageActive,
        updateCatalogPageFunc: handleSearchSoftwareClick,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};