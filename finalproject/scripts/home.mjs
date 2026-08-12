const container = document.querySelector(
    "#featured-projects-container"
);

async function getFeaturedProjects() {

    try {

        const response = await fetch(
            "data/projects.json"
        );

        if (!response.ok) {
            throw new Error(
                "Project data could not be loaded."
            );
        }

        const projects = await response.json();

        const featuredProjects = projects.filter(project =>
            project.id === "portfolio-website" ||
            project.id === "study-germany" ||
            project.id === "chamber-directory"||
            project.id === "rafting-website"
        );

        displayFeaturedProjects(
            featuredProjects
        );
        displayStatistics(projects);

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Unable to load featured projects.</p>";
    }
}

function displayFeaturedProjects(projects) {

    container.innerHTML = "";

    projects.forEach(project => {

        const card =
            document.createElement("article");

        card.classList.add(
            "featured-card"
        );

        card.innerHTML = `
            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p>
                <strong>Technology:</strong>
                ${project.technology}
            </p>

            <a href="${project.link}"
               target="_blank"
               class="btn">
                View Project
            </a>
        `;

        container.appendChild(card);
    });
}

getFeaturedProjects();
function displayStatistics(projects) {

    const statsContainer =
        document.querySelector("#stats-container");
    
    if (!statsContainer) return;

    const webProjects =
        projects.filter(
            project =>
                project.category === "Web Development"
        ).length;

    const softwareProjects =
        projects.filter(
            project =>
                project.category === "Software Development"
        ).length;

    const educationProjects =
        projects.filter(
            project =>
                project.category === "Education"
        ).length;

    const portfolioProjects =
        projects.filter(
            project =>
                project.category === "Portfolio"
        ).length;
    const completedProjects =
    projects.filter(
        project => project.status === "Completed"
        ).length;
    
    statsContainer.innerHTML = `
        <article class="stat-card">
            <h3>${projects.length}</h3>
            <p>Total Projects</p>
        </article>

        <article class="stat-card">
            <h3>${webProjects}</h3>
            <p>Web Development</p>
        </article>

        <article class="stat-card">
            <h3>${softwareProjects}</h3>
            <p>Software Development</p>
        </article>

        <article class="stat-card">
            <h3>${educationProjects}</h3>
            <p>Education</p>
        </article>

        <article class="stat-card">
            <h3>${portfolioProjects}</h3>
            <p>Portfolio</p>
        </article>

        <article class="stat-card">
            <h3>${completedProjects}</h3>
            <p>Completed Projects</p>
        </article>
    `;
}


