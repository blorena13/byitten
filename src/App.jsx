import styled from "styled-components";
import Home from "./components/Home"
import Contact from "./components/Contact";

function App() {

  return (
    <Wrapper>
      <Home />
      <Contact />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
