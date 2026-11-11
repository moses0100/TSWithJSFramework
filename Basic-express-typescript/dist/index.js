"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ทำการ import express มาใช้งาน
const express_1 = __importDefault(require("express"));
// ทำการ Import routes มาใช้งาน
const testroutes_1 = __importDefault(require("./routes/testroutes"));
const ProductRoute_1 = __importDefault(require("./routes/ProductRoute"));
// ทำการสร้าง instance ของ express
const app = (0, express_1.default)();
// แปลง JSON request body จาก client
app.use(express_1.default.json());
// ทำการใช้งาน routes ที่ import มา
app.use("/api", testroutes_1.default);
app.use("/api", ProductRoute_1.default);
// รัน server ด้วย port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
exports.default = app;
