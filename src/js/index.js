const menuListOptions = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.card-pokemon');

menuListOptions.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // selecionando o card com a classe .open e removendo-a no cliquye
        const openCard = document.querySelector('.open')
        openCard.classList.remove('open')

        // Pegando o ID do pokemon selecionado
        const idSelectedPokemon = pokemon.attributes.id.value

        // selecionando o id do card a ser aberto, selecionando o card e adicionando a classe .open
        const pokemonIdToOpen = 'card-' + idSelectedPokemon
        const openingCard = document.getElementById(pokemonIdToOpen)
        openingCard.classList.add('open')

        // Selecionando o botão com a classe .active e excluindo a classe
        const activeListButton = document.querySelector('.active')
        activeListButton.classList.remove('active')

        // Selecionando o id do botão clicado e adicionando a classe .active
        const activateListButton = document.getElementById(idSelectedPokemon)
        activateListButton.classList.add('active')
    })
})