const blogPage = document.getElementById("blogs-page");
const blogList = document.getElementById("blogs-list");

fetch("../posts/blogs.json")
    .then(response => response.json())
    .then(blogs => {
        const sortPost = blogs.sort(function(a,b){
            const DateA = ParseDate(a.date);
            const DateB = ParseDate(b.date);
            return DateB - DateA;
        });

        const totalPages = Math.ceil(sortPost.length/4);
        let currentPage = 1;

        displayPosts(currentPage, sortPost, totalPages);
        // PaginationNav(sortPost, totalPages)
    })
    .catch(error => console.error("Can't Fetch Blogs:", error));

function displayPosts(page, posts, totalPages) {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    let flag = true
    if (paginatedPosts.length <= 10) flag = false
    blogList.innerHTML = ''; // Clear existing posts
    const promises = paginatedPosts.map(post =>
        fetch(`../posts/${post.file}`).then(res => res.json())
    );
    Promise.all(promises)
        .then(latestPosts => {
            latestPosts.forEach(post => {
                const card = createPost(post);
                blogList.appendChild(card);
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

function ParseDate(date){
    const [day, month, year] = date.split("-");
    return new Date(`${year}-${month}-${day}`);
}

function createPost(post){
    const card = document.createElement("li");
    card.className = "card";
    const post_path = `../posts/${encodeURIComponent(post.title)}/${encodeURIComponent(post.link)}`
    card.innerHTML = `
        <span>
            <a href="${post_path}">
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