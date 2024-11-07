import {FC} from "react";
import {IUserAccountFormProps} from "./typing.tsx";

export const UserAccountForm: FC<IUserAccountFormProps> = () => {
    return (
        <div className="card" style={{width: '100%', maxWidth: '350px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Изменить данные аккаунта</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Логин
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Введите новый логин"
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
                            placeholder="Введите новый e-mail"
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
                            placeholder="Введите новый пароль"
                        />
                    </div>
                    <button type="submit" className="btn dark-blue-btn w-100">
                        Изменить
                    </button>
                </form>
            </div>
        </div>
    );
};
