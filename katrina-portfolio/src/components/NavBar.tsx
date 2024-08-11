import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ActiveLink } from "../common/types";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import linkdin from "../assets/images/social-media.png";

console.log(navIcon1);
console.log(navIcon2);
console.log(navIcon3);
console.log(linkdin);

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>(ActiveLink.Home);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: ActiveLink) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === ActiveLink.Home
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(ActiveLink.Home)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === ActiveLink.Skills
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(ActiveLink.Skills)}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === ActiveLink.Projects
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(ActiveLink.Projects)}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#ADDLINK">
                  <img src={navIcon1} alt="" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
