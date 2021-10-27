import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";

function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={"" + "/"}><img src={"" + "/assets/images/logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Home <i className="las la-angle-down"></i></Link>
                                        {/* <ul className="dropdown list-unstyled"> */}
                                            {/* <li className="nav-item"><Link className="nav-link" to={"" + "/"}>Home</Link></li> */}
                                            {/* <li className="nav-item active"><Link className="nav-link" to={"" + "/home-two"}>Home Style 2</Link></li> */}
                                        {/* </ul> */}
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Pages <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/about"}>About Us</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/gallery"}>Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/login"}>Log In</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/registration"}>Registration</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/contact"}>Contact</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/faq"}>Faq</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/404"}>404</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/coming-soon"}>Coming Soon</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/internships"} data-toggle="dropdown">Internships <i className="las la-angle-down"></i></Link>
                                        {/* <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/course-grid"}>Course Grid</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/course-list"}>Course List</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/course-details"}>Course Details</Link></li>
                                        </ul> */}
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Instructor <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/instructor"}>Instructors</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/instructor-details"}>Instructor Details</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Event <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/events"}>Events</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/event-details"}>Event Details</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Blog <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/blog-classic"}>Blog Classic</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/blog-grid"}>Blog Grid</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/blog-details"}>Blog Details</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">Shop <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/products"}>Products</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/product-details"}>Product Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={"" + "/cart"}>Cart</Link></li>
                                        </ul>
                                    </li> */}
                                </ul>
                                <div className="apply-btn">
                                    <Link to={"" + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu