import "./SoftwareCatalogPage.css";
import {FC} from "react";
import {ISoftwareCatalogPageProps} from "./typing";

import {Navbar} from "../../components/Navbar";
import {Button, Container} from "react-bootstrap";
import {SoftwareCard} from "../../components/SoftwareCard";
import {useSoftwareCatalogPage} from "./useSoftwareCatalogPage.tsx";
import {ISoftwareCardProps} from "../../components/SoftwareCard/typing.tsx";
import cartImage from "/images/cart.png"


export const SoftwareCatalogPage: FC<ISoftwareCatalogPageProps> = () => {
    const {
        softwareList,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    } = useSoftwareCatalogPage();

    return (
        <>
            <Navbar/>
            <Container>
                <Container className="d-flex mt-4 mb-4 p-0">
                    <div className="flex-grow-1">
                        <input
                            type="text"
                            className="input form-control"
                            onChange={handleSearchNameChange}
                            placeholder="Поиск"
                            aria-label="Поиск"
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
                    <a href={`/request/1`} className="btn dark-blue-border">
                        3
                        <img src={cartImage} width="25"
                             alt="cart"/> {/* TODO: исправить путь до иконфи корзины */}
                    </a>
                </Container>

                {softwareList && !!softwareList.length ? (
                    <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">

                        {softwareList.map((software, index) => {
                            const props: ISoftwareCardProps = {
                                id: software.pk,
                                title: software.title,
                                summary: software.summary,
                                price: software.price,
                                logoFilePath: software.logo_file_path,
                            };

                            return (
                                <div className="col">
                                    <SoftwareCard key={index} {...props} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <Container className="d-flex justify-content-center mt-4 mb-5">
                        <h2>Ничего не найдено</h2>
                    </Container>
                )}
            </Container>
        </>
    );
};