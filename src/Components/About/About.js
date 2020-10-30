import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div>
            {/* <svg className="sizing" viewBox="0 0 100 13" preserveAspectRatio="none"><polygon points="0,100  0,13 100,6 100,100" style={{fill: "#05386B", stroke:'#7b9095',strokeWidth:'.5'}}></polygon></svg> */}
         <div id="about" className="text-center footerPart p-4 text-warning" style={{ background:"#05386B", borderTop:"#7b9095 3px solid", marginBottom:'15px !important'}}>
            <h3>About Me</h3>
            <h1>Mostafa Mahmood</h1>
            <p className="text-justify container" style={{ marginBottom:0}}>Customer Service to Web Developer. That journey was not too easy. But Now my passion become my profession. I really love to solve new problems every day. I love to learn new technologies. I always try my level best to fulfill my client's requirements and that's my first priority.</p>
            <br/>
            <h4> Contact me</h4>
            <div className="mt-3">
               <a href="https://github.com/mostafamahmood17" target="_blank" className="text-decoration-none" > <i  className=" text-white devicon-github-plain display-4 p-2 "></i></a>
               <a href="https://www.linkedin.com/in/mostafa-mahmood-560641139/" target="_blank" className="text-decoration-none"><i className="text-white devicon-linkedin-plain display-4 p-2"></i></a>
               <a  className="email" href = "mailto:taat.heritage@gmail.com?subject = Feedback&body = Message" className="text-decoration-none"> <FontAwesomeIcon icon={faEnvelope} className="text-white p-2 display-3"/></a>
            </div>
         </div>
        </div>
    );
};

export default About;