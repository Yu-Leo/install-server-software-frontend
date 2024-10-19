import "./MainPage.css";
import {FC} from "react";
import {IMainPageProps} from "./typing";

import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";

export const MainPage: FC<IMainPageProps> = () => {
    return (
        <>
            <Navbar/>
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
        </>
    );
};