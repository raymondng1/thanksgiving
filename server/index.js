const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');

async function syncAndSeedDatabase() {
	try {
		await db.sync({ force: true });
		//  Create some rows in your Person and Dish tables here
		//  to interact with your API using the `npm run start:watch`
		//  or `npm run start` commands.
		const People = [
			{ name: 'Mark', isAttending: true, includeDishes:true },
			{ name: 'Russell', isAttending: false },
			{ name: 'Ryan', isAttending: true, includeDishes:true}
		];
		const [Mark, Russell, Ryan] = await Promise.all(
			People.map(person => Person.create(person))
		);
		const dishes = [
			{
				name: 'turkey',
				description: 'delicious briney turkey',
				personId: Mark.id
			},
			{
				name: 'pie',
				description: 'delicious pumpkiney pie',
				personId: Ryan.id
			}
		];
		const [Turkey, Pie] = await Promise.all(
			dishes.map(dish => Dish.create(dish))
		);
	} catch (e) {
		console.log(e);
	}

	console.log('done seeding and associating!');
}

syncAndSeedDatabase().then(() => {
	app.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
});
