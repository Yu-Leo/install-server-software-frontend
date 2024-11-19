import "./SoftwareEditPage.css";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";

import {Software} from "../../core/api/Api.ts";
import {api} from "../../core/api";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";
import unknownImage from "/unknown.jpg"


export const SoftwareEditPage = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [logoFile, setLogoFile] = useState<File | null>(null);

    const [software, setSoftware] = useState<Software>({
        title: '',
        price: 0,
        installing_time_in_mins: 0,
        size_in_bytes: 0,
        summary: '',
        description: '',
        logo_file_path: ''
    });

    useEffect(() => {
        if (id) {
            api.software.softwareRead(id)
                .then((data) => {
                    setSoftware(data.data);
                })
                .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка получения данных ПО",
                            isError: true,
                        })
                    );
                });
        }
    }, [id]);

    if (!software || !software.title) {
        return (
            <>
            </>
        );
    }

    // Функция для обработки изменений в input полях
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setSoftware({
            ...software,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setLogoFile(file);
    };

    const handleSubmit = () => {
        if (logoFile != null) {
            console.log(logoFile)
            api.software.softwareAddImageCreate(software.pk?.toString() || "", {image: logoFile})
                .then(() => {
                })
                .catch(() => {
                        store.dispatch(
                            addNotification({
                                message: "Ошибка загрузки файла",
                                isError: true,
                            })
                        );
                    }
                )
        }

        api.software.softwarePutUpdate(software.pk?.toString() || "", software)
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Данные ПО обновлены",
                        isError: false,
                    })
                );
                navigate('/software/' + software.pk?.toString() || "");
            })
            .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка обновления данных ПО",
                            isError: true,
                        })
                    );
                }
            )
    };

    return (
        <div className="container">
            <h2 className="mb-3">Редактирование ПО</h2>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={software.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSummary" className="mb-3">
                        <Form.Label>Краткое описание</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="summary"
                            value={software.summary}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="mb-3">
                        <Form.Label>Цена установки</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={software.price}
                            onChange={handleChange}
                            min={-2147483648}
                            max={2147483647}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formInstallingTime" className="mb-3">
                        <Form.Label>Время установки (в мин.)</Form.Label>
                        <Form.Control
                            type="number"
                            name="installing_time_in_mins"
                            value={software.installing_time_in_mins}
                            onChange={handleChange}
                            min={-2147483648}
                            max={2147483647}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSize" className="mb-3">
                        <Form.Label>Размер (в байтах)</Form.Label>
                        <Form.Control
                            type="number"
                            name="size_in_bytes"
                            value={software.size_in_bytes}
                            onChange={handleChange}
                            min={-2147483648}
                            max={2147483647}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Логотип</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </Form.Group>
                </Col>

                <Col md={6} className="">
                    {software.logo_file_path && (
                        <img
                            src={software.logo_file_path ? (software.logo_file_path) : (unknownImage)}
                            alt="Logo"
                            className="img-fluid p-2"
                            style={{maxWidth: '300px', maxHeight: '300px', objectFit: 'contain'}}
                        />
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Полное описание</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={software.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button
                type="button"
                className="mt-3 mb-3 dark-blue-btn"
                onClick={handleSubmit}
            >
                Сохранить изменения
            </Button>
        </div>
    );

};