const fs = require('fs'); //requiero el modulo file system

let moduloUsuarios = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let UsuariosJson = fs.readFileSync(this.archivo,'utf-8');
        let listaDeUsuarios = JSON.parse(UsuariosJson)
        return listaDeUsuarios
    },
    agregarTarea : function(titulo,estado){
        let listaDeUsuarios = this.leerJSON();

        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        listaDeUsuarios.push(nuevaTarea)
        
        this.guardarJSON(listaDeUsuarios)

    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8');
        
    },
    deshacer : function(){
        let listaDeUsuarios = this.leerJSON();
        listaDeUsuarios.pop();
        
        this.guardarJSON(listaDeUsuarios);
    },
    filtrar : function(filtro){
        let listaDeUsuarios = this.leerJSON()
        let UsuariosFiltradas = listaDeUsuarios.filter(function(tarea) {
            return tarea.estado === filtro
        })
        return UsuariosFiltradas
    },
    buscar : function(busqueda){
        let listaDeUsuarios = this.leerJSON();
        let resultadoDeLaBusqueda = listaDeUsuarios.filter(function(tarea) {
            return tarea.titulo.includes(busqueda)
        })
        return resultadoDeLaBusqueda
    }
}

module.exports = moduloUsuarios