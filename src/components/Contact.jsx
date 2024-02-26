import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h1>Contact us</h1>
      <h2>BYITTEN DESIGN</h2>
      <p>1000625101</p>
      <p>120 Varna Dr.#412</p>
      <p>Toronto - ON. M6A 1N3</p>
      <h3>+1 (437) 499-0840</h3>
      <p>itenfernanda@gmail.com</p>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  display: flex;
  background-color: #191859;
  flex-direction: column;
  height: 100vh;
  padding-left: 25px;

  h1 {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 45px;
    font-style: normal;
    margin-top: 150px;
    margin-bottom: 15px;
  }

  p {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 13px;
    font-style: normal;
    padding: 3px;
  }

  h2 {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 15px;
    font-style: normal;
    padding: 3px;
    margin-bottom: 5px;
  }

  h3 {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 14px;
    font-style: normal;
    padding: 3px;
    margin-top: 20px;
  }
`;
