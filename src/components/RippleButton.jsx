import React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";

const Button = styled.button`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: none;
  padding: 1rem 3rem;
  border: 2px solid;
  color: #303030;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: 0 2px 5px 1px #888888;
  margin: 1rem;
  :focus {
    outline: 0;
  }
`;

const RippleButton = props => {
  return (
    <Button>
      {props.children || "default ripple button"}
      <Ripple color={props.color || "#134751"} />
    </Button>
  );
};

export default RippleButton;
