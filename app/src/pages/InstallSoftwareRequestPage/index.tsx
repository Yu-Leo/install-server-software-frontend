import "./InstallSoftwareRequestPage.css";
import {FC, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {IInstallSoftwareRequestPageProps} from "./typing";

import {Navbar} from "../../components/Navbar";
import {Container} from "react-bootstrap";
import {getInstallSoftwareRequestById} from "../../core/api/software";
import {IInstallSoftwareRequestByIdResponse, ISoftwareInRequestItem} from "../../core/api/software/typing.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";
import {SoftwareInRequestCard} from "../../components/SoftwareInRequestCard";
import {ISoftwareInRequestCardProps} from "../../components/SoftwareInRequestCard/typing.tsx";
import {Breadcrumbs} from "../../components/Breadcrumbs";

function calculateTotalPrice(softwareItems?: (ISoftwareInRequestItem | undefined)[]): number {
    return softwareItems?.reduce((total, item) => {
        if (item && item.software) {
            return total + item.software.price;
        }
        return total;
    }, 0) || 0;
}

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
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Каталог",
                            link: "/software_catalog"
                        }
                    ]}
                    endItem={"Заказ на установку ПО № " + installSoftwareRequestContentData?.pk}
                />

                <div className="card mb-3 mt-4">
                    <div className="card-body">
                        <h5 className="card-title">
                            Сервер пользователя: <strong>{installSoftwareRequestContentData?.host}</strong>
                        </h5>
                    </div>
                </div>

                {installSoftwareRequestContentData?.software_list && !!installSoftwareRequestContentData.software_list.length ? (
                    <>
                        {installSoftwareRequestContentData.software_list.map((software, index) => {
                            const props: ISoftwareInRequestCardProps = {
                                id: software.software.pk,
                                title: software.software.title,
                                summary: software.software.summary,
                                price: software.software.price,
                                logoFilePath: software.software.logo_file_path,
                                version: software.version,
                            };

                            return (
                                <SoftwareInRequestCard key={index} {...props} />
                            );
                        })}
                    </>
                ) : (
                    <></>
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
                                <strong>{calculateTotalPrice(installSoftwareRequestContentData?.software_list)} руб.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};