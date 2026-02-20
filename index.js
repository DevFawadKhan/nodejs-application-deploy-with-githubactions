import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({
    msg: "Hello from the server deployed to Docker container!\n",
  });
});
app.get("/ec2", (req, res) => {
  return res.json({ msg: "This is the Docker container endpoint!" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
