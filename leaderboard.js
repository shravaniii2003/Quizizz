const leaderboardList = document.getElementById("leaderboardList");
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboardList.innerHTML = leaderboardList
  .map(score => {
    return `<li class="leaderboard">${leaderboard.name} - ${leaderboard.leaderboard}</li>`;
  })
  .join("");