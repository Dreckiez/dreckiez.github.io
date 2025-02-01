document.addEventListener("scroll", function () {
    const element = document.getElementById("header-blur"); // Replace with your element's ID
    const scrollPosition = window.scrollY; // Get current scroll position
    const maxScroll = 300; // Adjust this value to control fade distance
  
    // Calculate opacity (clamps between 0 and 1)
    let opacity = Math.min(scrollPosition / maxScroll, 1);
    element.style.opacity = opacity;
});