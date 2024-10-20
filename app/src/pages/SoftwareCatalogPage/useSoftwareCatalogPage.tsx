import {useEffect, useState} from "react";
import {ISoftware} from "../../core/api/software/typing.tsx";
import {getSoftwareList} from "../../core/api/software";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";

import {ChangeEvent} from "../../App.typing.tsx";

export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<ISoftware[]>([]);
    const [installSoftwareRequestId, setInstallSoftwareRequestId] = useState<number>(0);
    const [itemsInCart, setItemsInCart] = useState<number>(0);

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
                setInstallSoftwareRequestId(data.install_software_request_id)
                setItemsInCart(data.items_in_cart)
            })
            .catch(() => {
                setSoftwareList(SOFTWARE_LIST_MOCK)
                setInstallSoftwareRequestId(0)
                setItemsInCart(INSTALL_SOFTWARE_REQUEST_MOCK.software_list.length)
            });
    }, []);

    return {
        softwareList,
        installSoftwareRequestId,
        itemsInCart,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    };
};