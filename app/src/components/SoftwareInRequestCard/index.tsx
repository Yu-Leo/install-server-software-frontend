import {FC} from "react";
import {ISoftwareInRequestCardProps} from "./typing.tsx";
import unknownImage from "/unknown.jpg"
import {Link} from "react-router-dom";

export const SoftwareInRequestCard: FC<ISoftwareInRequestCardProps> = (software: ISoftwareInRequestCardProps) => {
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2 card-body">
                    <img
                        src={software.logoFilePath ? (software.logoFilePath) : (unknownImage)}
                        className="img-fluid rounded-start"
                        alt={software.title}
                        width="100px"
                    />
                </div>
                <div className="col-md-6 card-body">
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
                <div className="col-md-2 card-body">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Версия</span>
                        <input type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm"
                               value={software.version} readOnly/>
                    </div>
                </div>
                <div className="col-md-1 card-body">
                    <p className="card-text"><strong>{software.price} руб.</strong></p>
                </div>
                <div className="col-md-1 card-body close-col">
                    <button type="button" className="btn-close mt-1" aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
};
