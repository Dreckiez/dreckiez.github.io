const projectCard = document.getElementById("projects-posts-cards");

fetch("../projects/projects.json")
    .then(response => response.json())
    .then(projects => {

        let rowBlogs = [];


        for (let i = 0; i < 6; i += 3) {
            const row = document.createElement("div");
            
            row.classList.add("row");

            rowBlogs = rowBlogs.concat(projects.slice(i, i + 3));
        }

        const promises = rowBlogs.map(function(post){
            return fetch(`../projects/${post.file}`).then(res => res.json());
        });
        
        return Promise.all(promises);
    })
    .then(latestPost => {
        latestPost.forEach(post => {
            const card = createProjCard(post);
            projectCard.appendChild(card);
        });
    })
    .catch(error => console.error("Can't Fetch Blogs:", error));


function createProjCard(post){
    const projcard = document.createElement("div");
    projcard.className = "card";
    const proj_img_path = `../projects/${encodeURIComponent(post.title)}/${post.banner}`
    const proj_path = `../projects/${encodeURIComponent(post.title)}/${encodeURIComponent(post.link)}`
    projcard.innerHTML = `
        <a href="${proj_path}">
            <div class="banner" style="background-image:url('${proj_img_path}');"></div>
            <div class="content">
                <h3>${post.title}</h3>
                <h4 class="summary">${post.content.slice(0,100)}...</h4>
            </div>
        </a>
    `;
    return projcard;
}