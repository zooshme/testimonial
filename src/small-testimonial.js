var Handlebars = require('handlebars');
var source = '<div class="zm-testimonial">\n  <div class="zm-testimonial--text">{{text}}</div>\n  <div class="zm-testimonial--author">\n    <span class="zm-testimonial--author--name">{{author.name}}</span>\n    <span class="zm-testimonial--author--role">{{author.role}}</span>\n    <span class="zm-testimonial--author--company">{{author.company}}</span>\n  </div>\n</div>';

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