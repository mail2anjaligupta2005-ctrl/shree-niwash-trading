const express = require("express");
const cors = require("cors");
const db = require("./firebase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

app.post("/order", async (req, res) => {

    try {

        console.log("New Order Received:");
        console.log(req.body);

        const orderData = {
    ...req.body,
    status: "Pending",
    createdAt: new Date()
};

        console.log("TRYING TO SAVE TO FIREBASE");

        const docRef = await db.collection("orders").add(orderData);

        console.log("SAVED TO FIREBASE", docRef.id);

        res.json({
            success: true,
            id: docRef.id,
            message: "Order saved successfully"
        });

    } catch (error) {

        console.log("FIREBASE ERROR");
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error saving order"
        });

    }

});

app.get("/orders", async (req, res) => {

    try {

        const snapshot = await db.collection("orders").get();

        const orders = [];

        snapshot.forEach(doc => {
            orders.push({
                id: doc.id,
                ...doc.data()
            });
        });

        res.json(orders);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error fetching orders"
        });

    }

});

app.delete("/orders/:id", async (req, res) => {

    try {

        await db.collection("orders")
        .doc(req.params.id)
        .delete();

        res.json({
            success: true,
            message: "Order deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Delete failed"
        });

    }

});

app.put("/orders/:id/status", async (req, res) => {

    try {

        await db.collection("orders")
        .doc(req.params.id)
        .update({
            status: req.body.status
        });

        res.json({
            success: true,
            message: "Status updated"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Update failed"
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});