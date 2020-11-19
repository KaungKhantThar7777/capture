import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const movies = MovieState();

const MovieDetails = ({ history }) => {
  const [movie, setMovie] = useState(null);
  const url = history.location.pathname;
  useEffect(() => {
    const currentMovie = movies.filter(movie => movie.url === url);
    setMovie(currentMovie[0]);
  }, [url]);
  return (
    <>
      {movie && (
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map(award => (
              <Award key={award.title} {...award} />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="Secondary Img" />
          </StyledImageDisplay>
        </motion.div>
      )}
    </>
  );
};
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 5vh;
  position: relative;
  h2 {
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -10%);
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  display: flex;
  margin: 5rem 10rem;
  justify-content: space-around;
  align-items: center;
`;

const StyledAward = styled.div`
  padding: 0rem 2rem;
  h3 {
    font-size: 2rem;
  }
  p {
    padding: 2rem 0rem;
  }
  .line {
    width: 80%;
    height: 0.5rem;
    background-color: #23d997;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
function Award({ title, description }) {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
}
export default MovieDetails;
