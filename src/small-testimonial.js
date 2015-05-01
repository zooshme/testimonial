var Handlebars = require('handlebars');
var source = require('./templates/small-testimonial.html');

var template = Handlebars.precompile(source);
var data = {
  text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.',
  author: {
    name: 'Hello World',
    role: 'Someone',
    company: 'How are you?'
  }
}

var output = template(data);

return output;