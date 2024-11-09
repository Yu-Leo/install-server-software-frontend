import {FC} from "react";
import {ISoftwareCardProps} from "./typing.tsx";
import unknownImage from "/unknown.jpg"
import {Link} from "react-router-dom";
import {store, useSelector} from "../../core/store";
import {selectUser} from "../../core/store/slices/selectors.ts";
import {api} from "../../core/api";
import {addNotification} from "../../core/store/slices/appSlice.ts";

export const SoftwareCard: FC<ISoftwareCardProps> = (software: ISoftwareCardProps) => {
    const {isAuth} = useSelector(selectUser);

    const clickAddItem = () => {
        api.software.softwareAddCreate(software.id.toString())
            .then(() => {
                software.updateCatalogPageFunc();
                store.dispatch(
                    addNotification({
                        message: "ПО добавлено в заявку на установку",
                        isError: false,
                    })
                );
            })
            .catch((data) => {
                    if (data.status == 400) {
                        store.dispatch(
                            addNotification({
                                message: "ПО уже добавлено в заявку",
                                isError: true,
                            })
                        );
                    } else {
                        store.dispatch(
                            addNotification({
                                message: "Ошибка сервера",
                                isError: true,
                            })
                        );
                    }
                }
            )
    };

    return (
        <div className="card h-100">
            <img
                src={software.logoFilePath ? (software.logoFilePath) : (unknownImage)}
                className="card-img-top software-card-img"
                alt={software.title}
            />
            <div className="card-body">
                <h5 className="card-title">{software.title}</h5>
                <p className="card-text">{software.summary}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Цена: <strong>{software.price} руб.</strong>
                </li>
            </ul>
            <div className="card-footer d-flex justify-content-between">
                <Link
                    to={"/software/" + software.id}
                    id={software.title}
                    className="btn dark-blue-btn"
                    state={{from: software.title}}
                >
                    Узнать подробнее
                </Link>

                {
                    isAuth ?
                        <button
                            className="btn dark-blue-border"
                            onClick={clickAddItem}
                        >
                            Добавить
                        </button>
                        :
                        <></>
                }
            </div>
        </div>
    );
};
