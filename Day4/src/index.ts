// ทำการ import express มาใช้งาน
import express from "express";

// ทำการ Import routes มาใช้งาน
import testRoutes from "./routes/testroutes";
import productRoutes from "./routes/ProductRoute";
import dbtestRoutes from "./routes/dbtestRoutes"

// ทำการสร้าง instance ของ express
const app = express();

// แปลง JSON request body จาก client
app.use(express.json());

// ทำการใช้งาน routes ที่ import มา
app.use("/api", testRoutes);
app.use("/api", productRoutes);
app.use("/api", dbtestRoutes);

// รัน server ด้วย port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app