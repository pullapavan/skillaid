import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
// import { BreadcrumbBox } from '../../components/common/BreadcrumbBox';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import { useAuth } from '../../components/context/authcontext';
import Alert from 'react-bootstrap/Alert'

function GreRegistration() {
    useEffect(() => {

    });
    let { db } = useAuth()

    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState('')

    const submitDetails = async () => {
        let name = document.getElementById("registration_fname").value
        let email = document.getElementById("registration_email").value
        let mobile = document.getElementById("registration_mobile").value
        let rollno = document.getElementById("registration_rollno").value
        let branch = document.getElementById("registration_branch").value



        if (name && name.trim() && email && mobile && /[6-9]{1}[0-9]{9}/.test(mobile) && rollno) {
            try {
                setSubmitted(true)
                const response = await db.collection("gre").add({
                    name: name || "",
                    email: email || "",
                    mobile: mobile || "",
                    rollno: rollno || "",
                    branch: branch || "",
                    date: new Date().toString()
                });
                setSuccess(true)
                setSubmitted(false)
            } catch (error) {
                console.log(error)
            }
        }else{
            window.alert("Please enter all the required fields")
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
                                        <h3>Registration for GRE & IELTS Training</h3>
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
                                            <label htmlFor="registration_rollno">Roll no</label>
                                            <input type="text" placeholder="Roll no" id="registration_rollno" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_branch">Branch</label>
                                            <input type="text" placeholder="Branch" id="registration_branch" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                       
                                       
                                
                                        {/* <p className="form-control">
                                            <label htmlFor="registration_email">College</label>
                                            <input type="text" placeholder="College/University Name" id="college" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="team_size">Team Size</label>
                                            <input type="tel" placeholder="Team Size" id="teamSize" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="team_name">Team Name</label>
                                            <input type="text" placeholder="Team Name" id="teamName" />
                                            <span className="registration_inputmsg"></span>
                                        </p> */}
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
                                        <button disabled={submitted} onClick={submitDetails}>Register</button>
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

export default GreRegistration