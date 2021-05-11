import React from 'react'
import styled from 'styled-components'
import SectionHeader from "../components/section-header"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
// import Work from "../components/work/work"
import Experience from "../components/work/experience"
import SEO from './seo'

const ContentWrapper = styled.div`
    scroll-behavior: smooth;
    padding: 1rem 15rem;
    background-color: #FCFCFC;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: black;
    @media screen and (max-width: 1080px) {
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 924px) {
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 640px) {
        padding: 1rem 3rem;
        font-size: 13px;
    }  
`

export default function Content() {
    return (
        <ContentWrapper>
        <Intro/>
          <SectionHeader headerText="About" id="about"/>
          <About/>
          <SectionHeader headerText="Work" id="work"/>
          {/* <Work/> */}
          <Experience/>
          <SEO/>
        </ContentWrapper>
    )
}