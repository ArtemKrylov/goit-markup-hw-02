"use strict";

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

//Filter projects on portfolio.html page
function filterProjects(projects, filters) {
  //Add class "hidden" to all projects, that don't contain filter class
  function hideUnmatchedProjects(filter) {
    projects.forEach((project) => {
      let classList = project.classList;
      if (!classList.contains(filter)) {
        classList.add("hidden");
      }
    });
  }
  //Remove class "hidden" from all projects
  function showAllProjects() {
    projects.forEach((project) => {
      let classList = project.classList;
      if (classList.contains("hidden")) {
        classList.remove("hidden");
      }
    });
  }

  //Adding "click" event listener to every project element
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      if (filter.classList.contains("all")) {
        showAllProjects();
      } else if (filter.classList.contains("cite")) {
        showAllProjects();
        hideUnmatchedProjects("cite");
      } else if (filter.classList.contains("app")) {
        showAllProjects();
        hideUnmatchedProjects("app");
      } else if (filter.classList.contains("design")) {
        showAllProjects();
        hideUnmatchedProjects("design");
      } else if (filter.classList.contains("marketing")) {
        showAllProjects();
        hideUnmatchedProjects("marketing");
      }
    });
  });
}

filterProjects(projects, filters);
