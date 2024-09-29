document.addEventListener('DOMContentLoaded', () => {
  // Toggle the hamburger menu for mobile view
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fetch players list
  fetchPlayers();

  // Fetch live scorecard
  fetchLiveScore();

  // Fetch data for latest news
  fetchLatestNews();

  // Fetch data for upcoming matches
  fetchUpcomingMatches();
});

// Fetch the list of players
function fetchPlayers() {
  // Example mock API data for players
  const players = [
      "Rohit Sharma (Captain)","Yashaswi jaiswal", "Virat Kohli", "KL Rahul", 
      "Jasprit Bumrah", "Ravindra Jadeja", "Shubman Gill",
      "Mohammed Shami","R Ashwin", "Rishabh Pant (Wicketkeeper) "
  ];

  const playersList = document.getElementById('players-list');

  players.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = player;
      playersList.appendChild(listItem);
  });
}

// Fetch the live scorecard
function fetchLiveScore() {
  // Example mock API data for live score
  const liveScore = {
      match: "India vs Bangladesh",
      score: "India :376/10 & 287/4 d (64.0) <br>     Bangladesh :149/10 & 158/4 (37.2)",
           
      status: "India won by 50 runs"
  };

  const scorecard = document.getElementById('scorecard');
  scorecard.innerHTML = `
      <h3>${liveScore.match}</h3>
      <p>Score: ${liveScore.score}</p>
      <p>Status: ${liveScore.status}</p>
  `;
}

// Fetch the latest news
function fetchLatestNews() {
  const news = [
      { title: "India defeats Bangladesh", content: "The Indian cricket team Lead the current series by 1-0" },
      { title: "Hardik Pandya likely to return to team",content: "Hardik Pandya is set to return to the team and he might play the Upcoming T20I" }
  ];

  const newsContainer = document.querySelector('.news-container');

  news.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.content}</p>
      `;
      newsContainer.appendChild(newsItem);
  });
}

// Fetch the upcoming matches
function fetchUpcomingMatches() {
  const matches = [
      { opponent: "v/s Bangladesh", date: "9-10-2024" },
      { opponent: "v/s New Zealand", date: "12-10-2024" }
  ];

  const matchesList = document.getElementById('matches-list');

  matches.forEach(match => {
      const listItem = document.createElement('li');
      listItem.textContent = `${match.opponent} on ${match.date}`;
      matchesList.appendChild(listItem);
  });
}
