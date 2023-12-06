const Expense = require("../model/expense");

exports.getExpenses = async (req, res, next) => {
	try {
		const expenses = await Expense.findAll();
		res.json(expenses);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server Error" });
	}
};

exports.postExpenses = async (req, res, next) => {
	const { title, description, amount } = req.body;
	try {
		const newExpense = await Expense.create({ title, description, amount });
		res.json(newExpense);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server Error" });
	}
};
