const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.sendMessage('Bütün Serverler için Ping 22 Ye Ayarlandı');
  }
 if (msg.content === 'Ping') {
    msg.channel.sendMessage('Bütün Serverler için Ping 22 Ye Ye Ayarlandı');
  }
if (msg.content === 'PİNG') {
    msg.channel.sendMessage('Bütün Serverler için Ping 22 Ye Ayarlandı');
  }
if (msg.content === 'Yardım') {
    msg.channel.sendMessage('Kodlar 1=Ping  2=Kod  3=PingDüşür  4=?YT  5=BulunduğuServerler  6=ServerBuglarınıDüzelt  7=BotuDüzelt ');
  }
if (msg.content === 'YARDIM') {
    msg.channel.sendMessage('Kodlar 1=Ping  2=Kod  3=PingDüşür  4=?YT  5=BulunduğuServerler  6=ServerBuglarınıDüzelt  7=BotuDüzelt ');
  }
if (msg.content === 'yardım') {
    msg.channel.sendMessage('Kodlar 1=Ping  2=Kod  3=PingDüşür  4=?YT  5=BulunduğuServerler  6=ServerBuglarınıDüzelt  7=BotuDüzelt ');
  }
if (msg.content === 'Kod') {
    msg.channel.sendMessage('OyunHackTeam Tarafından Kodlanmıştır');
  }
if (msg.content === 'KOD') {
    msg.channel.sendMessage('OyunHackTeam Tarafından Kodlanmıştır');
  }
if (msg.content === 'kod') {
    msg.channel.sendMessage('OyunHackTeam Tarafından Kodlanmıştır');
  }
if (msg.content === 'PingDüşür') {
    msg.channel.sendMessage('Ping Düşürülüyor...    Ping Düşürldü');
  }
if (msg.content === 'PİNGDÜŞÜR') {
    msg.channel.sendMessage('Ping Düşürülüyor...    Ping Düşürldü');
  }
if (msg.content === 'pingdüşür') {
    msg.channel.sendMessage('Ping Düşürülüyor...    Ping Düşürldü');
  }
if (msg.content === '?YT') {
    msg.channel.sendMessage('https://www.youtube.com/channel/UCmqMvVLZF7NjowweUR1_B7Q?view_as=subscriber');
  }
if (msg.content === '?yt') {
    msg.channel.sendMessage('https://www.youtube.com/channel/UCmqMvVLZF7NjowweUR1_B7Q?view_as=subscriber');
  }
if (msg.content === '?Yt') {
    msg.channel.sendMessage('https://www.youtube.com/channel/UCmqMvVLZF7NjowweUR1_B7Q?view_as=subscriber');
  }
if (msg.content === 'BulunduğuServerler') {
    msg.channel.sendMessage('1=https://discord.gg/n54VD9 2=https://discord.gg/yrb8ppm');
  }
  if (msg.content === 'ServerBuglarınıDüzelt') {
    msg.channel.sendMessage('ServerBugları Düzeltiliyor... %20 %30 %85 %100  Server Bugları Düzeltildi');
  }
    if (msg.content === 'SERVERBUGLARINIDÜZELT') {
    msg.channel.sendMessage('ServerBugları Düzeltiliyor... %20 %30 %85 %100  Server Bugları Düzeltildi');
  }
  if (msg.content === 'serverbuglarınıdüzelt') {
    msg.channel.sendMessage('ServerBugları Düzeltiliyor... %20 %30 %85 %100  Server Bugları Düzeltildi');
  }
  if (msg.content === 'BotuDüzelt') {
    msg.channel.sendMessage('BotDüzeltildi');
  }
  if (msg.content === 'botudüzelt') {
    msg.channel.sendMessage('BotDüzeltildi');
  }
  if (msg.content === 'BOTUDÜZELT') {
    msg.channel.sendMessage('BotDüzeltildi');
  }
if (msg.content === 'AktifOl') {
    msg.channel.sendMessage('Bot Aktifleştirldi');
  }
});

client.login('NTMzNzQ5MjE0MjA4MDY1NTY2.Dx0pTQ.gbJD27Wx3iRPIhbMxWu0Tu9Yaj0');