import "./InstallSoftwareRequestPage.css";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../../core/api";
import {FullInstallSoftwareRequest, Related} from "../../core/api/Api.ts";
import {installSoftwareRequest as INSTALL_SOFTWARE_REQUEST_MOCK} from "../../core/mock/installSoftwareRequest.ts";
import {ChangeEvent} from "../../App.typing.tsx";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";
import axios from "axios";


export const useInstallSoftwareRequestPage = () => {
    const [installSoftwareRequestContentData, setInstallSoftwareRequestContentData] = useState<FullInstallSoftwareRequest>();
    const [isEditable, setIsEditable] = useState<boolean>(true);
    const [host, setHost] = useState<string>("");
    const [versions, setVersions] = useState<{ [key: number]: string }>({});
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    const handleClickDelete = (key: number) => {
        setVersions(prevVersions => {
            const newVersions = {...prevVersions};
            delete newVersions[key];
            return newVersions;
        });
    }

    const updVersion = (key: number, version: string) => {
        setVersions(prevVersions => ({
            ...prevVersions,
            [key]: version,
        }));
    };

    const updPage = () => {
        if (id) {
            api.installSoftwareRequests.installSoftwareRequestsRead(id)
                .then((data) => {
                    setInstallSoftwareRequestContentData(data.data);
                    if (data.data?.status != "DRAFT") {
                        setIsEditable(false);
                    }
                    setHost(data.data?.host)
                    data.data.software_list.forEach((software: Related) => {
                        updVersion(software.software.pk || 0, software.version)
                    })
                })
                .catch(() => {
                    setInstallSoftwareRequestContentData(INSTALL_SOFTWARE_REQUEST_MOCK)
                });
        }
    }

    useEffect(updPage, []);

    const handleChangeHost = (e: ChangeEvent) => {
        setHost(e.target.value)
    };

    const handleClearClick = () => {
        api.installSoftwareRequests.installSoftwareRequestsDeleteDelete(id || "")
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Заявка очищена",
                        isError: false,
                    })
                );
                navigate('/software_catalog');
            })
            .catch((_) => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка удаления заявки",
                            isError: true,
                        })
                    );
                }
            )
    }

    const formISR = async () => {
        let failedVersion = false
        for (const [key, value] of Object.entries(versions)) {
            try {
                const putVersionRespData = await api.softwareInRequest.softwareInRequestPutUpdate(id || "", key.toString(), {version: value})
                console.log(putVersionRespData)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status == 400) {
                        failedVersion = true
                    }
                } else {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка оформления заявки",
                            isError: true,
                        })
                    );
                    return
                }
            }
        }
        if (failedVersion) {
            store.dispatch(
                addNotification({
                    message: "Не указана вервия для одного или нескольких ПО",
                    isError: true,
                })
            );
            return
        }
        try {
            const putRespData = await api.installSoftwareRequests.installSoftwareRequestsPutUpdate(id || "", {host: host})
            console.log(putRespData)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status == 400) {
                    store.dispatch(
                        addNotification({
                            message: "Не указан хост",
                            isError: true,
                        })
                    );
                    return
                }
            } else {
                store.dispatch(
                    addNotification({
                        message: "Ошибка оформления заявки",
                        isError: true,
                    })
                );
                return
            }
        }

        try {
            await api.installSoftwareRequests.installSoftwareRequestsFormUpdate(id || "")
            store.dispatch(
                addNotification({
                    message: "Заявка успешно оформлена",
                    isError: false,
                })
            );
            navigate('/install_software_requests_list');
            return
        } catch (error) {
            store.dispatch(
                addNotification({
                    message: "Ошибка оформления заявки",
                    isError: true,
                })
            );
            return
        }
    }


    const handleFormClick = () => {
        formISR()
            .then(() => {
            })
            .catch(() => {
            })
    }

    return {
        installSoftwareRequestContentData,
        isEditable,
        host,
        id,
        updVersion,
        handleClickDelete,
        handleChangeHost,
        handleClearClick,
        handleFormClick,
    };
}