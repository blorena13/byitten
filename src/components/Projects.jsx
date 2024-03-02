import styled from "styled-components";
import working from "/src/assets/workimages/workingbyiten.jpg";
import arrayWork from "./ArrayWork";
import arrayPeople from "./ArrayPeople";

function Projects() {
  return (
    <Wrapper>
      <h1>WHAT WE DO</h1>
      <Work>
        <span>
          <p>Residential, commercial and building painting service.</p>
          <p>Indoor or outdoor.</p>
          <p>Spray painting on wood: doors, trims, panels and others.</p>
          <p>Spray painting on commercial metal ceilings</p>
          <p>Wallpaper</p>

          <ImageDiv>
            {arrayPeople.map((image, index) => (
              <CardImage key={index}>
                <img src={image} alt={`Image + 1`} />
              </CardImage>
            ))}
          </ImageDiv>
        </span>

        <Card>
          {arrayWork.map((image, index) => (
            <CardImage key={index}>
              <img src={image} alt={`Image + 1`} />
            </CardImage>
          ))}
        </Card>
      </Work>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;

  h1 {
    color: #7fa653;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 90px;
    font-style: normal;
    margin-top: 20px;
  }

  span {
    padding: 20px;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    font-style: normal;
    margin-bottom: 8px;
    color: #7fa653;
  }
`;

const Work = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  margin-left: 30px;
`;

const CardImage = styled.div`
  img {
    height: 120px;
    margin-bottom: 15px;
    border-radius: 15px;
  }
`;

const ImageDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    height: 180px;
    margin-top: 30px;
  }
`;
