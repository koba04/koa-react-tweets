module.exports = {
  index: function* () {
    yield this.render("index", {
      markup: "<p>hoge</p>"
    });
  },
  page: function* () {
    this.response.body = {
      page: this.params.page,
      skip: this.params.skip
    };
  }
};
