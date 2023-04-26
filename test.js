const steem = require('dsteem');

// Replace 'accountname' with the name of the account you want to check
const account = 'upmewhale';

const hsteem = new steem.Client('https://api.steemit.com');

async function checkRc() {
	
let hiveMana =  await hsteem.rc.getVPMana(account);
        let mana = hiveMana.percentage/100;
		
		send(mana)
		
};

checkRc();


send(mana){
	console.log(mana)
	
}

