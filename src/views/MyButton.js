import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyButtonWrapper = styled.button`
    position: absolute ;
    top: 5rem;
    right: 5rem;
    color: white;
    padding: 1rem;
    border: none;
    cursor: pointer;
`

function MyButton(){
    return(
        <Link to="/">
            <MyButtonWrapper>
                Home
            </MyButtonWrapper>
        </Link>
    )
}

export default MyButton;