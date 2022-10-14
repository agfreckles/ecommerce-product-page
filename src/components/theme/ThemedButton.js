import React from "react";
import { themes } from "../../data/themes";
const ThemeContext = React.createContext(themes.dark);
const ThemedButton = () => {
  const theme = React.useContext(ThemeContext);
  const style = { background: theme.background, color: theme.foreground };
  const changeStyle = () => {
    // theme  = theme.dark
    console.log(theme)
  };
  return (
    <button style={style} onClick={() => changeStyle()}>
      I am styled by theme context!
    </button>
  );
};
export default ThemedButton;
