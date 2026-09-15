export const getIconTypeByName = (name: string) => {
  return name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();
};
