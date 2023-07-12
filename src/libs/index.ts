/*---------abilities index----------*/

const liderazgo = {name:'Liderazgo', color:'#3454DF'};
const empatia = {name:'Empatia', color:'#6FF64E'};
const comunicacion = {name:'Comunicacion', color:'#4EF675'};
const proactivo = {name:'Proactivo', color:'#FA6A45'};
const Adaptable = {name:'Adaptable', color:'#F0FA45'};
const Responsabilidad = {name:'Responsabilidad', color:'#FF4040'};

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