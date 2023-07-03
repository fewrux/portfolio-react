export function About() {
  return (
    <section id="about" className="container py-5">
      <h2 className="text-primary text-center fs-lg fw-bold my-5">About me</h2>
      <div className="bio">
        <div className="row d-flex justify-content-center my-5 pt-4 gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/101313329?v=4"
            alt=""
            className="col-12 col-lg-3 avatar-xl"
          />
          <div className="col-12 col-lg-9 bio-content my-auto">
            <p className="fs-5 mb-4 text-success">
              I&apos;m a result-driven{' '}
              <strong className="text-primary">Software Engineer</strong>{' '}
              specialized in <strong className="text-primary">Rust</strong>,{' '}
              <strong className="text-primary">Solidity</strong>, and{' '}
              <strong className="text-primary">JavaScript</strong>.
            </p>
            <p className="fs-5 my-auto text-success">
              I&apos;m also a Yoga teacher and trekking passionate. I like to go
              camping and being in contact with nature whenever I can.
            </p>
          </div>
        </div>
        <div className="btn-box d-flex justify-content-center my-5 pt-3 gap-3 mx-auto">
          <a href="/#projects" className="btn-purple w-100">
            <i className="fa-solid fa-code fs-5 me-2"></i> View my work
          </a>
          <a href="/resume.pdf" target="_blank" className="btn-white w-100">
            <i className="fa-solid fa-scroll fs-5 me-2"></i> View resume
          </a>
        </div>
      </div>
    </section>
  )
}
