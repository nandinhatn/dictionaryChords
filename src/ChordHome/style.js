import { buildQueries } from "@testing-library/react";
import styled from "styled-components";

export const DivChord = styled.div`
width: 150px;



`;

export const Li = styled.li`

cursor: pointer;
font-family: 'Roboto', sans-serif;
font-weight: bold;
padding: 5px;
&:hover{
background-color: #13A1F2;
color: white;
border-radius: 5px;
}

`

export const H1 = styled.h1`
color: #13A1F2;
font-family: 'Roboto', sans-serif;
`;
export const ListKeys = styled.ul`
display: flex;
list-style: none;
gap: 30px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
color: #096CA2;
padding: 5px;

background-color: #D0EAF8;
`;

export const ContainerChords = styled.div`
display: flex;

flex-wrap: wrap;
justify-content: center;
`;

export const ContainerInner = styled.div`
display: flex;
flex-direction: column;
`;

