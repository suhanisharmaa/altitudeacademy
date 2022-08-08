import React from "react";
import "./StudyMaterial.css";
import Flipcard from "./Flipcard";

function StudyMaterial() {
  return (
    <div className="study_material">
      <div className="items">
      <h3>Get access to all our Study Material</h3>
      <p>
        Make a UPI Payment of 99/- to the number : 9121572530
        <br />
        Receive selected study material on your mail{" "}
      </p>
      </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
          </div>
          <div className="row justify-content-md-center">
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
          </div>
          <div className="row justify-content-md-center">
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
          </div>
      </div>
    </div>
  );
}

export default StudyMaterial;
