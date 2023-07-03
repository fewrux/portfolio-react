export function ProjectGreenWheeler() {
  return (
    <div className="project-card mx-auto">
      <img src="green-wheeler.png" alt="" />
      <div className="project-info p-4">
        <div className="d-flex gap-2 mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
            alt=""
            className="logo-lg"
          />
          <div>
            <p className="text-info fs-sm m-0">
              <small>Marketplace for carbon-free vehicles</small>
            </p>
            <h5 className="text-primary m-0">Green Wheeler</h5>
          </div>
        </div>
        <p className="fs-sm mb-4 text-info">
          Green Wheeler is a marketplace where users can browse, book and post
          offers. The app is built with Ruby on Rails and deployed on Heroku.
          Search is built using PG Search and geocoding uses Mapbox API.
          Bootstrap and Sass used for creating a custom style.
        </p>
        <h6 className="text-primary text-center">Technologies</h6>
        <ul className="logo-box d-flex p-0 justify-content-center flex-wrap gap-3 mx-auto my-4">
          <li className="logo-sm text-primary">
            <i className="devicon-ruby-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-rails-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-javascript-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-html5-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-css3-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-bootstrap-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-sass-original fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-postgresql-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-webpack-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-heroku-original fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-figma-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-git-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-github-original fs-28"></i>
          </li>
        </ul>
        <div className="d-flex justify-content-center gap-3 mt-5">
          <a
            href="https://green-wheeler.onrender.com/"
            target="_blank"
            className="btn-purple fw-normal fs-sm py-2 px-3"
            rel="noreferrer"
          >
            Link
          </a>
          <a
            href="https://github.com/zimer69/green-wheeler"
            target="_blank"
            className="btn-white fw-normal fs-sm py-2 px-3"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
