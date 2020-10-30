import React from 'react';

import 'swiper/swiper-bundle.css';


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import webOne from '../../../src/webOne.png'
import webTwo from '../../../src/webTwo.png'
import webThree from '../../../src/webThree.png'
import webFour from '../../../src/webFour.png'
import webFive from '../../../src/webFive.png'
import webSix from '../../../src/bankOfBangladesh.png'

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);





const Work = () => {


    return (
      
        <div id="work" className="mt-5 container" >
            <h1 className="text-center display-3 pb-3" style={{ color: "#05386B"}}>Projects</h1>

            {/* <Swiper
                spaceBetween={270}
                slidesPerView={3}
                navigation
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            > */}
            {/* <SwiperSlide><div classNameName="d-flex flex-column justify-content-start"><img classNameName="w-100" style={{height:"150px"}} src={webOne} alt=""/><a target="_blank" href="https://volunteer-network-assignment.web.app/"><h3 classNameName="text-danger">Volunter Network</h3></a></div></SwiperSlide>
                <SwiperSlide><div classNameName="d-flex flex-column justify-content-start"><img classNameName="w-100" style={{height:"150px"}}  src={webTwo} alt=""/><a target="_blank" href="https://travel-guru-nine.web.app/"><h3 classNameName="text-danger">Travel Guru</h3></a></div></SwiperSlide>
                <SwiperSlide><div classNameName="d-flex flex-column justify-content-start"><img classNameName="w-100" style={{height:"150px"}}  src={webThree} alt=""/><a target="_blank" href="https://creative-agency-eleven.web.app/"><h3 classNameName="text-danger">Creative Agency</h3></a></div></SwiperSlide>
                <SwiperSlide><div classNameName="d-flex flex-column justify-content-start"><img classNameName="w-100" style={{height:"150px"}}  src={webFour} alt=""/><a target="_blank" href="https://hot-onion-pro.web.app/"><h3 classNameName="text-danger">Hot Onion</h3></a></div></SwiperSlide> */}
            {/* <SwiperSlide>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={webOne} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={webOne} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={webOne} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={webOne} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper> */}

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webOne} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Creative Agency</h3>
                            <h5 className="card-text text-light">A full stack website that has been used React Node.js mongodb firebase heroku, HTML, CSS and javascript</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/creative-agency-client" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://creative-agency-eleven.web.app/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webThree} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Volunteer Network</h3>
                            <h5 className="card-text text-light">A full stack website that had been used React, Node.js mongodb, firebase and heroku</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/volunteer-network-assignment-10" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://volunteer-network-assignment.web.app/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webTwo} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Travel Guru</h3>
                            <h5 className="card-text text-light">A front end website that had been developed with React, context api, firebase, HTML, CSS and javascript</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/travel-guru-assignment-9" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://travel-guru-nine.web.app/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webFour} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Hot Onion</h3>
                            <h5 className="card-text text-light">A front end website that had been developed with React, React router, context api, firebase HTML ,CSS and javascript</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/hot-onion" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://hot-onion-pro.web.app/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>

                    </div>


                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webFive} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">E-School</h3>
                            <h5 className="card-text text-light">A front end website that had been developed with HTML, CSS. Applied Bootstrap 4 for responsive website and design</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/e-school" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://mostafamahmood17.github.io/e-school/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>

                    </div>


                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={webSix} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Bank of Bangladesh</h3>
                            <h5 className="card-text text-light">A front end website that had been developed with HTML, CSS and javascript. Applied Bootstrap 4 and design.</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/mostafamahmood17/Bank-of-Bangladesh" target="_blank"><button className="btn btn-outline-warning btn-sm">Github</button></a>
                         <a href="https://mostafamahmood17.github.io/Bank-of-Bangladesh/" target="_blank"><button className="btn btn-outline-warning btn-sm">Website</button></a>
                        </div>

                    </div>


                </div>
            </div>



        </div>
     


    );
};

export default Work;