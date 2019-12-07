import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import DivRight from "../styles/fragment/dashboard_style/component"
import ProgressLinear from "../building_blocks/chart/progress_linear"
import Pie from "../building_blocks/chart/pie"
import VerticalBar from "../building_blocks/chart/vertical_bar"
import { Line, Circle } from 'rc-progress';

import "../../node_modules/react-vis/dist/style.css"
import {XYPlot, VerticalBarSeries} from 'react-vis';

import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        topDataOverview: [],
        generalResultsStat: [],
        ratingsCategoryStat: [],
        // https://my-json-server.typicode.com/eridhobffry/demo/db 
        // just can limited data, so i bring the data here
        dataGeneralVer:[
            { x: "a", y: 10 },
            { x: "b", y: 5 },
            { x: "c", y: 15 },
            { x: "d", y: 12 },
            { x: "e", y: 3 },
            { x: "f", y: 5 },
            { x: "g", y: 8 },
            { x: "h", y: 10 },
            { x: "i", y: 2 },
            { x: "j", y: 9 },
            { x: "k", y: 10 },
            { x: "l", y: 11 },
            { x: "m", y: 20 },
            { x: "n", y: 8 },
            { x: "o", y: 3 }
          ],
        dataRatingVer: [
            { x: "a", y: 10 },
            { x: "b", y: 5 },
            { x: "c", y: 15 },
            { x: "d", y: 12 },
            { x: "e", y: 3 },
            { x: "f", y: 5 },
            { x: "g", y: 8 },
            { x: "h", y: 10 },
            { x: "i", y: 2 },
            { x: "j", y: 9 },
            { x: "k", y: 10 },
            { x: "l", y: 11 },
            { x: "m", y: 20 },
            { x: "n", y: 8 },
            { x: "o", y: 3 }
          ],
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
              color: `${td.color}`,
              data: `${td.data}`
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

    //   getDataRatingsCategory() {
    //     axios
    //       .get("https://my-json-server.typicode.com/eridhobffry/demo/db")
    //       .then(response =>
    //         response.data.dataRatingsCategory.map(td => ({
    //           x: `${td.x}`,
    //           y: `${td.y}`
    //         }))
    //       )
    //       .then(dataRatingVer => {
    //         this.setState({
    //             dataRatingVer,
    //           isLoading: false
    //         });
    //       })
    //       .catch(error => this.setState({ error, isLoading: false }));
    //   }

    //   getDataGeneralResults() {
    //     axios
    //       .get("https://my-json-server.typicode.com/eridhobffry/demo/db")
    //       .then(response =>
    //         response.data.dataGeneralResults.map(td => ({
    //           x: `${td.x}`,
    //           y: `${td.y}`
    //         }))
    //       )
    //       .then(dataGeneralVer => {
    //         this.setState({
    //             dataGeneralVer,
    //           isLoading: false
    //         });
    //       })
    //       .catch(error => this.setState({ error, isLoading: false }));
    //   }
    
      componentDidMount() {
        this.getTopDataOverview();
        this.getGeneralResultsStat();
        this.getRatingsCategory();
        // this.getDataGeneralResults();
        // this.getDataRatingsCategory();
      }
 
  render() {
      console.log(this.state.topDataOverview)
      console.log(this.state.generalResultsStat)
      console.log(this.state.ratingsCategoryStat)
      console.log(this.state.dataRatingVer)
      console.log(this.state.dataGeneralVer)
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
 <Container id="main-dashboard">
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
                <Row className="">
                    <Col xs={12} sm={5} md={5} lg={5} className="outline-right section-xxs-20">
                    <Section41>
<Row>
                        {!isLoading ? (
            generalResultsStat.map(td => {
              return (
                  <>
                  <Col xs={12} sm={8} md={8} lg={8}>
                      <Row>
                          <Col xs={12} sm={12} md={12} lg={12}>
                          <TitleGraph>
                                    General results
                                    </TitleGraph>
                          </Col>
                          <Col className="" xs={12} sm={12} md={12} lg={12}>
                              <Down40>
                              <NumberOnStatistic>
                                        {td.followers}
                                    </NumberOnStatistic>
                                    <TextUnit>
                                    Followers
                                    </TextUnit>
                              </Down40>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12}>
                        <VerticalBar item={this.state.dataGeneralVer} color={td.color} />
                          </Col>
                      </Row>
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
</Section41>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={5} className="section-xxs-20 outline-right">
                        <Section41>
<Row>
                    {!isLoading ? (
            ratingsCategoryStat.map(td => {
              return (
                  <>
                  <Col xs={12} sm={8} md={8} lg={8}>
                  <Row>
                          <Col xs={12} sm={12} md={12} lg={12}>
                          <TitleGraph>
                                    Ratings of category
                                    </TitleGraph>
                          </Col>
                          <Col className="" xs={12} sm={12} md={12} lg={12}>
                              <Down40>
                              <NumberOnStatistic>
                                        {td.followers}
                                    </NumberOnStatistic>
                                    <TextUnit>
                                    Followers
                                    </TextUnit>
                              </Down40>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12}>
                        <VerticalBar item={this.state.dataRatingVer} color={td.color} />
                          </Col>
                      </Row>
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
                        </Section41>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2}>
                        <Section41>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                    aaa 
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                aaa 
                                </Col>
                            </Row>
                        </Section41>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} sm={12} md={12} lg={12}>

</Col>
                </Row>
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
    color: #b5b5b5;
    font-weight: 300;
    padding-left: 20px;
    padding-top: 7px;
`;
const NumberOnStatistic = styled.span`
    font-size: 22px
    font-weight: 700;
`;

const Section41 = styled.div`
    padding-top: 41px;
    padding-bottom: 41px;
    padding-left: 41px;
    width: 100%;
`;

const Down40 = styled.div`
    padding-top: 40px;
    width: 100%;
`;

