const blogPage = document.getElementById("projects-page");
const projectList = document.getElementById("projects-list");


fetch("../projects/projects.json")
    .then(response => response.json())
    .then(blogs => {
        const totalPages = Math.ceil(blogs.length/4);
        let currentPage = 1;
        displayPosts(currentPage, blogs, totalPages);
        // PaginationNav(sortPost, totalPages)
    })
    .catch(error => console.error("Can't Fetch Blogs:", error));
    
function displayPosts(page, posts, totalPages) {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    let flag = true
    if (paginatedPosts.length <= 10) flag = false
    projectList.innerHTML = ''; // Clear existing posts
    const promises = paginatedPosts.map(post =>
        fetch(`../projects/${post.file}`).then(res => res.json())
    );

    Promise.all(promises)
        .then(latestPosts => {
            latestPosts.forEach(post => {
                const card = createPost(post);
                projectList.appendChild(card);
            });
            if (flag) PaginationNav(page, posts, totalPages);
        })
        .catch(error => console.error("Can't Fetch Blog Posts:", error));
}

function PaginationNav(current, posts, totalPages){
    let PagiNav = document.createElement('div');
    PagiNav.id = "pagi-nav";
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        if (i == current) pageButton.classList.add("active");
        else pageButton.classList.add("inactive")
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayPosts(currentPage, posts, totalPages);
        });
        PagiNav.appendChild(pageButton);
    }
    blogPage.appendChild(PagiNav);
}

function createPost(post){
    const card = document.createElement("li");
    card.className = "card";
    const img_path = `../projects/${encodeURIComponent(post.title)}/${post.banner}`
    card.innerHTML = `
        <span>
            <a href="${post.link}">
                <div class="post-item">
                    <div>
                        <span class="title">${post.title}</span>
                        <br>
                        <span class="summary">${post.summary}</span>
                    </div>
                    <div>
                        <span>${post.date}</span>
                    </div>
                </div>
            </a>
        </span>
    `;
    return card;
}