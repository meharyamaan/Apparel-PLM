import React from "react";
import Counts from "./Counts"
import MainDiv from "./MainDiv";
// import FeatureCard from './FeatureCard'
import ServiceCard from "./ServiceCard";
import Contacts from "./Contacts";
import FooterBar from "./FooterBar";

export default function LandingPage() {
  return (
    <div>
      <div className="container-fluid" style={{ overflow: "hidden" }}>
        <div className="row" style={{ backgroundColor: "#1E2D3B" }}>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <MainDiv />
          </div>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <ServiceCard />
      <Counts />
      <Contacts />
      <FooterBar />
    </div>
  );
}
