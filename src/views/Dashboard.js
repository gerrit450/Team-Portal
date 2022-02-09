/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Alert,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
      <Row>
      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      onClick={() => alert("news")}
      >
      <div className="font-icon-detail">
      <h1 >News</h1>
      </div>
      </Col>

      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      >
      <div className="font-icon-detail">
      <h1>Solutions</h1>
      </div>
      </Col>

      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      >
      <div className="font-icon-detail">
      <h1>Live monitor</h1>
      </div>
      </Col>

      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      >
      <div className="font-icon-detail">
      <h1>Contact list</h1>
      </div>
      </Col>
      
      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      >
      <div className="font-icon-detail">
      <h1>info list</h1>
      </div>
      </Col>
      </Row>
      </div>
    </>
  );
}

export default Dashboard;
