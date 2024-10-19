import "./SoftwareCatalogPage.css";
import {FC} from "react";
import {ISoftwareCatalogPageProps} from "./typing";

import {Navbar} from "../../components/Navbar";
import {Container} from "react-bootstrap";
import {SoftwareCard} from "../../components/SoftwareCard";
import {useSoftwareCatalogPage} from "./useSoftwareCatalogPage.tsx";
import {ISoftwareCardProps} from "../../components/SoftwareCard/typing.tsx";

export const SoftwareCatalogPage: FC<ISoftwareCatalogPageProps> = () => {
    const {
        softwareList
    } = useSoftwareCatalogPage();

    return (
        <>
            <Navbar/>
            <Container>
                <form className="d-flex mt-4 mb-4">
                    <div className="flex-grow-1">
                        <input
                            className="form-control"
                            placeholder="Поиск"
                            aria-label="Поиск"
                            name="software_title"
                            type="text"
                        />
                    </div>
                    <div className="px-3">
                        <input
                            type="submit"
                            className="btn dark-blue-btn ml-3 mr-3"
                            value="Поиск"
                        />
                    </div>
                    <div>
                        <a href={`/request/1`} className="btn dark-blue-border">
                            3
                            <img src="images/cart.png" width="25" alt="cart"/>
                        </a>
                    </div>
                </form>


                {softwareList && !!softwareList.length ? (
                    <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">

                        {softwareList.map((software, index) => {
                            const props: ISoftwareCardProps = {
                                id: software.Id,
                                title: software.Title,
                                summary: software.Summary,
                                price: software.Price,
                                logoFilePath: software.LogoFilePath,
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