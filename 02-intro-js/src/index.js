//IMPORT EXPORT
import {heroes, Heroes} from './data/heroes';

const getHeroeById=(id)=>heroes.find((heroe)=>{
    if (heroe.id===id){return true;}
    else {return false;}
})
const getHeroeByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner);

//PROMESAS JS
const getHeroeByIdAsync = (id)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const p1 = getHeroeById(id);
            resolve(p1);
        }, 2000);
    });
}

getHeroeByIdAsync(10).then(heroe=>console.log('Heroe: ', heroe)).catch(console.warn);

//FETCH API

const apiKey = uCwNFMLKG0i2snIo96JWvLfv46YcOoig;

//DESESTRUCTURACION DE OBJETOS Y FUNCIONES FLECHA
const saludar = (nombre)=> `Hola ${nombre}`;

const getUsuarioActivo = (nombre) => ({
    uid:'abc123',
    uname: nombre,
});

const persona = {
    nombre : 'Tony',
    edad:45,
    clave:'ironman',
};

const useContext = ({clave,nombre,edad})=> ({nombreClave:clave, anios:edad, latLng:{lat:5.678,lng:-0.3467}});

const {nombreClave, anios, latLng:{lat,lng}} = useContext(persona);

const useState = (valor)=> [valor, () => console.log("Hola mundo")]; 

const [nombre, setNombre] = useState('Goku');