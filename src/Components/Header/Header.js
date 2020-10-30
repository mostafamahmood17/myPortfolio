import React from 'react';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import pic from './../../nabilnew1.png'
import './Header.css'

const Header = () => {
    const styles = {
        root: {
            fontFamily: "sans-serif",
            textAlign: "center",
            height: "100vh",
            background: "#000",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center"
        }
    };

    return (
        <div className="backgroundDesign mx-auto" style={{ background:"#05386B"}}>
            <div className='row w-100' >
                <div className='container col-md-5 text-center text-warning d-flex flex-column justify-content-center  animate__animated animate__bounceInLeft'>
                <h1>This is <span style={{color:"white"}}>Mostafa Mahmood</span></h1>
                <Typed style={{fontSize:"1.5rem"}}
                    strings={['I am a Web Developer', 'I am a Programmer', 'I am a Quick Learner']}
                    typeSpeed={50}
                    backSpeed={50}
                    fontSize={30}
                    loop 
                />
                <br/>
                <div className="d-flex justify-content-center ">
                <a href="https://www.linkedin.com/in/mostafa-mahmood-560641139/" target="_blank"><button className="btn btn-warning m-1" style={{color:"#05386B"}}>Hire Me</button></a>
                <a href="https://drive.google.com/file/d/1tKQ9vvp55DTCyJL8TqG-iB6dS76GnLUU/view"  target="_blank"><button className="btn btn-warning m-1" style={{color:"#05386B"}}>Resume</button></a>
                </div>

                </div>
                <div className='col-md-5 p-4 animate__animated animate__bounceInRight d-flex justify-content-center' >
                    <img className="" style={{border: '3px solid #7b9095', borderRadius:"50%", width:'250px'}} src={pic} alt=""/>

                </div>
            </div>
            {/* <Particles
            
             
                params={{
                    "particles": {
                        "color": {
                            "value": "#FF00FF",
                        },

                        "links": {
                            "color": "#FF0000",
                            "distance": 50,
                            "enable": true,
                            "opacity": 0.3,
                            "width": 1,
                        },
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "bottom",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }}/>
           */}

               
           


        </div>
    );
};

export default Header;