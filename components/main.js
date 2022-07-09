import { Data } from "../data.js";

const main = () => {
  const projectOpen = (e) => {
    e.target.classList.toggle("open");
  };
  return (
    <main role="main">
      <section id="websites" title="websites">
        <div className="heading">
          <h3>Projects</h3>
        </div>
        <div className="content">
          {Data.map(function (project, i) {
            if (project.type === "web") {
              return (
                <article
                  className="project"
                  id={project.id}
                  name={project.id}
                  onClick={projectOpen}
                  key={i}
                >
                  <div className="project-background"></div>
                  <div className="project-heading">
                    <div className="project-image">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/5d8cfda57dd89a60c6560e7f/1572645740911-FQPER9ZDL83XSBFO3QQJ/CAT-DOG.png?format=500w"
                        alt=""
                      />
                    </div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-subtitle">{project.subtitle}</div>

                    <button className="project-expand">
                      Click to Expand <span>+</span>
                    </button>
                  </div>
                  <div className="project-content">
                    <div className="project-year">{project.year}</div>
                    <div className="project-agency">{project.agency}</div>

                    <ul className="project-tags">
                      {project.tags.map(function (tag, i) {
                        return <li>{tag}</li>;
                      })}
                    </ul>
                    <div className="project-description">
                      <div className="project-text">{project.description}</div>
                    </div>
                    <a
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      {project.url}
                    </a>
                  </div>
                </article>
              );
            }
          })}
        </div>
      </section>
      <section id="photography" title="photography">
        <div className="heading">
          <h3>Photography</h3>
          <div class="tabs">
            <div>Portraits</div>
            <div>Cosplay</div>
            <div>Nature</div>
            <div>Lifestyle</div>
          </div>
        </div>
        <div className="content">
          <img src="https://sathyaram.com/static/400f38472f745011e3eb648663c07086/47498/rania-one.jpg" />
          <img src="https://sathyaram.com/static/e71cb7c6f77c1b8a15725460c255ff0f/47498/jordan-one.jpg" />
          <img src="https://sathyaram.com/static/ef19c539ce257e99fdb9d5dc13ce7aca/9dc27/por-one.jpg" />
          <img src="https://sathyaram.com/static/6282ea85af8447cac6e9860ae405e3c1/4fe8c/rachel-one.jpg" />
          <img src="https://sathyaram.com/static/ee27bb77c952248161779381b16a20fd/4fe8c/jack-one.jpg" />

          {/* {Data.map(function (project, i) {
            if (project.type === "photography") {
              return (
                <div
                  className="project"
                  id={project.id}
                  name={project.id}
                  key={i}
                >
                  <div className="project-title">{project.title}</div>
                </div>
              );
            }
          })} */}
        </div>
      </section>
    </main>
  );
};

export default main;
