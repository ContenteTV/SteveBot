var repo = require(process.cwd()+'/repo');

module.exports = function(bot, db, data) {

	var userIdToLookUp = data.user.id;

	if (typeof(data.params) !== "undefined" && data.params.length > 0) {
        if (data.params.length === 1) {
            if (data.params[0].substr(0, 1) === "@") {
            	if(data.params[0] == "@" + data.user.username) {
					repo.findUserById(db, data.user.id, function(user){
				        if(!user.hearts)
				            user.hearts = 0;
				        if(!user.props)
				            user.props = 0;
				        bot.sendChat('@' + user.username + ' você possui ' + user.hearts + ' heart' + (user.hearts == 1 ? '' : 's')  + 
				            ' :heart: e ' + user.props + ' tunes :musical_note:!');
				    });
            	}
            	else{
	            	var recipient = bot.getUserByName(data.params[0].replace("@", ""), true);

	                if(!recipient){
						bot.sendChat('@' + user.username + ', o usuário ' + data.params[0] + ' não foi encontrado!');
	                } else {
						repo.findUserById(db, recipient.id, function(user){
					        if(!user.hearts)
					            user.hearts = 0;
					        if(!user.props)
					            user.props = 0;
					        bot.sendChat('@' + data.user.username + ', o usuário @' + user.username + ' possui ' + user.hearts + ' heart' + (user.hearts == 1 ? '' : 's')  + 
					            ' :heart: e ' + user.props + ' tunes :musical_note:!');
					    });
	                }	
            	}
            } else {
                bot.sendChat("@" + user + " you need to @[username] to lookup someone");
            }
        } else {
            bot.sendChat("@" + user + " you can only lookup one person");
        }
    } else{
    	repo.findUserById(db, data.user.id, function(user){
	        if(!user.hearts)
	            user.hearts = 0;
	        if(!user.props)
	            user.props = 0;
	        bot.sendChat('@' + user.username + ' você possui ' + user.hearts + ' heart' + (user.hearts == 1 ? '' : 's')  + 
	            ' :heart: e ' + user.props + ' tunes :musical_note:!');
	    });
    }
};
