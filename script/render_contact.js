const CONTACT_INFO = [
  { title: "GitHub", href: "https://github.com/Dreckiez", class : "fa-brands fa-github", color: "#eef0f4"},
  { title: "LinkedIn", href : "https://www.linkedin.com/in/xu%C3%A2n-h%C6%B0ng-mai-44960a334/", class : "fa-brands fa-linkedin", color: "#eef0f4"},
  { title: "Discord", href: "https://discord.com/users/342532677859278848", class : "fa-brands fa-discord", color: "#eef0f4" },
  { title: "Facebook", href: "https://www.facebook.com/profile.php?id=100008938305451", class : "fa-brands fa-facebook", color : "#eef0f4" }
];

const contactContainer = document.querySelector(".PF ul");

contactContainer.innerHTML = CONTACT_INFO.map((item) =>`
<li class = "contactli"><a href = "${item.href}" title = "${item.title}" target="_blank"><i class = "${item.class}" style = "color: ${item.color};"></i></a></li>
`).join('')