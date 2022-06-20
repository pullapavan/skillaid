import React, { useEffect, useState } from 'react';
import Datas from '../data/free-course/free-course.json';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import { Styles } from "./styles/freeCourse.js";
import { useAuth } from '../components/context/authcontext';


function FreeCourse() {

    const [countdowntimer, setTimer] = useState()
    const [success, setSuccess] = useState()


    useEffect(() => {
        setTimer(new Date("2022-04-07").getTime() - new Date().getTime())

    }, [])

    const { db } = useAuth();

    const submitDetails = async () => {
        setSuccess(false)
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let mobile = document.getElementById("mobile").value

        console.log(name)

        if (name && name.trim() && email && mobile && /[6-9]{1}[0-9]{9}/.test(mobile)) {
            try {
                const response = await db.collection("contactus").add({
                    name: name || "",
                    email: email || "",
                    mobile: mobile || "",
                    data: new Date().toString()
                });
                console.log(response)
                setSuccess(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    // useEffect(() => {
    //     const form = document.getElementById("form3");
    //     const name = document.getElementById("name3");
    //     const email = document.getElementById("email3");
    //     const phone = document.getElementById("phone3");


    //     // form.addEventListener("submit", formSubmit);

    //     function formSubmit(e) {
    //         e.preventDefault();

    //         const nameValue = name.value.trim();
    //         const emailValue = email.value.trim();
    //         const phoneValue = phone.value.trim();

    //         if (nameValue === "") {
    //             setError(name, "Name can't be blank");
    //         } else {
    //             setSuccess(name);
    //         }

    //         if (emailValue === "") {
    //             setError(email, "Email can't be blank");
    //         } else if (!isEmail(emailValue)) {
    //             setError(email, "Not a valid email");
    //         } else {
    //             setSuccess(email);
    //         }

    //         if (phoneValue === "") {
    //             setError(phone, "Phone number can't be blank");
    //         } else if (isNaN(phoneValue)) {
    //             setError(phone, "Not a valid phone number");
    //         } else {
    //             setSuccess(phone);
    //         }
    //     }

    //     function setError(input, message) {
    //         const formControl = input.parentElement;
    //         const errorMsg = formControl.querySelector(".input-msg3");
    //         formControl.className = "form-control text-left error";
    //         errorMsg.innerText = message;
    //     }

    //     function setSuccess(input) {
    //         const formControl = input.parentElement;
    //         formControl.className = "form-control success";
    //     }

    //     function isEmail(email) {
    //         return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    //     }
    // });

    return (
        <Styles>
            {/* Free Course */}
            <section className="free-course-area">
                <Container>
                    <Row>
                        <Col md="7">
                            <div className="course-text">
                                <h4>{Datas.secTitle}</h4>
                                {/* <p>{Datas.subTitle}</p> */}
                            </div>
                            <div className="countdown-timer">
                                {countdowntimer && <Timer initialTime={countdowntimer} direction="backward">
                                    <p><span><Timer.Days /></span>Days</p>
                                    <p><span><Timer.Hours /></span>Hours</p>
                                    <p><span><Timer.Minutes /></span>Minutes</p>
                                    <p><span><Timer.Seconds /></span>Seconds</p>
                                </Timer>}
                            </div>
                        </Col>
                        <Col md="5">
                            <div className="register-form text-center" style={{ background: `#0da870` }}>
                                <div className="form-box">
                                    <h4 className="title">Sign Up Now</h4>
                                    <p className="desc">Get Trained</p>
                                    {success &&
                                        <div>
                                            <Alert key={1} variant="success">
                                                Details Saved. One of our executive will contact you.
                                            </Alert>
                                        </div>}
                                    <form id="form3" className="form" noValidate>
                                        <p className="form-control">
                                            <input type="text" placeholder="Enter your Name" id="name" />
                                            <span className="input-msg3"></span>
                                        </p>
                                        <p className="form-control">
                                            <input type="email" placeholder="Enter your Email" id="email" />
                                            <span className="input-msg3"></span>
                                        </p>
                                        <p className="form-control">
                                            <input type="text" placeholder="Enter Phone NUmber" id="mobile" />
                                            <span className="input-msg3"></span>
                                        </p>
                                        <input class="register" type="button" onClick={submitDetails} value="Register"/>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    );
}

export default FreeCourse
