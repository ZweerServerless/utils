import axios from 'axios';
import { SNS } from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies

import Configuration from '../models/configuration';

export async function enqueueTelegramMessage(message) {
  const sns = new SNS();
  const snsErrorTopicArn = process.env.SNS_TELEGRAM;

  await sns.publish({
    Message: message,
    TopicArn: snsErrorTopicArn,
  }).promise();
}

async function getTelegramUrl() {
  const telegramUrl = 'https://api.telegram.org/bot{token}';

  const tokenKey = 'telegramBotToken';
  const token = await Configuration.getValue(tokenKey);

  return telegramUrl.replace('{token}', token);
}

export async function sendTelegramMessage(chatId, text) {
  const { data } = axios.post(`${await getTelegramUrl()}/sendMessage`, {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
  });

  return data;
}

export async function registerTelegramEndpoint(url) {
  await axios.post(`${await getTelegramUrl()}/setWebhook`, { url });
}
