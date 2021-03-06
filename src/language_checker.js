'use strict';

const reactions = require('./reactions.js');

class LanguageChecker {
  constructor(rules) {
    this.rules = rules;
  }

  check(message) {
    let reaction = new reactions.ReactionNone();
    let x = 0;

    for (; x < this.rules.rules.length; x += 1) {
      const rule = this.rules.rules[x];

      if (rule.expression.test(message.text)) {
        reaction = rule.reaction;
        reaction.expression = rule.expression.toString();
        break;
      }
    }

    return reaction;
  }
}

module.exports = {
  LanguageChecker,
};
