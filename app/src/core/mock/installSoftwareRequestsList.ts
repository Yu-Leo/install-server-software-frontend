import {IISRTableProps} from "../../components/ISRTable/typing.tsx";

export const installSoftwareRequestsList: IISRTableProps = {
    rows: [
        {
            number: 1,
            status: 'COMPLETED',
            creationDate: '2024-01-10',
            registrationDate: '2024-01-15',
            completionDate: '2024-02-01',
        },
        {
            number: 2,
            status: 'COMPLETED',
            creationDate: '2024-01-12',
            registrationDate: '2024-01-18',
            completionDate: '2024-02-10',
        },
        {
            number: 3,
            status: 'COMPLETED',
            creationDate: '2024-02-05',
            registrationDate: '2024-02-10',
            completionDate: '2024-03-01',
        },
        {
            number: 4,
            status: 'COMPLETED',
            creationDate: '2024-02-01',
            registrationDate: '2024-02-05',
            completionDate: '2024-02-20',
        },
        {
            number: 5,
            status: 'REJECTED',
            creationDate: '2024-01-20',
            registrationDate: '2024-01-22',
            completionDate: '2024-02-15',
        },
    ],
};