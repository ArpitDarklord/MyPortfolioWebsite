import React,{useEffect,useState,useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";

const HomeWrapper = styled.div` 
    display: flex;
    align-items:center ;
    justify-content: center;
    height: 90vh;
    nav{
        display: flex ;
        flex-direction: column;
        width: 15rem;
        height: 20rem;
        a{
            text-decoration: none;
        }
        .navlink{
            width: 15rem;
            height: 5rem;
            font-size: 3rem;
            color: white;
            padding: 1rem;
            :hover{
                cursor: pointer;
            }
        }   
    }
    img{
        height: 20rem;
        width: 20rem;
        margin-left: 4rem;
    }

    .link1{
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .link2{
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .link3{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: red !important;
    }
`


function ButtonContainer(){
    const ref = useRef();
    const q = gsap.utils.selector(ref);

    const onEnter = ({currentTarget})=>{
        const cls = currentTarget.className.split(" ")[1]
        if(cls === "link1"){
            currentTarget.innerHTML = "About"
         }
         if(cls === "link2"){
            currentTarget.innerHTML = "Experience"
         }
         if(cls === "link3"){
            currentTarget.innerHTML = "Contact"
         }
        gsap.to(currentTarget,{x: 30})
    };
    const onLeave = ({currentTarget})=>{
        const cls = currentTarget.className.split(" ")[1]
        if(cls === "link1"){
            currentTarget.innerHTML = "HeLLo."
         }
         if(cls === "link2"){
            currentTarget.innerHTML = "I am"
         }
         if(cls === "link3"){
            currentTarget.innerHTML = "ARPIT"
         }
        gsap.to(currentTarget,{x: 0})
    };
    useEffect(
        () => {
            gsap.from(q(".navlink"),{x: -150,opacity: 0 ,stagger : 0.2})
        },[]
    )
    return(
        <nav ref = {ref}>
            <Link to="/about">
            <div className = "navlink link1" onMouseEnter={onEnter} onMouseLeave={onLeave}> 
                HeLLo.
            </div>
            </Link>
            <Link to="/experience">
            <div className = "navlink link2" onMouseEnter={onEnter} onMouseLeave={onLeave}> 
                I am
            </div>
            </Link>
            <Link to="/contact">
            <div className = "navlink link3" onMouseEnter={onEnter} onMouseLeave={onLeave}> 
                ARPIT
            </div>
            </Link>
        </nav>
    )
}

function HomePictureContainer(){
    useEffect(
        ()=>{
            gsap.from(".HomeImage",{scale: 0})
        },[]
    )

    return(
        <img className= "HomeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2y75hIetYUwMqx2JQAPY8pfU5lV1CKOczbA&usqp=CAU" />
    )
}

function Home(){
    return(
        <HomeWrapper>
            <ButtonContainer />
            <HomePictureContainer />
        </HomeWrapper>
    )
}

export default Home;