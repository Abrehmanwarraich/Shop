"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const db_1 = __importDefault(require("./db"));
const schema_model_1 = __importDefault(require("./schema-model")); // Correctly import the Product model
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("imagesupload"));
// ----------use multer for image upload-----------
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "imagesupload/");
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        },
    }),
});
// API Endpoint to handle form submissions
app.post('/api/products', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, price, description } = req.body;
    const file = req.file ? req.file.path : null;
    try {
        const product = new schema_model_1.default({
            name,
            category,
            price,
            file,
            description,
        });
        yield product.save();
        res.status(201).json({ message: 'Product uploaded successfully!' });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while uploading the product.' });
    }
}));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    app.listen(3001, () => {
        console.log(`Server running at http://localhost:3001`);
    });
});
startServer();
