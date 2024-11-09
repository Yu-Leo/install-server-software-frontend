import "./SoftwareCatalogPage.css";
import {Link} from "react-router-dom";

import {Button, Container} from "react-bootstrap";
import {SoftwareCard} from "../../components/SoftwareCard";
import {useSoftwareCatalogPage} from "./useSoftwareCatalogPage.tsx";
import {ISoftwareCardProps} from "../../components/SoftwareCard/typing.tsx";
import cartImage from "/cart.png"
import {Breadcrumbs} from "../../components/Breadcrumbs";

export const SoftwareCatalogPage = () => {
    const {
        softwareList,
        ISRId,
        itemsInCart,
        searchSoftwareTitle,
        updateCatalogPageFunc,
        handleSearchSoftwareClick,
        handleSearchNameChange,
    } = useSoftwareCatalogPage();

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
                        value={searchSoftwareTitle}
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

                <Link
                    to={"/install_software_request/" + ISRId}
                    className={ISRId !== undefined && ISRId !== null && ISRId !== 0 ? "btn dark-blue-border cart-button" : "btn cart-button non-clickable"}
                    state={{from: ISRId}}
                >
                    {itemsInCart}
                    <img src={cartImage} width="25" alt="cart"/>
                </Link>
            </div>

            {softwareList && !!softwareList.length ? (
                <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">
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
    );
};