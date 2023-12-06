const express = require("express");
const router = express.Router();

const expenseController = require("../controller/expense");

router.get("/", expenseController.getExpenses);

router.post("/", expenseController.postExpenses);


module.exports = router;