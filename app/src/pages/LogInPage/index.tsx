import "./LoginPage.css";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {LogInForm} from "../../components/LogInForm";

export const LoginPage = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
                <LogInForm></LogInForm>
            </Container>
        </>
    );
};