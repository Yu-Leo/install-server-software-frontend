import "./SoftwareCatalogPage.css";
import {FC} from "react";
import {ISoftwareCatalogPageProps} from "./typing";

import {Navbar} from "../../components/Navbar";
import {Container} from "react-bootstrap";
import {SoftwareCard} from "../../components/SoftwareCard";

const softwareData: {
    id: number;
    title: string;
    summary: string;
    price: number;
    logo_file_path: string;
    time: number;
    size: string;
    description: string;
}[] = [
    {
        id: 0,
        title: 'Docker',
        logo_file_path: 'http://127.0.0.1:9000/server-soft-logos/0.png',
        price: 100,
        time: 10,
        size: '300 Мб',
        summary: 'Программное обеспечение для автоматизации развёртывания и управления приложениями.',
        description: 'Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации. Позволяет «упаковать» приложение со всем своим окружением и зависимостями в контейнер, который может быть развёрнут на любой Linux-системе. Изначально использовал возможности LXC, с 2015 года начал использовать собственную библиотеку, абстрагирующую виртуализационные возможности ядра Linux. С появлением Open Container Initiative начался переход от монолитной к модульной архитектуре.',
    },
    {
        id: 1,
        title: 'NodeJS',
        logo_file_path: 'http://127.0.0.1:9000/server-soft-logos/1.png',
        price: 150,
        time: 10,
        size: '300 Мб',
        summary: 'Программная платформа, основанная на движке V8, которая превращает JavaScript из узкоспециализированного языка в язык общего назначения.',
        description: 'Node.js применяется преимущественно на сервере, выполняя роль веб-сервера. Возможна разработка десктопных оконных приложений и программирование микроконтроллеров.',
    },
    {
        id: 2,
        title: 'Python',
        logo_file_path: 'http://127.0.0.1:9000/server-soft-logos/2.png',
        price: 200,
        time: 20,
        size: '100 Мб',
        summary: 'Мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией.',
        description: 'Мультипарадигмальный язык с автоматическим управлением памятью, ориентированный на повышение производительности разработчика и читаемости кода. Язык полностью объектно-ориентированный, а синтаксис минималистичен, что позволяет редко обращаться к документации.',
    },
    {
        id: 3,
        title: 'JS',
        logo_file_path: 'http://127.0.0.1:9000/server-soft-logos/3.png',
        price: 300,
        time: 43,
        size: '300 Мб',
        summary: 'Язык программирования, который в первую очередь применяют в веб-сфере',
        description: 'С его помощью сайты становятся интерактивными: добавляются всплывающие окна, анимация и формы для отправки информации.',
    },
    {
        id: 4,
        title: 'git',
        logo_file_path: 'http://127.0.0.1:9000/server-soft-logos/4.png',
        price: 400,
        time: 13,
        size: '100 Мб',
        summary: 'Распределённая система управления версиями.',
        description: 'Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux. Среди проектов, использующих Git, - ядро Linux, Swift, Android и многие другие.',
    },
];

export const SoftwareCatalogPage: FC<ISoftwareCatalogPageProps> = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <form className="d-flex mt-4 mb-4">
                    <div className="flex-grow-1">
                        <input
                            className="form-control"
                            placeholder="Поиск"
                            aria-label="Поиск"
                            name="software_title"
                            type="text"
                        />
                    </div>
                    <div className="px-3">
                        <input
                            type="submit"
                            className="btn dark-blue-btn ml-3 mr-3"
                            value="Поиск"
                        />
                    </div>
                    <div>
                        <a href={`/request/1`} className="btn dark-blue-border">
                            3
                            <img src="images/cart.png" width="25" alt="cart"/>
                        </a>
                    </div>
                </form>

                <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">
                    {softwareData.map(software => (
                        <div className="col" key={software.id}>
                            <SoftwareCard {...software}/>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};