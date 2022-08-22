/* ---------------------- Utilities ---------------------- */
function addPlayerName(playerId) {
    const playerName = document.getElementById(playerId).innerText;
    const makeLi = document.createElement("li");
    makeLi.innerText = playerName;
    const playerList = document.getElementById("player-list");
    playerList.appendChild(makeLi);
}
/* ---------------------- Add Players Name ---------------------- */
document.getElementById("select-btn-one").addEventListener("click", function () {
    addPlayerName("player-one");
});
document.getElementById("select-btn-two").addEventListener("click", function () {
    addPlayerName("player-two");
});
document.getElementById("select-btn-three").addEventListener("click", function () {
    addPlayerName("player-three");
});
document.getElementById("select-btn-four").addEventListener("click", function () {
    addPlayerName("player-four");
});
document.getElementById("select-btn-five").addEventListener("click", function () {
    addPlayerName("player-five");
});
document.getElementById("select-btn-six").addEventListener("click", function () {
    addPlayerName("player-six");
});
document.getElementById("select-btn-seven").addEventListener("click", function () {
    addPlayerName("player-seven");
});
document.getElementById("select-btn-eight").addEventListener("click", function () {
    addPlayerName("player-eight");
});
document.getElementById("select-btn-nine").addEventListener("click", function () {
    addPlayerName("player-nine");
});