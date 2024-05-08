import Image from "next/image";

const Dragon = () => {
    return ( 
        <div className="container-fluid">
            <div className="">
                <div className="text-center fs-1 fw-semibold mb-4">
                    Before {" & "} 
                    <span style={{ color: "rgba(215,29,137,255)" }}> After</span>
                </div>

                    <div className="col-12 d-flex flex-row-reverse">
                        <div className="col-md-6 ms-4">
                            <img src="/assets/dragon.png" className="img-fluid" alt="Dragon"/>
                        </div>
                    </div>
 
                <img src="/assets/frame.png" className="img-fluid dragon" alt="" />
            </div>
        </div>
     );
}
 
export default Dragon;