var mediaInfo = require(process.cwd()+'/bot/utilities/media');

module.exports = function(bot, db, data) {
	if(!data) return;

    if(!mediaInfo.lastMedia || !mediaInfo.lastMedia.currentName)
    {
        bot.sendChat("Eu não estava por aqui!");
    }
    else{
        bot.sendChat("@" + data.user.username + " A última música tocada foi '" + mediaInfo.lastMedia.currentName + "', e o link é " + mediaInfo.lastMedia.currentLink);
    }
};

module.exports.extraCommands = ["lastsong", "lasttrack"];
