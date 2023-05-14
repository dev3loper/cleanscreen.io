import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import background from "./img/homepage.svg";
import monitor from "./img/monitor.svg";
import tablet from "./img/tablet.svg";
import smartphone from "./img/smartphone.svg";
import tv from "./img/tv.svg";
import esc from "./img/esc.png";
import Footer from "./components/footer";

function App() {
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  const screen3 = useFullScreenHandle();
  const screen4 = useFullScreenHandle();
  const screen5 = useFullScreenHandle();

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Container className="mt-4">
          <Row>
            <Col lg="6" className="mb-4">
              <Row className="mb-4 screens-holder">
                <Col className="screens-holder-col">
                  <div className="screen white" onClick={screen1.enter}></div>
                </Col>
                <Col className="screens-holder-col">
                  <div className="screen black" onClick={screen2.enter}></div>
                </Col>
                <Col className="screens-holder-col">
                  <div className="screen red" onClick={screen3.enter}></div>
                </Col>
                <Col className="screens-holder-col">
                  <div className="screen green" onClick={screen5.enter}></div>
                </Col>
                <Col className="screens-holder-col">
                  <div className="screen blue" onClick={screen4.enter}></div>
                </Col>
              </Row>
              <p>
                Click on appropriate color to make it full screen. Press{" "}
                <img className="mx-0" src={esc} alt="esc" /> key when finish
              </p>
              <p>White screen for all the dirt to be clean</p>
              <p>Screen black for dust to check</p>
              <p>Screen red, green or blue to find dead pixels for you</p>
              <p>
                All devices supported:
                <img className="ms-2" src={smartphone} alt="smartphone" />
                <img className="mx-1" src={tablet} alt="tablet" />
                <img className="mx-1" src={monitor} alt="monitor" />
                <img className="mx-1" src={tv} alt="tv" />
              </p>
              <br />
              <br />
              <p className="warning">
                * We highly recommend that you turn off display when cleaning
                and to use this app after you finish.
              </p>
            </Col>
            <Col lg="6">
              <img src={background} className="homepage" alt="logo" />
            </Col>
          </Row>

          <FullScreen handle={screen1}>
            <div
              className="full-screenable-node"
              style={{ background: "white" }}
            ></div>
          </FullScreen>

          <FullScreen handle={screen2}>
            <div
              className="full-screenable-node"
              style={{ background: "black" }}
            ></div>
          </FullScreen>
          <FullScreen handle={screen3}>
            <div
              className="full-screenable-node"
              style={{ background: "red" }}
            ></div>
          </FullScreen>
          <FullScreen handle={screen4}>
            <div
              className="full-screenable-node"
              style={{ background: "blue" }}
            ></div>
          </FullScreen>
          <FullScreen handle={screen5}>
            <div
              className="full-screenable-node"
              style={{ background: "green" }}
            ></div>
          </FullScreen>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
