const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'DoubleCritDiceBot',
		password: 'oauth:p38lxekj93ax7x0otl6cmyhn0c1m94'
	},
	channels: [ 'double_crit_fail' ]
});

client.connect();


  

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});

console.log('fvtt-obs-websocket checking in')
