function calculateWPM(gameStartTime, wordCount) {
    const durationInSeconds = (Date.now() - gameStartTime)/1000;
    return Math.floor((wordCount+1)*60/durationInSeconds);
}

export { calculateWPM }