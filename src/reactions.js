'use strict';

class ReactionNone {
}

class ReactionDirectMessage {
  constructor(message) {
    this.message = message;
    this.expression = null;
  }

  // YES, this needs the user_name, sadly not the ID as per:
  // https://github.com/mishk0/slack-bot-api
  execute(userName, slackBot) {
    const botMessageParams = {
      as_user: false,
      username: 'Wordy Bot',
    };

    slackBot.postMessageToUser(userName, this.message, botMessageParams);
  }
}

module.exports = {
  ReactionNone,
  ReactionDirectMessage,
};
