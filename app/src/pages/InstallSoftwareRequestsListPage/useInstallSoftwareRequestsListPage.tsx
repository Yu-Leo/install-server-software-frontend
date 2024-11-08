import React, {useEffect, useState} from "react";
import {IISRFiltersProps} from "../../components/ISRFilters/typing.tsx";
import {IISRTableProps, IISRTableRow} from "../../components/ISRTable/typing.tsx";
import {api} from "../../core/api";
import {InstallSoftwareRequest} from "../../core/api/Api.ts";
import {
    installSoftwareRequestsList as INSTALL_SOFTWARE_REQUESTS_LIST_MOCK
} from "../../core/mock/installSoftwareRequestsList.ts";


export const useInstallSoftwareRequestsListPage = () => {
    const [status, setStatus] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [tableProps, setTableProps] = useState<IISRTableProps>({rows: []});

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    useEffect(() => {
        api.installSoftwareRequests.installSoftwareRequestsList({})
            .then((data) => {
                setTableProps(mapBackendResultToTableData(data.data))
            })
            .catch(() => {
                setTableProps(INSTALL_SOFTWARE_REQUESTS_LIST_MOCK);
            })
    }, []);

    const filtersProps: IISRFiltersProps = {
        selectedStatus: status,
        selectedStartDate: startDate,
        selectedEndDate: endDate,

        handleStatusChange: handleStatusChange,
        handleStartDateChange: handleStartDateChange,
        handleEndDateChange: handleEndDateChange,
    };

    const b: boolean = false;

    return {tableProps, filtersProps, b};
};

export function mapBackendResultToTableData(requests: InstallSoftwareRequest[]): IISRTableProps {
    function mapStatus(status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED"): string {
        switch (status) {
            case "FORMED":
                return "Сформирована";
            case "COMPLETED":
                return "Выполнена";
            case "REJECTED":
                return "Отклонёна";
            default:
                return "Неизвестный";
        }
    }

    function formatDateToYMD(dateString: string | null | undefined): string {
        if (!dateString) return "";

        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    }

    const rows: IISRTableRow[] = requests.map((request, index) => {
        return {
            number: index,
            status: mapStatus(request.status),
            creationDate: formatDateToYMD(request.creation_datetime),
            registrationDate: formatDateToYMD(request.formation_datetime),
            completionDate: formatDateToYMD(request.completion_datetime),
        };
    });

    return {rows};
}