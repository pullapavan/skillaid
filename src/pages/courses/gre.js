import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import ReviewForm from './components/ReviewForm';
import CourseTag from './components/CourseTag';
// import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import Datas from '../../data/course/fs-curriculum.json';
import { Link } from 'react-router-dom';
import FooterTwo from '../../components/FooterTwo';

function Gre(props) {

    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <div className="main-wrapper course-details-page" >

            < HeaderTwo />

            <BreadcrumbBox title="GRE & IELTS TRAINING" course="fs" imgUrl="gre.jpg"></BreadcrumbBox>

            <Styles>
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>Intensive Training Structure</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                           
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>GRE & IELTS</p>
                                            </div>
                                            <div className="rating">
                                                <h6>Rating</h6>
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                    </li>
                                                    <li className="list-inline-item">(4.7)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                        <img src={"" + `/assets/images/gre4.png`} alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    {/* <Nav.Link eventKey="curriculum">Curriculum</Nav.Link> */}
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor">Benefits</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">Reviews</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5>Intensive Live Classes With Experts!</h5>
                                                        <p>Imagine studying for GRE from the comfort of your hostel with an expert teaching you important GRE concepts LIVE? With our live tutoring sessions, you can learn concepts, raise doubts & interact with your Expert easily!</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Feature</h5>
                                                        <p></p>
                                                        <ul className="list-unstyled">
                                                            <li>300 Guarantee program. </li>
                                                            <li>Get Globally Recognized Training Certification from SkillAid.</li>
                                                            <li>Minimum 150 Hours of Practice, GRE Style Tests (Verbal) - 7, Full Length Tests - 3 </li>
                                                            <li>some concepts in GRE syllabus are more important than others? Your Experts study your strengths & weaknesses carefully and then create a priority based study plan based on the most important GRE topics!.</li>
                                                            {/* <li>Hands-On Lab with various technologies like Front end, back end and databases to make full functional web applications.</li>
                                                            <li>Get Internationally valid internship certification from ISO 9001:2015 , GAB, ICAB.</li>
                                                            <li>Get Industry recognized Internship certificate to improve your career prospects.</li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcome</h5>
                                                        <p>.</p>
                                                        <ul className="list-unstyled">
                                                            <li><i className="fa fa-check"></i> Get ready to master the GRE test prep you need for the GRE & IELTS score you want</li>
                                                            <li><i className="fa fa-check"></i> Unlimited resources for Test preparation</li>
                                                            <li><i className="fa fa-check"></i> IELTS Speaking Fluency.</li>
                                                            <li><i className="fa fa-check"></i> Our guidance to your future in various countries with help of our student welfare team</li>
                                                            {/* <li><i className="fa fa-check"></i> Develop a fully functioning website and deploy on a web server.</li>
                                                            <li><i className="fa fa-check"></i> Create webpages that function using external data.</li>
                                                            <li><i className="fa fa-check"></i> Develop JavaScript applications that transition between states.</li>
                                                            <li><i className="fa fa-check"></i> Derive information from data and implement data into applications.</li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="course-share">
                                                        <h5>Share This Course</h5>
                                                        <ul className="social list-unstyled list-inline">
                                                            <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-twitter"></i></a></li>
                                                            <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                            <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-youtube"></i></a></li>
                                                            <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                    <div className="course-curriculum">
                                                        <h5>Internship Curriculum</h5>
                                                        {/* <p>In Our Internship, Fullstack's immersive curriculum will expose you to the latest in modern software development for the Internet. Our curriculum is based on current technology trends and marketplace demand from industry leaders. We cultivate a passion for discovering and learning, a necessary quality in today’s rapidly changing programming landscape. After graduating Fullstack you’ll be an expert in the technologies we teach, and adaptive enough to pick up new ones as trends change over time.</p> */}
                                                    </div>
                                                    <div className="course-element">
                                                        <h5>Internship Content</h5>
                                                        {
                                                            Datas.items.map((data) => {
                                                                return <div className="course-item">
                                                                    <button className="course-button active">{data.mainTitle}</button>
                                                                    <div className="course-content show">
                                                                        <ul className="list-unstyled">
                                                                            {
                                                                                data.subList.map((item) => {
                                                                                    return <li>
                                                                                        <span className="play-icon"><i className="las la-play"></i></span>
                                                                                        <span className="lecture-title">{item}</span>
                                                                                    </li>
                                                                                })
                                                                            }

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            })
                                                        }
                                                    </div>


                                                </Tab.Pane>
                                                <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                    <h5>Program Specified Benefits</h5>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="8">
                                                                <div className="benefits-points">
                                                                    <ul className="list-unstyled">
                                                                        <li><i className="fa fa-check"></i> If an Expert could exactly tell you where you're going wrong & how you can do better, wouldn't that help you achieve your target score? Your Quant & Verbal trainers analyze how you answer every question. Using a unique tracking technology, they can tell you exactly where you're going wrong and what you need to do to better your performance.</li>
                                                                        <li><i className="fa fa-check"></i> If you have nagging doubts during preparation, we can help! lets you raise doubts to your Experts directly. Whether you have 20 doubts or 200, your Experts will clarify it all within a single working day! Meanwhile, for more immediate assistance, you can also check our database of previously solved doubts.</li>
                                                                        <li><i className="fa fa-check"></i> Placement assistance is provided for attendees who seek to, and career guidance is also included in the program.</li>
                                                                        <li><i className="fa fa-check"></i> How motivated would you be to stay on schedule if you could track your study accurately? Our superior tracking technology provides continuous, real time performance reports depending on the lessons you complete. You can also compare your progress to others who have achieved actually your target GRE score!.</li>
                                                                        <li><i className="fa fa-check"></i> CRM’s will receive certification for organizing program.</li>
                                                                        <li><i className="fa fa-check"></i> Preparing for GRE is one part of giving GRE. There are various non-academic but necessary tasks to complete such as booking a GRE date, getting the right university codes to send your scores etc. Our dedicated student welfare team ensures you have no hiccups in giving your GRE & beyond!</li>
                                                                        {/* <li><i className="fa fa-check"></i> For students seeking, to pursue their Masters abroad, A GRE and IELTS Kit is provided, along with guide to choosing the correct University!</li> */}
                                                                        <li><i className="fa fa-check"></i> With our partnered higher education consultants, attendees will ensure discounts in processing fee for applying universities abroad.</li>
                                                                        <li><i className="fa fa-check"></i> Experts from the well-known MNC’s are best in class and what you learn is up to date!!!</li>
                                                                    </ul>
                                                                </div>

                                                                {/* <div className="instructor-content"> */}
                                                                {/* <div className="instructor-box"> */}
                                                                {/* <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>Mark Shadow</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div> */}
                                                                {/* <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis delectus voluptate reiciendis animi nisi nemo tenetur sequi cum laudantium sit totam libero quasi ducimus accusantium numquam eaque.</p>
                                                                        </div> */}
                                                                {/* </div> */}
                                                                {/* </div> */}
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    {/* <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={"" + `/assets/images/instructor-2.jpg`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>Katrin Kay</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis delectus voluptate reiciendis animi nisi nemo tenetur sequi cum laudantium sit totam libero quasi ducimus accusantium numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row> */}
                                                    {/* </div> */}
                                                    {/* <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={"" + `/assets/images/instructor-3.jpg`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>David Show</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={"" + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis delectus voluptate reiciendis animi nisi nemo tenetur sequi cum laudantium sit totam libero quasi ducimus accusantium numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div> */}
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review" className="review-tab">
                                                    <Row>
                                                        <Col md="12">
                                                            <div className="review-comments">
                                                                <h5>Course Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={"" + `/assets/images/aanchal.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Aanchal(Master's Degree, University of North Texas 2020-2022)</h6>
                                                                                <p>May 6, 2021 | 06:38pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                         
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>GRE and IELTS are essential for admittance to many schools around the world. Skillaid is an excellent platform if you are planning to take up exam in really short period. The platform is excellent for first-time GRE aspirants because it familiarizes us with the exam format, material, and diverse questioning techniques for a more realistic test approach. They provide adequate study strategies and clarify each and every practice question. Coming to IELTS, very clearly explained in great depth. Completely content, with fine instances, precise terminology, and great pronunciation, thus students could improve listening as well.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={"" + `/assets/images/bethi.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Bethi Rohith Reddy(masters in Automotive engg, Minnesota State University, 2021-2023)</h6>
                                                                                <p>apr 27, 2022 | 07:50pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.7)</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>I have done my GRE and IELTS coaching and admission process in SkillAid, The Ultimate Skill Enhancement centre and the institute members helped me a lot. The institute members are very caring and supportive…</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review-form">
                                                                <h5>Submit Review</h5>
                                                                <ReviewForm />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Training Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Start Date: <span>june 20, 2022</span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span>150 hrs*</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>English</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>Intermediate</span></li>
                                                    <li><i className="las la-graduation-cap"></i> Subject: <span>GRE & IELTS</span></li>
                                                    {/* <li><i className="las la-bookmark"></i> Enrolled: <span>720</span></li> */}
                                                    <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li>
                                                </ul>
                                                <Link to="/gre/registration"> <button type="button" className="enroll-btn"><span style={{color:"white"}}>Register</span></button></Link>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            {/* <CourseTag /> */}
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo />

        </div >
    )
}

export default Gre