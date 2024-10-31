import { Bot } from 'grammy';
import { env } from 'node:process';
import { MyContext } from './types';
import dotenv from 'dotenv';
import { ignoreOld, sequentialize } from 'grammy-middlewares';
import { bot as menu } from './menu';

dotenv.config();
const token = env['BOT_TOKEN'];
if (!token) {
  throw new Error(
    'You have to provide the bot-token from @BotFather via environment variable (BOT_TOKEN)'
  );
}

const baseBot = new Bot<MyContext>(token);

baseBot.use(ignoreOld());
baseBot.use(sequentialize());
baseBot.use(menu);

export async function start(): Promise<void> {
  try {
    // The commands you set here will be shown as /commands like /start or /magic in your telegram client.
    await baseBot.api.setMyCommands([
      { command: 'start', description: 'Start the bot' },
    ]);
    await baseBot.start({
      drop_pending_updates: true,
      onStart(botInfo) {
        console.log(new Date(), 'Bot starts as', botInfo.username);
      },
    });
  } catch (e) {}
}
