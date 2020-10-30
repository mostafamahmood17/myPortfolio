import React from 'react';
import blogOne from '../../../src/blogOne.jpeg'
import blogTwo from '../../../src/blogTwo.jpeg'
const Blogs = () => {
   
    return (
        <div >
             <div id="blog" className="mt-5 container" >
            <h1 className="text-center display-3 pb-3" style={{ color: "#05386B" }}>Blogs</h1>

            <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2">
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={blogOne} style={{ height: "300px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Front end developer</h3>
                            <h5 className="card-text text-light">Explained the path on Front end developer.</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://medium.com/@taat.heritage/front-end-developer-89f574ccb2f9" target="_blank"><button className="btn btn-outline-warning btn-lg">Read</button></a>
                        </div>
                    </div>
                    
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#05386B" }}>
                        <img src={blogTwo} style={{ height: "300px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-warning">Deploy React Router with Netlify</h3>
                            <h5 className="card-text text-light">Explained how deploy react router with netlify</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.https://medium.com/@taat.heritage/deploy-react-router-with-netlify-584bb4e8923/mostafamahmood17/creative-agency-client" target="_blank"><button className="btn btn-outline-warning btn-lg">Read</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Blogs;
