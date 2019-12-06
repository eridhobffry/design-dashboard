import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import DivRight from "../styles/fragment/dashboard_style/component"
import ProgressLinear from "../building_blocks/chart/progress_linear"
import { Line } from 'rc-progress';

import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        topDataOverview: [],
        isLoading: true,
        errors: null
      };
      getData() {
        axios
          .get("https://my-json-server.typicode.com/eridhobffry/demo/db")
          .then(response =>
            response.data.topData.map(td => ({
              id: `${td.id}`,
              neededToComplete: `${td.neededToComplete}`,
              percentLinear: `${td.percentLinear}`,
              color: `${td.color}`
            }))
          )
          .then(topDataOverview => {
            this.setState({
                topDataOverview,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.getData();
      }
 
  render() {
      console.log(this.state.topDataOverview)
      const { isLoading, topDataOverview } = this.state;
    const containerStyle = {
        width: '150px',
      };
      const circleContainerStyle = {
        width: '200px',
        height: '250px',
        display: 'inline-block',
      };
    return (
        <div className="main inset-xxs-left-90">
 <Container>
  <Row>
    <Col xs={12} sm={6} md={6} lg={6}>
      Data overview
    </Col>
    <Col xs={12} sm={6} md={6} lg={6} justify={{xs: 'center', lg: 'flex-end'}}>
    
    {!isLoading ? (
            topDataOverview.map(td => {
              const { id, neededToComplete, percentLinear, color } = td;
              return (
                  <Row>
                      <Col xs={12} sm={4} md={4} lg={4}>
                      <div style={containerStyle}>
                    <ProgressLinear item={td} />
                </div>
    </Col>
    <Col xs={12} sm={8} md={8} lg={8}>
      {td.neededToComplete} {" "} insertions needed to complete
    </Col>
                  </Row>
                
              );
            })
          ) : (
            <p>Loading...</p>
          )}
    </Col>
  </Row>
</Container>
        </div>
       
    );
  }
}
 
export default Dashboard;

