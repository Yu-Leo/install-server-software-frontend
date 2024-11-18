export interface IISRTableProps {
    rows: IISRTableRow[];
    updateListPageFunc: () => void;
}

export interface IISRTableRow {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
    client: string;
}