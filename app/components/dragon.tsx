import Image from "next/image";

const Dragon = () => {
    return ( 
        <div className="container-fluid">
            <div className="">
                <div className="text-center fs-1 fw-semibold mb-4">
                    Before {"&"} After
                </div>

                    <div className="col-12 d-flex flex-row-reverse">
                        <div className="col-8">
                            <img src="/assets/dragon.png" className="img-fluid " alt="Dragon"/>
                        </div>
                    </div>
 
                {/* <p className="dragon">I want a dragon in dark </p> */}
                <img src="/assets/frame.png" className="img-fluid dragon" alt="" />
            </div>
        </div>
     );
}
 
export default Dragon;