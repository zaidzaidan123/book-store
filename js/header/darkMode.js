export const switchMode = () => {
  let dark_light_button = document.getElementById("dark-light");
  let dark_light_text = document.getElementById("dark-light-text");
  let dark_light_icon = document.getElementById("dark-light-icon");
  const firstOpen = () => {
    document.body.classList.add(
      localStorage.getItem("dark-light") || "light-theme"
    );
    if (localStorage.getItem("dark-light") === "dark-theme") {
      dark_light_text.innerHTML = "Light Mode";
      dark_light_icon.name = "sunny-outline";
    } else {
      dark_light_text.innerHTML = "Dark Mode";
      dark_light_icon.name = "moon-outline";
    }
  };
  firstOpen();

  dark_light_button.addEventListener("click", () => {
    console.log("hello");
    if (localStorage.getItem("dark-light") === "dark-theme") {
      lightMode();
    } else {
      darkMode();
    }
  });

  const darkMode = () => {
    localStorage.setItem("dark-light", "dark-theme");
    document.body.classList.add(localStorage.getItem("dark-light"));
    // dark_light_text.innerHTML = "Light Mode";
    // dark_light_icon.name = "sunny-outline";
    switchTextIcon("Light Mode", "sunny-outline");
  };
  const lightMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("dark-light", "light-theme");
    document.body.classList.add(localStorage.getItem("dark-light"));
    // dark_light_text.innerHTML = "Dark Mode";
    // dark_light_icon.name = "moon-outline";
    switchTextIcon("Dark Mode", "moon-outline");
  };
  const switchTextIcon = (text, icon) => {
    dark_light_text.innerHTML = text;
    dark_light_icon.name = icon;
  };
};

// const myFunction = () => {
//   document.location.href = "details.html";
// };
