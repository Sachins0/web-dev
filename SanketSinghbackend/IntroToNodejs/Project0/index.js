const {Telegraf}=require('telegraf')    
const axios=require('axios')
require('dotenv').config()

const bot=new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx)=>ctx.reply('Welcome to Sachin first bot'))
bot.telegram.setMyCommands([
    {
      command: 'oldschool',
      description: 'Test command',
    },
    {
      command: 'insertionsort',
      description: 'Greetings command',
    }
  ]);

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('🥰'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('insertionsort',async(ctx)=>{
    const res=await axios.get('https://raw.githubusercontent.com/Sachins0/C-/refs/heads/master/sorting%20and%20searching/InsertionSortCode.cpp?token=GHSAT0AAAAAACUWI6P5BB2JRLLP7AVLM2HAZXJRWRQ')
    ctx.reply(res.data)
}
)
bot.command('hipster', Telegraf.reply('λ'))
bot.on('text',(ctx)=>ctx.reply("I don't understand you"))
bot.launch()