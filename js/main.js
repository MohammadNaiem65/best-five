/* ---------------------- Utilities ---------------------- */
function addPlayerName(playerId, buttonId) {
    const playerName = document.getElementById(playerId).innerText;
    const makeLi = document.createElement("li");
    makeLi.innerText = playerName;
    const playerList = document.getElementById("selected-players-name");
    const button = document.getElementById(buttonId);
    if (playerList.children.length <= 4) {
        playerList.appendChild(makeLi);
    }
    else if (playerList.children.length >= 5) {
        alert("Can't add more than 5 players")
        return;
    }
    button.disabled = true;
    button.style.backgroundColor = "gray";
}
function fieldValue(input) {
    const getInput = document.getElementById(input);
    const inputString = getInput.value;
    const inputValue = parseInt(inputString);
    return inputValue;
}
/* ---------------------- Add Players Name ---------------------- */
document.getElementById("select-btn-one").addEventListener("click", function () {
    addPlayerName("player-one", "select-btn-one");
});
document.getElementById("select-btn-two").addEventListener("click", function () {
    addPlayerName("player-two", "select-btn-two");
});
document.getElementById("select-btn-three").addEventListener("click", function () {
    addPlayerName("player-three", "select-btn-three");
});
document.getElementById("select-btn-four").addEventListener("click", function () {
    addPlayerName("player-four", "select-btn-four");
});
document.getElementById("select-btn-five").addEventListener("click", function () {
    addPlayerName("player-five", "select-btn-five");
});
document.getElementById("select-btn-six").addEventListener("click", function () {
    addPlayerName("player-six", "select-btn-six");
});
document.getElementById("select-btn-seven").addEventListener("click", function () {
    addPlayerName("player-seven", "select-btn-seven");
});
document.getElementById("select-btn-eight").addEventListener("click", function () {
    addPlayerName("player-eight", "select-btn-eight");
});
document.getElementById("select-btn-nine").addEventListener("click", function () {
    addPlayerName("player-nine", "select-btn-nine");
});
/* ---------------------- Calculate Cost ---------------------- */
document.getElementById("player-cost").addEventListener("click", function () {
    const inputValue = fieldValue("per-player-cost");
    const numbersOfPlayers = document.getElementById("selected-players-name");
    const totalPlayerCost = inputValue * numbersOfPlayers.children.length;
    let getText = document.getElementById("total-player-cost");
    getText.innerText = totalPlayerCost;
})
document.getElementById("total-cost").addEventListener("click", function () {
    const getText = document.getElementById("total-player-cost");
    const textString = getText.innerText;
    const textValue = parseInt(textString);
    const managerCost = fieldValue("manager-cost");
    const coachCost = fieldValue("coach-cost");
    let finalCost = document.getElementById("final-cost");
    finalCost.innerText = textValue + managerCost + coachCost;
})