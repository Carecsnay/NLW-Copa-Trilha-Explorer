function changeTheme() {
    b = "blue";
    g = "green";
    y = "yellow";
    
    if(document.body.classList.contains(y)) {
        document.body.classList.remove(y) & document.body.classList.add(b);
        return document.querySelector('#logo').innerHTML = `<img id="logo" src="./assets/logos/logo-${b}.svg" alt="logo">`;
    }

    if (document.body.classList.contains(b)) {
        document.body.classList.remove(b) & document.body.classList.add(g);
        return document.querySelector('#logo').innerHTML = `<img id="logo" src="./assets/logos/logo-${g}.svg" alt="logo">`
    }

    else if(document.body.classList.contains(g)) {
        document.body.classList.remove(g) & document.body.classList.add(y);
        return document.querySelector('#logo').innerHTML = `<img id="logo" src="./assets/logos/logo-${y}.svg" alt="logo">`

    }
}
    


function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/bgs/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}:00</strong>
        <img src="./assets/bgs/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4; //variável de controle para controlar as animações

function createCard(date, day, game) {
    delay = delay + 0.4; //incrementando variável
    
    return `
        <div class="card" style="animation-delay: ${delay}s"/> 
            <h2>${date}<span>${day}</span></h2>

            <ul>
                ${game}
            </ul>
        </div> 
    `
}

document.querySelector('#cards').innerHTML = 
        
        createCard("24/11", "Quinta", 
          
        createGame("Switzerland", "07", "Cameroon")     // Pra add jogos basta concatenar "+" depois de um createGame 
        + createGame("Uruguay", "10", "South-Korea") 
        + createGame("Portugal", "13", "Ghana")
        + createGame("Brazil", "16", "Serbia"))
    
        + //cria + um card
        
        createCard("28/11", "Segunda", 
        
        createGame("Cameroon", "07", "Serbia")
        + createGame("South-Korea", "10", "Ghana")
        + createGame("Brazil", "13", "Switzerland")
        + createGame("Uruguay", "16", "Portugal"))
    
        + //cria + um card
        
        createCard("02/12", "Sexta", 
        
        createGame("South-Korea", "12", "Portugal")
        + createGame("Ghana", "12", "Uruguay")
        + createGame("Serbia", "16", "Switzerland")
        + createGame("Brazil", "16", "Cameroon"))
        