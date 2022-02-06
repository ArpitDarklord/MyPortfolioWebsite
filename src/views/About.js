import React from "react";
import styled from "styled-components";
import MyButton from "./MyButton";

const AboutWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 10rem;
    color: white;
    justify-content: space-between;
    height: 100vh;
    

    img{
        height: 30rem;  
        width : 60rem;
        object-fit: cover;
        object-position: center;
        align-self: center;
    }

    .AboutHeader{
    }
`

const AboutMainSectionWrapper = styled.div``


function About(){
    return(
        <AboutWrapper>
            <MyButton />
            <div className="AboutHeader">
                This is About Heading
            </div>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7df012b8-d5ee-462f-a08c-6867f3ba9547/detdqfi-d9de7a7c-e7ba-488a-9df6-a7cc28af0bc1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZjAxMmI4LWQ1ZWUtNDYyZi1hMDhjLTY4NjdmM2JhOTU0N1wvZGV0ZHFmaS1kOWRlN2E3Yy1lN2JhLTQ4OGEtOWRmNi1hN2NjMjhhZjBiYzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KBNB2sy8g1cn3ca4BznNS7V9Q9dvFgBlr7a_wzCoZ5Y" />
            <AboutMainSectionWrapper>
                <h1>ABOUT:</h1>
                This is about content.
            </AboutMainSectionWrapper>
        </AboutWrapper>
    )
}

export default About;