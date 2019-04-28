const queue = new Map();
const PREFIX = '=';
client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => { 
console.log(------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
-------------------------------------------------------
------------------------------------------------------
----------------------Bot's logs----------------------);


});





client.on('ready', () => {
    console.log('Bot Is Ready Now !');
    client.user.setGame(${PREFIX}help,"http://twitch.tv/xkilleryt%22)
    });





client.login(process.env.BOT_TOKEN);