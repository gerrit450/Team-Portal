
import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import SearchEngine from "components/SearchEngine/SearchEngine";
import priceimg from "../assets/img/News.png";


function Pricelist() {
  return (
    <>
      <div className="content">
        <img src={priceimg} style={{minHeight: '110%'}}/>
      </div>
    </>
  );
}

export default Pricelist;
