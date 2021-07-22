import React, { useState } from "react";
import { LogInButton } from "./LogInButton";
import { Hamburger } from "./Hamburger";
import { Logo, StyledUl, StyledNavLink, Nav } from "./navbar.style";

export const NavBar: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return (
        <Nav>
            <Logo to={"/"}>Adpero</Logo>
            {width >= 769 ? (
                <>
                    <StyledUl>
                        <StyledNavLink
                            exact
                            to="/journeys"
                            activeClassName="active"
                        >
                            Journeys
                        </StyledNavLink>
                        <StyledNavLink
                            exact
                            to="/about"
                            activeClassName="active"
                        >
                            About
                        </StyledNavLink>
                    </StyledUl>
                </>
            ) : null}
            {width >= 769 ? <LogInButton horizontal /> : <Hamburger />}
        </Nav>
    );
};
