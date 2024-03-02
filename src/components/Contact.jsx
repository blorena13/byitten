import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <Contacts>
        <h1>Contact us</h1>
        <h2>BYITTEN DESIGN</h2>
        <p>1000625101</p>
        <p>120 Varna Dr.#412</p>
        <p>Toronto - ON. M6A 1N3</p>
        <h3>+1 (437) 499-0840</h3>
        <p>itenfernanda@gmail.com</p>
      </Contacts>

      <Infos>
        <p>
          If you are looking for a painting company <br /> that delivers a service
           with quality, professionalism, cleanliness and organization,
          call us now and ask for a quote.
        </p>
      </Infos>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Contacts = styled.div`
  display: flex;
  background-color: #7fa653;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-left: 25px;

  h1 {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 45px;
    font-style: normal;
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

const Infos = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #7fa653;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 30px;
  font-style: normal;
`;
