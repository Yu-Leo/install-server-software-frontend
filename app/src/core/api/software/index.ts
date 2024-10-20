import {sendRequest} from "../index.ts";

import {IGetSoftwareListResponse, IInstallSoftwareRequestByIdResponse, ISoftware} from "./typing.ts";

export const getSoftwareList = async (searchTitle?: string) => {
    try {
        const response: IGetSoftwareListResponse = await sendRequest({
            method: "GET",
            path: "/software",
            params: searchTitle ? {software_title: searchTitle} : undefined,
        });
        return response;
    } catch (error) {
        console.error("Error fetching software list:", error);
        throw error;
    }
};

export const getSoftwareById = async (id: string) => {
    try {
        const response: ISoftware = await sendRequest({
            method: "GET",
            path: `/software/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching software by id:", error);
        throw error;
    }
};


export const getInstallSoftwareRequestById = async (id: string) => {
    try {
        const response: IInstallSoftwareRequestByIdResponse = await sendRequest({
            method: "GET",
            path: `/install_software_requests/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching install software request by id:", error);
        throw error;
    }
};
