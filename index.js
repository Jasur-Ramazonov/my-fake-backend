const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Fake backend uchun JSON fayl
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom middleware (POST, PUT, DELETE uchun)
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = new Date().toISOString();
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 Fake backend ishlayapti: http://localhost:${PORT}`);
});
