import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const NavItem = styled.li`
    position: relative;
    display: inline-block;
    margin-left: 1rem;
    text-decoration: none;
    border-bottom: 5px solid #D3E9CC;
    line-height: 16px;
    :hover::before, :active::before{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    ::before {
        transform: scaleX(0);
        transform-origin: bottom right;
        content: " ";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: #D3E9CC;
        z-index: -1;
        transition: transform .3s ease;
    }
`

export default function NavSection(props) {
    return (
        <div>
            <AnchorLink to={props.to}>
                <NavItem>{props.text}</NavItem>
            </AnchorLink>
        </div>
    )
}
        