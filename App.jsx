import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Opening from "./components/Opening";

function App() {
  const [isIntroVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isIntroVisible && <Opening />}
      <Home />
    </>
  );
}

export default App;
