import React, { useEffect } from 'react';
import Datas from '../data/footer/footer2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";
import SocialLinks from './common/SocialLinks';

function FooterTwo() {
    useEffect(() => {
        const form = document.getElementById("form4");
        const email = document.getElementById("email4");

        // form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const emailValue = email.value.trim();

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg4");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            {/* Footer Two */}
            <footer className="footer2" >
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="footer-logo-info">
                                <img src={"" + "/assets/images/logo.png"} alt="" className="img-fluid" />
                                <p>We're Ed-Tech company, constantly working on a mission to gear-up students with relevant skills and practical exposure through our internships, workshops, certification courses.</p>
                                <ul className="list-unstyled">
                                    <li><i className="las la-map-marker"></i>Hyderabad</li>
                                    <li><i className="las la-envelope"></i>Collaborations@SkillAid.Org</li>
                                    <li><i className="las la-phone"></i>+91 7330697676</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="f-links">
                                <h5>Useful Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to={"" + "/"}><i className="las la-angle-right"></i>General Information</Link></li>
                                    <li><Link to={"" + "/"}><i className="las la-angle-right"></i>Help Center</Link></li>
                                    <li><Link to={"" + "/"}><i className="las la-angle-right"></i>Our Services</Link></li>
                                    <li><Link to={"" + "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li>
                                    <li><Link to={"" + "/"}><i className="las la-angle-right"></i>Online Support</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="f-post">
                                <h5>Collaborations</h5>
                                <div className="post-box d-flex">
                                    {/* <div className="po-icon">
                                        <i className="fab fa-twitter"></i>
                                    </div> */}
                                    <div className="po-content">
                                        <img src='/assets/images/vnrlogo.png' width="50" />
                                        <img src='/assets/images/vardhaman1.webp' width="80" height="44" style={{paddingLeft: '3px'}}/>
                                        {/* <Link to={"" + "/blog-details"}>Lorem ipsum dolor sit ...</Link> */}
                                        {/* <span>Mar 30, 2019</span> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="f-post">
                                <h5>Certification Bodies</h5>
                                <div className="post-box d-flex">
                                    <div className="po-content">
                                        <img src='/assets/images/certificate-bodies.jpg' width="200" />
                                    </div>
                                    {/* <div className="po-content">
                                        <img src='/assets/images/ICAB-Logo.webp' width="100"/>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                        {/* <Col md="3">
                            <div className="f-post">
                                <div className="post-box d-flex">
                                    <div className="po-content">
                                        <br></br>
                                        <img src='/assets/images/autodesk.webp' width="100" />
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                        <Col md="12">
                            <div className="copytext-area text-center">
                                <p>Copyright &copy; {new Date().getFullYear()} | SkillAid</p>
                                <ul className="social list-unstyled list-inline">
                                    <SocialLinks></SocialLinks>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo
