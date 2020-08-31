const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea por hacer', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}