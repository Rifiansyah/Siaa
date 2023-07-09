require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'You Token Bot', 
  prefix: process.env.PREFIX || '?', 
  ownerID: process.env.OWNERID?.split(',') || ['834308678521847828','782980286831919145'], 
  SpotifyID: process.env.SPOTIFYID || 'You Spotify id', 
  SpotifySecret: process.env.SPOTIFYSECRET || 'You Spotify Secret', 
  mongourl: process.env.MONGO_URI || 'mongodb+srv://Aryan:v62DVRBsQQthGPgU@bot.nk7zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/4PAzemQPDM',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=968407006555824129&permissions=70368744177655&scope=bot',
    vote: process.env.VOTE || 'https://discord.gg/aromax-development-708565122188312579',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lavalink.devamop.in:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'DevamOP',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
