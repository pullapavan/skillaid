import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import ReviewForm from './components/ReviewForm';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import Datas from '../../data/course/iot-curriculum.json';
import { Link } from 'react-router-dom';

function Iot(props) {

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

            <BreadcrumbBox title="IOT" course="iot" imgUrl="iot.jpg"></BreadcrumbBox>

            <Styles>
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>IOT</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                           
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>Internet of Things</p>
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
                                                    <li className="list-inline-item">(4.5)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                        <img src={"" + `/assets/images/iot.jpg`} alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
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
                                                        <h5>Course Description</h5>
                                                        <p>The Internet of Things (IoT) is everywhere. It provides advanced data collection, connectivity, and analysis of information collected by computers everywhere—taking the concepts of Machine-to-Machine communication farther than ever before.</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Features</h5>
                                                        <p></p>
                                                        <ul className="list-unstyled">
                                                            <li>9 days 72 Hours (50 hrs class + 22 hrs project) certified India’s biggest Exclusive IOT Internship </li>
                                                            <li>Get Globally Recognized Internship Certification from SkillAid.</li>
                                                            <li>Internship designed and delivered by Industrial Subject Matter Experts (SME’s), Product managers, distinguished and Ultimate Technologists. </li>
                                                            <li> Hands-On experience with various IoT applications, Micro controller programming, IoT platform, Real time Database systems, Rasperry Pi, various sensors and developing IoT Apps.</li>
                                                            <li> Work on real time connected devices problems as a project under the guidance of experienced technologist and Industry experts.</li>
                                                            <li> Get Internationally valid internship certification from ISO 9001:2015 , GAB, ICAB.</li>
                                                            <li> Get Industry recognized Internship certificate to improve your career prospects.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcomes</h5>
                                                        <p>.</p>
                                                        <ul className="list-unstyled">
                                                            <li><i className="fa fa-check"></i> After the completion of the course, the students will be able design some IOT based prototypes.</li>
                                                            <li><i className="fa fa-check"></i> Students will be explored to the interconnection and integration of the physical world and the cyber space.</li>
                                                            <li><i className="fa fa-check"></i> They are also able to design & develop IOT Devices. Networks.</li>
                                                            <li><i className="fa fa-check"></i> Able to understand building blocks of Internet of Things and characteristics.</li>
                                                            <li><i className="fa fa-check"></i> Competent, and innovative with a strong cognizance in the area of sensors, IoT, data science, controllers and signal processing through the application of acquired knowledge and skills.</li>
                                                            <li><i className="fa fa-check"></i> apply the knowledge and skills acquired during the course to build and test a complete, working IoT system involving prototyping, programming and data analysis.</li>
                                                            <li><i className="fa fa-check"></i> understand where the IoT concept fits within the broader ICT industry and possible future trends.</li>
                                                            <li><i className="fa fa-check"></i> differentiate between the levels of the IoT stack and be familiar with the key technologies and protocols employed at each layer of the stack.</li>
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
                                                        <p>The Internet of Things is transforming our physical world into a complex and dynamic system of connected devices on an unprecedented scale.Advances in technology are making possible a more widespread adoption of IoT, from pill-shaped micro-cameras that can pinpoint thousands of images within the body, to smart sensors that can assess crop conditions on a farm, to the smart home devices that are becoming increasingly popular. But what are the building blocks of IoT? And what are the underlying technologies that drive the IoT revolution?</p>
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
                                                    <h5>Internship Benefits</h5>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="8">
                                                                <div className="benefits-points">
                                                                    <ul className="list-unstyled">
                                                                        <li><i className="fa fa-check"></i> Get access to technical hiring events and career webinars</li>
                                                                        <li><i className="fa fa-check"></i> Participate in events like hackathons and job fairs</li>
                                                                        <li><i className="fa fa-check"></i> Placement assistance is provided for attendees who seek to, and career guidance is also included in the program.</li>
                                                                        <li><i className="fa fa-check"></i> Best project award along the brand merchandise are provided for attendees holding the Supreme Project Award.</li>
                                                                        <li><i className="fa fa-check"></i> CRM’s will receive certification for organizing program.</li>
                                                                        <li><i className="fa fa-check"></i> Create webpages that function using external data.</li>
                                                                        <li><i className="fa fa-check"></i> For students seeking, to pursue their Masters abroad, A GRE and IELTS Kit is provided, along with guide to choosing the correct University!</li>
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
                                                                <h5>Internship Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={"" + `/assets/images/pavan.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Pulla pavan Kumar(Full Stack Developer in Head Digital Works PVT Ltd.)</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
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
                                                                            <p>SkillAid’s Full Stack Internship course is simple yet effective. The trainer was helpful and gave examples which made the content easy to understand. I would highly recommend SkillAid.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={"" + `/assets/images/srinivas.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Srinivas(Full Stack Developer in NCR)</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
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
                                                                            <p>I have enrolled for SkillAid’s Full Stack Development Internship. The content is very informative. The trainer is knowledgeable and his skills of explaining the concepts are awesome.</p>
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
                                                <h5 className="title">Internship Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Start Date: <span>May 1, 2021</span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span>7 days, 30 days</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>English</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>Intermediate</span></li>
                                                    <li><i className="las la-graduation-cap"></i> Subject: <span>Web</span></li>
                                                    <li><i className="las la-bookmark"></i> Enrolled: <span>720</span></li>
                                                    <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li>
                                                </ul>
                                                <button type="button" className="enroll-btn"><Link to="/registration"><span style={{color:"white"}}>Enroll Course</span></Link></button>
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

export default Iot