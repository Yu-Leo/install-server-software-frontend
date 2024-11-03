import {FC} from "react";
import {ISoftwareCardProps} from "./typing.tsx";
import unknownImage from "/unknown.jpg"
import {Link} from "react-router-dom";

export const SoftwareCard: FC<ISoftwareCardProps> = (software: ISoftwareCardProps) => {
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
            <div className="card-body">
                <Link
                    to={"/software/" + software.id}
                    id={software.title}
                    className="btn dark-blue-btn"
                    state={{from: software.title}}
                >
                    Узнать подробнее
                </Link>
            </div>
        </div>
    );
};
