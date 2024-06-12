//Tasks 1
//Last loop value

//What is the last value alerted by this code? Why?

/*
let i = 3;

while (i) {
  alert( i-- );
}
*/

//ANSWER:

/*
La respuesta es 1.
Por que i-- va disminuyendo las posiciones y la ultima posicion queda en 0. Lo cual seria i = 0; 

Si tenemos que i = 3; entonces seria 0 = 1;
*/





//Tasks 2
//Which values does the while loop show?

//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops alert the same values, or not?

//The prefix form ++i:

/*
let i = 0;
while (++i < 5) alert( i );

//The postfix form i++

let i = 0;
while (i++ < 5) alert( i );

*/

//ANSWER:

/*
++i < 5: Este es un incremento previo. Aquí, i se incrementa antes de que se realice la comparación. Por ejemplo, si i es inicialmente 0, se incrementará a 1 antes de la comparación con 5.

i++ < 5: Este es un incremento posterior. Aquí, i se incrementa después de que se realiza la comparación. Por lo tanto, si i es inicialmente 0, se comparará con 5 antes de incrementarse a 1.

el primer while tiene 4 iteraciones.
el segundo while tine 5 iteraciones.
*/






//Tasks 3
//Which values get shown by the "for" loop?

/*
For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

1- The postfix form:
*/

for (let i = 0; i < 5; i++) alert( i );

/*
2- The prefix form:
*/

for (let i = 0; i < 5; ++i) alert( i );

//ANSWER:

/*
Ambos iteran desde 0 a 4(ya que es menor a 5 en la condicion).
Ambas iteraciones iran aumentando de 1 en 1.
*/






//Tasks 4
//Output even numbers in the loop

//Use the for loop to output even numbers from 2 to 10.

//Run the demo

//ANSWER:

let numbers = 0;

for(let i = 1; i <= 5; i++){
  alert(numbers =  i * 2);
}




//Tasks 5
//Replace "for" with "while"

/*
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
*/

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

//ANSWER:

let i = 0;

while(i < 3){
  alert( `number ${i}!` );
  i++;
}







//Task 6
//Repeat until the input is correct

/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

Run the demo
*/

//ANSWER


let llamada = 0;

while(llamada < 100){
  llamada = prompt("Ingrese un numero mayor a 100:");
}





//Task 7
//Output prime numbers

/*
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/

//ANSWERS


