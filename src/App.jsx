import styled from "styled-components";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {

  return (
    <Wrapper>
      <Home />
      <Projects />
      <Contact />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
