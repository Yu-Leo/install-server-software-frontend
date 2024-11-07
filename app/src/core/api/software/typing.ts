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


export interface ISoftDataInRequestItem {
    pk: number;
    title: string;
    price: number;
    summary: string;
    logo_file_path: string;
}

export interface ISoftwareInRequestItem {
    software: ISoftDataInRequestItem;
    version: string;
}

export interface IInstallSoftwareRequestByIdResponse {
    pk: number;
    creation_datetime: string;
    formation_datetime: string;
    completion_datetime: string;
    host: string;
    client: number;
    manager: number;
    total_installing_time_in_min: number;
    status: string;
    software_list: ISoftwareInRequestItem[];
}