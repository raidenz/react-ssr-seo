import register from 'ignore-styles';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import _ from 'lodash';
import ssr from './ssr';

const app = express();

// Ex (FAILED)
// try to get unknown import file,
// register(undefined, (module, filename) => {
//   if (_.some(['.png', '.jpg', '.svg', '.css'], ext => filename.endsWith(ext))) {
//     module.exports = path.basename(filename);
//   }
//   // const hash = md5File.sync(filename).slice(0, 8);
//   // const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
//   // mod.exports = `/static/media/${bn}`;
// });

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Cache static File
 */
app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    index: false,
    etag: false,
    // maxAge: '30d'
  }),
);

app.use(ssr);

console.log('path', path.resolve(__dirname, '..', 'build'));

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on port ${port} ...`);
});
