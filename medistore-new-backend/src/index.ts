import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "MediStore Backend Running..." });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});