// Función que recibe un array y devuelve el numero promedio, siempre par.
function median(arr) {
    const mid = Math.floor(arr.length / 2);
    const nums = [...arr].sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

//Funcion que recibe los gastos realizados y los días en los que se gasta
//Itera sobre los gastos, compara con los proximos.
//Devuelve la cantidad de notificaciones 
function activityNotifications(expenditure, d) {
    let count = 0;
    for (let i = d; i < expenditure.length; i++){
        const med = median(expenditure.slice(i-d, i));
        if (expenditure[i] >= 2 * med){
            count++;
        }
    }
    return count;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))

//Para ejecutarlo debe tener intalado NodeJS (Framework de Javascript)
//En la consola, con la ruta de este directorio, escribir 'node test.js'