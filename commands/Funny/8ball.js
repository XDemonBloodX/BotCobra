const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const color = "RANDOM";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports.run = async(client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

    const replies = [" Essaye plus tard", "Essaye encore","Pas d'avis", "C'est ton destin", "Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi oui", "C'est certain", "Oui absolument", "Tu peux compter dessus", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible", "Tel que je le vois, OUI", "Ne compte pas dessus", "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "Il ne semble pas", "Impossible à prédire maintenant", "C'est décidement cela", "Concentrez vous et réessayez", "Ma source dit non"]

    const question = args.join(" ");
    if(!question.endsWith('?')){
      message.reply("pose moi une question")
      return
    }
    const response = replies[getRandomInt(replies.length)];

  message.channel.send(response)

};

module.exports.help = MESSAGES.COMMANDS.FUNNY.EIGHTBALL;