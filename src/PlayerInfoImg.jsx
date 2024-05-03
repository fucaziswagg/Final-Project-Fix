
function PlayerInfoImg({curDogImg, setCurDogImg, dogs}) {

    setCurDogImg(dogs[0]);

    return (
    <>
       <img src={curDogImg} alt="Current Dog"></img> 
    </>
    );
}

export default PlayerInfoImg;