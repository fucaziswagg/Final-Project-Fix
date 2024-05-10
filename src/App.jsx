import './CSSreset.css';
import './App.css';
import './MediaQs.css';
import React, { useState, useEffect } from 'react';
// CHILD ELEMENTS
import Dialog from './dialog';
import PlayerInfoImg from './PlayerInfoImg';
// IMAGES
import logo from '../../images/logo-woman-nobg.png';
import instrImg from '../../images/doc.png';
import dogProfileImg from '../../images/dog-profile.jpg';
import leftArrow from '../../images/left-arrow.gif';
import upArrow from '../../images/up-arrow.gif';
// emojis
import thrilledEm from '../../images/thrilled.png';
import happyEm from '../../images/happy2.png';
import contentEm from '../../images/content.png';
import sadEm from '../../images/sad.png';
import dejectedEm from '../../images/dejected.png';





function App() {

  // JSX FXNS

  // on load
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const fetchData = async ()=> {
      try {
        let fetchedData = [];
        for (let i=0; i<5; i++) {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
          const jsonData = await response.json();
          fetchedData.push(jsonData);
        }

        setDogs(fetchedData);
        setIndex(0);
        setLoading(false);
        setIsFirst(false);
        setIsSecond(false);
        setIsThird(false);
        setIsFourth(false);
        setIsFifth(false);
      }
      catch(error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  // DIALOG
  const [modal, setModal] = useState(true);

  // Current image
  const [currDog, setCurrDog] = useState('');
  const [index, setIndex] = useState(0);
  const [listComplete, setListComplete] = useState(false);
  function nextDog() {
    let i = index;
    i++;
    if (i >= 5) {
      setListComplete(true);
      fetchNewData();
    }
    else {
      setIndex(i);
      setCurrDog(dogs[index].message);
    }
  }
  async function fetchNewData() {
    setLoading(true);
    try {
      let fetchedData = [];
      for (let i=0; i<5; i++) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const jsonData = await response.json();
        fetchedData.push(jsonData);
      }

      setDogs(fetchedData);
      setIndex(0);
    }
    catch(error) {
      console.error("Error Fetching Data", error);
    }
  }

  // placement BUTTONS
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const [isFourth, setIsFourth] = useState(false);
  const [isFifth, setIsFifth] = useState(false);
  const [firstDog, setFirstDog] = useState('');
  const [secondDog, setSecondDog] = useState('');
  const [thirdDog, setThirdDog] = useState('');
  const [fourthDog, setFourthDog] = useState('');
  const [fifthDog, setFifthDog] = useState('');
  function resetPlaceBs() {
    setLoading(false);
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(false);
    setIsFourth(false);
    setIsFifth(false);
  }



  
  // HTML
  return (
    <>
      <header id="header">
        <figure>
            <img src={logo} alt="logo"></img>
        </figure>
        <div id="header-title">
            <h1> Blind Top Five </h1>
        </div>
        <button id="header-load-instr" type="button" onClick={()=> setModal(true)}>
            Instructions
        </button>
      </header>

      <Dialog openModal={modal} closeModal={()=> setModal(false)}></Dialog>
      
      <section id="body-formatting">
          <aside id="sidebar">
            <figure id="sidebar-figure">
                <img id="sidebar-logo" src={logo} alt="logo"></img>
                <img  onClick={()=> setModal(true)} id="instructions-img" src={instrImg} alt="instructions" title="instructions"></img>
            </figure>
            <div id="sidebar-words">
                <a href="#header"> ↑ </a>
                <a href="#header"> Back to Top </a>
            </div>
          </aside>

          <main>

            <section id="random-player-div">

              <div id="player-info">
                <figure id="player-info-pic" className={ index>=5 ? ("hide"):("")}>
                    {loading||listComplete ? ( <img src={dogProfileImg} alt="Loading Dog"></img>) : 
                      ( <img src={dogs[index].message} alt="Loading Dog"></img> )}
                </figure>
                <div id="player-info-text" className="mono">
                    {loading||(index>=5) ? (<p> LOADING... </p>) : (<p> Place this doggo </p>)}
                </div>
              </div>

              <div id="placement-selection">
                <p id="placement-message"> Choose Placement: </p>
                <div id="placement-buttons">
                    <button id="button1" type="button" onClick={()=> {
                      setIsFirst(true); setFirstDog(dogs[index].message); nextDog();
                      }} 
                      className={isFirst ? ("hide"):("")}> 1 </button>
                    <button id="button2" type="button" onClick={()=> {setIsSecond(true); setSecondDog(dogs[index].message); nextDog();}} className={isSecond ? ("hide"):("")}> 2 </button>
                    <button id="button3" type="button" onClick={()=> {setIsThird(true); setThirdDog(dogs[index].message); nextDog();}} className={isThird ? ("hide"):("")}> 3 </button>
                    <button id="button4" type="button" onClick={()=> {setIsFourth(true); setFourthDog(dogs[index].message); nextDog();}} className={isFourth ? ("hide"):("")}> 4 </button>
                    <button id="button5" type="button" onClick={()=> {setIsFifth(true); setFifthDog(dogs[index].message); nextDog();}} className={isFifth ? ("hide"):("")}> 5 </button>
                </div>
              </div>

            </section>

            <section id="main-content">

              <div id="ranking" className="mono">
                  <div id="place1" className="rank-div">
                      <div className="rank-player-info">
                          <figure className="place-figure">
                              <img src={isFirst ? (firstDog):(dogProfileImg)} alt="1st place dog"></img>
                          </figure>
                          <p className="place-name"> Paw-fect! </p>
                      </div>
                      <div id="place1-podium" className="podium"></div>
                  </div>
                  <div id="place2" className="rank-div">
                      <div className="rank-player-info">
                          <figure className="place-figure">
                              <img src={isSecond ? (secondDog):(dogProfileImg)} alt="2nd place dog"></img>
                          </figure>
                          <p className="place-name"> Cute Fur-real! </p>
                      </div>
                      <div id="place2-podium" className="podium"></div>
                  </div>
                  <div id="place3" className="rank-div">
                      <div className="rank-player-info">
                          <figure className="place-figure">
                              <img src={isThird ? (thirdDog):(dogProfileImg)} alt="3rd place dog"></img>
                          </figure>
                          <p className="place-name"> Hot Dog </p>
                      </div>
                      <div id="place3-podium" className="podium"></div>
                  </div>
                  <div id="place4" className="rank-div">
                      <div className="rank-player-info">
                          <figure className="place-figure">
                              <img src={isFourth ? (fourthDog):(dogProfileImg)} alt="4th place dog"></img>
                          </figure>
                          <p className="place-name"> Dog Gone-It </p>
                      </div>
                      <div id="place4-podium" className="podium"></div>
                  </div>
                  <div id="place5" className="rank-div">
                      <div className="rank-player-info">
                          <figure className="place-figure">
                              <img src={isFifth ? (fifthDog):(dogProfileImg)} alt="5th place dog"></img>
                          </figure>
                          <p className="place-name"> Ruff Day </p>
                      </div>
                      <div id="place5-podium" className="podium"></div>
                  </div>
              </div>

              <div id="main-right">

                <div id="list-construction" className={listComplete ? ("hide"):("")}>
                    <h3> See Your List </h3>
                    <figure id="arrow-gif">
                        <img id="left-arrow" src={leftArrow} alt="arrow"></img>
                        <img id="up-arrow" src={upArrow} alt="arrow"></img>
                    </figure>
                </div>

                <div id="list-complete" className="hide">
                    <h3> How happy are you with your results? </h3>
                    <div id="rates">
                        <figure className="rates-figure">
                            <img className="rates-img" src={thrilledEm} alt="thrilled"></img>
                            <figcaption className="rates-description"> Thrilled! </figcaption>
                        </figure>
                        <figure className="rates-figure">
                            <img className="rates-img" src={happyEm} alt="happy"></img>
                            <figcaption className="rates-description"> Happy </figcaption>
                        </figure>
                        <figure className="rates-figure">
                            <img className="rates-img" src={contentEm} alt="content"></img>
                            <figcaption className="rates-description"> Content </figcaption>
                        </figure>
                        <figure className="rates-figure">
                            <img className="rates-img" src={sadEm} alt="sad"></img>
                            <figcaption className="rates-description"> Sad </figcaption>
                        </figure>
                        <figure className="rates-figure">
                            <img className="rates-img" src={dejectedEm} alt="dejected"></img>
                            <figcaption className="rates-description"> Dejected! </figcaption>
                        </figure>
                    </div>
                </div>

                <div id="reset" className={listComplete ? (""):("hide")}>
                    <h3> Thanks for playing! </h3>
                    <button onClick={()=> {setListComplete(false); resetPlaceBs;}} type="button" id="reset-button"> Play Again </button>
                </div>

              </div>

            </section>

          </main>
      </section>

      <footer id="footer">
          <h3> 
              Made by <span className="my-name" title="The GOAT"> Bean Royal </span>
          </h3>
          <p> © 2024 </p>
      </footer>

    </>
  );
}

export default App;
