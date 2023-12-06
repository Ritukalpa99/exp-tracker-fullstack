const express = require("express");
const bodyparser = require('body-parser');
const expenseRoutes = require('./routes/expense')
const sequelize = require('./util/database')

const app = express();
const PORT = 3001;

app.use(bodyparser.json());

sequelize.sync({force : true}).then(() => {
    console.log('DB synched');
})

app.use('/expenses', expenseRoutes)

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
