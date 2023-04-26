
//  const Discord = require('discord.js');
const steem = require('dsteem');
const ACCOUNT_NAME = 'upmewhale';
  const DISCORD_TOKEN = 'NzI5NDE1MDk3ODc3MDA0MzAy.GMRpvR.rJKZJotR4Am7sPqmdBoODDbmYGKpmhx-N9DY4M';
 const DISCORD_USER_ID = '693027803947597824';

 let max=99;


// const { Client, GatewayIntentBits } = require('discord.js');

const { Client, Events, GatewayIntentBits } = require('discord.js');

const c = new Client({ intents: [GatewayIntentBits.Guilds] });

c.on('ready', async() => {
    console.log('Bot started successfully');

    let up= await c.users.fetch('418694216093532170');
    const user = await c.users.fetch('693027803947597824');
 
    user.send('`The bot is online`');

    up.send('`Hello.. The bot is online and it will notify when the bot reach 99%`');

  
    

// Replace 'accountname' with the name of the account you want to check
const account = 'upmewhale';

const hsteem = new steem.Client('https://api.steemit.com');

async function checkRc() {
	
let hiveMana =  await hsteem.rc.getVPMana(account);
        let mana = hiveMana.percentage/100;
		
		console.log(mana);
		if (mana >= max) {
            done(mana);
            if (mana >= max) {
                pak(mana);
            }
        }
};


function done(mana) {
    user.send('`The Bot Voting Power is  ' + mana + ' kindly start voting.`');
    up.send('`The Bot Voting Power is  ' + mana + ' kindly start voting.`');
    //client.users.get("693027803947597824").send("Message to Send")

    console.log("msg sent")
}

function pak(mana) {
    user.send('`The Bot Voting Power is  ' + mana + ' kindly start voting.`');
    up.send('`The Bot Voting Power is  ' + mana + ' kindly start voting.`');
    console.log('sent to pakgamer')
}

function run() {
    checkRc();
    setInterval(() => {
        checkRc();
    }, 50000);
};
run();



});

c.on(Events.InteractionCreate, interaction => {
	console.log(interaction);
});
  

 c.login(DISCORD_TOKEN);



