import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({ setDarkMode }) => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setDarkMode(true);
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setDarkMode(false);
    localStorage.setItem("selectedTheme", "light");
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode(true);
    }
  }, [setDarkMode]);

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkTheme();
    else setLightTheme();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem("selectedTheme") === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;