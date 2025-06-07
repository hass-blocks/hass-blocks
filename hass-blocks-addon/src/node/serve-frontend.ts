import http from 'http';
import handler from 'serve-handler';

const [, , folder] = process.argv;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    cleanUrls: true,
    directoryListing: true,
    public: folder,
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log(`Serving ${folder} at http://0.0.0.0:3000`);
});
