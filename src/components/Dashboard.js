import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import DivRight from "../styles/fragment/dashboard_style/component"
import ProgressLinear from "../building_blocks/chart/progress_linear"
import Pie from "../building_blocks/chart/pie"
import { Line, Circle } from 'rc-progress';

import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        topDataOverview: [],
        generalResultsStat: [],
        ratingsCategoryStat: [],
        isLoading: true,
        errors: null
      };

      getTopDataOverview() {
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

      getGeneralResultsStat() {
        axios
          .get("https://my-json-server.typicode.com/eridhobffry/demo/db")
          .then(response =>
            response.data.generalResults.map(td => ({
              id: `${td.id}`,
              followers: `${td.followers}`,
              percentPie: `${td.percentPie}`,
              color: `${td.color}`
            }))
          )
          .then(generalResultsStat => {
            this.setState({
                generalResultsStat,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }

      getRatingsCategory() {
        axios
          .get("https://my-json-server.typicode.com/eridhobffry/demo/db")
          .then(response =>
            response.data.ratingsCategory.map(td => ({
              id: `${td.id}`,
              followers: `${td.followers}`,
              percentPie: `${td.percentPie}`,
              color: `${td.color}`
            }))
          )
          .then(ratingsCategoryStat => {
            this.setState({
                ratingsCategoryStat,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.getTopDataOverview();
        this.getGeneralResultsStat();
        this.getRatingsCategory();
      }
 
  render() {
      console.log(this.state.topDataOverview)
      console.log(this.state.generalResultsStat)
      console.log(this.state.ratingsCategoryStat)
      const { isLoading, topDataOverview, generalResultsStat, ratingsCategoryStat } = this.state;
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
        <Subtitle>
        Data overview
        </Subtitle>
    </Col>
    <Col xs={12} sm={6} md={6} lg={6} justify={{xs: 'center', lg: 'flex-end'}}>
    
    {!isLoading ? (
            topDataOverview.map(td => {
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
  <div className="section-top-41">
        <section className="bg-white outline-border">
        <div className="outline-bottom">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} className="outline-right section-xxs-20">
                        <Row>
                        {!isLoading ? (
            generalResultsStat.map(td => {
              return (
                  <>
                  <Col xs={12} sm={8} md={8} lg={8}>
                  <TitleGraph>
                                    General results
                                    </TitleGraph>
                                    <p></p>
                 <NumberOnStatistic>
                                        {td.followers}
                                    </NumberOnStatistic>
                                    <TextUnit>
                                    Followers
                                    </TextUnit>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                            <div style={circleContainerStyle} className="section-top-66">
                                <Pie item={td} />
                            </div>
                            </Col>
                  </>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
                            
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} className="section-xxs-20">
                    <Row>
                    {!isLoading ? (
            ratingsCategoryStat.map(td => {
              return (
                  <>
                  <Col xs={12} sm={8} md={8} lg={8}>
                  <TitleGraph>
                  Ratings by category
                                    </TitleGraph>
                                    <p></p>
                 <NumberOnStatistic>
                                        {td.followers}
                                    </NumberOnStatistic>
                                    <TextUnit>
                                    Followers
                                    </TextUnit>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                            <div style={circleContainerStyle} className="section-top-66">
                                <Pie item={td} />
                            </div>
                            </Col>
                  </>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
                        </Row>
                    </Col>
                </Row>
                
                
                <Row>
                <Col xs={12} sm={12} md={12} lg={12}>

</Col>
                </Row>
            </Container>
            </div>  
            <Container>
                <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
aaa
</Col>
                </Row>
            </Container>
        </section>
       
  </div>
</Container>
        </div>
       
    );
  }
}
 
export default Dashboard;

const Subtitle = styled.span`
    font-size: 20px;
    
`;
const TitleGraph = styled.p`
    font-size: 14px;
    font-weight: 400;
`;
const TextUnit = styled.span`
    font-size: 14px;
    color: #d8d8d8;
`;
const NumberOnStatistic = styled.p`
    font-size: 22px
    font-weight: 700;
    display: block;
`;


