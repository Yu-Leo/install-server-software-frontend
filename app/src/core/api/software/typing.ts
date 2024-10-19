export interface ISoftware {
    pk: number;
    title: string;
    price: number;
    installing_time_in_mins: number;
    size_in_bytes: number;
    summary: string;
    description: string;
    is_active: boolean;
    logo_file_path: string;
}

export interface IGetSoftwareListResponse {
    software: ISoftware[];
    install_software_request_id: number;
    items_in_cart: number;
}
