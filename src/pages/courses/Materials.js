import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import ReviewForm from './components/ReviewForm';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import Datas from '../../data/course/fs-curriculum.json';
import { Link } from 'react-router-dom';

function Materials(props) {

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

            <BreadcrumbBox hide={true} title=" Free Materials" course="fs" imgUrl="crasdt.jpg"></BreadcrumbBox>

            <Styles>
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="crt">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="crt">CRT Materials</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="gre">GRE Materials</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="ielts">IELTS Materials</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="crt" className="overview-tab">
                                                    <div className="course-learn">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 1 <Link to="/materials/Analogy.DOCX" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 2  <Link to="/materials/clocks.DOCX" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 3  <Link to="/materials/Coding_and_Decoding.DOCX" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 4  <Link to="/materials/Directions.DOCX" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 5  <Link to="/materials/Number_series.DOCX" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">Assessment 6  <Link to="/materials/Clocks(new).pdf" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gre" className="overview-tab">
                                                    <div className="course-learn">
                                                        <h5>Coming Soon !!!</h5>
                                                        {/* <ul className="list-unstyled">
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                        </ul> */}
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="ielts" className="overview-tab">
                                                    <div className="course-learn">
                                                        <h5>Coming Soon !!!</h5>
                                                        {/* <ul className="list-unstyled">
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                            <li>
                                                                <Row>
                                                                    <Col lg="8" md="8" sm="8">This is a very useful resouce to learn. <Link to="" target="_blank" download>Download</Link></Col>
                                                                </Row>
                                                            </li>
                                                        </ul> */}
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
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

export default Materials