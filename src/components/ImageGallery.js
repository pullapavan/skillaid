import React, { Component } from 'react';
import Datas from '../data/gallery/gallery.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/imageGallery.js";

class ImageGallery extends Component {
    render() {
        return (
            <Styles>
                {/* Campus Tour */}
                <section className="gallery-area">
                    <Container fluid>
                        <Row>
                            <Col md="10" sm="10" className="padding-fix text-center sec-title">
                                <h4><span className="color-red">We're Fantastic team who love what we do</span>,<span className="color-blue"> we will make you acheive what you love!!!</span></h4>
                            </Col>
                            {/* {
                                Datas.map((data, i) => (
                                    <Col md="3" sm="6" className="padding-fix" key={i}>
                                        <div className="gallery-box">
                                            <ModalImage small={"" + `/assets/images/${data.galleryImage}`} large={"" + `/assets/images/${data.galleryImage}`} alt="" />
                                        </div>
                                    </Col>
                                ))
                            } */}
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default ImageGallery
