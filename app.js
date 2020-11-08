let moduloTareas = require('./tareas')
const process = require('process');

let comando = process.argv[2]

switch (comando) {
    case 'prueba' :
        console.log('ESTA ES UNA PRUEBA DE LO QUE HACE ARGV')    
    break
    case 'listar':
        let tareas = moduloTareas.leerJSON();
        console.log('---------------------------------------------')
        console.log('------------LISTA TE TAREAS------------------')
        console.log('---------------------------------------------')
        for (let index = 0; index < tareas.length; index++) {
            
           console.log('Titulo de la tarea: ' + tareas[index].titulo + ', con estado: ' +  tareas[index].estado)
        }
        break;
    case 'agregar' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        console.log('---------------------------------------------')
        console.log('------LA TAREA HA SIDO AGREGADA--------------')
        console.log('---------------------------------------------')
        break;
    case 'deshacer':
        moduloTareas.deshacer();
        console.log('---------------------------------------------')
        console.log('--------SE ELIMINÓ LA ÚLTIMA TAREA-----------')
        console.log('---------------------------------------------')
        break
    case 'filtrar':
        let filtro = process.argv[3]
        let tareasFiltradas = moduloTareas.filtrar(filtro);
        console.log('---------------------------------------------')
        console.log('----TAREAS FILTRADAS POR ' + filtro.toUpperCase() + '-----------')
        console.log('---------------------------------------------')
        tareasFiltradas.forEach(function(tarea){
            console.log('Titulo de la tarea: ' + tarea.titulo + ', con estado: ' +  tarea.estado)
        })
        break
    case 'buscar':
        let busqueda = process.argv[3]
        let resultadoDeLaBusqueda = moduloTareas.buscar(busqueda);
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