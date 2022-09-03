
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@victoriano?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Victoriano Izquierdo</a> on <a href="https://unsplash.com/s/photos/decisions?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Demo: Condicionales

## Propósito

Ejercicio para demostrar la forma en la se puede controlar el flujo del programa utilizando condicionales

## Requerimientos funcionales

- (2 puntos) Utilizando el operador ternario, escribir una función que determine si una persona es mayor o menor de edad. La función deberá recibir como parámetro la edad y regresar un string con la leyenda "es mayor de edad" o "es menor de edad" según corresponda.
  - `esMayorOMenor(edad);`

- (1 punto) Utilizando la sentencia if, escribir una función que permita calcular el costo total de una venta. Para determinar el costo de deberá indicar el número de productos que se compra así como el costo unitario. Cuando el costo sea superior a los 2mil pesos se hará un descuento del 15%. La función recibirá como parámetros el número de productos y el costo unitario.
  - `costoTotal(productos, costo);`

- (1 punto) Utilizando la sentencia if, escribir una función que dados dos números diferentes determine cuál de ellos es el mayor. La función recibirá como parámetro dos números y deberá regresar el mayor.
  - `obtenerMayor(numero1, numero2);`

- (1 punto) Utilizando la sentencia if, escribir una función que reciba como parámetro un número y regrese 1 si el número es positivo, -1 si es negativo y 0 si es cero.
  - `esPositivo(numero);`

- (2 puntos) Utilizando la sentencia if, escribir una función que reciba una hora y regrese un mensaje tomando en cuenta las siguientes consideraciones:
  - antes de las 10:00: A desayunar!
  - antes de las 12:00: A almorzar!
  - antes de las 16:00: A comer!
  - antes de las 22:00:  A cenar!
  - después de las 22:00: A dormir!
  
  - `queToca(hora);`

- (1 punto) Utilizando la sentencia if, escribir una función que reciba tres números diferentes y regrese el mayor,
  - `obtenerMayor3(numero1, numero2, numero3);`

- (1 punto) Utilizando la sentencia if, escribir un programa que determine si un estudiante puede inscribirse a un curso o no. Para poder inscribirse el estudiante debe ser mayor de edad y presentar recibo de inscripción o credencial de elector.
  - `puedeInscribirse(edad, recibo, credencial);`

- (1 punto) Utilizando la sentencia switch, escribir una función que regrese la descripción de la categoría de na película de acuerdo a los siguientes criterios:
  - AA: Infantil
  - A: Todos
  - B: Adolescentes
  - C: Adultos
  - cualquier otro valor: No valido!
  - `descripcion(categoria);`

## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el ejercicio sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
