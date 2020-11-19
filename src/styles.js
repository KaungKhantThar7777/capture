import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  margin-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p {
    line-height: 150%;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;