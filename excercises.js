/**
 * 1. La función createTable recibe como parámetro
 * un arreglo de usuarios dónde cada uno tiene "id" y "name".
 * 
 *  Realizar la implementación para regresar un <table> de HTML con 
 *  la columna del ID y NOMBRE. 
 * 
 *  <table>
 *    <thead>
 *    </thead>
 *    <tbody>
 *    </tbody>
 *  </table>
 */

const bloq = document.getElementById('table');

function createTable(users) {
    var body = document.getElementsByTagName("body")[0];
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (key of users) {
        // console.log(key.id)
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        let texto = document.createTextNode(key.id);
        let texto2 = document.createTextNode(key.name);
        td.appendChild(texto);
        td.appendChild(texto2);
        tr.appendChild(td);
        tr.append();
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", "2");
}

createTable([
    {
        id: 1,
        name: "Jorge"
    },
    {
        id: 2,
        name: "Francisco"
    }
]);

/**
 * 2. La función minMax recibe un arreglo de números.
 * 
 *  Realizar la implementación para regresar en un objeto el número
 *  mínimo y el número máximo.
 */

function minMax(array) {
    var min = Math.min.apply(null, array),
    max = Math.max.apply(null, array);
    // console.log(min, max)
    const obj = {
        min: min,
        max: max
    }
    return console.log(obj);
}

minMax([1, 2, 3, -100]); // { min: -100, max: 3 }

/**
 * 3. La función unique recibe un arreglo de números.
 * 
 * Realizar la implementación para regresar los elementos únicos del arreglo.
 */
function unique(array) {
    return console.log(array.filter((value,index,array) => array.indexOf(value)===index));
}

unique([1, 1, 1, 1, 2, 2, 2, 10, 2, 2, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4]); // [1,2,3,4]