const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//creo arrays vacios
			characters: [],
			planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// Creo la función que va a traer de la API los datos de people
			loadCharactersData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					//almacenará los data.results que son los datos de los personajes en store.characters
					.then(data => setStore({ characters: data.results }));
			},
			loadPlanetsData: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
