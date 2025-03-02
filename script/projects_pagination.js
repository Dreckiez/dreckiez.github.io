const blogPage = document.getElementById("projects-page");

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
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    blogPage.innerHTML = ''; // Clear existing posts
    const promises = paginatedPosts.map(post =>
        fetch(`../projects/${post.file}`).then(res => res.json())
    );
    console.log(promises);
    Promise.all(promises)
        .then(latestPosts => {
            latestPosts.forEach(post => {
                const card = createPost(post);
                blogPage.appendChild(card);
            });
            PaginationNav(page, posts, totalPages);
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
    const card = document.createElement("div");
    card.className = "card";
    const img_path = `../projects/${encodeURIComponent(post.title)}/${post.banner}`
    card.innerHTML = `
        <div>
            <blockquote class="title">
                <h2>
                    ${post.title}
                </h2>
                <hr>
            </blockquote>
            <p>
                <a href="${post.link}">
                    <img src="${img_path}">
                </a>
            </p>
            <p>
                ${post.content.slice(0,515)}...
            </p>
            <div style="display: flex; justify-content: space-between;">
                <a href="${post.link}">
                    <p style="color: #60a5fa">
                        Read more
                    </p>
                </a>
            </div
        </div>
    `;
    return card;
}