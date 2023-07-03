export function ProjectNightWatcher() {
  return (
    <div className="project-card mx-auto">
      <img src="night-watcher.png" alt="" />
      <div className="project-info p-4">
        <div className="d-flex gap-2 mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/624/624106.png"
            alt=""
            className="logo-lg"
          />
          <div>
            <p className="text-info fs-sm m-0">
              <small>Bookmark & List app for movies</small>
            </p>
            <h5 className="text-primary m-0">Night Watcher</h5>
          </div>
        </div>
        <p className="fs-sm mb-4 text-info">
          App for bookmarking and creating favorite movies list. Built using
          Ruby on Rails and styled with Bootstrap & Sass. Uses TMDB API for
          fetching movies and stores them on a PostgreSQL database. Next step is
          to implement Devise for authentication.
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
            <i className="devicon-git-plain fs-28"></i>
          </li>
          <li className="logo-sm text-primary">
            <i className="devicon-github-original fs-28"></i>
          </li>
        </ul>
        <div className="d-flex justify-content-center gap-3 mt-5">
          <a
            href="https://nightwatcherapp.herokuapp.com/"
            target="_blank"
            className="btn-purple fw-normal fs-sm py-2 px-3"
            rel="noreferrer"
          >
            Link
          </a>
          <a
            href="https://github.com/fewrux/night-watcher"
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
