// Codigo Limpo pagina 46
// Extraia os blocos try/catch

function validNameByUser(name) {
    if(!name) throw new Error('Nome is not exits.');
    if(typeof name !== "string") throw new Error('Nome is not string.');
    if(name.length <= 3) throw new Error('Nome is short name.');
     
    return true
}
 
try {
    let isValidName = validNameByUser('123')
    if(isValidName) {
        console.log('Name is valid!')
    }
} catch (error) {
    console.log(error)
}




