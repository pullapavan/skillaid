import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";

function MobileMenu() {
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i><a href='tel:7330697676'>+91 7330697676</a></p>
                                    <p><i className="las la-email"></i><a href='mailto:techteam@skillaid.org'>techteam@skillaid.org</a></p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        {/* <li className="list-inline-item"><Link to={"" + "/login"}>Log In</Link></li> */}
                                        {/* <li className="list-inline-item">/</li> */}
                                        {/* <li className="list-inline-item"><Link to={"" + "/registration"}>Register</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={"" + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={"" + "/"}><img src={"" + "/assets/images/logo.png"} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="apply-btn">
                                    <Link to={"" + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={"" + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Home <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/"}>Home</Link></li>
                                {/* <li><Link to={"" + "/home-two"}>Home Style 2</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Materials <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/materials"}>CRT</Link></li>
                                {/* <li><Link to={"" + "/home-two"}>Home Style 2</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Pages <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/about"}>About Us</Link></li>
                                <li><Link to={"" + "/gallery"}>Gallery</Link></li>
                                <li><Link to={"" + "/login"}>Log In</Link></li>
                                <li><Link to={"" + "/registration"}>Registration</Link></li>
                                <li><Link to={"" + "/contact"}>Contact</Link></li>
                                <li><Link to={"" + "/faq"}>Faq</Link></li>
                                <li><Link to={"" + "/404"}>404</Link></li>
                                <li><Link to={"" + "/coming-soon"}>Coming Soon</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Internships <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/internships"}>Available Internships</Link></li>
                                {/* <li><Link to={"" + "/course-list"}>Course List</Link></li> */}
                                {/* <li><Link to={"" + "/course-details"}>Course Details</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>GRE & IELTS <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/gre"}>Register for GRE Training</Link></li>
                                {/* <li><Link to={"" + "/course-list"}>Course List</Link></li> */}
                                {/* <li><Link to={"" + "/course-details"}>Course Details</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Instructor <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/instructor"}>Instructors</Link></li>
                                <li><Link to={"" + "/instructor-details"}>Instructor Details</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Event <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/events"}>Events</Link></li>
                                <li><Link to={"" + "/event-details"}>Event Details</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Blog <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/blog-classic"}>Blog Classic</Link></li>
                                <li><Link to={"" + "/blog-grid"}>Blog Grid</Link></li>
                                <li><Link to={"" + "/blog-details"}>Blog Details</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Shop <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={"" + "/products"}>Products</Link></li>
                                <li><Link to={"" + "/product-details"}>Product Details</Link></li>
                                <li><Link to={"" + "/cart"}>Cart</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu