import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function GameCard({ name, released, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default GameCard;
