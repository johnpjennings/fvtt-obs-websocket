const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'name',
		password: 'pass'
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

Hooks.on("ready", function() {
	console.log("fvtt-websocket checking in");
  });