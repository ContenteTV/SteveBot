var mediaInfo = require(process.cwd()+'/bot/utilities/media');

module.exports = function(bot, db, data) {
	if(!data) return;

    if(!mediaInfo.currentLink)
    {
        bot.sendChat("Não tem nenhuma música tocando, macaco!");
    }
    else{
        bot.sendChat("@" + data.user.username + " A música atual é '" + mediaInfo.currentName + "', e o link é " + mediaInfo.currentLink);
    }
};
