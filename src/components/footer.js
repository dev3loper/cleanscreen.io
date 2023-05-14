import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
          <div className="copyright">cleanscreen.io {new Date().getFullYear()}</div>
      </Container>
    </div>
  );
}

export default Footer;
