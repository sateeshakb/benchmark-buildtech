export const handleNavClick = (e, id) => {
  e.preventDefault();

  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }
};
