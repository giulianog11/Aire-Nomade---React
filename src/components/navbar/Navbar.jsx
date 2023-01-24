import Logo from "../logo/Logo";
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light nav-color pb-3">
      <div className="container-fluid">
        <a className="navbar-brand hover" href='#'>
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark hover" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark hover"
                href="./paginas/combos.html"
              >
                Combos Premium
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark hover"
                href="./paginas/productos.html"
              >
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark hover"
                href="./paginas/tips.html"
              >
                Tips
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark hover"
                href="./paginas/aventuras.html"
              >
                Aventuras
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ width: 500 }} className="pr-1">
        <h4 id="bienvenida"></h4>
      </div>
      <button
        type="button"
        className="btn btn-primary carrito m-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Carrito 1
      </button>
    </nav>
  );
};

export default Navbar;
