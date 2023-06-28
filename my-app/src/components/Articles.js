import React from "react";
import money from "../images/image-currency.jpg";
import food from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

export default function Articles() {
    return (
        <div className="articles-container pb-5 pt-2">
            <div className="container articles-inner-container pt-5">
                <p className="pt-3 pt-md-5 article-title  mb-5 text-md-start text-center">Latest Articles</p>
                <div className="row ">
                    <div className="col-md-3">
                       
                        <div class="article-card card mb-4" >
                            <img src={money} class="card-img-top article img-fluid" alt="..."></img>
                            <div class="card-body  pb-4 mt-3">
                                <p className="article-author">By Claire Robinson</p>
                                <h5 class=" card-title">Receive money in any currency with no fees.</h5>
                                <p class="card-text">The world is getting smaller and the world is becoming more mobile. So why should you be 
                                forced to only receive money in a single ...</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div class="article-card card mb-4" >
                            <img src={food} class="card-img-top img-fluid" alt="..."></img>
                            <div class="card-body pb-4  mt-3">
                            <p className="article-author">By Willson Hutton</p>
                                <h5 class=" card-title">Treat yourself without worrying about money</h5>
                                <p class="card-text">Our simple budgeting feature aloows you to separate out your spending and set 
                                realistic limits each month. That means you ...</p>
                                
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                    <div class="article-card card mb-4" >
                            <img src={plane} class="card-img-top" alt="..."></img>
                            <div class="card-body pb-4  mt-3">
                            <p className="article-author">By Willson Hutton</p>
                                <h5 class=" card-title">Take your Easybank card wherever you go</h5>
                                <p class="card-text">We want you to enjoy your travels. This why we don't charge any fees on purchases while you're
                                abroad. We'll even show you ...</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                       
                        <div class="article-card card mb-4" >
                            <img src={confetti} class="card-img-top" alt="..."></img>
                            <div class="card-body pb-4  mt-3">
                            <p className="article-author">By Claire Robinson</p>
                                <h5 class=" card-title">Our invite-Only Beta accounts are now live</h5>
                                <p class="card-text">After a lot of hardwork by whole team, we're excited to launch our closed beta. It's easy 
                                to request an invite through the site ...</p>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}