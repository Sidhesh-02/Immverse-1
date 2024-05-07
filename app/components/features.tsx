import React from "react";
import Image from "next/image";

const Features = () => {
    const info = [
        {title:"Text Prompt", image:"/assets/textPrompt.png"},
        {title:"2D image", image:"/assets/cube.png"},
        {title:"Download & Share", image:"/assets/downloadLogo2.png"}
    ];

    return ( 
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="textContainer fw-medium">
                        <div className="fs-1 pb-2">
                            Create Your
                        </div>
                        <div className="fs-1 pb-2">
                            2D Image in
                        </div>
                        <div className="fs-1 pb-4">
                            3 Easy Steps
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quos alias consequatur, deserunt soluta, eius reprehenderit maxime nemo in repudiandae molestias explicabo! Quia qui expedita eaque ipsam, sed quisquam laudantium.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        {info.map((info, index) => (
                            <div className="col" key={index}>
                                <div className="card text-center mb-3 border border-0">
                                    <div className="card-body">
                                        <div className="d-flex flex-row mb-3 text-start">
                                            <div className="p-2">
                                                <img src ={info.image} style={{width:"100px",height:"70px"}} alt="logo" className="img-fluid"/>    
                                            </div> 
                                            <div className="p-2">
                                                <h5 className="card-title">{info.title}</h5>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quos a </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Features;
