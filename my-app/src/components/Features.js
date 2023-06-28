import React from "react";
import Card from "./Card";
import banking from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";


export default function Feature() {
    return (
        <div className="features-container text-md-start  text-center py-5">
            <div className=" container py-2 py-md-5">
                <div className="features-desc pt-4 mb-5">
                    <h1 className="features-title  mb-4">Why choose Easybank?</h1>
                    <p className="features-para">
                        We leverage Open Banking to turn your bank account into your
                        financial hub.
                        <br></br>Control your finances like never before.
                    </p>
                </div>

                {/* features section */}
                <div className="row">
                    <div className="col-md-3">
                        <div class="test-card card mb-4">
                            <img class="card-img-top article-img img-fluid w-25 h-25 mb-4 mb-3 " src={banking} alt="Card image cap"></img>
                            <div class="card-body px-0 ps-0">
                                <h4 class="card-title  mb-4">Online Banking</h4>
                                <p class="card-text px-2 px-md-0">
                                    Our modern web and mobile applications allow you to keep
                                    track of your finances wherever you are in the world.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mb-4">
                            <img class="card-img-top article-img img-fluid w-25 h-25 mb-4  mb-3 " src={budgeting} alt="Card image cap"></img>
                            <div class="card-body  px-0 ps-0">
                                <h4 class="card-title  mb-4">Simple Budgeting</h4>
                                <p class="card-text px-2 px-md-0">
                                    See exactly where your money goes each month. Receive notifications when you're close to 
                                    hitting your limits.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div class="card mb-4 ">
                            <img class="card-img-top article-img img-fluid w-25 h-25 mb-md-4 mb-3 " src={onboarding} alt="Card image cap"></img>
                            <div class="card-body px-0 ps-0">
                                <h4 class="card-title mb-4">Fast Onboarding</h4>
                                <p class="card-text px-2 px-md-0">
                                    We don't do branches. Open your accounts in minutes online and start taking control of your finances right
                                    away.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mb-4">
                            <img class="card-img-top article-img img-fluid w-25 h-25 mb-4 mb-3 " src={api} alt="Card image cap"></img>
                            <div class="card-body px-0 ps-0">
                                <h4 class="card-title mb-4">Open API</h4>
                                <p class="card-text px-2 px-md-0">
                                    Managing your savings, investments, pension and much more from one account. Tracking your money has never 
                                    been easier.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
