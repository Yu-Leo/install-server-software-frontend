import {FC} from "react";
import {ISoftwareInRequestCardProps} from "./typing.tsx";
import unknownImage from "/images/unknown.jpg"
import {Link} from "react-router-dom";

export const SoftwareInRequestCard: FC<ISoftwareInRequestCardProps> = (software: ISoftwareInRequestCardProps) => {
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-body">
                        <img
                            src={software.logoFilePath ? (software.logoFilePath) : (unknownImage)}
                            className="img-fluid rounded-start"
                            alt={software.title}
                            width="100px"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link
                                to={"/software/" + software.id}
                                id={software.title}
                                className="text-black text-decoration-none"
                                state={{from: software.title}}
                            >
                                {software.title}
                            </Link>
                        </h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body">
                        <p className="card-text">Версия: <strong>{software.version}</strong></p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body">
                        <p className="card-text"><strong>{software.price} руб.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
