import React from "react";
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import "./MenuTabs.css";

const MenuTabs = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Tabs
                        defaultActiveKey="breakfast"
                        id="controlled-tab-example"
                        fill
                    >
                        <Tab
                            eventKey="breakfast"
                            title="Breakfast"
                            className="tab"
                        >
                            <Breakfast />
                        </Tab>
                        <Tab eventKey="lunch" title="Lunch" className="tab">
                            <Lunch />
                        </Tab>
                        <Tab eventKey="dinner" title="Dinner" className="tab">
                            <Dinner />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default MenuTabs;
