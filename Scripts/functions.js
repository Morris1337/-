function getPercent(fullNumber, chapterNumber) {
    return fullNumber * (chapterNumber / 100) * 100
}

function randomDmg(){
    return Math.floor(Math.random() * 3) + 1;
}

export{getPercent, randomDmg}