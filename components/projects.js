import { Data } from "../data.js";
import { useState, useEffect } from "react";

const projects = () => {
  // Project Open State
  const [selected, setSelected] = useState();
  const handleSelect = (project) => {
    setSelected(project.id);
    console.log(selected);
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
                <>
                  {/* <div
                    className="project-close"
                    onClick={() => {
                      setSelected("");
                      console.log("clicked");
                      console.log(selected);
                    }}
                  ></div> */}
                  <article
                    className={
                      "project" + (selected === project.id ? " open" : "")
                    }
                    id={project.id}
                    name={project.id}
                    onClick={() => {
                      setSelected(project.id);
                    }}
                    key={i}
                  >
                    <div className="project-background"></div>
                    <div className="project-heading">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-title">{project.title}</div>
                      <div className="project-subtitle">{project.subtitle}</div>
                      <button className="project-expand">
                        Click to Expand <span>+</span>
                      </button>
                    </div>
                    <div className="project-content">
                      <div className="wrapper">
                        <ul className="project-tags">
                          {project.tags.map(function (tag, i) {
                            return <li>{tag}</li>;
                          })}
                        </ul>
                        <div className="project-agency">
                          {project.agency}, <span>{project.year}</span>
                        </div>
                      </div>
                      <div className="project-description">
                        <div className="project-text">
                          {project.description}
                        </div>
                        <div className="project-slides">
                          <div className="project-slide">
                            <img src="" alt="" />
                          </div>
                          <div className="project-slide">
                            <img src="" alt="" />
                          </div>
                          <div className="project-slide">
                            <img src="" alt="" />
                          </div>
                        </div>
                        <div className="project-text">
                          {project.description}
                        </div>
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
                </>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default projects;
