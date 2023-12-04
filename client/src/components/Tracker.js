import { useState } from "react";

function Tracker() {
	const [expenses, setExpenses] = useState([]);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [amount, setAmount] = useState(0);

	const handleAddExpense = (e) => {
		e.preventDefault();
		setExpenses((prevExpenses) => [
			...prevExpenses,
			{
				name,
				desc,
				amount,
			},
		]);
		setName("");
		setDesc("");
		setAmount("");
	
	};

	return (
		<>
			<h1>Inside Tracker</h1>

			<ul>
				{expenses.length <= 0 ? (
					<p>NO expenses</p>
				) : (
					expenses.map((exp) => (
						<li key={exp.name}>
							{exp.name} - {exp.desc} - Rs. {exp.amount}
						</li>
                    ))
				)}
			</ul>
			
			<form onSubmit={handleAddExpense}>
				<input
					type="text"
					placeholder="title"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="description"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
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
