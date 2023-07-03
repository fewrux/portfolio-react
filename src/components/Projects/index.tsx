import { ProjectGreenWheeler } from '../ProjectGreenWheeler'
import { ProjectKaruna } from '../ProjectKaruna'
import { ProjectNightWatcher } from '../ProjectNightWatcher'

export function Projects() {
  return (
    <section id="projects">
      <div className="container py-5 pt-4">
        <h2 className="text-primary text-center fs-lg fw-bold my-5">
          Projects
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-4 my-4 p-0">
            <ProjectGreenWheeler />
          </div>
          <div className="col-md-12 col-lg-4 my-4 p-0">
            <ProjectKaruna />
          </div>
          <div className="col-md-12 col-lg-4 my-4 p-0">
            <ProjectNightWatcher />
          </div>
        </div>
        <div className="btn-box d-flex justify-content-center my-5 gap-3 mx-auto">
          <a
            href="mailto:fewrux@gmail.com"
            target="_blank"
            className="btn-purple w-100"
            rel="noreferrer"
          >
            <i className="footer-icon fa-solid fa-envelope fs-5 me-2"></i>{' '}
            Contact me
          </a>
          <a
            href="https://github.com/fewrux"
            target="_blank"
            className="btn-white w-100"
            rel="noreferrer"
          >
            <i className="footer-icon fa-brands fa-github fs-5 me-2"></i> View
            more
          </a>
        </div>
      </div>
    </section>
  )
}
