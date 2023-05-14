import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import "./Header.css";
import useWindowDimensions from "./hooks/useWindowDimensions";

function Header() {
  const { width } = useWindowDimensions();
  const [iconSize, setIconSize] = useState(0);
  useEffect(() => {
    if (width >= 768) {
      setIconSize(32);
    } else setIconSize(24);
  }, [width]);
  return (
    <Navbar className="custom-nav">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            clean
            <span className="logo-white">
              screen<span className="logo-monitor"></span>
            </span>
            .io
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <FacebookShareButton url="https://cleanscreen.io/">
              <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton className="ms-2" url="https://cleanscreen.io/">
              <LinkedinIcon size={iconSize} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton className="ms-2" url="https://cleanscreen.io/">
              <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>
            <RedditShareButton className="ms-2" url="https://cleanscreen.io/">
              <RedditIcon size={iconSize} round={true} />
            </RedditShareButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
