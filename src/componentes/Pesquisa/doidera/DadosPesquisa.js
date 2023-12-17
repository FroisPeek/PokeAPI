const url = 'https://pokeapi.co/api/v2/pokemon?limit=99'

function Pokemon() {
    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(allPokemon => {
            const data = allPokemon.data
            console.log(data)
            let pokemon = [];

            // Usando Promise.all para esperar por todas as chamadas assíncronas
            Promise.all(allPokemon.results.map((val) =>
                fetch(val.url)
                    .then(response => response.json())
                    .then(pokeSingle => ({
                        nome: val.name,
                        imagem: pokeSingle.sprites.front_default
                    }))
            ))
                .then(pokemonArray => {
                    // Adicionando os resultados ao array pokemon
                    pokemon = pokemonArray;

                    let poke_boxes = document.querySelector('.pokemon-boxes');
                    poke_boxes.innerHTML = '';

                    pokemon.forEach((val) => {
                        poke_boxes.innerHTML += `
                        <div class="pokemon">
                            <img src="${val.imagem}">
                            <p>${val.nome}</p>
                        </div>
                    `;
                    });

                    // Agora você pode fazer operações no array pokemon após todas as chamadas assíncronas
                    pokemon.forEach((val) => {
                        console.log(val.nome);
                    });
                })
                .catch(error => {
                    console.error('Erro ao buscar dados da API:', error);
                });
        });
}

export default Pokemon;
