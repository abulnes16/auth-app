import React, { useContext, useEffect, useState } from "react";
import Context from "../context";
const Logo = () => {
  const context = useContext(Context);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const url = context.theme === 'light'
      ? "assets/images/devchallenges.svg"
      : "assets/images/devchallenges-light.svg";
    setLogo(url);
  }, [context.theme]);

  return (
    <div className="register__header">
      <img src={logo} alt="Dev challenge logo" />
    </div>
  );
};

export default Logo;
