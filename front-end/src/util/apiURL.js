export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://git.heroku.com/still-forest-94069.git";
};
