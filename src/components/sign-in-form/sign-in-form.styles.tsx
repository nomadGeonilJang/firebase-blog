import styled from "styled-components";
import color from "utils/them/color";


export const Title = styled.h2`

`;
export const SignInFomContainer = styled.form`
    width:420px;  
    padding:10px;  
    button{
        width:100%;
        height:48px;
    }
`;
export const SignInButtonGroup = styled.div`

    display:flex;
    justify-content:space-evenly;
    height:38px;

    #google{}
    #github{
        background-color:${color.gray};
    }
  #facebook{
      background-color:${color.blue}
  }

`;