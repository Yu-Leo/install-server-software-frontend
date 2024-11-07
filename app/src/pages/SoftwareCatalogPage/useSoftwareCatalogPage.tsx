import {useEffect, useState} from "react";
import {ISoftware} from "../../core/api/software/typing.tsx";
import {getSoftwareList} from "../../core/api/software";
import {selectApp} from "../../core/store/slices/selectors";
import {useSelector, useDispatch} from "../../core/store";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {ChangeEvent} from "../../App.typing.tsx";
import {saveSearchSoftwareTitle} from "../../core/store/slices/appSlice.ts";

export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<ISoftware[]>([]);
    const installSoftwareRequestId = 0;
    const itemsInCart = 0;

    const {searchSoftwareTitle} = useSelector(selectApp);
    const dispatch = useDispatch();
    const handleSearchSoftwareClick = () => {
        getSoftwareList(searchSoftwareTitle)
            .then((data) => {
                setSoftwareList(data.software);
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
        getSoftwareList(searchSoftwareTitle)
            .then((data) => {
                setSoftwareList(data.software);
            })
            .catch(() => {
                const filteredSoftware = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredSoftware);
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