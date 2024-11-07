import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg"
                        data-bs-theme="dark"
                        className="dark-blue-back"
            >
                <Container>
                    <NavbarComp.Brand>
                        <Link to="/" className="text-white text-decoration-none">
                            Установка ПО
                        </Link>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav">
                        <Nav className="me-3">
                            <NavLink to="/software_catalog" className="text-white text-decoration-none">
                                Каталог
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                    <NavbarComp.Collapse className="justify-content-end">
                        <Nav className="me-3">
                            <NavLink to="/registration" className="text-white text-decoration-none">
                                Регистрация
                            </NavLink>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/login" className="text-white text-decoration-none">
                                Вход
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};