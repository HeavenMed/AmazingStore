const produtos_name = [ 'Minecraft' , 'GTA 5' , 'fORTNITE' , 'RedDead2' , 'Evil Within'  , 'Xadrez 2'  , 'Tetris' , 'PUBG' , 
'OverWatch' , 'WiiSports' , 'Pokemon R' , 'SMB' , 'Mario 2' , 'Pac-Man', 'Gunfire Reborn' ]


const produtos_valor = [ 190, 345 , 184 , 221 , 35, 12 ,46 ,124 , 754 , 456 ,345 , 345 ,341, 234 , 324 ]

const produtos_marca = ['Microsoft' , 'RockStarGames' , 'fORTNITE' , 'Rock' , 'EP Games'  , 'Xadrez Games'  , 'T1995 Studio' , 'PUB' , 
'MiC' , 'Nintendo' , 'Nintendo' , 'SMB' , 'NiTen' , 'Pac-Man', 'sTeam'

]


const gerarprodutos = () => {

    const listatotal = []

    for(let i = 1 ; i <= 15 ; i++) {
        const produtocard = `
            <li id="produtocard">
                <img style="width: 150px;height 40%;" src="/img/${i}.jfif">
                <h2> ${produtos_name[i]} </h2>
                <p>Custo com Desconto de Black Friday: ${produtos_valor[i]}</p>
                <p> Marca : ${produtos_marca[i]}</p>
            </li>
        `
        listatotal.push(produtocard)

        
    }

    const ul = document.querySelector('[data-js="cardsprodutos"]')
    ul.innerHTML = listatotal









}

gerarprodutos()