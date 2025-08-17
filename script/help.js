const {
  name: 'help', 
  version: '2.0.0', 
  role: 0,
  aliases = [],
  description:, 
  usage:, 
  credits: 'yunoh', 
  cooldown: '10', 
  hasPrefix: 'true', 
} = command;

const roleMessage = role !== undefined 
  ? (role === 0 ? '➛ Permission: user' 
    : (role === 1 ? '➛ Permission: admin' 
    : (role === 2 ? '➛ Permission: thread Admin' 
    : (role === 3 ? '➛ Permission: super Admin' 
    : '')))) 
  : '';

const aliasesMessage = aliases.length ? `➛ Aliases: ${aliases.join(', ')}\n` : '';
const descriptionMessage = description ? `➛ Description: ${description}\n` : '';
const usageMessage = usage ? `➛ Usage: ${usage}\n` : '';
const creditsMessage = credits ? `➛ Credits: ${credits}\n` : '';
const versionMessage = version ? `➛ Version: ${version}\n` : '';
const cooldownMessage = cooldown ? `➛ Cooldown: ${cooldown} second(s)\n` : '';

const message = ` 「 Command 」\n\n➛ Name: ${name}\n${versionMessage}${roleMessage}\n${aliasesMessage}${descriptionMessage}${usageMessage}${creditsMessage}${cooldownMessage}`;

api.sendMessage(message, event.threadID, event.messageID);
