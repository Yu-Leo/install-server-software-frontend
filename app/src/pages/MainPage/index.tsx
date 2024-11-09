import "./MainPage.css";
import {Container} from "react-bootstrap";

export const MainPage = () => {
    return (
        <Container className="">
            <Container className="intro">
                <h1>Установка ПО на ваши серверы</h1>
                <Container className="div text">
                    <p>
                        Заказали виртуальный сервер, но не можете поставить необхоидмое ПО? Этот сервис поможет вам!
                        Оформите заявку и специалисты настроят всё в кратчайшие сроки.
                    </p>
                </Container>
            </Container>
        </Container>

    );
};