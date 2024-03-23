"use client";

import React from "react";
import Styles from "./Login.module.css";
import LoginForm from "@/app/components/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className={Styles.container}>
            <LoginForm />
        </div>
    );
};

export default Login;
