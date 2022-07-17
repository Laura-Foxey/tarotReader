import "./CardDetails.css";
import { useState, useEffect } from "react";

function CardDetails({ firstCard, secondCard, thirdCard }) {
  const reversed = '(reversed)';
  return (
    <div className="CardDetails">
      <div className="description-details">
        <p> {firstCard.tarotName} {firstCard.tarotId > 22 ? reversed : ''}</p>
        <h4> "{firstCard.tarotDescription}" </h4>
        <div className="description-details-small">
          <div className="heart">
            <h3><br /> </h3>
            <h5> {firstCard.tarotLove} </h5>
          </div>
          <div className="career">
            <h3> <br /></h3>
            <h5> {firstCard.tarotCareer} </h5>
          </div>
          <div className="dollar">
            <h3> <br /></h3>
            <h5> {firstCard.tarotWealth} </h5>
          </div>
        </div>
      </div>
      <div className="description-details">
        <p> {secondCard.tarotName} {secondCard.tarotId > 22 ? reversed : ''}</p>
        <h4> "{secondCard.tarotDescription}"</h4>
        <div className="description-details-small">
          <div className="heart">
            <h3>❤ Love</h3>
            <h5> {secondCard.tarotLove} </h5>
          </div>
          <div className="career">
            <h3>Career</h3>
            <h5> {secondCard.tarotCareer} </h5>
          </div>
          <div className="dollar">
            <h3>Finances </h3>
            <h5> {secondCard.tarotWealth} </h5>
          </div>
        </div>
      </div>
      <div className="description-details">
        <p> {thirdCard.tarotName} {thirdCard.tarotId > 22 ? reversed : ''}</p>
        <h4> "{thirdCard.tarotDescription}"</h4>
        <div className="description-details-small">
          <div className="heart">
            <h3> <br /></h3>
            <h5> {thirdCard.tarotLove} </h5>
          </div>
          <div className="career">
            <h3> <br /></h3>
            <h5> {thirdCard.tarotCareer} </h5>
          </div>
          <div className="dollar">
            <h3> <br /></h3>
            <h5> {thirdCard.tarotWealth} </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
