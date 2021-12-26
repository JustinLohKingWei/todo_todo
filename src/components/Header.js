import styled from "styled-components";

const HeaderRoot = styled.div`
position: relative;
min-height: 10%;
min-width: 100%;
`

function Header() {
    return (
      <HeaderRoot>WELCOME TO TODO LIST</HeaderRoot>
    );
  }
  
  export default Header