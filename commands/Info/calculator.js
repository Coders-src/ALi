const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons');
 const { Calculator } = require('weky')
const {MessageButton} = require('discord-buttons');

module.exports = {
  name: "calculator",

  category: "main",
  description: "get a calc with buttons",
  usage: "[args input]",
  run: async (client, message, args) => {
 await Calculator({
			message: message,
			embed: {
				title: 'Calculator | Ice makes Stuff',
				color: '#5865F2',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
  }
};
