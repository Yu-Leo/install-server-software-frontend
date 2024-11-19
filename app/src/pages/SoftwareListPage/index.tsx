import "./SoftwareListPage.css";
import {Link} from "react-router-dom";

import {Button, Container} from "react-bootstrap";
import {useSoftwareListPage} from "./useSoftwareListPage.tsx";
import {ISoftwareCardProps} from "../../components/SoftwareCard/typing.tsx";
import {Breadcrumbs} from "../../components/Breadcrumbs";
import {LoadingAnimation} from "../../components/LoadingAnimation";
import {SoftwareManagerCard} from "../../components/SoftwareManagerCard";

export const SoftwareListPage = () => {
    const {
        softwareList,
        searchInListSoftwareTitle,
        isPageActive,
        updateCatalogPageFunc,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    } = useSoftwareListPage();


    return (
        <Container className="mb-4">
            <Breadcrumbs
                endItem="Каталог"
            />
            <div className="d-flex mt-4 mb-4 p-0">
                <div className="flex-grow-1">
                    <input
                        type="text"
                        className="input form-control"
                        onChange={handleSearchNameChange}
                        placeholder="Поиск"
                        aria-label="Поиск"
                        value={searchInListSoftwareTitle}
                    />
                </div>
                <div className="px-3">
                    <Button
                        onClick={handleSearchSoftwareClick}
                        className="dark-blue-btn ml-3 mr-3"
                    >
                        Поиск
                    </Button>
                </div>
            </div>

            {
                isPageActive ?
                    <>

                        {softwareList && !!softwareList.length ? (
                            <div>
                                {softwareList.map((software, index) => {
                                    const props: ISoftwareCardProps = {
                                        id: software.pk || 0,
                                        title: software.title,
                                        summary: software.summary,
                                        price: software.price,
                                        logoFilePath: software.logo_file_path || "",
                                        updateCatalogPageFunc: updateCatalogPageFunc,
                                    };

                                    return (
                                        <SoftwareManagerCard key={index} {...props} />
                                    );
                                })}
                            </div>
                        ) : (
                            <Container className="d-flex justify-content-center mt-4 mb-5">
                                <h2>Ничего не найдено</h2>
                            </Container>
                        )}
                    </>
                    :
                    <>
                        <LoadingAnimation></LoadingAnimation>
                    </>
            }

            <div className="d-flex justify-content-end">
                <Link
                    to={"/add_software/"}
                    className="btn dark-blue-btn"
                >
                    Добавить ПО
                </Link>
            </div>
        </Container>
    );
};