import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import ReviewForm from './components/ReviewForm';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import Datas from '../../data/course/ml-curriculum.json';
import { Link } from 'react-router-dom';

function MachineLearning(props) {

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

            <BreadcrumbBox title="MachineLearning" course="ml" imgUrl="mlearning.jpg"></BreadcrumbBox>

            <Styles>
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>MachineLearning</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                           
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>MachineLearning</p>
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
                                        <img src={"" + `/assets/images/mlearning.jpg`} alt="" className="img-fluid" />
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
                                                        <p>Artificial Intelligence is a new growing trend in the field of computer science. This technology is so diverse that even your very own platform Verzeo is backed by AI. It has numerous applications everywhere from as simple as your smartphone camera to applications in the creation of complex Learning-based models required for Quantum Computing.</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Features</h5>
                                                        <p></p>
                                                        <ul className="list-unstyled">
                                                            <li>9 days 72 Hours (50 hrs class + 22 hrs project) certified India’s biggest Exclusive MLAI Internship </li>
                                                            <li>Get Globally Recognized Internship Certification from SkillAid.</li>
                                                            <li>Internship designed and delivered by Industrial Subject Matter Experts (SME’s), Product managers, ML&AI decvelopers. </li>
                                                            <li> Hands-On with Python to make ML/AI applications.</li>
                                                            <li>Work on real time problems as a project under the guidance of experience AI/ML developers and entrepreneurs.</li>
                                                            <li>Get Internationally valid internship certification from ISO 9001:2015 , GAB, ICAB.</li>
                                                            <li>Get Industry recognized Internship certificate to improve your career prospects.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcomes</h5>
                                                        <p>.</p>
                                                        <ul className="list-unstyled">
                                                            <li><i className="fa fa-check"></i> apply the basic principles, models, and algorithms of AI to recognize, model, and solve problems in the analysis and design of information systems. analyze the structures and algorithms of a selection of techniques related to searching, reasoning, machine learning, and language processing.</li>
                                                            <li><i className="fa fa-check"></i> Outline the societal and philosophical aspects of AI</li>
                                                            <li><i className="fa fa-check"></i> the scope, the main paradigms, and the challenges of AI.</li>
                                                            <li><i className="fa fa-check"></i> Develop the basic AI algorithms and evaluate them on simple problems.</li>
                                                            <li><i className="fa fa-check"></i> Assess the applicability of different AI methods and paradigms for a given AI problem.</li>
                                                            <li><i className="fa fa-check"></i> Understand the role that humans play in crafting effective Machine Learning solutions.</li>
                                                            <li><i className="fa fa-check"></i> Become aware of variety of Machine Learning Algorithms, Understand the types of problems that ML Algorithms can solve today.</li>
                                                            <li><i className="fa fa-check"></i> Articulate how these Algorithms are fundamentally different from traditional programming Algorithms.</li>
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
                                                        <p>Artificial Intelligence and machine learning is a broad discipline that promises to simulate numerous innate human skills such as automatic programming, case-based reasoning, neural networks, Fuzzy Logic, decision-making, expert systems, natural language processing, pattern recognition and speech recognition etc. The artificial intelligence and machine intelligence technologies bring more complex data-analysis features to existing applications. Therefore, there is a thrust in using machine learning approaches to build new solutions in business. The curriculum is designed keeping in view the need of the industry.</p>
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

export default MachineLearning