
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import SearchEngine from "components/SearchEngine/SearchEngine";


function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader style={{textAlign: 'center', fontFamily: 'poppins bold', fontSize: '24px'}}>Company News and Updates</CardHeader>
              <CardBody style={{textAlign: 'center'}}>
                <SearchEngine />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
