import {IInstallSoftwareRequestByIdResponse} from "../api/software/typing.ts";

export const installSoftwareRequest: IInstallSoftwareRequestByIdResponse = {
    pk: 0,
    creation_datetime: "2024-10-20T15:07:21.219Z",
    formation_datetime: "2024-10-20T15:07:21.219Z",
    completion_datetime: "2024-10-20T15:07:21.219Z",
    host: "string",
    client: 0,
    manager: 0,
    total_installing_time_in_min: 2147483647,
    status: "DRAFT",
    software_list: [
        {
            software: {
                pk: 0,
                title: "Docker",
                price: 2147483647,
                summary: "Описание Docker",
                logo_file_path: "string"
            },
            version: "string"
        },
    ]
};
