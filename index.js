require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");

// initialize app
const app = express();
app.use(express.json());
app.use(cors());

// initialize tg bot
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.API_KEY_BOT, { polling: true });

// Error Handler Middleware
const errorHandler = require("./middleware/error");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
