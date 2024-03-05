import "./App.css";
import Datetime from "./components/Datetime";
import Links from "./components/Links";
import Logo from "./components/Logo";
import Navigationlinks from "./components/Navigationlinks";
import Topnav from "./components/Topnav";

const App = () => {
  return (
    <>
    <Topnav/>
      <Logo />
      <Navigationlinks/>
      <Links/>
    </>
  );
};

export default App;
