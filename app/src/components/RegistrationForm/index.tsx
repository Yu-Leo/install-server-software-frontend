import {FC, useState} from "react";
import {IRegistrationFormProps, IUserSignUpData} from "./typing.tsx";
import {ChangeEvent} from "../../App.typing.tsx";
import {api} from "../../core/api";
import {useNavigate} from "react-router-dom";

export const RegistrationForm: FC<IRegistrationFormProps> = () => {
    const navigate = useNavigate();

    const [loginFormData, setLoginFormData] = useState<IUserSignUpData>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (event: ChangeEvent) => {
        const {id, value} = event.target;
        setLoginFormData((prevState) => ({...prevState, [id]: value}));
    }

    const clickSignUp = () => {
        if (loginFormData.username && loginFormData.password) {
            api.users.usersCreateCreate(loginFormData)
                .then((data) => {
                    console.log("success", data)
                    // TODO: алерт успеха
                    navigate('/login');
                })
                .catch((data) => {
                    console.log("fail", data) // TODO: алерт фейла
                });
        }
    }

    return (
        <div className="card" style={{width: '100%', maxWidth: '350px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Регистрация</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Логин
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Введите логин"
                            value={loginFormData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Введите e-mail"
                            value={loginFormData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Введите пароль"
                            value={loginFormData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="button" className="btn dark-blue-btn w-100" onClick={clickSignUp}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};
