import React from 'react';

const Why = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
            <div className="container">
                <h1 className="text-center" style={{ margin: "20px", padding: "20px", borderRadius: "10px", color: "white" }}>
                    <span>Why Choose this </span>
                    <span style={{ color: "rgba(215,29,137,255)" }}>2D & 3D</span>
                    <span> image converter ?</span>
                </h1>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 mb-4 d-flex flex-column flex-md-row align-items-center" style={{ gap: "60px" }}>
                        <div className="rounded-4 overflow-hidden" style={{ width: "100%", maxWidth: "400px" }}>
                            <img src={"/assets/img2.png"} alt="Left Image" className="img-fluid mr-4" style={{ width: "100%", maxWidth: "100%" }} />
                        </div>
                        <div style={{ width: "100%", maxWidth: "400px", gap: "30px" }}>
                            <h3 style={{ color: "white" }}>Convert text to image online free</h3>
                            <p style={{ marginTop: "30px", color: "white" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus unde voluptate ipsum totam minus nobis provident magnam. Perspiciatis temporibus iure tempore ratione, rerum dolores quidem odio aliquam voluptatum nihil totam similique nulla optio fugit
                            </p>
                        </div>
                    </div>
                </div>
         
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 mb-4 d-flex flex-column-reverse flex-md-row align-items-center" style={{ margin: "50px" }}>
                        <div style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", textAlign: "left" ,marginRight:"10px",marginLeft:"40px",marginTop:"20px"}}>
                            <h3 style={{ color: "white" }}>Turn your AI-Created Image to 2D</h3>
                            <p style={{ marginTop: "30px", marginRight: "10px", paddingRight: "10px", color: "white" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur atque eaque recusandae sunt reprehenderit eius sit dolorum aliquid, accusamus ut nisi, vel placeat exercitationem minima sed aut. Quae, id.
                            </p>
                        </div>
                        <div className="position-relative rounded-4 overflow-hidden" style={{ width: "100%", maxWidth: "400px" }}>
                            <img src={"/assets/img.png"} alt="Right Image" className="img-fluid" style={{ width: "100%", maxWidth: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;
