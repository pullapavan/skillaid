import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
// import { BreadcrumbBox } from '../../components/common/BreadcrumbBox';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import validator from 'validator'
import { useAuth } from '../../components/context/authcontext';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import { useHistory } from "react-router-dom";


function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)

    const { signup, googleSignup, currentUser } = useAuth()
    const  history  = useHistory();

    useEffect(() => {
        if (currentUser)
            history.push("/materials");
    }, [currentUser]);

    function onChange(e, source) {
        const value = e.target.value;
        if (source === 'email')
            setEmail(value)
        else
            setPassword(value);
    }

    async function formSubmit(e) {
        e.preventDefault();

        if (loading)
            return;

        //validateing email
        if (!validator.isEmail(email)) {
            return setError('Enter a valid Email Address');
        } else if (!password) {
            return setError('Enter a valid password')
        }

        setError('');
        try {
            setLoading(true);
            await signup(email, password);
            history.push("/materials");
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper login-page">

                {/* Header 2 */}
                <HeaderTwo hideLogin={true}/>

                {/* Breadcroumb */}
                <BreadcrumbBox title="Sign Up" />

                {/* Login Area */}
                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="login-box">
                                    <div className="text-center">
                                        <h3>SignUp</h3>
                                    </div>
                                    {error &&
                                        <div>
                                            <Alert key={1} variant="danger">
                                                {error}
                                            </Alert>
                                        </div>}
                                    <form id="form_login" className="form" onSubmit={formSubmit}>
                                        <p className="form-control">
                                            <label htmlFor="login_email">Email</label>
                                            <input type="email" placeholder="Username" id="login_email" value={email} onChange={(e) => onChange(e, 'email')} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="login_password">Password</label>
                                            <input type="password" placeholder="*******" id="login_password" value={password} onChange={(e) => onChange(e, 'password')} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <button disabled={!email || !password}>
                                            {!loading ? 'Sign Up' : <Spinner animation="border" variant="dark" />}
                                        </button>
                                        {/* <div className="save-forget-password d-flex justify-content-between">
                                            <div className="save-passowrd">
                                                <label htmlFor="save_password"><input type="checkbox" id="save_password" className="check-box" />Save Password</label>
                                            </div>
                                            <div className="forget-password">
                                                <Link to={"" + "/"}>Forget Password?</Link>
                                            </div>
                                        </div> */}
                                        <div className="not_account-btn text-center">
                                            <p>Have An Account <Link to={"" + "/login"}>Click Here</Link></p>
                                        </div>
                                        <div className="social-login text-center">
                                            <p>Signup With Social</p>
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item" onClick={googleSignup}><a href={"" + "#"}><i className="fab fa-google"></i> Google</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default SignUp