import styled from "styled-components";

const HeaderRoot = styled.div`
  min-height: 25%;
  min-width: 100%;
  padding-top: 1em;
  padding-bottom: 1em ;
  background-color: #ff0090;
  display: flex;
  justify-content: center;
`;

function Header() {
  return <HeaderRoot>WELCOME TO TODO LIST</HeaderRoot>;
}

export default Header;
