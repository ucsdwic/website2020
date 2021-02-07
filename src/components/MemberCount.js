import React from "react";
import "../styles/MemberCount.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class MemberCount extends React.Component { 

  render() {

    return (
        <section id="counter" class="counter">
            <div class="main_counter_area">
                <div class="overlay p-y-3">
                    <div class="container">
                        <div class="row">
                            <div class="main_counter_content text-center white-text wow fadeInUp">
                                <Row>
                                <Col id="logoMargin" xs={6} md={3}>
                                <div class="col-md-3">
                                    <div class="single_counter p-y-2 m-t-1">
                                        <i class="fa fa-heart m-b-1"></i>
                                        <h2 class="statistic-counter">100</h2>
                                        <p>Love Our Team</p>
                                    </div>
                                </div>
                                </Col>
                                <Col id="logoMargin" xs={6} md={3}>
                                <div class="col-md-3">
                                    <div class="single_counter p-y-2 m-t-1">
                                        <i class="fa fa-check m-b-1"></i>
                                        <h2 class="statistic-counter">400</h2>
                                        <p>Check Our</p>
                                    </div>
                                </div>
                                </Col>
                                <Col id="logoMargin" xs={6} md={3}>
                                <div class="col-md-3">
                                    <div class="single_counter p-y-2 m-t-1">
                                        <i class="fa fa-refresh m-b-1"></i>
                                        <h2 class="statistic-counter">312</h2>
                                        <p>repeat client</p>
                                    </div>
                                </div>
                                </Col>
                                <Col id="logoMargin" xs={6} md={3}>
                                <div class="col-md-3">
                                    <div class="single_counter p-y-2 m-t-1">
                                        <i class="fa fa-beer m-b-1"></i>
                                        <h2 class="statistic-counter">480</h2>
                                        <p>Pizzas Ordered</p>
                                    </div>
                                </div>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default MemberCount;
