function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}:00</strong>
        <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div> 
    `
}

document.querySelector('#cards').innerHTML = 
        
          createCard("24/11", "Quinta", 
          
          createGame("Switzerland", "07", "Cameroon")
        + createGame("Uruguay", "10", "South Korea")  /* Pra add jogos basta concatenar "+" depois de um createGame */ 
        + createGame("Portugal", "13", "Ghana")
        + createGame("Brazil", "16", "Serbia") 

        )
    
        + //cria um card
        
        createCard("28/11", "Segunda", 
        
          createGame("Cameroon", "07", "Serbia")
        + createGame("South Korea", "10", "Ghana")
        + createGame("Brazil", "13", "Switzerland")
        + createGame("Uruguay", "16", "Portugal")

        )
    
        + //cria um card
        
        createCard("02/12", "Sexta", 
        
          createGame("South Korea", "12", "Portugal")
        + createGame("Ghana", "12", "Uruguay")
        + createGame("Serbia", "16", "Switzerland")
        + createGame("Brazil", "16", "Cameroon")
        
        )
