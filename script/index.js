// Function to generate HTML for each project
function generateProjectHTML(project) {
    return `
        <div class="project__box">
            <img src="${project.image}" alt="${project.name} Project" class="project__img">
            <div class="project__box-info">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__info">${project.description}</p>
                <div class="project__links">
                    <a href="${project.links.view}"  target="_blank">
                    <p class="project__link">View</p>
                    </a>
                    <a href="${project.links.github}"  target="_blank">
                    <p class="project__github">GitHub</p>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to render all projects
function renderProjects(projects) {
    const projectsContainer = document.querySelector('.block__projects');
    projectsContainer.innerHTML = projects.map(generateProjectHTML).join('');
}

// Fetch JSON data and render projects
fetch('./script/data.json')
    .then(response => response.json())
    .then(data => {
        renderProjects(data.projects);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
