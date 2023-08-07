import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: blanchedalmond;
`;

const StyledApp = styled.div`
  background-color: black;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The World Oasis</H1>
      </StyledApp>
    </>
  );
}

export default App;
