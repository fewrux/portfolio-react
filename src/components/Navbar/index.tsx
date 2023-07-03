export function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mx-auto container">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src="logo.png" alt="" />
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item d-flex gap-2">
              <a
                href="https://github.com/fewrux"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="footer-icon fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fewrux/"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="footer-icon fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/fewrux"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="footer-icon fa-brands fa-twitter"></i>
              </a>
              <a
                href="mailto:fewrux@gmail.com"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <i className="footer-icon fa-solid fa-envelope"></i>
              </a>
            </li>
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item align-self-center">
              <a href="/#projects" className="btn-purple py-2 px-4">
                <i className="fa-solid fa-code me-2"></i> Portfolio
              </a>
            </li>
            <li className="nav-item align-self-center">
              <a
                href="mailto:fewrux@gmail.com"
                target="_blank"
                className="btn-white py-2 px-4"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
