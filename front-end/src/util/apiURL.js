export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://still-forest-94069.herokuapp.com";
};
