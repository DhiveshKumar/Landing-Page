import React from "react";
import mobile from "../images/image-mockups.png";
// import kb from "../images/kb.jpg"


export default function Intro() {
  return (
    <div className="intro-container mb-5">
        <div className="container pb-3">
      <div className=" row  h-75">
        {/* description col */}
        <div className="mobile-mockup-container position-relative mb-4">
          <img className="img-fluid mobile-mockup position-absolute " src={mobile}></img>
        </div>
        <div className="col-md-5  d-flex align-items-center">
          <div className="desc-container intro-row text-center text-md-start px-3 ">
            <h1 className="desc-title  mb-3">Next generation digital banking</h1>
            <p className="desc-content  mb-4">
              Take your financial life online. Your Easybank account will be a
              one-stop shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <button
              className="request-btn intro-request text-white py-2"
              type="button"
            >
              Request Invite
            </button>
          </div>
        </div>
        {/* image col */}
        <div className="intro-image-col d-none d-md-block col-7 position-relative">
          <img src={mobile} className="mobile-img position-absolute"  alt="mockup-img"></img>


        </div>
      </div>
    </div> 
    </div>
  );
}
