import React, { Component } from 'react';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/heroSlider.js";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HeroSlider() {
    const history = useHistory()
    const settings = {
        slidesPerView: 1,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 500000,
            disableOnInteraction: false
        },
        // watchSlidesVisibility: true,
        // effect: 'fade',
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        renderPrevButton: () => (
            <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
        ),
        renderNextButton: () => (
            <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
        )
    };
    return (
        <Styles>
            {/* Hero Slider */}
            <section className="hero-slider-area">
                <Swiper {...settings}>
                    <div className="slider-item">
                        <div className="image-container" onClick={() => {
                            history.push(`${"" + `/gre`}`);
                        }}>
                            <img src={"" + `/assets/images/greslide.jpg`} className="slider-image" />
                        </div>
                    </div>
                    <div className="slider-item" >
                        <div className="image-container" onClick={() => {
                            history.push(`${"" + `/blockchain/registration`}`);
                        }}>
                            <img src={"" + `/assets/images/blockchain_banner.png`} className="slider-image" />
                        </div>
                    </div>
                    <div className="slider-item" >
                        <div className="image-container" onClick={() => {
                            history.push(`${"" + `/blockchain/registration`}`);
                        }}>
                            <img src={"" + `/assets/images/alias_banner.png`} className="slider-image" />
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="image-container" onClick={() => {
                            history.push(`${"" + `/certificate/registration`}`);
                        }}>
                            <img src={"" + `/assets/images/mlai1.jpg`} className="slider-image" />
                        </div>
                    </div>
                    {/* <div className="slider-item" onClick={() => {
                        history.push(`${"" + `/robowar/registration`}`);
                    }}>
                        <div className="image-container">
                            <div className='banner_background'>
                            </div>
                        </div>
                        <div className="slider-table">
                            <div className="slider-tablecell">
                                <Container>
                                    <Row>
                                        <Col md="6" >
                                            <div className="slider-box slider-box1">
                                                <div className="slider-title">
                                                    <p>sdfsf</p>
                                                </div>
                                                <div className="slider-desc-1">
                                                    <h1>desc</h1>
                                                </div>
                                                <div className="slider-btn">
                                                    <Link className="slider-btn2" to={"" + `/`}>Register</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div>
                                                <img className="banner_image_right" src={"" + `/assets/images/banner_1.jpg`}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div> */}

                </Swiper>
            </section>
        </Styles >
    )
}

export default HeroSlider
