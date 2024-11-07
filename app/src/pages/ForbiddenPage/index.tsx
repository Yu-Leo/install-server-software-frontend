import "./NotFoundPage.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";

export const ForbiddenPage = () => {
    return (
        <>
            <Navbar/>
            <Container className="text-center" style={{marginTop: '200px'}}>
                <Row>
                    <Col>
                        <h1 className="display-3">403</h1>
                        <p className="lead">Доступ запрещён</p>
                        <Link to="/">
                            <Button className="dark-blue-btn">На главную</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};