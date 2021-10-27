import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "./styles/breadcrumb.js";

function BreadcrumbBox(props) {

    return (
        <Styles>
            <section className="breadcrumb-area" style={{ backgroundImage: `url(${""}/assets/images/${props.imgUrl})` }}>
                <Container>
                    <Row>
                        <Col md="12" className="text-center">
                            <div className="breadcrumb-box">
                                <h2 className="breadcrumb-title">{props.title}</h2>
                                <Breadcrumb>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default BreadcrumbBox;