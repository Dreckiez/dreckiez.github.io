const CONTACT_INFO = [
  { title: "GitHub", href: "https://github.com/Dreckiez", class : "fa-brands fa-github", color: "#63E6BE"},
  { title: "Facebook", href: "https://www.facebook.com/profile.php?id=100008938305451", class : "fa-brands fa-facebook", color : "#63E6BE" },
  { title: "Discord", href: "https://discord.com/users/342532677859278848", class : "fa-brands fa-discord", color: "#ff9ed7" },
  { title: "Resume", href : "", class : "fa-solid fa-scroll", color: "#ff9ed7"}
];

const contactContainer = document.querySelector("#Introduction ul");

contactContainer.innerHTML = CONTACT_INFO.map((item) =>`
<li class = "contactli"><a href = "${item.href}" title = "${item.title}" target="_blank"><i class = "${item.class}" style = "color: ${item.color};"></i></a></li>
`).join('')