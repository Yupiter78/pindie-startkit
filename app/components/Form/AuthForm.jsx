import React, { useEffect, useState } from "react";
import Styles from "./Form.module.css";
import api from "../../data/users";
import { validator } from "../../utils/validator";
import { useRouter } from "next/navigation";
import _ from "lodash";

export const AuthForm = () => {
    const history = useRouter();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(api.getAllUsers());
    }, []);

    const [currentUsers, setCurrentUser] = useState({});
    console.log("currentUsers: ", currentUsers);
    const [message, setMessage] = useState("");
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Field email is required"
            }
        },
        password: {
            isRequired: {
                message: "Field password is required"
            }
        }
    };
    const handleChange = ({ target }) => {
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value };
        });
        setMessage("");
    };

    const validate = () => {
        const errors = validator(data, validatorConfig, users);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) return;
        const user = users.find(
            ({ email, password }) =>
                email === data.email && password === data.password
        );
        if (user) {
            setCurrentUser(user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            history.replace("/books");
        } else {
            setData({ email: "", password: "" });
            setMessage("Invalid email or password. Please try again.");
        }
    };
    return (
        <>
            {message && <p>{message}</p>}
            <form className={Styles.form} onSubmit={handleSubmit}>
                <h2 className={Styles.form__title}>Авторизация</h2>
                <div className={Styles.form__fields}>
                    <label className={Styles.form__field}>
                        <span className={Styles["form__field-title"]}>
                            Email
                        </span>
                        <input
                            className={Styles["form__field-input"]}
                            type="email"
                            name="email"
                            placeholder="hello@world.com"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && (
                        <span className={Styles["form__field-error"]}>
                            {errors.email}
                        </span>
                    )}
                    <label className={Styles.form__field}>
                        <span className={Styles["form__field-title"]}>
                            Пароль
                        </span>
                        <input
                            className={Styles["form__field-input"]}
                            type="password"
                            placeholder="********"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password && (
                        <span className={Styles["form__field-error"]}>
                            {errors.password}
                        </span>
                    )}
                </div>
                <div className={Styles.form__actions}>
                    <button className={Styles.form__reset} type="reset">
                        Очистить
                    </button>
                    <button
                        className={`${!_.isEmpty(errors) ? "disabled" : ""}`}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </>
    );
};
