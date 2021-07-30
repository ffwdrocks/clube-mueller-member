const SILVER_SCORE = 0;
const BLACK_SCORE = 45;
const DIAMOND_SCORE = 80;

let currentScore = 55;
let currentLevel = ""

if(currentScore < BLACK_SCORE){
    currentLevel = 'silver'
}else if( currentScore < DIAMOND_SCORE){
    currentLevel = 'black'
}else(
    currentLevel = 'diamond'
)

const score = document.getElementById('score');
const scoreOffset = document.getElementById('score-offset')
const textOffset = document.getElementById('text-offset')
const levelTitle = document.getElementById('level-title')

levelTitle.textContent = currentLevel;
score.textContent = currentScore;

const progressBar = document.getElementById('progress-bar')
const progressPoints = progressBar.querySelectorAll('path')

if(currentLevel == 'silver'){
    scoreOffset.textContent = BLACK_SCORE - currentScore; 

    progressPoints.forEach((progressPoint, index) => {

        if((currentScore / 0.45) > index){
            progressPoint.setAttribute('fill', '#75A637');
        }else{
            progressPoint.setAttribute('fill', '#CADEB0');
        }
        
    })
}else if(currentLevel == 'black'){
    scoreOffset.textContent = DIAMOND_SCORE - currentScore; 

    progressPoints.forEach((progressPoint, index) => {

        if(((currentScore - 45) / 0.35) > index){
            progressPoint.setAttribute('fill', '#75A637');
        }else{
            progressPoint.setAttribute('fill', '#CADEB0');
        }
        
    })
}else{
    textOffset.textContent = "Parabéns! Você alcançou o nível máximo!"
}

