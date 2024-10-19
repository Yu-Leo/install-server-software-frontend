import { useEffect, useState } from "react";
import {ISoftware} from "../../core/api/software/typing.tsx";

// import { useLocation, useNavigate } from "react-router-dom";

// import { IPlanet } from "../../core/api/planets/typing";
// import { getPlanets } from "../../core/api/planets";
// import { ChangeEvent } from "../../App.typing";
import { softwareList as SOFTWARE_LIST_MOCK } from "../../core/mock/softwareList.ts";

export const useSoftwareCatalogPage = () => {
    const [softwareList, setSoftwareList] = useState<ISoftware[]>([]);
    // const [searchName, setSearchName] = useState("");

    // const location = useLocation();
    // const navigate = useNavigate();

    // const handleSearchPlanetsClick = () => {
    //     getPlanets(searchName)
    //         .then((data) => {
    //             setSoftwareList(data.planets);
    //             console.log(data.planets);
    //         })
    //         .catch(() => {
    //             const filteredPlanets = PLANETS.planets.filter((planet) =>
    //                 planet.Name.toLowerCase().startsWith(searchName.toLowerCase())
    //             );
    //             setSoftwareList(filteredPlanets);
    //         }); // moc данные
    // };
    //
    // const handleGetAllPlanetsClick = () => {
    //     getPlanets()
    //         .then((data) => {
    //             setSoftwareList(data.planets);
    //             console.log(data.planets);
    //         })
    //         .catch(() => setSoftwareList(PLANETS.planets)); // мок
    // };

    // function scrollToPlanet() {
    //     if (location.state?.planetId) {
    //         const planetElement = document.getElementById(location.state?.planetId);
    //         const planetsElement = document.getElementById("planets");
    //
    //         if (planetElement) {
    //             planetElement.scrollIntoView({ behavior: "smooth" });
    //             navigate(".", { replace: true }); // удаляем state
    //         } else {
    //             planetsElement?.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    // }
    //
    // const handleSearchNameChange = (e: ChangeEvent) => {
    //     setSearchName(e.target.value);
    // };

    useEffect(() => {
        setSoftwareList(SOFTWARE_LIST_MOCK)
        // getSoftwareList()
        //     .then((data) => {
        //         setSoftwareList(data.planets);
        //         console.log(data.planets);
        //     })
        //     .catch(() => setSoftwareList(PLANETS.planets)); // мок
    }, []);

    useEffect(() => {
        if (softwareList && softwareList.length) {
            // scrollToPlanet();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [softwareList]);

    return {
        softwareList,
        // handleSearchPlanetsClick,
        // handleSearchNameChange,
        // handleGetAllPlanetsClick,
    };
};