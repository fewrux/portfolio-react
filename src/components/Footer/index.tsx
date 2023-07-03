export function Footer() {
  return (
    <section id="footer" className="p-5">
      <div className="footer-info text-center p-5 pb-4">
        <ul className="d-flex justify-content-center gap-3 p-0">
          <li>
            <a href="/" className="fs-6">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="fs-6">
              About
            </a>
          </li>
          <li>
            <a href="fewrux@gmail.com" target="_blank" className="fs-6">
              Contact
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-around my-5">
          <a href="https://github.com/fewrux" target="_blank" rel="noreferrer">
            <i className="footer-icon fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fewrux/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="footer-icon fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/fewrux" target="_blank" rel="noreferrer">
            <i className="footer-icon fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:fewrux@gmail.com" target="_blank" rel="noreferrer">
            <i className="footer-icon fa-solid fa-envelope"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} - Felipe R.</p>
      </div>
    </section>
  )
}
