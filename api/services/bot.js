
var TelegramBot =require('node-telegram-bot-api');
var token = '125785636:AAEIl7LuxOSIqsWw-PkFNYYTxbKafwjogNc';

var bot = new TelegramBot (token, {
	polling:true

});

bot.getMe().then(function(me) {
	console.log('Hi my name is %s!', me.username);
});

//texto
bot.onText(/^\/soy (.+)$/, function(msg, match) {
	var fromId = msg.from.id;
	var resp = match[1];
	console.log(msg);
	bot.sendMessage(fromId, "que tranza " + msg.from.first_name);
});

//imagen
bot.onText(/pic/, function (msg, match) {
	var fromId = msg.from.id;
	var photo = "./assets/images/hola.jpg";
	bot.sendPhoto(fromId,photo,{caption: 'Esta es tu foto :)'} );
});

//ubicacion 
bot.onText(/ubicacion/, function (msg, match) {
	var fromId = msg.from.id;
	bot.sendLocation(fromId, 20.07482, -98.403327);
});

//multimedia/audio
bot.onText(/musica/, function (msg, match) {
	var fromId = msg.from.id;
	console.log(msg);
	var musica = "./assets/sounds/musica.mp3";
	bot.sendAudio(fromId,musica);
});


// Any kind of message
/*bot.on(/pic (.+)$/, function (msg) {
	var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = './assets/images/hola.jpg';
  bot.sendPhoto(chatId, photo, {caption: 'Xd'});
});*/



