import styled from "styled-components";
import byIttenLogo from "/src/assets/Byitten.png";
import logo from "/src/assets/logo.jpg";

function Home() {
  return (
  <Wrapper>
    <span>
    <img src={logo} />
    </span>
    
    <Title>
    BYITTEN DESIGN
    </Title>
    <SubTitle>
    Painting and wallpapering company
    {/* PAINTING AND WALLPAPERING COMPANY */}
    </SubTitle>

  </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 100%;
    height: 100vh;

    img {
      height: 70px;
      padding: 25px;
    }
`

const Title = styled.div`
  display: flex;
  margin-left: 25px;
  margin-bottom: 10px;
  color: #242289;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 45px;
  font-style: normal;
`

const SubTitle = styled.div`
  display: flex;
  margin-left: 25px;
  color: #242289;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
`
