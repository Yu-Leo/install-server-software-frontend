import "./SoftwarePage.css";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import unknownImage from "/unknown.jpg"
import {Breadcrumbs} from "../../components/Breadcrumbs";
import {Software} from "../../core/api/Api.ts";
import {api} from "../../core/api";


export const SoftwarePage = () => {
    const {id} = useParams();
    const [softwareData, setSoftwareData] = useState<Software | null>(null);

    useEffect(() => {
        if (id) {
            api.software.softwareRead(id)
                .then((data) => {
                    setSoftwareData(data.data);
                })
                .catch(() => {
                    const software = SOFTWARE_LIST_MOCK.find(
                        (software) => software.pk === Number(id)
                    );
                    setSoftwareData(software || null);
                });
        }
    }, [id]);

    if (!softwareData || !softwareData.title) {
        return (
            <>
            </>
        );
    }

    return (
        <Container className="div">
            <Breadcrumbs
                middleItems={[
                    {
                        name: "Каталог",
                        link: "/software_catalog"
                    }
                ]}
                endItem={softwareData?.title}
            />
            <div className="row mt-4">
                <div className="col">
                    <h2>{softwareData?.title}</h2>
                    <p className=""><strong>Цена установки:</strong> {softwareData?.price} руб.</p>
                    <p className=""><strong>Время установки:</strong> {softwareData?.installing_time_in_mins} мин.
                    </p>
                    <p className=""><strong>Размер:</strong> {softwareData?.size_in_bytes} байт </p>
                </div>
                <div className="col">
                    <img src={softwareData?.logo_file_path ? (softwareData?.logo_file_path) : (unknownImage)}
                         alt={softwareData?.title}
                         width="200px"/>
                </div>
            </div>
            <p className="py-2"><strong>Описание</strong></p>
            <p>{softwareData?.description}</p>
        </Container>
    );
};