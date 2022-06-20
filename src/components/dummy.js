import React, { Component } from 'react';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/heroSlider.js";
import { useAuth } from './context/authcontext';
import { useEffect } from 'react';
import { getStorage, ref, listAll } from "firebase/storage";


function HeroSlider() {

    const { storage, db } = useAuth();
    const [banners, setBanners] = React.useState([])

    useEffect(() => {

        async function loadBanners() {
            const banners = db.collection('banners');
            const snapshot = await banners.get();
            var bannersArray = [];

            snapshot.forEach(doc => {
                const data = doc.data()
                bannersArray.push({
                    ...data
                })
            });

            for (var i = 0; i < bannersArray.length; i++) {
                const filePath = await storage.child('banners/' + bannersArray[i].fileName).getDownloadURL()
                bannersArray[i].filePath = filePath;
            }

            console.log(bannersArray)
            setBanners(bannersArray);
        }

        loadBanners();
    }, [])


    const settings = {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        effect: 'fade',
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

    if (banners.length === 0)
        return (
            <div></div>
        )

    return (
        <Styles>
            {/* Hero Slider */}
            <section className="hero-slider-area">
                <Swiper {...settings}>
                    {
                        banners.map((data, i) => (
                            <div className="slider-item" key={i}>
                                <div className="image-container">
                                    <img src={data.filePath} className="slider-image" alt={data.backgroundImage} />
                                </div>
                                <div className="slider-table">
                                    <div className="slider-tablecell">
                                        <Container>
                                            <Row>
                                                <Col md="12">
                                                    <div className={data.uniqClass}>
                                                        <div className="slider-title">
                                                            <p>{data.title}</p>
                                                        </div>
                                                        <div className={data.sliderDescClass}>
                                                            <h1>{data.description}</h1>
                                                        </div>
                                                        <div className="slider-btn">
                                                            <Link className="slider-btn1" to={"" + `/${data.link}`}>{data.buttonName}</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Swiper>
            </section>
        </Styles>
    )
}

export default HeroSlider
