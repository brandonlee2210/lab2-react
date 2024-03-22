type Props = {
  menus: Any;
};
function Header({ menus }: Props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  navbar-light d-none d-lg-block text-black"
        id="templatemo_nav_top"
      >
        <div className="container ">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <a
                className="navbar-sm-brand text-decoration-none "
                href="mailto:info@company.com"
              >
                Phone Number: 010-020-0340
              </a>
              <i className="fa fa-phone mx-2"></i>
              <a
                className="navbar-sm-brand  text-decoration-none"
                href="tel:010-020-0340"
              >
                Email: giabao20032001@gmail.com
              </a>
            </div>
            <div>
              <a
                className=""
                href="https://fb.com/templatemo"
                target="_blank"
                rel="sponsored"
              >
                <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a className="" href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a className="" href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a className="" href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="index.html"
          >
            Ddsgnr
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                {menus.map((menu: Any) => (
                  <li className="nav-item" key={menu.name}>
                    <a className="nav-link" href={menu.path}>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <a
                className="nav-icon d-none d-lg-inline"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                className="nav-icon position-relative text-decoration-none"
                href="#"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </a>
              <a
                className="nav-icon position-relative text-decoration-none"
                href="#"
              >
                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  +99
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
