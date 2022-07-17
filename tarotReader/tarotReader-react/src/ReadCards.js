import './ReadCards.css';
import { useRef, useState } from 'react';
import CardDetails from './CardDetails';


const ReadCards = ({ click, sel}) => {
  const [button, setButton] = useState(false);
  const [firstCard, setFirstCard] = useState([]);
  const [secondCard, setSecondCard] = useState([]);
  const [thirdCard, setThirdCard] = useState([]);

  const myRef = useRef(null);

  const clickButton = () => {
    setButton(!button);
    myRef.current.scrollIntoView({ behavior: 'smooth' });
    fetchData(sel[0], setFirstCard);
    fetchData(sel[1], setSecondCard);
    fetchData(sel[2], setThirdCard);
  }

  const fetchData = (id, funcName) => {
    fetch(`https://localhost:7115/api/${id}`)
    .then(response => response.json())
    .then(data => funcName(data))
  };

  return (
    <div className="result">
      { button == false && <div>
        <section className='resultcard' style={{opacity: click >= 2 ? '1' : '0', marginBottom : click >= 2 ? '-35px' : ''}} />
        <section className='resultcard' style={{opacity: click >= 3 ? '1' : '0'}} />
        <section className='resultcard' style={{opacity: click >= 4 ? '1' : '0'}} />
        { click === 4 && 
            <button onClick={clickButton}> Show me my fate </button> }
            </div>
      }
      { button && 
        <div className="scene">
          <div className="card-flip">
            <section className={sel[0] > 22 ? 'card_size reversed-card' : 'card_size'} id={`card_nb_${sel[0]}`} />
          </div>
          <div className="card-flip">
            <section className={sel[1] > 22 ? 'card_size reversed-card' : 'card_size'} id={`card_nb_${sel[1]}`}/>
          </div>
          <div className="card-flip">
            <section className={sel[2] > 22 ? 'card_size reversed-card' : 'card_size'} id={`card_nb_${sel[2]}`}/>
          </div>
        </div> }
        { button && <CardDetails firstCard={firstCard} secondCard={secondCard} thirdCard={thirdCard}/> }
      <div className="bottom" ref={myRef} />
    </div>
  );
};

export default ReadCards;
