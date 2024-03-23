"use client";
import React, { useEffect, useState } from "react";
import Styles from "./Form.module.css";
import api from "../../data/data-utils";
import { validator } from "../../utils/validator";
import { useRouter } from "next/navigation";
import _ from "lodash";
import PropTypes from "prop-types";

export const AuthForm = ({ onCurrentUser, onClosePopup }) => {
    const history = useRouter();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const allUsers = api.getAllUsers();
        if (!_.isEmpty(allUsers)) {
            setUsers(allUsers);
        }
    }, []);

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
            onCurrentUser(user);
            api.addCurrentUser(user);
            history.replace("/");
            onClosePopup && onClosePopup();
        } else {
            setData({ email: "", password: "" });
            setMessage("Invalid email or password. Please try again.");
        }
    };
    return (
        <>
            {message && (
                <p className={Styles["box-error__message"]}>{message}</p>
            )}
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
                        className={Styles.form__submit}
                        disabled={!_.isEmpty(errors)}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </>
    );
};

AuthForm.propTypes = {
    onCurrentUser: PropTypes.func,
    onClosePopup: PropTypes.func
};
