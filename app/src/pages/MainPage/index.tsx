import "./MainPage.css";
import {Container, Carousel} from "react-bootstrap";
import main1 from "/main-1.jpg"
import main2 from "/main-2.jpg"
import main3 from "/main-3.png"

export const MainPage = () => {
    return (
        <Container className="">
            <Container className="intro">
                <h1>Установка ПО на ваши серверы</h1>
                <Carousel id="carouselExample">
                    <Carousel.Item>
                        <img src={main1} className="d-block w-100" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={main2} className="d-block w-100" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={main3} className="d-block w-100" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
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