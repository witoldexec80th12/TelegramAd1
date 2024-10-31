import { Composer, InlineKeyboard } from 'grammy';
import { MyContext } from '../../types';
import { env } from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

export const bot = new Composer<MyContext>();

async function startMessage(ctx: MyContext) {
  const link = env['TELEGRAM_BOT_LINK'];
  const shareText = "Get this airdrop! only 10,000 available"
  const keyboard = new InlineKeyboard()
    .webApp('Claim Rewards', `${env['GAME_URL']}/play`)
    .row()
    .url('Invite Friends', `https://t.me/share/url?url=${link}&text=${shareText}`)

  const username = ctx.from?.username;

  let text = `🎉 First tap-to-earn health game.
🎁 Participate in the pre-launch airdrop now
⏳ The number of participants is <b>limited to 10,000 people</b>`;

  await ctx.reply(text, {
    reply_markup: keyboard,
    parse_mode: 'HTML',
  });
}

bot.command('start', async (ctx) => {
  try {
    await startMessage(ctx);
  } catch (e) {
    console.log("errr", e)
  }
});

