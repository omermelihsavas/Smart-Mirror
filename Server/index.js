const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const imageModel = require("./models.js");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//MongoDB bağlantısı
mongoose.connect(process.env.DB_URI, {
    dbName: 'db_SmartMirror',
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB bağlantısı başarılı');
}).catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
});

//Multer uploads klasörüne resimleri kaydetme
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

//Image Post isteği
app.post("/api/upload-image", upload.single("image"), (req, res) => {
    const saveImage = imageModel({
        img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
        },
    });
    saveImage
        .save()
        .then((res) => {
            console.log("image is saved");
        })
        .catch((err) => {
            console.log(err, "error has occur");
        });
    res.send('image is saved');
});

//Image Get isteği
app.get('/api/upload-image', async (req, res) => {
    const allData = await imageModel.find();
    res.json(allData);
});

//Dashboard Sayfası
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

//4000 portunda serveri çalıştırma
app.listen(port || 4000, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});