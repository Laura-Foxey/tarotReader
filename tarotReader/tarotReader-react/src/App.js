import './App.css';
import { useState, useEffect } from 'react';
import ToSelectCards from './ToSelectCards';
import ReadCards from './ReadCards';

const populateCards = () => {
  const arr = Array.from({length: 22}, (_, i) => i + 1);
  let newarr = [];
  for (let i=0; i<arr.length; i++) {
    newarr.push({ id: i + 1, clicked: false});
  }
  return newarr;
}
const cardArr = populateCards();
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const cardsArr = shuffle(cardArr);
  const [cards, setCards] = useState(cardsArr);
  const [click, setClick] = useState(1);
  const [sel, setSel] = useState([]);
  const [left, setLeft] = useState(3);
  const [titleVis, setTitleVis] = useState(true)

  const toggleDone = (id) => {
    setCards(cards.map((card) => card.id === id ? {...card, clicked: true} : card));
    setClick(click +1);

    const random = Math.round(Math.random());
    if (random === 1) { id += 22};

    setSel(sel => [...sel, id]);
    if(click == 1) {setLeft(2)};
    if(click == 2) {setLeft(1)};
    if(click == 3) {setTitleVis(false)};

  };
  return (
    <div className="App">
      { titleVis && <div id="titleName" > Select {left} card{ left != 1 ? 's' : ''}: </div> }
      <ToSelectCards cards={cards} onClick={toggleDone} click={click}/>
      <ReadCards click={click} sel={sel}/>
    </div>
  );
}

export default App;
