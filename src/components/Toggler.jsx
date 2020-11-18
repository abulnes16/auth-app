import React, { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Context from "../context";
import styled from "styled-components";

const TogglerContainer = styled.div`
  width: 40px;
  padding: 2px 5px;
  border-radius: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  background: ${(props) => props.background};

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
  }

  .dark-toggle-enter-active {
    transition: margin-left 1s linear;
  }
  .dark-toggle-enter-done {
    margin-left: auto;
    background: #a5a3ab !important;
  }
`;

const Toggler = ({ onClick }) => {
  const context = useContext(Context);
  const [color, setColor] = useState("");

  useEffect(() => {
    const currentColor = context.theme === "light" ? "#efefef" : "#333038";
    setColor(currentColor);
  }, [context.theme]);

  return (
    <TogglerContainer background={color} onClick={onClick}>
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
