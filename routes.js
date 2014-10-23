var JSX = require('node-jsx').install({ harmony: true }),
    React = require('react'),
    TweetsApp = require('./components/TweetsApp')
;

module.exports = {
  index: function* () {
    yield this.render("index", {
      markup: React.renderToString(React.createElement(TweetsApp)),
      state: "{}"
    });
  },
  page: function* () {
    this.response.body = {
      page: this.params.page,
      skip: this.params.skip
    };
  }
};
