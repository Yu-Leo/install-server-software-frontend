import "./InstallSoftwareRequestPage.css";
import {FC, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {IInstallSoftwareRequestPageProps} from "./typing";

import {Navbar} from "../../components/Navbar";
import {Container} from "react-bootstrap";
import {ISoftwareCardProps} from "../../components/SoftwareCard/typing.tsx";
import {SoftwareCard} from "../../components/SoftwareCard";
import {getInstallSoftwareRequestById} from "../../core/api/software";
import {IInstallSoftwareRequestByIdResponse} from "../../core/api/software/typing.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";

export const InstallSoftwareRequestPage: FC<IInstallSoftwareRequestPageProps> = () => {
    const {id} = useParams();
    const [installSoftwareRequestContentData, setInstallSoftwareRequestContentData] = useState<IInstallSoftwareRequestByIdResponse>();

    useEffect(() => {
        if (id) {
            getInstallSoftwareRequestById(id)
                .then((data) => {
                    setInstallSoftwareRequestContentData(data);
                })
                .catch(() => {
                    setInstallSoftwareRequestContentData(INSTALL_SOFTWARE_REQUEST_MOCK)
                });
        }
    }, [id]);


    return (
        <>
            <Navbar/>
            <Container>
                <div className="card mb-3 mt-4">
                    <div className="card-body">
                        <h5 className="card-title">
                            Сервер пользователя: <strong>123.43.23.53</strong>
                        </h5>
                    </div>
                </div>

                {installSoftwareRequestContentData?.software_list && !!installSoftwareRequestContentData.software_list.length ? (
                    <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">
                        {installSoftwareRequestContentData.software_list.map((software, index) => {
                            const props: ISoftwareCardProps = {
                                id: software.software.pk,
                                title: software.software.title,
                                summary: software.software.summary,
                                price: software.software.price,
                                logoFilePath: software.software.logo_file_path,
                            };

                            return (
                                <div className="col">
                                    <SoftwareCard key={index} {...props} /> {/* // TODO: не эти карточки*/}
                                </div>
                            );
                        })}

                    </div>
                ) : (
                    <Container className="d-flex justify-content-center mt-4 mb-5">
                        <h2>Пустой заказ</h2>
                    </Container>
                )}

                <div className="card mb-3 mt-4">
                    <div className="row g-0">
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">
                                    ИТОГО:
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <strong>123 руб.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};