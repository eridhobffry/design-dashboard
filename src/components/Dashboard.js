import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import DivRight from "../styles/fragment/dashboard_style/component"

class Dashboard extends React.Component {
  
 
  render() {
    return (
        <div className="main">
 <Container>
  <Row>
    <Col xs={12} sm={6} md={6} lg={6}>
      Data overview
    </Col>
    <Col xs={12} sm={6} md={6} lg={6} justify={{xs: 'center', lg: 'flex-end'}}>
    statistic
        <DivRight>
        
        </DivRight>
    </Col>
  </Row>
</Container>
        </div>
       
    );
  }
}
 
export default Dashboard;

