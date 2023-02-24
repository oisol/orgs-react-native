import logo from "../../assets/logo.png"

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

// Items
const cart = {
    header: {
        title: "Detalhe da cesta"
    },
    details: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha.",
        preco: "40,00",
        button: "Comprar"
    },
    items: {
        title: "Itens da cesta",
        list: [
          {
            name: "Tomate",
            image: tomate,
          },
          {
            name: "Brócolis",
            image: brocolis,
          },
          {
            name: "Batata",
            image: batata,
          },
          {
            name: "Pepino",
            image: pepino,
          },
          {
            name: "Abóbora",
            image: abobora,
          }
        ]
    }
};



export default cart;