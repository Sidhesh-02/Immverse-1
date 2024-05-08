const HomePage = () => {
    return (
        <div className="container-fluid overflow-hidden mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="m-5 mt-auto">
                        <div className="twoD">
                            2D {'>'} <span className="char">3</span><span className="char">D</span>
                        </div>
                        <div className="info">
                            Convert Image <br /> through text online
                        </div>
                        <div className="info2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed earum voluptatem cumque est dignissimos
                        </div>
                        <button type="button" className="btn gradient-btn text-white m-3 px-4">Get Started</button>
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <div className="position-relative">
                        <img src="/assets/car.png" alt="" className="img-fluid "/>
                        <img src="/assets/rectangle.png" className="img-fluid position-absolute start-0 bottom-0 ms-4 z-n1"  alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
