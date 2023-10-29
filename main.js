function handleClick() {
  const ip = "not2b2t.org";
  navigator.clipboard.writeText(ip);
  alert("IP copied to clipboard.");
}

function joinDiscord() {
  window.open("https://not2b2t.org/discord");
}


const opened = new Date('2022-11-19');
const today = new Date();
const age = today - opened;
const nigger = Math.floor(age / (1000 * 60 * 60 * 24));
document.getElementById("age").innerHTML = `the world is <strong>${nigger} days</strong> old and it's size is over <strong>30 gigabytes</strong><br> with over <strong>350 people</strong> visiting.`;
document.getElementById("days").innerHTML = `World age:&nbsp;&nbsp; ${nigger} days`;


const api = "https://api.mcsrvstat.us/3/not2b2t.org";
fetch(api)
  .then(response => response.json())
  .then(data => {
    const onlinePlayers = data.players.online;
    document.getElementById("playerCount").innerText = `${onlinePlayers} players online. Join using IP not2b2t.org`;
    document.getElementById("navbarCount").innerText = `${onlinePlayers}/50 players online`;
})
  .catch(error => {
    console.error('Error fetching data:', error);
  });


const discord = document.getElementById("online");

const apiUrl = "https://discord.com/api/guilds/1047850502760710285/widget.json";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.presence_count !== undefined) {
            const onlineDiscord = data.presence_count;
            discord.textContent = `Online Members: ${onlineDiscord}`;
        } else {
            discord.textContent = "Could not load online users";
        }
    })
    .catch(error => {
        console.error(error);
        discord.textContent = "Could not load online users";
    });
