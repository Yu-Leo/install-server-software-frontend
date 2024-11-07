import "./RegistrationPage.css";
import {FC} from "react";
import {IRegistrationPageProps} from "./typing";

import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {RegistrationForm} from "../../components/RegistrationForm";

export const RegistrationPage: FC<IRegistrationPageProps> = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
                <RegistrationForm></RegistrationForm>
            </Container>
        </>
    );
};