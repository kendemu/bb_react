import 'babel-polyfill';
import express from 'express';
import db from 'sqlite';
import Promise from 'bluebird';


const app = express();
var menus = undefined;
var foods = undefined;

app.use('/', express.static(__dirname + '/'));
app.set('port', (process.env.port || 3000));


app.get('/categories', async (req, res, next) => {
    menus = await db.all('SELECT name FROM sqlite_master WHERE type=\'table\';');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(menus));
});

app.get('/menus', async (req, res,next) => {
    var category = req.query.category;
    if(category !== undefined){
	foods = await db.all('SELECT * FROM ' + category);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(foods));
    }

});

Promise.resolve()
    .then(() => db.open('./menu.db', { Promise }))
    .catch((err) => console.error(err.stack))
	.finally(() => app.listen(app.get('port'),
				  () => console.log('App running on port', app.get('port'))));

