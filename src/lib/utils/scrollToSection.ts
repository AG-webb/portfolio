export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId.toLocaleLowerCase());

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
