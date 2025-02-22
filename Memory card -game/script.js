// // script.js
// // const landmarks = [
// //     { name: "Eiffel Tower", img: "eiffel.jpg" },
// //     { name: "Great Wall of China", img: "great_wall.jpg" },
// //     { name: "Taj Mahal", img: "taj_mahal.jpg" },
// //     { name: "Pyramids of Giza", img: "pyramids.jpg" },
// //     { name: "Statue of Liberty", img: "statue_of_liberty.jpg" },
// //     { name: "Colosseum", img: "colosseum.jpg" },
// //     { name: "Machu Picchu", img: "machu_picchu.jpg" },
// //     { name: "Sydney Opera House", img: "sydney_opera_house.jpg" }
// // ];

// let score = 0;
// let timeLeft = 60;
// let timer;

// document.getElementById('start-button').addEventListener('click', startGame);

// function startGame() {
//     score = 0;
//     timeLeft = 60;
    
//     document.getElementById('score').innerText = score;
//     document.getElementById('time').innerText = timeLeft;
    
//     document.getElementById('game-area').classList.remove('hidden');
    
//     createBoard();
    
//     timer = setInterval(() => {
//         timeLeft--;
//         document.getElementById('time').innerText = timeLeft;

//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame(false);
//         }
        
//     }, 1000);
// }

// function createBoard() {
//     const gameBoard = document.getElementById('game-board');
//     gameBoard.innerHTML = '';
    
//     const shuffledLandmarks = [...landmarks, ...landmarks].sort(() => Math.random() - 0.5);
    
//     shuffledLandmarks.forEach(landmark => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.dataset.name = landmark.name;
//         card.innerText = '?';
        
//         card.addEventListener('click', () => flipCard(card, landmark));
        
//         gameBoard.appendChild(card);
//     });
// }

// function flipCard(card, landmark) {
//     card.innerText = landmark.name; // Show landmark name
    
//    // Logic to check for pairs can be added here

//    // Update score and check win condition
// }

// function endGame(won) {
//    clearInterval(timer);
//    const resultDiv = document.getElementById('result');
//    resultDiv.classList.remove('hidden');
//    resultDiv.innerText = won ? `You win! Final Score: ${score}` : `You lose! Final Score: ${score}`;
// }


var btnNo=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var image=["doremon.png","jian.png","nobita.jfif","doreme.png","nobita_mom.jpg","nobita_papa.jpg","sizuka.jpg","suneo.jpg"];
for(var i=0;i<8;i++){
    var choose1=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose1]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose1,1);
    var choose2=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose2]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose2,1);
}


var start=true;
var pre;
var preid;
var x=0;
function game(clicked_id){
    if(start==true){
       document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       preid=clicked_id;
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
       pre=url.substring(4, url.length-1);
       start=false;
    }
    else{
        document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       setTimeout(() => {
        var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
        if(url.substring(4, url.length-1)==pre){
            document.getElementById(preid).remove();
            document.getElementById(clicked_id).remove();
            x=x+2;
            if(x==16){
    
                document.getElementById("table").innerHTML="GAME COMLETED !!";
                document.getElementById("table").style.fontSize="xxx-large";
                document.getElementById("table").style.textAlign="Center";
                document.getElementById("table").style.color="deeppink";
                document.getElementById("table").style.fontWeight="bolder";
            }
            start=true;
        }
        else{
            document.getElementById(preid).style.transform="rotateY(360deg)";
            document.getElementById(clicked_id).style.transform="rotateY(360deg)";
            start=true;
        }
       }, 800);
       



    }
}

function endGame(isWin) {
    clearInterval(timer);
    displayFinalScore(score, isWin);
}


    
