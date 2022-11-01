const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/send", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.send(newUser);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// async function main() {
//   const newUser = await prisma.user.create({
//     data: {
//       name: "yash savani",
//       email: "alice@prisma.io",
//     },
//   });
//   console.log(newUser);
// }

// main();
