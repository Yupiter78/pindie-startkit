import React, { useEffect, useState } from "react";
import Styles from "./RegisterForm.module.css";

import api from "../../data/users";
import { validator } from "../../utils/validator";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const history = useRouter();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(api.getAllUsers());
    }, []);

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    console.log("data: ", data);
    const [errors, setErrors] = useState({});
    const handleUpdateUsers = (newUsers) => {
        setUsers(newUsers);
    };

    const validatorConfig = {
        username: {
            isRequired: {
                message: "Field email is required"
            },
            isMinLength: {
                getMessage: (value) =>
                    `The username must contain at least ${value} characters`,
                value: 4
            },
            isUnique: {
                message: "A user with the same name already exists"
            }
        },
        email: {
            isRequired: {
                message: "Field email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            },
            isUnique: {
                message: "A user with this email already exists"
            }
        },
        password: {
            isRequired: {
                message: "Field password is required"
            },
            isCapitalLetter: {
                message: "The password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "The password must contain at least one decimal number"
            },
            isMinLength: {
                getMessage: (value) =>
                    `The password must contain at least ${value} characters`,
                value: 8
            }
        },
        confirmPassword: {
            isEqual: {
                message: "Passwords must match"
            }
        }
    };

    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value.trim() };
        });

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
        const modifiedUser = (({ confirmPassword, ...rest }) => rest)(data);
        try {
            const newUsers = api.createNewUser(modifiedUser);
            handleUpdateUsers(newUsers);
            localStorage.setItem("users", JSON.stringify(newUsers));
            history.replace("/");
        } catch (error) {
            console.error("Error creating new user: ", error);
        }
    };
    return (
        <>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <h2 className={Styles.form__title}>Авторизация</h2>
                <div className={Styles.form__fields}>
                    <label className={Styles.form__field}>
                        <span className={Styles["form__field-title"]}>
                            Username
                        </span>
                        <input
                            className={Styles["form__field-input"]}
                            type="text"
                            name="username"
                            placeholder="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.username && (
                        <span className={Styles["form__field-error"]}>
                            {errors.username}
                        </span>
                    )}
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
                    <label className={Styles.form__field}>
                        <span className={Styles["form__field-title"]}>
                            Подтвердите пароль
                        </span>
                        <input
                            className={Styles["form__field-input"]}
                            type="password"
                            placeholder="********"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.confirmPassword && (
                        <span className={Styles["form__field-error"]}>
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <div className={Styles.form__actions}>
                    <button className={Styles.form__reset} type="reset">
                        Очистить
                    </button>
                    <button className={Styles.form__submit} type="submit">
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </>
    );
};

RegisterForm.propTypes = {
    users: PropTypes.array,
    onUpdateUsers: PropTypes.func
};

export default RegisterForm;
