/*
Loops 1

In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided myArray and prints them out on the screen inside list items (i.e., <li> elements), which are appended to the provided list.
*/

const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here

for(let i=0; i < myArray.length; i++){
    list.innerHTML += `<li>${myArray[i]}</li>`;
}

// Don't edit the code below here!
/*
const section = document.querySelector('section');
section.appendChild(list);
*/





/*
Loops 2
In this next task, we want you to write a simple program that, given a name, searches an array of objects containing names and phone numbers (phonebook) and, if it finds the name, outputs the name and phone number into the paragraph (para) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the JavaScript object basics tutorial.

You are given three variables to begin with:

name — contains a name to search for
para — contains a reference to a paragraph, which will be used to report the results
phonebook - contains the phonebook entries to search.
You should use a type of loop that you've not used in the previous task.
*/

const name = 'Mustafa';

//const para = document.createElement('p');

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

// Add your code here

for (let entry of phonebook) {
    if (entry.name === name) {
        para.textContent = `${entry.name}: ${entry.number}`;
        break;
    }
}

// Don't edit the code below here!
/*
const section = document.querySelector('section');
section.appendChild(para);
*/

/*
for (let entry of phonebook) { ... }: Este es un bucle for...of que recorre cada objeto entry en el array phonebook. entry es una variable temporal que representa el objeto actual en el array durante cada iteración del bucle.


if (entry.name === name) { ... }: Esta es una declaración condicional if que compara el valor de entry.name (el nombre en la entrada actual del directorio telefónico) con el valor de name (el nombre que estás buscando). Si los dos nombres son iguales, entonces se ejecuta el código dentro de las llaves { ... }.


para.textContent = entry.name:{entry.number};: Si la condición del if es verdadera (es decir, si se encontró una coincidencia para el nombre), entonces esta línea establece el contenido de texto del elemento párrafo para para mostrar el nombre y el número de teléfono de la entrada actual. Utiliza la sintaxis de las plantillas de cadenas de texto (template strings) para insertar los valores de entry.name y entry.number en una cadena de texto.


break;: Esta es una declaración break que termina el bucle inmediatamente. Esto significa que una vez que se ha encontrado una coincidencia para el nombre, no hay necesidad de seguir buscando en el resto del directorio telefónico, por lo que el bucle se detiene.
*/






/*
Loops 3
In this final task, you are provided with the following:

i — starts off with a value of 500; intended to be used as an iterator.
para — contains a reference to a paragraph, which will be used to report the results.
isPrime() — a function that, when passed a number, returns true if the number is a prime number, and false if not.
You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided isPrime() function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's textContent along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.
*/

let i = 500;

const para = document.createElement('p');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Add your code here

while (i >= 2) {
    if (isPrime(i)) {
        para.textContent += `${i} `;
    }
    i--;
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);

/*
while (i >= 2) { ... }: Este es un bucle while que se ejecuta mientras la condición i >= 2 sea verdadera. En otras palabras, el bucle continuará ejecutándose siempre que i sea igual o mayor a 2.

if (isPrime(i)) { ... }: Dentro del bucle while, esta es una declaración condicional if que se ejecuta si la función isPrime(i) devuelve true. La función isPrime(i) verifica si el número i es un número primo.

para.textContent += ${i} ;: Si isPrime(i) es true (es decir, si i es un número primo), entonces esta línea añade el número i al contenido de texto del elemento párrafo para. El operador += añade el valor de i al final del contenido de texto actual de para.

i--;: Esta es una operación de decremento que reduce el valor de i en 1 en cada iteración del bucle. Esto significa que en cada vuelta del bucle, i se reduce en 1, y el bucle while verifica los números en orden descendente desde 500 hasta 2.
*/