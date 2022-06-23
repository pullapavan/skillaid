import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
// import { BreadcrumbBox } from '../../components/common/BreadcrumbBox';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import { useAuth } from '../../components/context/authcontext';
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Register(props) {

    let { db } = useAuth()

    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const fromMaterials = props.redirectTo === "materials"

    const submitDetails = async () => {

        if (loading)
            return;


        let name = document.getElementById("registration_fname").value
        let email = document.getElementById("registration_email").value
        let mobile = document.getElementById("registration_mobile").value
        let college = document.getElementById("college").value



        if (name && name.trim() && email && mobile && /[6-9]{1}[0-9]{9}/.test(mobile)) {
            setLoading(true);
            try {
                setSubmitted(true)
                const collectionName = fromMaterials ? "onlinematerial_regiatrations" : "contactus"
                const response = await db.collection(collectionName).add({
                    name: name || "",
                    email: email || "",
                    mobile: mobile || "",
                    college: college || "",
                    data: new Date().toString()
                });
                setSuccess(true)
                setSubmitted(false)
                if (fromMaterials) {
                    localStorage.setItem("onlinematerialsignup", name);
                    history.push('/materials');
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {/* <BreadcrumbBox title="Registration" /> */}

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>
                                            {
                                                fromMaterials ? 'Register To Access Online Materials' : 'Registration'
                                            }
                                        </h3>
                                    </div>
                                    {success &&
                                        <div>
                                            <Alert key={1} variant="success">
                                                Details Saved. One of our executive will contact you.
                                            </Alert>
                                        </div>}
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_fname">Name</label>
                                            <input type="text" placeholder="First name" id="registration_fname" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        {/* <p className="form-control">
                                            <label htmlFor="registration_lname">Last Name</label>
                                            <input type="text" placeholder="Last name" id="registration_lname" />
                                            <span className="registration_input-msg"></span>
                                        </p> */}
                                        <p className="form-control">
                                            <label htmlFor="registration_email">Email Address</label>
                                            <input type="email" placeholder="Email address" id="registration_email" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">Mobile</label>
                                            <input type="tel" placeholder="Mobile number" id="registration_mobile" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">College</label>
                                            <input type="text" placeholder="College/University Name" id="college" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        {/* <p className="form-control">
                                            <label htmlFor="registration_user">User Name</label>
                                            <input type="text" placeholder="Username" id="registration_user" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_password">Password</label>
                                            <input type="password" placeholder="*******" id="registration_password" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_cpassword">Confirm Password</label>
                                            <input type="password" placeholder="Confirm password" id="registration_cpassword" />
                                            <span className="registration_input-msg"></span>
                                        </p> */}
                                        <button disabled={loading} onClick={submitDetails}>{loading ? 'Processing' : 'Register Now'}</button>
                                    </form>
                                    {/* <div className="have_account-btn text-center">
                                        <p>Already have an account? <Link to="/login">Login Here</Link></p>
                                    </div> */}
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

export default Register