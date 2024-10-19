import {FC} from "react";
import {ISoftwareCardProps} from "./typing.tsx";

export const SoftwareCard: FC<ISoftwareCardProps> = ({software}) => {
    return (
        <div className="card h-100">
            <img
                src={software.logo_file_path}
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
                <a href={`/software/${software.id}`} className="btn dark-blue-btn">
                    Узнать подробнее
                </a>
            </div>
        </div>
    );
};
