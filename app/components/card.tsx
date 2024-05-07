const Cardcom = () => {
    const cards = [
        { title: "Create image in a minute", img: "/assets/hourglass.png", width: 100, height: 100 },
        { title: "Simultaneously see the text convert into image", img: "/assets/textImage.png", width: 100, height: 100 },
        { title: "Download your choice of image", img: "/assets/downloadLogo.png", width: 100, height: 100 }
    ];

    return (
        <div className="container text-center mb-5">
            <div className="row">
                {cards.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card text-center mb-3 border-0">
                            <div className="card-body">
                                <img src={card.img} alt="logo" className="img-fluid p-3" style={{ width: `${card.width}px`, height: `${card.height}px` }} />
                                <h5 className="card-title">{card.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cardcom;
