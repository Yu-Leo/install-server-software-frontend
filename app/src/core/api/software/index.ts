import {sendRequest} from "../index.ts";

import {IGetSoftwareListResponse} from "./typing.ts";

export const getSoftwareList = async (searchTitle?: string) => {
    try {
        const response: IGetSoftwareListResponse = await sendRequest({
            method: "GET",
            path: "/software",
            params: searchTitle ? {software_title: searchTitle} : undefined,
        });
        return response;
    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
};
//
// export const getPlanetById = async (id: string) => {
//     try {
//         const response: IGetPlanetByIdResponse = await sendRequest({
//             method: "GET",
//             path: `/planet/${id}`,
//         });
//         return response;
//     } catch (error) {
//         console.error("Error fetching planet:", error);
//         throw error;
//     }
// };