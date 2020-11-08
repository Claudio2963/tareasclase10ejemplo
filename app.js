let moduloUsuarios = require('./usuarios')
const process = require('process');

let comando = process.argv[2]

switch (comando) {
    case 'prueba' :
        console.log('ESTA ES UNA PRUEBA DE LO QUE HACE ARGV')    
    break
    case 'listar':
        let usuarios = moduloUsuarios.leerJSON();
        console.log('---------------------------------------------')
        console.log('------------LISTA TE usuarios------------------')
        console.log('---------------------------------------------')
        for (let index = 0; index < usuarios.length; index++) {
            
           console.log('Titulo de la tarea: ' + usuarios[index].titulo + ', con estado: ' +  usuarios[index].estado)
        }
        break;
    case 'agregar' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloUsuarios.agregarTarea(titulo,estado)
        console.log('---------------------------------------------')
        console.log('------LA TAREA HA SIDO AGREGADA--------------')
        console.log('---------------------------------------------')
        break;
    case 'deshacer':
        moduloUsuarios.deshacer();
        console.log('---------------------------------------------')
        console.log('--------SE ELIMINÓ LA ÚLTIMA TAREA-----------')
        console.log('---------------------------------------------')
        break
    case 'filtrar':
        let filtro = process.argv[3]
        let usuariosFiltradas = moduloUsuarios.filtrar(filtro);
        console.log('---------------------------------------------')
        console.log('----usuarios FILTRADAS POR ' + filtro.toUpperCase() + '-----------')
        console.log('---------------------------------------------')
        usuariosFiltradas.forEach(function(tarea){
            console.log('Titulo de la tarea: ' + tarea.titulo + ', con estado: ' +  tarea.estado)
        })
        break
    case 'buscar':
        let busqueda = process.argv[3]
        let resultadoDeLaBusqueda = moduloUsuarios.buscar(busqueda);
        if(resultadoDeLaBusqueda.length == 0){
            console.log('---------------------------------------------')
            console.log('-----NO HUBIERON RESULTADOS DE ' + busqueda.toUpperCase() +'--------')
            console.log('---------------------------------------------')
        }else{
            console.log('---------------------------------------------')
            console.log('-----RESULTADO DE LA BUSQUEDA: ' + busqueda.toUpperCase() +'--------')
            console.log('---------------------------------------------')
            resultadoDeLaBusqueda.forEach(function(tarea){
                console.log('Titulo de la tarea: ' + tarea.titulo + ', con estado: ' +  tarea.estado)
            })
        }
        break
    case undefined :
        
        console.log(`Tenés que utilizar alguno de los siguientes comandos:
        - listar
        - prueba
        - deshacer
        - agregar
        - filtrar
        - buscar
        `)
        break
    default:
        console.log('---------------------------------------------')
        console.log('-----ESTE COMANDO NO ESTÁ DISPONIBLE---------')
        console.log('---------------------------------------------')
        break;
}