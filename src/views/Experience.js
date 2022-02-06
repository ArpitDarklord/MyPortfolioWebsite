import React from "react";
import styled from "styled-components";
import MyButton from "./MyButton";

const ExperienceWrapper = styled.div`
     display: flex;
    color: white;
    flex-direction: column;
    margin-top: 10rem;
    justify-content: space-between;
`

const DomainSectionWrapper = styled.div``

const LanguageSectionWrapper = styled.div``

const CertificationSectionWrapper = styled.div``

const AchievementSectionWrapper = styled.div``

const WorksSectionWrapper = styled.div``

function Experience(){
    return(
        <ExperienceWrapper>
            <MyButton />
            <DomainSectionWrapper>
                <h1>DOMAIN INTERESTS:</h1>
                This is Domain Content.
            </DomainSectionWrapper>
            <LanguageSectionWrapper>
                <h1>LANGUAGES KNOWN:</h1>
                This is Language Section.
            </LanguageSectionWrapper>
            <CertificationSectionWrapper>
                <h1>COURSES AND CERTIFICATION:</h1>
                This is certification Section.
            </CertificationSectionWrapper>
            <AchievementSectionWrapper>
                <h1>ACHIEVEMENTS:</h1>
                This is Achievements Section.
            </AchievementSectionWrapper>
            <WorksSectionWrapper>
                <h1>WORKS:</h1>
                This is works Section.
            </WorksSectionWrapper>
        </ExperienceWrapper>
    )
}

export default Experience;