// "use client";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-4 fw-medium">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img className="mx-4" src="/assets/logo.png" height="42" alt="CoolBrand"/>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active text-white px-3">Home</a>
                            <a href="#" className="nav-item nav-link text-white px-3">Course</a>
                            <a href="#" className="nav-item nav-link text-white px-3">Leader Board</a>
                            <a href="#" className="nav-item nav-link text-danger-emphasis px-3 disabled " >AI Playground</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
