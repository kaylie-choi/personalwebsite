import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = styled.div`
    background-color: rgba(99, 99, 99, 0.05);
    padding: 1.5rem 0;
`

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
  span {
    cursor: pointer;
  }
`

export default function Footer() {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              author
            }
          }
        }
      `
    )

    function goodLuck(e){
      e.preventDefault();
      console.log('your wish has been granted.');
    }
    
    // window.onload = console.log('hi there! thanks for checking out my site :)')

    return (
      <FooterContainer>
        <FooterText>
          <span onClick={goodLuck} role="img" aria-label="leaf">
            🍀
          </span>

          &nbsp;&nbsp;designed & built by&nbsp;
          {data.site.siteMetadata.author} &copy;
          
        </FooterText>
      </FooterContainer>
    )
  }