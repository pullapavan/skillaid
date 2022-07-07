import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Spinner } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";
import ContactInfo from './common/ContactInfo';
import SocialLinks from './common/SocialLinks';
import { useAuth } from './context/authcontext';
import { useHistory } from "react-router-dom";

function HeaderTwo(props) {

    const { currentUser, logout } = useAuth()
    const history = useHistory();
    const [loading, setLoading] = useState()

    async function logoutUser() {
        setLoading(true);
        await new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
        await logout();
        history.push("/login")
    }

    return (
        <Styles>
            {/* Topbar 2 */}
            <section className="top-bar2">
                <Container>
                    <Row>
                        <Col lg="7" md="9">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <ContactInfo></ContactInfo>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="5" md="3">
                            <div className="bar-right d-flex justify-content-end">
                                <ul className="list-unstyled list-inline bar-social">
                                    <SocialLinks></SocialLinks>
                                </ul>

                                <ul className="list-unstyled list-inline sidebar-button">
                                    <li className="list-inline-item nav-item side-box">
                                        <Sidebar />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area 2 */}
            <section className="logo-area2">
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
                                        <Link className="nav-link dropdown-toggle" to={"" + "/materials"} data-toggle="dropdown">Materials <i className="las la-angle-down"></i></Link>
                                        {/* <ul className="dropdown list-unstyled"> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/"}>Home Style 1</Link></li> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/"}>Home</Link></li> */}
                                        {/* </ul> */}
                                    </li>
                                    {/* <li className="nav-item dropdown"> */}
                                    {/* <Link className="nav-link dropdown-toggle" to={"" + "/"} data-toggle="dropdown">About Us <i className="las la-angle-down"></i></Link> */}
                                    {/* <ul className="dropdown list-unstyled"> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/about"}>About Us</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/gallery"}>Gallery</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/login"}>Log In</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/registration"}>Registration</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/contact"}>Contact</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/faq"}>Faq</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/404"}>404</Link></li> */}
                                    {/* <li className="nav-item"><Link className="nav-link" to={"" + "/coming-soon"}>Coming Soon</Link></li> */}
                                    {/* </ul> */}
                                    {/* </li> */}
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/internships"} data-toggle="dropdown">Internships <i className="las la-angle-down"></i></Link>
                                        {/* <ul className="dropdown list-unstyled"> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-grid"}>Course Grid</Link></li> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-list"}>Course List</Link></li> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-details"}>Course Details</Link></li> */}
                                        {/* </ul> */}
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={"" + "/gre"} data-toggle="dropdown">GRE & IELTS <i className="las la-angle-down"></i></Link>
                                        {/* <ul className="dropdown list-unstyled"> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-grid"}>Course Grid</Link></li> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-list"}>Course List</Link></li> */}
                                        {/* <li className="nav-item"><Link className="nav-link" to={"" + "/course-details"}>Course Details</Link></li> */}
                                        {/* </ul> */}
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
                                {/* <div className="search-box">
                                    <Search />
                                </div> */}
                                <div className="apply-btn">
                                    <Link to={"" + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                </div>
                                {!props.hideLogin &&
                                    (currentUser ? <div className="apply-btn" onClick={logoutUser}>
                                        <span><i className="las la-clipboard-list"></i>
                                           {
                                               loading ? <Spinner animation="border" variant="dark" />: 'Logout'
                                           } 
                                        </span>
                                    </div> : <div className="apply-btn">
                                        <Link to={"" + "/login"}><i className="las la-clipboard-list"></i>Login</Link>
                                    </div>)
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sticky Menu */}
            <StickyMenu />

            {/* Mobile Menu */}
            <MobileMenu />
        </Styles>
    )
}
export default HeaderTwo
