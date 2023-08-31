import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js"
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";


/* CONFIGURATION */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, res, cb) {
        cb(null, file.originalname);
    }
}); 

const upload = multer({ storage });

/* ROUTE WITH FILES */
app.post("auth/register", upload.single("picture"), register);
app.post("posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
const Uri = 'mongodb+srv://harbyanwardi:onaironline12@cluster0.jfyw61j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`)); 

    /*Manually Inject DATA ONLY ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);

}).catch( (error) => console.log(`${error} did not connect`));