document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuAnchors = document.querySelectorAll(".menu-item a");
  const collapseNavbar = document.getElementById("collapsenavbar");

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    document.documentElement.classList.toggle("no-scroll");
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
  });

  menuAnchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
      collapseNavbar.classList.remove("show");
      document.documentElement.classList.remove("no-scroll");
      menuButton.setAttribute("aria-expanded", "false");
      console.log("test");
    });
  });
});
