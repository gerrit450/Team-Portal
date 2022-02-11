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
import Mod from "components/popup/popup";

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
  UncontrolledAlert
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

import 'assets/css/Dashboard.css';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
setbigChartData(name);
};
const art1 = "First Article";
  return (
    <>
    <div className="content">
    <Row>
      <Col>
        <Card>
          <CardBody>
          <UncontrolledAlert color="warning">
                  <span>Microsoft API is down.</span>
                </UncontrolledAlert>
          </CardBody>
        </Card>
      </Col>
    </Row>

      <br/>
      <Row style={{textAlign: "center"}}>
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

      <Row style={{marginRight: '0px',marginLeft: '0px'}}>
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
      <h1>Price List</h1>
      </div>
      </Col>

      <Col
      className="font-icon-list col-xs-6 col-xs-6"
      lg="2"
      md="3"
      sm="4"
      >
      <div className="font-icon-detail">
      <h1>Settings</h1>
      </div>
      </Col>
      </Row>
      </Row>
      
      <div className="content">
        <Row>
          <Col md="12" style={{bottom: '410px'}}>
            <Card className="card-foot">
              <CardHeader style={{textAlign: 'align-left', fontFamily: 'poppins bold', fontSize: '24px', paddingRight: '18%'}}>Daily Feed</CardHeader>
              <CardBody style={{textAlign: 'center',}}>
              <table className='newsTable'>
                  <tr style={{color: 'white', textAlign: 'left'}}>
                  <td style={{paddingLeft: '8px'}}>Title</td>
                  <td>Description</td>
                  <td>Date</td>
                  </tr>
                  <tr>
                  
                    <td className='data' style={{textAlign: 'left', padding: '10px', background: 'white', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bold',}}>
                        <a href="http://localhost:3000/admin/icons">Update notification
                        </a>
                      </td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>New update pushed today that would install...</td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>10-02-2022</td>
                  </tr>
                  <tr>
                  
                    <td className='data' style={{textAlign: 'left', padding: '10px', background: 'white', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bold',}}>
                        <a href="http://localhost:3000/admin/News">Maintenance schedule
                        </a>
                      </td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>Important update regarding the maintenance...</td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>10-02-2022</td>
                  </tr>

                  <tr>
                  <td className='data' style={{textAlign: 'left', padding: '10px', background: 'white', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bold',}}>
                        <a href="http://localhost:3000/admin/News">New company notification
                        </a>
                      </td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>New annoucement regarding company policy...</td>
                    <td style={{textAlign: 'left', background: 'white', color: 'black'}}>10-02-2022</td>
                  </tr>
                  </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
      
    </>
  );

}

export default Dashboard;
