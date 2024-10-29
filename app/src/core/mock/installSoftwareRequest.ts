import {IInstallSoftwareRequestByIdResponse} from "../api/software/typing.ts";

export const installSoftwareRequest: IInstallSoftwareRequestByIdResponse = {
    pk: 0,
    creation_datetime: "2024-10-20T15:07:21.219Z",
    formation_datetime: "2024-10-20T15:07:21.219Z",
    completion_datetime: "2024-10-20T15:07:21.219Z",
    host: "123.43.23.53",
    client: 0,
    manager: 0,
    total_installing_time_in_min: 2147483647,
    status: "DRAFT",
    software_list: [
        // {
        //     software: {
        //         pk: 0,
        //         title: "Docker",
        //         price: 100,
        //         summary: "Описание Docker",
        //         logo_file_path: "http://127.0.0.1:9000/server-soft-logos/0.png"
        //     },
        //     version: "3.0"
        // },
        // {
        //     software: {
        //         pk: 1,
        //         title: "NodeJS",
        //         price: 150,
        //         summary: "Описание NodeJS",
        //         logo_file_path: "http://127.0.0.1:9000/server-soft-logos/1.png"
        //     },
        //     version: "2.0"
        // },
        // {
        //     software: {
        //         pk: 2,
        //         title: "Python",
        //         price: 200,
        //         summary: "Описание Python",
        //         logo_file_path: "http://127.0.0.1:9000/server-soft-logos/2.png"
        //     },
        //     version: "1.0"
        // }
    ]
};
