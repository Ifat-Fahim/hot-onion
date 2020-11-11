import React from "react";
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
import AllFood from "./AllFood";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";

const MenuTabs = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Tabs
                        defaultactiveKey={1}
                        fill
                        style={{ marginTop: "20px" }}
                    >
                        <Tab eventKey={1} title="All">
                            <AllFood />
                        </Tab>
                        <Tab eventKey={2} title="Breakfast">
                            <Breakfast />
                        </Tab>
                        <Tab eventKey={3} title="Lunch">
                            <Lunch />
                        </Tab>
                        <Tab eventKey={4} title="Dinner">
                            <Dinner />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default MenuTabs;
