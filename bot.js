var Discord = require('discord.js');
var logger = require('winston');
var authToken = process.env.AUTH_TOKEN;

const client = new Discord.Client();
var rollDice = require('./rolldice.js');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client();
logger.info('starting');

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (msg){
    var message = msg.content;
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'roll':
                var n = parseInt(args[0],10);
                var dc = parseInt(args[1],10) || 6;
                var roll = rollDice(n,dc);
                return msg.reply(roll);
            break;
         }
     }
});
bot.catch((err) => {
    console.log('bot error: ', err);
});

bot.login(authToken);
