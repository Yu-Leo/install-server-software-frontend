import {FC} from "react";
import {ILoginFormProps} from "./typing.tsx";

export const LogInForm: FC<ILoginFormProps> = () => {
    return (
        <div className="card" style={{width: '100%', maxWidth: '350px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Вход</h5>
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
                            required
                        />
                    </div>
                    <button type="submit" className="btn dark-blue-btn w-100">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};
