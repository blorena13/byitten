import styled from "styled-components";
import byIttenLogo from "/src/assets/Byitten.png";
import logo from "/src/assets/logo.jpg";
import leaf from "/src/assets/workimages/leaf.jpg";

function Home() {
  return (
    <Wrapper>
      <span>
        <img src={logo} />
      </span>

      <Title>BYITTEN DESIGN</Title>
      <SubTitle>
        Painting and wallpapering company
        {/* PAINTING AND WALLPAPERING COMPANY */}
      </SubTitle>

      <Work>
        <ImageDiv>
        <img src={leaf} />
        </ImageDiv>
      
      </Work>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;

  span {
    img{
    height: 70px;
    padding: 25px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  margin-left: 25px;
  margin-bottom: 10px;
  color: #63783d;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 45px;
  font-style: normal;
`;

const SubTitle = styled.div`
  display: flex;
  margin-left: 25px;
  color: #7fa653;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
`;

const Work = styled.div`
  display: flex;
  padding: 25px;

 img {
  border-radius: 25px;
  height: 290px;
 }
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    margin-bottom: 50px;
    color: #7fa653;
    margin-left: 25px;
  }

  span {
   background-color: red;
    
  }
`;

const ImageDiv = styled.div`
  background-color: #236257;
  padding: 5px;
  border-radius: 25px;
`
