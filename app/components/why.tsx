import React from 'react';
import Image from "next/image";

const Why = () => {
    return (
        <div className="container">
            <h1 className="text-center" style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}>
                <span style={{ color: "white" }}>Why Choose this </span>
                <span style={{ color: "rgba(215,29,137,255)" }}>2D & 3D</span>
                <span style={{ color: "white" }}> image converter ?</span>
            </h1>

            {/* Content for the first div */}
            <div className="row justify-content-center">
                {/* On mobile screens, image comes first */}
                <div className="col-lg-8 col-md-10 col-sm-12 mb-4 d-flex flex-column flex-md-row align-items-center" style={{ gap: "50px" }}>
                    <div className="rounded-4 overflow-hidden">
                        <Image src={"/assets/img.png"} alt="Left Image" width={500} height={500} className="img-fluid" />
                    </div>
                    <div style={{ width: "100%", maxWidth: "400px", gap: "30px" }}>
                        <h3>Convert text to image online free</h3>
                        <p style={{ marginTop: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus unde voluptate ipsum totam minus nobis provident magnam. Perspiciatis temporibus iure tempore ratione, rerum dolores quidem odio aliquam voluptatum nihil totam similique nulla optio fugit</p>
                    </div>
                </div>
            </div>

            {/* Content for the second div */}
            <div className="row justify-content-center">
                {/* On mobile screens, text comes first */}
                <div className="col-lg-8 col-md-10 col-sm-12 mb-4 d-flex flex-column-reverse flex-md-row align-items-center" style={{ gap: "50px" }}>
                    <div style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", textAlign: "left" }}>
                        <h3>Turn your AI-Created Image to 2D</h3>
                        <p style={{ marginTop: "30px", marginRight: "40px", paddingRight: "40px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur atque eaque recusandae sunt reprehenderit eius sit dolorum aliquid, accusamus ut nisi, vel placeat exercitationem minima sed aut. Quae, id.</p>
                    </div>
                    <div className="rounded-4 overflow-hidden">
                        <Image src={"/assets/img2.png"} alt="Right Image" width={500} height={500} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;
