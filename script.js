const itens = [
    {
        img: './assets/img/painting/clock.jpg',
        name: 'Clock',
        price: 'R$ 50.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/gamepad.jpg',
        name: 'Gamepad',
        price: 'R$ 70.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/personagem.jpg',
        name: 'C-3PO',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/starwarsposter.jpg',
        name: 'Star Wars',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/interstellar.png',
        name: 'Interstellar',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/harrypotter.jpg',
        name: 'Harry Potter',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/pokemon.jpg',
        name: 'Pokémon',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/lordoftherings.jpg',
        name: 'Lord of the rings',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/suicidesquad.jpg',
        name: 'Suicide Squad',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/painting/ligadajustica.jpg',
        name: 'Liga da Justiça',
        price: 'R$ 80.00',
        type: 'Pintura',
    },
    {
        img: './assets/img/actions/animewoman.jpg',
        name: 'Alice',
        price: 'R$ 100.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Sayajin 2',
        price: 'R$ 150.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Baby Yoda',
        price: 'R$ 150.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/buzzlightyear.jpg',
        name: 'Buzz Lightyear',
        price: 'R$ 270.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/supermario.jpg',
        name: 'Super Mario',
        price: 'R$ 55.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/doctorstrange.jpg',
        name: 'Doctor Strange',
        price: 'R$ 300.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/katebishop.jpg',
        name: 'Kate Bishop',
        price: 'R$ 250.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/she-hulk.jpg',
        name: 'She-Hulk',
        price: 'R$ 150.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/moonknight.jpg',
        name: 'Moon Knight',
        price: 'R$ 300.00',
        type: 'Figura de Acao',
    },
    {
        img: './assets/img/actions/wanda.jpg',
        name: 'Scarlet Witch',
        price: 'R$ 400.00',
        type: 'Figura de Acao',
    },
]

const listFrames = [];
const listFigures  = [];

function separateItens(list){
    for(i = 0; i < list.length; i++){
        let listaInteira = list[i];
        let type = listaInteira.type;
        if(type == 'Pintura'){
            listFrames.push(listaInteira);
        }else if(type !== 'Pintura'){
            listFigures.push(listaInteira);
        }
    }
}  console.log(separateItens(itens));

function rowFrames(list){
    let list1 = document.querySelector('.pinturasAcao');
    for(i = 0; i < list.length; i++){
    let listFrames = list[i]
    let listItens2 = document.createElement('li');
    listItens2.setAttribute('class', 'card');

    let imgCard = document.createElement('img');
    imgCard.setAttribute('class','imgCard');
    imgCard.src = listFrames.img;
    imgCard.alt = listFrames.name;

    let imageTitle = document.createElement('h1');
    imageTitle.setAttribute('class', 'titleFigure');
    imageTitle.innerText = listFrames.name;

    let preco = document.createElement('p');
    preco.innerText = listFrames.price

    list1.appendChild(listItens2);
    listItens2.appendChild(imgCard);
    listItens2.appendChild(imageTitle);
    listItens2.appendChild(preco);
    }
} rowFrames(listFrames)

function rowFigures(list){
    let list1 = document.querySelector('.figurasAcao');
    for(i = 0; i < list.length; i++){
    let listaFiguras = list[i]
    let listItens = document.createElement('li');
    listItens.setAttribute('class', 'card');

    let imgCard = document.createElement('img');
    imgCard.setAttribute('class','imgCard');
    imgCard.src = listaFiguras.img;
    imgCard.alt = listaFiguras.name;

    let imageTitle = document.createElement('h1');
    imageTitle.setAttribute('class', 'titleFigure');
    imageTitle.innerText = listaFiguras.name;

    let preco = document.createElement('p');
    preco.innerText = listaFiguras.price

    list1.appendChild(listItens);
    listItens.appendChild(imgCard);
    listItens.appendChild(imageTitle);
    listItens.appendChild(preco);
    }
    
} rowFigures(listFigures);