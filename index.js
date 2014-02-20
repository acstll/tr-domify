var through = require('through');



module.exports = function (file) {
  if (!/\.html/.test(file)) return through();

  var buffer = '';
  return through(write, end);

  function write (chunk) {
    buffer += chunk.toString();
  }

  function end () {
    this.queue(wrap());
    this.queue(null);
  }

  function wrap () {
    var string = buffer
      .replace(/\n|\t/g, '')
      .replace(/'/g, '&#039;')
      .trim();

    return [
      "var domify = require('domify');\n\n",
      "module.exports = domify('" + string + "');",
    ].join('');
  }
};
