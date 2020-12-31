/* Toggle button component 
   Renders the toggle button component and manage the 
   theme in the application
*/

// React
import React, { useContext, useEffect, useState } from "react";

// Router
import { useLocation } from "react-router-dom";

// React Transition
import { CSSTransition } from "react-transition-group";

// Context
import Context from "../context";

// Styled
import styled from "styled-components";

const TogglerContainer = styled.div`
  width: 40px;
  padding: 2px 5px;
  border-radius: 40px;
  position: absolute;
  right: ${(props) => (props.inAuth ? "10px" : "5em")};
  top: ${(props) => (props.inAuth ? "10px" : "20px")};
  background: ${(props) => props.background};

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
  }

  .dark-toggle {
    transform: translateX(0);
  }

  .dark-toggle-enter-active {
    transform: translateX(20px);
    background: #a5a3ab !important;
    transition: all 0.2s linear;
  }

  .dark-toggle-exit {
    transform: translateX(20px);
  }

  .dark-toggle-exit-active {
    transform: translateX(0);
    transition: all 0.2s linear;
  }
  .dark-toggle-enter-done {
    margin-left: auto;
    background: #a5a3ab !important;
  }

`;

const Toggler = ({ onClick }) => {
  const context = useContext(Context);
  const [color, setColor] = useState("");
  const [inAuth, setinAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentColor = context.theme === "light" ? "#efefef" : "#333038";
    setColor(currentColor);
  }, [context.theme]);

  useEffect(() => {
    const isInAuth =
      location.pathname === "/" || location.pathname === "/login";
    setinAuth(isInAuth);
  }, [location]);

  return (
    <TogglerContainer inAuth={inAuth} background={color} onClick={onClick}>
      <CSSTransition
        in={context.theme === "light" ? false : true}
        timeout={200}
        classNames="dark-toggle"
      >
        <div key={"1"}></div>
      </CSSTransition>
    </TogglerContainer>
  );
};

export default Toggler;
