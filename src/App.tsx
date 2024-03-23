import styled from "@emotion/styled";

const DivStyle = styled.div`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

function App() {
  return <DivStyle>Hover to change color.</DivStyle>;
}

export default App;
