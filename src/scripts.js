// const filipe = { name: "Filipe", victories: 0, draws: 0, defeats: 0, score: 0 };
// const nana = { name: "Naná", victories: 0, draws: 0, defeats: 0, score: 0 };
// const mateus = { name: "Mateus", victories: 0, draws: 0, defeats: 0, score: 0 };

// filipe.score = calcScore(filipe);
// nana.score = calcScore(nana);
// mateus.score = calcScore(mateus);

let winnerTrophy = "https://media.giphy.com/media/9xt1MUZqkneFiWrAAD/giphy.gif?cid=ecf05e479wcdn2z0vvge338851ntwtlaww7e66223m474tt0&rid=giphy.gif&ct=g";
const players = [];

function calcScore(player) {
  let score = player.victories * 3 + player.draws;
  return score;
}

players.score = calcScore(players);

function addNewPlayer() {
  const name = document.getElementById("input-name").value;
  if (name != '') {
    players.push({ name, victories: 0, draws: 0, defeats: 0, score: 0 });
    displayPlayers(players);
  }
  else {
    alert("Ditige um nome!")
  }
  document.getElementById("input-name").value = "";
}
let disableButton = false;

function toggleButton() {
  disableButton = !disableButton;
}

  function resetScores() {
    players.forEach((player) =>
      Object.keys(player).forEach((key) => {
        if (key !== "name") player[key] = 0;
      })
    );
    toggleButton();
    displayPlayers(players);
  }

function displayPlayers(players) {
  let element = "";
  for (let i = 0; i < players.length; i++) {
    element += "<tr><td>" + players[i].name + "</td>";
    element += "<td>" + players[i].victories + "</td>";
    element += "<td>" + players[i].draws + "</td>";
    element += "<td>" + players[i].defeats + "</td>";
    element += "<td>" + players[i].score + "</td>";
    element +=
    `<td><button class='actionButton btn-victories' ${disableButton ? 'disabled' : ''} onClick='addVictory(` + i + `)'>Vitória</button></td>`;
    element += `<td><button class='actionButton btn-draws' ${disableButton ? 'disabled' : ''} onClick='addDraw(` + i + `)'>Empate</button></td>`;
    element +=
      `<td><button class='actionButton btn-defeats' ${disableButton ? 'disabled' : ''} onClick='addDefeat(` + i + `)'>Derrota</button></td>`;
  }

  const playersTable = document.getElementById("playersTable");
  playersTable.innerHTML = element;

}

displayPlayers(players);

function checkPlayerScore(player) {
  if (player.score >= 30) {
    winner.innerHTML += "<h2>" + player.name + " venceu!  " + player.score + " pontos." + "</h2> + <img class='trophy-img' src='" + winnerTrophy + "'" + "'>"; 
    toggleButton(); 
  }
}

function addVictory(i) {
  let player = players[i];
  player.victories++;
  player.score = calcScore(player);
  checkPlayerScore(player);
  displayPlayers(players);
}

function addDraw(i) {
  let player = players[i];
  player.draws++;
  player.score = calcScore(player);
  checkPlayerScore(player);
  displayPlayers(players);
}

function addDefeat(i) {
  let player = players[i];
  player.defeats++;
  displayPlayers(players);
}

