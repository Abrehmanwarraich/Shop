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
// ------------------------api post product from productsform---------------
app.post('/products', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
// ------------------------api get product to home---------------
app.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield schema_model_1.default.find();
        res.json(products);
    }
    catch (err) {
        const error = err; // Type assertion
        res.status(500).json({ message: error.message });
    }
}));
// ----------------------------api get prduct by id to productview-----------
app.get('/products/:id', getProductById);
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield schema_model_1.default.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        }
        catch (err) {
            const error = err; // Type assertion
            res.status(500).json({ message: error.message });
        }
    });
}
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    app.listen(3001, () => {
        console.log(`Server running at http://localhost:3001`);
    });
});
startServer();
