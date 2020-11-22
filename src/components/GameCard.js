import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

function GameCard({ id, name, released, image }) {
  // FETCH THE GAME DETAILS
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <StyledGameCard onClick={loadDetailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGameCard>
  );
};

const StyledGameCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 5px;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`;
export default GameCard;
