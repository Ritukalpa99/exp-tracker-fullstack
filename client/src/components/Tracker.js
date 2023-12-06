import { useEffect, useState } from "react";

function Tracker() {
	const [expenses, setExpenses] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch expenses from the backend
				const response = await fetch("http://localhost:3001/expenses");

				if (!response.ok) {
					throw new Error("Error fetching expenses");
				}
				const data = await response.json();
				setExpenses(data);
				console.log(data);
			} catch (err) {
				console.error("Error fetching expense", err.message);
			}
		};
		fetchData();
	}, []);

	const handleAddExpense = async (e) => {
		// Add a new expense to backend
		try {
			const response = await fetch("http://localhost:3001/expenses", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, amount, description}),
			});

			if (!response.ok) {
				throw new Error("not working");
			}
			const newExpensee = await response.json();

			setExpenses([...expenses, newExpensee]);
		} catch (e) {
			console.log("err" + e.message);
		}

		// e.preventDefault();
		// setExpenses((prevExpenses) => [
		// 	...prevExpenses,
		// 	{
		// 		name,
		// 		desc,
		// 		amount,
		// 	},
		// ]);
		// setName("");
		// setDesc("");
		// setAmount("");
	};

	return (
		<>
			<h1>Inside Tracker</h1>

			<ul>
				{expenses.length <= 0 ? (
					<p>NO expenses</p>
				) : (
					expenses.map((exp) => (
						<li key={exp.id}>
							{exp.title} - {exp.description} - Rs. {exp.amount}
						</li>
					))
				)}
			</ul>

			<form onSubmit={handleAddExpense}>
				<input
					type="text"
					placeholder="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button>Add Expenses</button>
			</form>
		</>
	);
}

export default Tracker;
