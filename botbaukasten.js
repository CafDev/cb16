const Discord = require('discord.js');
const client = new Discord.Client();


//Variable sektion! Nicht löschen
let saymsg = message.content;
let author = message.author;
let pingdisplay = message.channel.send(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
let token = "Insert token here!"
var possible = ["Possible1", "random2"];
let randomselect = possible[Math.floor(Math.random() * possible.length)];
let cmdinvalid = "Command Invalid! You can find all the commands and usages at https://example.org/bot"
let cmdroleinvalid = "You don't have permission to use that!"
let prefix = "!"
let rickrollrandompossiblelist = ["rickroll", "no rickroll"]
let rickrolldetermine = //insert random handler here
    


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  } else if (msg.content === 'liste') {
    msg.reply('Command not done yet! Please wait');
  }
});

client.login('token');
