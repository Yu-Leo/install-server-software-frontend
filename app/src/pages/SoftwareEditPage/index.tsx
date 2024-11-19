import "./SoftwareEditPage.css";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";

import {Software} from "../../core/api/Api.ts";
import {api} from "../../core/api";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";
import unknownImage from "/unknown.jpg"
import axios from "axios";


export const SoftwareEditPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);

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
            setIsEdit(true);
        }
    }, [id]);

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

    const createSoftware = async () => {
        try {
            const data = await api.software.softwarePostCreate(software)
            if (logoFile != null) {
                api.software.softwareAddImageCreate(data.data.pk?.toString() || "", {image: logoFile})
                    .then(() => {
                        store.dispatch(
                            addNotification({
                                message: "ПО успешно добавлено",
                                isError: false,
                            })
                        );
                        navigate('/software/' + data.data.pk?.toString() || "");
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
            } else {
                store.dispatch(
                    addNotification({
                        message: "ПО успешно добавлено",
                        isError: false,
                    })
                );
                navigate('/software/' + data.data.pk?.toString() || "");
            }
            return
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status == 400) {
                store.dispatch(
                    addNotification({
                        message: "Заполнены не все обязательные поля",
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
            return
        }
    }

    const handleSubmit = () => {
        if (isEdit) {
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
            if (logoFile != null) {
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
            return
        }
        createSoftware()
            .then(() => {
            })
            .catch(() => {
            })
    };

    return (
        <div className="container">
            <h2 className="mb-3">{isEdit ? "Редактирование ПО" : "Добавление ПО"}</h2>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Название <sup className="text-danger">*</sup></Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={software.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSummary" className="mb-3">
                        <Form.Label>Краткое описание <sup className="text-danger">*</sup></Form.Label>
                        <Form.Control
                            as="textarea"
                            name="summary"
                            value={software.summary}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="mb-3">
                        <Form.Label>Цена установки <sup className="text-danger">*</sup></Form.Label>
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
                        <Form.Label>Время установки (в мин.) <sup className="text-danger">*</sup></Form.Label>
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
                        <Form.Label>Размер (в байтах) <sup className="text-danger">*</sup></Form.Label>
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
                    <img
                        src={software.logo_file_path ? (software.logo_file_path) : (unknownImage)}
                        alt="Logo"
                        className="img-fluid p-2"
                        style={{maxWidth: '300px', maxHeight: '300px', objectFit: 'contain'}}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Полное описание <sup className="text-danger">*</sup></Form.Label>
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
            <div>
                <sup className="text-danger">*</sup> — обязательные поля
            </div>
            <Button
                type="button"
                className="mt-3 mb-3 dark-blue-btn"
                onClick={handleSubmit}
            >
                {isEdit ? "Сохранить изменения" : "Добавить ПО"}
            </Button>
        </div>
    );

};