import "./InstallSoftwareRequestsListPage.css";
import {FC} from "react";

import {Container} from 'react-bootstrap';
import {IInstallSoftwareRequestsListPageProps} from "./typing";
import {Navbar} from "../../components/Navbar";
import {ISRFilters} from "../../components/ISRFilters";
import {useInstallSoftwareRequestsListPage} from "./useInstallSoftwareRequestsListPage.tsx";
import {ISRTable} from "../../components/ISRTable";


export const InstallSoftwareRequestsListPage: FC<IInstallSoftwareRequestsListPageProps> = () => {
    const {tableProps, filtersProps} =
        useInstallSoftwareRequestsListPage();

    // console.log(isPageLoading) // TODO

    return (
        <>
            <Navbar/>
            <Container>
                <h1 className="m-3">Заявки</h1>
                <ISRFilters {...filtersProps}></ISRFilters>
                <div className="m-3">
                    <ISRTable {...tableProps}></ISRTable>
                </div>
            </Container>
        </>
    );
};