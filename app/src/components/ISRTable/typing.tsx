export interface IISRTableProps {
    rows: IISRTableRow[];
}

export interface IISRTableRow {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
}