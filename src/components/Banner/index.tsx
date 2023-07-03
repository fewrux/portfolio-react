import { Navbar } from '../Navbar'

export function Banner() {
  return (
    <div className="banner">
      <Navbar />

      <div className="container d-flex justify-content-start align-items-center">
        <div className="banner-content d-flex flex-column gap-4">
          <h1 className="fs-lg fw-bold">
            Building <strong className="text-primary">efficient</strong> &{' '}
            <strong className="text-primary">performant applications</strong>.
          </h1>
          <h5 className="mb-4 text-success">
            Software Engineer & Backend Developer
          </h5>
          <div className="btn-box d-flex gap-3">
            <a href="/#projects" className="btn-purple w-100">
              <i className="fa-solid fa-code fs-5 me-2"></i> View my work
            </a>
            <a
              href="mailto:fewrux@gmail.com"
              target="_blank"
              className="btn-white w-100"
              rel="noreferrer"
            >
              <i className="footer-icon fa-solid fa-envelope fs-5 me-2"></i> Get
              in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
