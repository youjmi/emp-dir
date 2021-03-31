import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://www.affordablebackgroundchecks.com/blog/wp-content/uploads/2019/03/Employee-Personal-Details-Check.jpg">
        <h1>Welcome to Eddy!</h1>
        <h2>Your personal Employee Designated Directory!</h2>
      </Hero>
      <Container style={{ marginTop: 40 }}>
        <Row>
          <Col size="md-12">
            <h1 className ="text-center" >Meet Eddy!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className ="text-center">
              With the company growing on a rapid incline, we are pleased to introduce to you Eddy! 
              This app will help you find your mentor, mentee, or colleague that will help you to stay connected while working remote.
              The restraints and devastation caused to all nations from the Pandemic has brought on a massive concern for health and the safety for ourselves and loved ones. 
              </p>
              <p className ="text-center">
              We understand.
              <br></br>
              We hear you. 
              <br>
              </br>
              Let us unite and let us help.
              </p>
              <p className ="text-center">
              Everyone affected by the pandemic can confidently say that the adaptation from working in an office, with ALL the resources, to working from home, with limited resources, has created alot of stress. 
              </p>
              <p className ="text-center">
              Who do I call? 
              <br>
              </br>
              Is he/she still employeed? 
              <br></br>
              Who can I ask for work advice?
              </p>
              <p className ="text-center">
              This is where Eddy comes in. This App will help you reach the employee in a quick search. 
              We want to ensure that all the necessary tools and resources are provided to increase your maximum productivity. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
