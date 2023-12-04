const express = require("express");

const app = express();
const PORT = 3001;

app.get('/', (req,res,next) => {
    res.send('<h1>Working</h1>')
})
app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
