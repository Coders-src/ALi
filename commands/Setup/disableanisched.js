const list = require('../../models/GuildWatchlist');
const em = require('../../assets/json/emojis.json');
module.exports = {
  name: 'disableanisched',
  aliases: [ 'anischedoff' ],
  guildOnly: true,
  adminOnly: true,
  group: 'Setup',
  description: 'Disable the anisched feature for this server',
  requiresDatabase: true,
  examples: [
    'disableanisched',
    'anischedoff'
  ],
  parameters: [],
  run: (client, message) => list.findById(message.guild.id, (err,doc) => {

    if (err){
      return message.channel.send(`${em.error} | [DATABASE_ERR]:\` The database responded with error: ${err.name}`);
    };

    if (!doc){
      doc = new list({ _id: message.guild.id });
    };

    if (doc.channelID === null){
      return message.channel.send(`${em.error} | Anischedule is already disabled on this server! You may enable it again through \`${client.prefix}setanischedch\``)
    };

    doc.channelID = null;
    return doc.save()
    .then(() =>  message.channel.send(`${em.success} | Successfully disabled the Anisched feature! You may enable it again through \`${client.prefix}setanischedch\``))
    .catch(() => message.channel.send(`${em.error} | [DATABASE_ERR]:\` Unable to save the document to the database, please try again later!`));
  })
};
