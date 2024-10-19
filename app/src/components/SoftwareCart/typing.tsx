interface Software {
    id: number;
    title: string;
    summary: string;
    price: number;
    logo_file_path: string;
}

export interface ISoftwareCardProps {
    software: Software;
}
