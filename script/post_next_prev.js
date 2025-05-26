const path = window.location.pathname;
const folderName = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf(".html"));
const fileName = folderName.concat(".json");
const button = document.getElementById("nav-post");


fetch(`${fileName}`)
    .then(response => response.json())
    .then(post => {
        let prev;
        let next;
        let checklink = `${post.previous}`;
        
        if (checklink != "null") {
            const folder = checklink.substring(0, checklink.lastIndexOf(".html"));
            prev = createPrev(folder, checklink);
            button.appendChild(prev);
        }
        
        checklink = `${post.next}`;
        
        if (checklink != "null") {
            const folder = checklink.substring(0, checklink.lastIndexOf(".html"));
            next = createNext(folder, checklink);
            button.appendChild(next);
        }
    })
    .catch(error => console.error("Can't Fetch Blogs:", error));


function createPrev(folder, link){
    const navbutton = document.createElement("button");
    navbutton.textContent = "Previous";
    navbutton.id = "prev-nav";
    navbutton.onclick = () => {
        window.location.href = `../${folder}/${link}`;
    }
    return navbutton;
}

function createNext(folder, link){
    const navbutton = document.createElement("button");
    navbutton.textContent = "Next";
    navbutton.id = "next-nav";
    navbutton.onclick = () => {
        window.location.href = `../${folder}/${link}`;
    }
    return navbutton;
}