const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
// Set the prefix
client.on("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith("안녕")) {
    message.channel.send(`${`<@${message.author.id}> `}님 안녕하세요.`)
  } 
});
 
client.login("Token");
