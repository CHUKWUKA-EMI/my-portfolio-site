import React from "react";
import Layout from "./components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import dotenv from "dotenv";

function App() {
  React.useEffect(() => {
    dotenv.config();
    AOS.init({
      disable: false,
      initClassName: "aos-init",
      duration: 2000,
      mirror: true,
      easing: "ease",
    });
  });
  return <Layout />;
}

export default App;
