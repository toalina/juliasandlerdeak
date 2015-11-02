var src = "./lib";
var dest = "./public";

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/entry.js',
    outputFilename: 'packed.js'
  },
  sass: {
    src: src + "/sass/{,*/}*.{scss,sass}",
    dest: dest + '/css/',
  },
  index: {
    src: src + "/index.html",
    dest: dest + "/"
  },
  html: {
    src: src + "/views/**/*.html",
    dest: dest + "/views/"
  },
  server: {
    src: dest,
    livereload: true,
    directoryListing: false,
    open: false,
    port: 9000
  }
};
