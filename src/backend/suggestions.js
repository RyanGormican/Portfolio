const express = require('express');
const pool = require('./db');

const router = express.Router();

router.post('/add-suggestion', async (req,res) => {
	try {
		const { name = 'Anonymous',topic, suggestion,date} = req.body
		const query = 'INSERT INTO suggestions (name, topic, suggestion, date) VALUES ($1, $2, $3, $4)';
		await pool.query(query,[name,topic, suggestion,date]);
		res.status(201).json({message:'Suggestion added successfully'});
	} catch (error){
		console.error('Error adding suggestion:', error);
		res.status(500).json({error: 'An error occured'});
	}
});

router.get('/get-suggestions', async(req,res)=> {
	try {
	const query = 'SELECT * from suggestions';
	const result = await pool.query(query);
	res.status(200).json(results.rows);
	} catch (error) {
	console.error('Error fetching suggestions:', error);
	res.status(500).json({error: 'An error occured'});
	}
});

module.exports = router