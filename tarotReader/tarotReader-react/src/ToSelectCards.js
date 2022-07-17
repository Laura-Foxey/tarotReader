import './ToSelectCards.css';
import { useState } from 'react';

const ToSelectCards = ({ cards, onClick, click }) => {
  let selectedCardId = [];
  return (
    <div>
      <div id={`${click == 4 ? 'done' : ''}`}>
        <ul className="cardDeck">
          {cards.map((card)=> (
            <li className="card" id={`cardid_${card.id}`} style={{pointerEvents: card.clicked ? 'none' : '', marginTop: card.clicked ?'-35px' : '', opacity: card.clicked ? '0' : '1'}} key={card.id} onClick={() => onClick(card.id)}>
              <div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToSelectCards;
