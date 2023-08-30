function handleCopy() {
    const ip = "not2b2t.org";
    var copied = "IP address copied to clipboard."
    navigator.clipboard.writeText(ip);
    alert("IP copied to clipboard.")

}


const opened = new Date('2022-11-19');
const today = new Date();
const age = today - opened;
const nigger = Math.floor(age / (1000 * 60 * 60 * 24));
document.getElementById("age").innerText = `the world is ${nigger} days old and over 30 gigabytes in size with over 250 players visiting.`;


const api = "https://api.mcsrvstat.us/3/not2b2t.org";
fetch(api)
  .then(response => response.json())
  .then(data => {
    const onlinePlayers = data.players.online;
    document.getElementById("players").innerText = `Join ${onlinePlayers} other players now to be a part of the not2b2t history!`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
