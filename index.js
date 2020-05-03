const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
	host: 'redis-server',	// container name for the redis, docker will resovle this.
	port: 6379	//default port
});
client.set('visits', 1);

app.get('/', (req, res) => {
	// process.exit(10);	//server will crash forcibly, unncomment this to test the restart policy.
	client.get('visits', (err, visits) => {
		res.send('Number of visits is '+ visits);
		client.set('visits', parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log('Listening on port 8081');
});
