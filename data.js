const movies = [
	{
		id: 'c1758fd3-82c2-4c35-b4e7-b9e78b37a0c2',
		title: 'The Secret Garden',
		year: 2020,
		genreId: 'a5c3e8b1-8502-4e7e-891b-d30a756a8ad4',
		director: 'Marc Munden',
	},
	{
		id: '7a93ab49-8600-4a70-a04b-28f3cc459fe0',
		title: "Harry Potter and the Philosopher's Stone",
		year: 2001,
		genreId: 'a5c3e8b1-8502-4e7e-891b-d30a756a8ad4',
		director: 'Chris Columbus',
	},
	{
		id: '82e85b7f-ae47-4c0c-9732-28b2f689c0b0',
		title: 'Inception',
		year: 2010,
		genreId: '802cbb0e-bf47-49a6-beca-6f22f0d50f88',
		director: 'Christopher Nolan',
	},
	{
		id: '2a39fb4e-26fb-41a3-b7a5-d307e944ec48',
		title: 'The Shawshank Redemption',
		year: 1994,
		genreId: 'f5d5e8a2-c1ab-44e7-936d-d6e7bcfbf313',
		director: 'Frank Darabont',
	},
]

const genres = [
	{
		id: 'a5c3e8b1-8502-4e7e-891b-d30a756a8ad4',
		name: 'Fantasy',
	},
	{
		id: '802cbb0e-bf47-49a6-beca-6f22f0d50f88',
		name: 'Sci-Fi',
	},
	{
		id: 'f5d5e8a2-c1ab-44e7-936d-d6e7bcfbf313',
		name: 'Drama',
	},
]

module.exports = {
	movies,
	genres,
}
