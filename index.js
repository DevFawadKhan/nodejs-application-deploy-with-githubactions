import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({ msg: "Hello from the server v2 deployed to EC2!\n" });
});
app.get("/ec2", (req, res) => {
  return res.json({ msg: "This is the EC2 endpoint!" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
