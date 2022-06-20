import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo.js';
import SocialLinks from './SocialLinks.js';
import { Styles } from "./styles/sidebar.js";

function Sidebar() {
    useEffect(() => {
        const sidebarBtn = document.getElementById("sidebar-btn");

        if (sidebarBtn) {
            const sidebarOverlay = document.getElementById("sidebar-overlay");
            const sidebarBody = document.getElementById("sidebar-body");
            const sidebarExit = document.getElementById("close-sidebar");

            sidebarBtn.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.add("visible");
                sidebarBody.classList.add("opened");
            });

            sidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });

            sidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });
        }
    });

    return (
        <Styles>
            {/* Sidebar */}
            <a href={"" + "/"} className="nav-link nav-sidebar" id="sidebar-btn">
                <i className="las la-bars"></i>
            </a>

            <div className="sidebar" id="sidebar-body">
                <div className="side-logo d-flex justify-content-between">
                    <div><Link to={"" + "/"}><img src={"" + "/assets/images/logo.png"} alt="" /></Link></div>
                    <div><a href={"" + "/"} id="close-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="side-content">
                    <h5>About Us</h5>
                    <p>We're tech-ed company, constantly working on a mission to gear-up students with relevant skills and practical exposure through our internships, workshops, certification courses.</p>
                </div>
                <div className="side-post">
                    <h5>Recent Post</h5>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={"" + "/assets/images/post-01.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Students posing with their hand-crafted RC AirCraft in our Aero-Modelling Internship</p>
                            <span>March, 2020</span>
                        </div>
                    </div>
                    {/* <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={"" + "/assets/images/post-02.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div> */}
                    {/* <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={"" + "/assets/images/post-03.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div> */}
                </div>
                <div className="side-gallery">
                    <h5>Gallery</h5>
                    <img src={"" + "/assets/images/gallery-01.jpg"} alt="" />
                    <img src={"" + "/assets/images/gallery-02.jpg"} alt="" />
                    <img src={"" + "/assets/images/gallery-03.jpg"} alt="" />
                    <img src={"" + "/assets/images/gallery-04.jpg"} alt="" />
                    <img src={"" + "/assets/images/vardgal.jpg"} alt="" />
                    <img src={"" + "/assets/images/gallery-06.jpg"} alt="" />
                </div>
                <div className="side-contact">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <ContactInfo></ContactInfo>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                        <SocialLinks></SocialLinks>
                    </ul>
                </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
        </Styles>
    )
}

export default Sidebar
