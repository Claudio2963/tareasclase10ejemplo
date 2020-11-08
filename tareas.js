const fs = require('fs'); //requiero el modulo file system

let moduloTareas = {
    archivo : './tareas.json',
    leerJSON : function(){
        let tareasJson = fs.readFileSync(this.archivo,'utf-8');
        let listaDeTareas = JSON.parse(tareasJson)
        return listaDeTareas
    },
    agregarTarea : function(titulo,estado){
        let listaDeTareas = this.leerJSON();

        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        listaDeTareas.push(nuevaTarea)
        
        this.guardarJSON(listaDeTareas)

    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8');
        
    },
    deshacer : function(){
        let listaDeTareas = this.leerJSON();
        listaDeTareas.pop();
        
        this.guardarJSON(listaDeTareas);
    },
    filtrar : function(filtro){
        let listaDeTareas = this.leerJSON()
        let tareasFiltradas = listaDeTareas.filter(function(tarea) {
            return tarea.estado === filtro
        })
        return tareasFiltradas
    },
    buscar : function(busqueda){
        let listaDeTareas = this.leerJSON();
        let resultadoDeLaBusqueda = listaDeTareas.filter(function(tarea) {
            return tarea.titulo.includes(busqueda)
        })
        return resultadoDeLaBusqueda
    }
}

module.exports = moduloTareas