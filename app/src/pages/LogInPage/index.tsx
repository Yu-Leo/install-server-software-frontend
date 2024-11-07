import "./LoginPage.css";
import {FC} from "react";
import {ILoginPageProps} from "./typing";

import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {LogInForm} from "../../components/LogInForm";

export const LoginPage: FC<ILoginPageProps> = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
                <LogInForm></LogInForm>
            </Container>
        </>
    );
};