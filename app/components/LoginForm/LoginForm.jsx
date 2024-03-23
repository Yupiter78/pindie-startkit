import React, { useState } from "react";
import RegisterForm from "@/app/components/Form/RegisterForm";
import { AuthForm } from "@/app/components/Form/AuthForm";
import Styles from "./LoginForm.module.css";
import PropTypes from "prop-types";

const LoginForm = ({ onClosePopup }) => {
    const [currentUser, setCurrentUser] = useState({});
    console.log("currentUser: ", currentUser);
    const [formType, setFormType] = useState("login");

    const handleChangeFormType = (type) => {
        setFormType(type);
    };
    return formType === "register" ? (
        <>
            <RegisterForm
                {...{ onCurrentUser: setCurrentUser, onClosePopup }}
            />
            <p className="text-center mt-2">
                Already have account?
                <a
                    role="button"
                    className="text-primary ms-2 text-decoration-none"
                    onClick={() => handleChangeFormType("login")}
                >
                    <span className={Styles.link}>Sing In</span>
                </a>
            </p>
        </>
    ) : (
        <>
            <AuthForm {...{ onCurrentUser: setCurrentUser, onClosePopup }} />
            <p className="text-center mt-2">
                Dont have account?
                <a
                    role="button"
                    className="text-primary ms-2 text-decoration-none"
                    onClick={() => handleChangeFormType("register")}
                >
                    <span className={Styles.link}>Sing Up</span>
                </a>
            </p>
        </>
    );
};

LoginForm.propTypes = {
    onClosePopup: PropTypes.func
};

export default LoginForm;
