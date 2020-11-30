import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
    const { handleGoogleSignIn, signInWithEmailAndPassword, user } = useContext(
        AuthContext
    );

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        return user.isSignedIn ? history.replace(from) : null;
    };

    login();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
    };

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
                        name="email"
                        type="email"
                        placeholder="enter your email"
                        required
                        ref={register({
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                        })}
                    />
                    <br />
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        ref={register({ required: true })}
                        required
                    />
                    <br />
                    <Form.Control
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                    />
                    <p className="text-center">
                        Don't have an account?
                        <Link to="/sign-up"> Sign Up</Link>
                    </p>
                </Form.Group>
            </Form>
            <Button onClick={handleGoogleSignIn} className="btn btn-success">
                Sign in with Google
            </Button>
        </Card>
    );
};

export default Login;
