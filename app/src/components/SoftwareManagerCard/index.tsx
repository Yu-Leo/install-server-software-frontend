import {FC} from "react";
import {ISoftwareManagerCardProps} from "./typing.tsx";
import unknownImage from "/unknown.jpg"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {api} from "../../core/api";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";

export const SoftwareManagerCard: FC<ISoftwareManagerCardProps> = (software: ISoftwareManagerCardProps) => {
    const handleClickDelete = () => {
        api.software.softwareDeleteDelete(software.id.toString())
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "ПО удалено",
                        isError: false,
                    })
                );
                software.updateCatalogPageFunc()
            })
            .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка удаления ПО",
                            isError: true,
                        })
                    );
                }
            )
    }

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
                <div className="col-md-4 card-body">
                    <h5 className="card-title">
                        <Link
                            to={"/software/" + software.id}
                            id={software.title}
                            className="text-black"
                            state={{from: software.title}}
                        >
                            {software.title}
                        </Link>
                    </h5>
                </div>
                <div className="col-md-1 card-body">
                    <p className="card-text"><strong>{software.price} руб.</strong></p>
                </div>
                <div className="col-md-1 card-body">

                    <Link
                        to={"/edit_software/" + software.id}
                        className="btn dark-blue-btn"
                    >
                        Редактировать
                    </Link>
                </div>
                <div className="col-md-1 card-body">
                    <Button
                        className="white-bg dark-blue-border"
                        onClick={handleClickDelete}
                    >
                        Удалить
                    </Button></div>
            </div>
        </div>

    );
};
