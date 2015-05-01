var html = require("./template.hbs");
var data = {
  text: 'Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.',
  author: {
    name: 'Lorem Ipsum',
    role: 'Dolor Sit',
    company: 'Amet Inc.'
  }
}

var str = html(data);
module.exports = str;