require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
var bodyParser = require("body-parser");


connectDB();

// initialize app
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "16mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

// adding routs
app.use("/api/v1/auth", require("./routes/auth"));

// initialize tg bot

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.API_KEY_BOT);

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


bot.start((ctx) => ctx.reply('Привет, я эхо-бот!'))
bot.hears('Привет', (ctx) => ctx.reply('Привет!'))
bot.hears('Пока', (ctx) => ctx.reply('До свидания!'))

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
