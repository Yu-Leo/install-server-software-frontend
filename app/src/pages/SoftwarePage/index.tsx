import "./SoftwarePage.css";
import {FC, useEffect, useState} from "react";
import {ISoftwarePageProps} from "./typing";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {ISoftware} from "../../core/api/software/typing.ts";

import {getSoftwareById} from "../../core/api/software";
import {softwareList as SOFTWARE_LIST_MOCK} from "../../core/mock/softwareList.ts";
import unknownImage from "/unknown.jpg"
import {Navbar} from "../../components/Navbar";
import {Breadcrumbs} from "../../components/Breadcrumbs";


export const SoftwarePage: FC<ISoftwarePageProps> = () => {
    const {id} = useParams();
    const [softwareData, setSoftwareData] = useState<ISoftware | null>(null);

    useEffect(() => {
        if (id) {
            getSoftwareById(id)
                .then((data) => {
                    setSoftwareData(data);
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
                <Navbar/>
            </>
        );
    }

    return (
        <>
            <Navbar/>
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
                        <p className="py-2"><strong>Описание</strong></p>
                    </div>
                    <div className="col">
                        <img src={softwareData?.logo_file_path ? (softwareData?.logo_file_path) : (unknownImage)}
                             alt={softwareData?.title}
                             width="200px"/>
                    </div>
                </div>
                <p>{softwareData?.description}</p>
            </Container>
        </>
    );
};