const { Client } = require('discord.js');
const { DISCORD_TOKEN } = require('./config.json');

const bot = new Client();

bot.on('ready', () => {
    console.log("Bot is running!");
});

bot.on('message', function(message) {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
      }
});

bot.login(DISCORD_TOKEN);