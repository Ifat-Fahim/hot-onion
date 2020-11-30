import React, { useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthContext";

const SignUp = () => {
    const { createUserWithEmailAndPassword, user } = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const { name, email, password, passwordConfirm } = data;
        if (password === passwordConfirm) {
            createUserWithEmailAndPassword(name, email, password);
        }
    };

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        return user.isSignedIn ? history.replace(from) : null;
    };

    login();
    return (
        <Card
            style={{ maxWidth: "22rem", margin: "100px auto", padding: "10px" }}
        >
            <Card.Img
                style={{ marginBottom: "20px" }}
                variant="top"
                src={process.env.PUBLIC_URL + `/images/logo2.png`}
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="enter your name"
                        ref={register({ required: true, maxLength: 20 })}
                    />
                    <p style={{ color: "red" }}>
                        {errors.name && "name is required"}
                    </p>

                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        ref={register({
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                        })}
                    />
                    <p style={{ color: "red" }}>
                        {" "}
                        {errors.email && "email name is required"}
                    </p>

                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        ref={register({ required: true })}
                    />
                    <p style={{ color: "red" }}>
                        {" "}
                        {errors.password &&
                            "password is required and atleast 6 characters"}
                    </p>

                    <Form.Control
                        type="password"
                        name="passwordConfirm"
                        placeholder="confirm your password"
                        ref={register({ required: true })}
                    />
                    <p style={{ color: "red" }}>
                        {" "}
                        {errors.passwordConfirm &&
                            "password conformation name is required and at least 6 character"}
                    </p>

                    <Form.Control
                        className="btn btn-primary"
                        type="submit"
                        value="Sign up"
                    />
                    <p className="text-center">
                        Already have an account.
                        <Link to="/login"> Login</Link>
                    </p>
                </Form.Group>
            </Form>
        </Card>
    );
};

export default SignUp;
