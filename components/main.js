import { Data } from "../data.js";

const main = () => {
  const eclipse = (e) => {
    document.body.classList.toggle("midnight");
  };
  return (
    <main role="main">
      <section id="websites" title="websites">
        <div className="heading">
          <h3>Websites</h3>
        </div>
        <div className="content">
          {Data.map(function (project, i) {
            if (project.type === "web") {
              return (
                <div className="project" onClick={eclipse} key={i}>
                  <div className="project-heading">
                    <div className="project-link"></div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-tagline">{project.tagline}</div>
                    <div className="project-tags">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <button className="project-expand">
                      Click to Expand →
                    </button>
                  </div>
                  <div className="project-content">
                    <div className="project-description">
                      <div className="project-text">{project.description}</div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section id="designs" title="designs">
        <div className="heading">
          <h3>Designs</h3>
        </div>
        <div className="content">
          {Data.map(function (project, i) {
            if (project.type === "design") {
              return (
                <div className="project" key={i}>
                  <div className="project-title">{project.title}</div>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section id="photography" title="photography">
        <div className="heading">
          <h3>Photography</h3>
        </div>
        <div className="content">
          {Data.map(function (project, i) {
            if (project.type === "photography") {
              return (
                <div className="project" key={i}>
                  <div className="project-title">{project.title}</div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default main;
