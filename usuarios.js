const fs = require('fs'); //requiero el modulo file system

let moduloUsuarios = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let usuariosJson = fs.readFileSync(this.archivo,'utf-8');
        let listaDeusuarios = JSON.parse(usuariosJson)
        return listaDeusuarios
    }
}