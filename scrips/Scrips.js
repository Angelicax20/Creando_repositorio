reaload = () => {


    var formBus = document.getElementById("frmEnviar")
    var forNom = document.getElementById("#BotonNombre")
    var forID = document.getElementById("#BotonId")
    var forCan = document.getElementById("#BotonCantidad")
    const boton1 = document.querySelector("#BotonLista");

    formBus.onsubmit = (e) => {
        e.preventDefault();

        buscarNOMBRE = forNom.value;
        fetchKantoPokemon(buscarNOMBRE);
    }

    formBus.onsubmit = (e) => {
        e.preventDefault();

        buscarID = forID.value;
        fetchKantoPokemon(buscarID);
    }

    //funcional desordenado
    boton1.addEventListener("click", function(evento) {
        cantidadPokemon(10)

        style
    });

    fetchKantoPokemon = (buscarNOMBRE) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${buscarNOMBRE}`)
            .then(response => response.json())
            .then(function(allpokemon) {
                console.log(allpokemon);
                if (!Array.allpokemon) {
                    atributosPokemon(allpokemon, buscarNOMBRE)
                }

            })
    }

    fetchKantoPokemon = (buscarID) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${buscarID}`)
            .then(response => response.json())
            .then(function(allpokemon) {
                if (!Array.allpokemon) {
                    atributosPokemon(allpokemon, buscarID)
                }

            })
    }

    cantidadPokemon = (buscarCantidad) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${buscarCantidad}`)
            .then(response => response.json())
            .then(function(allpokemon) {
                allpokemon.results.forEach(function(pokemon) {
                    getPokemonData(pokemon);
                })
            })
    }


    getPokemonData = (pokemon) => {

        fetch(pokemon.url)
            .then(response => response.json())
            .then(function(dataPokemon) {
                console.log(dataPokemon)
                imagePokemon(dataPokemon)
            })
    }

    imagePokemon = (allpokemon) => {

        let seccionPokemon = document.getElementById("seccion_pokemon")
        let id = document.createElement('h6')
        let pokeImage = document.createElement('img')
        let nombre = document.createElement('p')
        let listaul = document.createElement('ul')
        let experiencia = document.createElement('h5')
        let altura = document.createElement('h5')

        id.classList.add('h6');
        nombre.classList.add('texto');
        experiencia.classList.add('h6');
        altura.classList.add('h6');

        id.textContent = 'ID: ' + allpokemon.id;
        experiencia.textContent = 'Experiencia: ' + allpokemon.base_experience;
        altura.textContent = 'Altura: ' + allpokemon.height;

        nombre.textContent = allpokemon.name;
        pokeImage.srcset = allpokemon.sprites.front_default;
        pokeImage.style.width = "100px";
        seccionPokemon.append(id, pokeImage, experiencia, altura, nombre)

    }

    atributosPokemon = (allpokemon, buscarID) => {

        let lista = document.getElementById("lista-pokemon")
        let imagen = lista.getElementsByTagName("img")[0]
        let nombre = lista.getElementsByTagName("p")[0]
        let experiencia = lista.getElementsByTagName("h5")[0]
        let id = lista.getElementsByTagName("h6")[0]
        imagen.setAttribute("src", allpokemon.sprites.front_default)
        nombre.textContent = allpokemon.name;
        id.textContent = 'ID: ' + allpokemon.id;

        var listaul = document.getElementById("ulListado");
        document.getElementById("habilidades").innerHTML = 'Habilidades';
        allpokemon.abilities.forEach(function(pokemon) {
            console.log(pokemon.ability.name)

            var linew = document.createElement("li");
            var contenido = document.createTextNode(pokemon.ability.name);
            listaul.appendChild(linew);
            linew.appendChild(contenido);

        })

    }

    /*
    fetchKantoPokemon = () => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(function(allpokemon) {
                allpokemon.results.forEach(function(pokemon) {
                    getPokemonData(pokemon);
                    console.log(pokemon)
                })
            })
    }
    fetchKantoPokemon();*/

}