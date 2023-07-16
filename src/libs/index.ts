/*---------abilities index----------*/

const liderazgo = {name:'Liderazgo', color:'#3454DF', description:'si'};
const empatia = {name:'Empatia', color:'#6FF64E', description:'Me preocupo tanto por la integridad fisica asi como tambien emocional de mis compañeros, y mayormente soy un conciliador en cada incidente, asi como tambien practico muy bien la escucha activa 💜'};
const comunicacion = {name:'Comunicacion', color:'#4EF675',description:'Soy una persona muy comunicativa, puedo hablar de lo bueno y lo malo e intento ser lo más transparente posible 🤝'};
const proactivo = {name:'Proactivo', color:'#FA6A45',description:'Siempre busco algo nuevo que aprender y proponer, me encanta participar e intercambiar ideas.'};
const Adaptable = {name:'Adaptable', color:'#FFEC6F', description:'Adaptarse a los problemas es un camino complejo, porque conlleva a ponerte a prueba una vez más. Me gustan los retos que ello produce, por eso mismo me fascina el mundo IT. Es muy cambiante ✨'};
const Responsabilidad = {name:'Responsabilidad', color:'#FFACAC', description:'Para mi es la base de todo. Nada mas importante que un compromiso.'};

export const abilities = [
    liderazgo,
    empatia,
    comunicacion,
    proactivo,
    Adaptable,
    Responsabilidad
]

/*-------------URL---------------*/

export const url = process.env.SITE_URL? process.env.SITE_URL : 'http://localhost:3000/'
export const gitHubLink = 'https://github.com/irichardo/'