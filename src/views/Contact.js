import React,{useEffect,useState,useRef} from "react";
import styled from "styled-components";
import MyButton from "./MyButton";
import { gsap } from "gsap";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGithub,FaLinkedin,FaTwitterSquare } from "react-icons/fa";


const ContactWrapper = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    margin-top: 10rem;
    justify-content: space-between;
    height: 50vh;

    nav{
        display: flex;
        flex-direction: column;
        a{
            text-decoration: none;
        }
    }

    .navlink{
        color: red !important;
        :hover{
            cursor: pointer;
        }
    }
`

const ContactContentWrapper = styled.div``

function ButtonContainer(){
    const refContact = useRef();
    const q = gsap.utils.selector(refContact);

    const onEnter = ({currentTarget})=>{
        gsap.to(currentTarget,{x: 30})
    };
    const onLeave = ({currentTarget})=>{
        gsap.to(currentTarget,{x: 0})
    };
    useEffect(
        () => {
            gsap.from(q(".navrow"),{x: -150,opacity: 0 ,stagger : 0.2})
        },[]
    )
    
    const links = [["mailto:1928084@kiit.ac.in","Mail me",HiOutlineMailOpen,1],["https://github.com/ArpitDarklord","Github",FaGithub,2],["https://www.linkedin.com/in/arpit-mallick-14900a191/","Linkedin",FaLinkedin,3],["https://twitter.com/GgDarklord","Twitter",FaTwitterSquare,4]]
    return(
        <nav ref={refContact}>
            {
                links.map(( [link,name,Icon,k])=>
                    <div className= "navrow" key={k} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                     <Icon />
                    <a href={link} className = "navlink" > 
                     { name }
                    </a>
                    </div>)
            }
        </nav>
    )
}

function Contact(){
    return(
        <ContactWrapper>
            <MyButton />
            <div className="ContactHeader">
                This is Contact Heading.
            </div>
            <ContactContentWrapper>
                <h1>Contact : </h1>
                This is Contact content.
            </ContactContentWrapper>
            <ButtonContainer />
        </ContactWrapper>
    )
}

export default Contact;