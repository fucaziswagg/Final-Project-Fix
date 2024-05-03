import "./DialogCSS.css";
import { useEffect, useRef } from "react";

function Dialog({ openModal, closeModal }) {
    const ref = useRef();
    useEffect(()=> {
        if (openModal) {
            ref.current?.showModal();
        }
        else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
    <>
       <dialog id="instructions" ref={ref} onCancel={closeModal}>
            <div id="dialog-content">
                <h2> Instructions </h2>
                <div id="instructions-text">
                    <p> In this game, you will be given 5 different dog images at the top of your screen, one after the other. </p>
                    <p> For each dog, you will place them in a ranked position (1-5). </p>
                    <p> Your goal is to correctly choose the position of each dog so that the list is an accurate representaion of
                    where each dog ranks relative to one another. </p>
                    <p> The difficulty comes in the fact that you don't know which dog is coming next, and once you make a choice you
                    cannot move that dog. </p>
                    <p> Use whatever critieria you like (I recommend cuteness!) Tell us how you feel about your list after. </p>
                    <p> Good Luck! </p>
                </div>
                <button onClick={closeModal} autoFocus id="instructions-close"> Let's Play </button>
            </div>
        </dialog> 
    </>
    );
}

export default Dialog;