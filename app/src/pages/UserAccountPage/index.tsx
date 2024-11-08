import "./UserAccountPage.css";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {UserAccountForm} from "../../components/UserAccountForm";

export const UserAccountPage = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
                <UserAccountForm></UserAccountForm>
            </Container>
        </>
    );
};