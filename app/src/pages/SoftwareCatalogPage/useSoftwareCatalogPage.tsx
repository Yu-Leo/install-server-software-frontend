import {useEffect, useState} from "react";
import {ISoftware} from "../../core/api/software/typing.tsx";
import {getSoftwareList} from "../../core/api/software";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {ChangeEvent} from "../../App.typing.tsx";

export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<ISoftware[]>([]);
    const [searchSoftwareTitle, setSearchSoftwareTitle] = useState("");

    const handleSearchSoftwareClick = () => {
        getSoftwareList(searchSoftwareTitle)
            .then((data) => {
                setSoftwareList(data.software);
            })
            .catch(() => {
                const filteredPlanets = SOFTWARE_LIST_MOCK.filter((software) =>
                    software.title.toLowerCase().startsWith(searchSoftwareTitle.toLowerCase())
                );
                setSoftwareList(filteredPlanets);
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        setSearchSoftwareTitle(e.target.value);
    };

    useEffect(() => {
        getSoftwareList()
            .then((data) => {
                setSoftwareList(data.software);
            })
            .catch(() => {
                setSoftwareList(SOFTWARE_LIST_MOCK)
            });
    }, []);

    return {
        softwareList,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};