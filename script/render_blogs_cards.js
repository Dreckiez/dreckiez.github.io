const blogCard = document.getElementById("blogs-posts-cards");

fetch("../posts/blogs.json")
    .then(response => response.json())
    .then(blogs => {
        const sortPost = blogs.sort(function(a,b){
            const DateA = ParseDate(a.date);
            const DateB = ParseDate(b.date);
            return DateB - DateA;
        });

        let rowBlogs = [];


        for (let i = 0; i < 6; i += 3) {
            const row = document.createElement("div");
            
            row.classList.add("row");

            rowBlogs = rowBlogs.concat(sortPost.slice(i, i + 3));
        }

        const promises = rowBlogs.map(function(post){
            return fetch(`../posts/${post.file}`).then(res => res.json());
        });
        
        return Promise.all(promises);
    })
    .then(latestPost => {
        latestPost.forEach(post => {
            const card = createBlogCard(post);
            blogCard.appendChild(card);
        });
    })
    .catch(error => console.error("Can't Fetch Blogs:", error));




function ParseDate(date){
    const [day, month, year] = date.split("-");
    return new Date(`${year}-${month}-${day}`);
}

function createBlogCard(post){
    const card = document.createElement("div");
    card.className = "card";
    const img_path = `../posts/${encodeURIComponent(post.title)}/${post.banner}`
    const post_path = `../posts/${encodeURIComponent(post.title)}/${encodeURIComponent(post.link)}`
    card.innerHTML = `
        <a href="${post_path}">
            <div class="banner" style="background-image:url('${img_path}');"></div>
            <div class="content">
                <h3>${post.title}</h3>
                <h4 class="date">${post.date}</h4>
                <h4 class="summary">${post.content.slice(0,100)}...</h4>
            </div>
        </a>
    `;
    return card;
}