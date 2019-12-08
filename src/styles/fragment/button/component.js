import styled from "styled-components";

export const ButtonDash = styled.button`
padding: 5px 10px;
font-size: 13px;
width: 60%;
margin-left: unset !important;
background: rgb(0, 119, 255);
color: white;
border-radius: 5px;
font-weight: 400;
border-bottom: 1px solid transparent;
margin: 0 1.5rem;
transition: all 300ms linear 0s;
text-decoration: none;
cursor: pointer;

    &:hover {
      color: white;
      background: rgb(28, 129, 245);
    }
`;
export const ButtonDashPlain = styled.button`
padding: 5px 10px;
font-size: 13px;
width: 60%;
margin-left: unset !important;
background: white;
color: #979797;
border-color: #979797;
border-radius: 5px;
font-weight: 400;
margin: 0 1.5rem;
transition: all 300ms linear 0s;
text-decoration: none;
cursor: pointer;

    &:hover {
      color: white;
      background: rgb(0, 119, 255);
      border-color: rgb(0, 119, 255);
    }
`;