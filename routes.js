var JSX = require('node-jsx').install({ harmony: true }),
    React = require('react'),
    TweetsApp = require('./components/TweetsApp')
;

module.exports = {
  index: function* () {
    var state = {
      key: "</script><script>alert(1)</script>"
    };
    yield this.render("index", {
      markup: React.renderToString(React.createElement(TweetsApp)),
      state: JSON.stringify(state)
    });
  },
  page: function* () {
    this.response.body = {
      page: this.params.page,
      skip: this.params.skip
    };
  }
};
