import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import LeftSideNav from '../pages/Share/LeftSideNav/LeftSideNav';
import RightSide from '../pages/Share/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
          <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSide></RightSide>
                    </Col>
                </Row>
          </Container>
        </div>
    );
};

export default Main;