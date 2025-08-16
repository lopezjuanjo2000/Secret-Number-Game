# Secret-Number-Game

## Descripción

El programa ejecuta un juego en el que el usuario debe adivinar un número entre 1 y 10 generado de forma aleatoria. Adicionalmente, lleva el registro de la cantidad de intentos y proporciona pistas para ayudar al jugador. 
El proyecto fue desarrollado como parte de uno de los desafíos propuestos en Oracle Next Generation. Es construido en JavaScript (JS) y se integra con una interfaz HTML/CSS previamente proporcionada.

## Requisitos

Dado que JS ejecuta directamente en el navegador, solo es necesario copiar este repositorio:
```bash
https://github.com/lopezjuanjo2000/Secret-Number-Game.git
```

## Funcionamiento

1.	Una vez abierta la página web el código genera un numero aleatorio entre 1 y 10, y muestra un mensaje de presentación.
2.	El jugador debe introducir un numero en el rango previamente mencionado, tratando de adivinar el que fue generado previamente. 
3.	En caso de ser incorrecto, se muestra un mensaje de fallo, una pista (si el número secreto es mayor o menor) y la cantidad de intentos restantes. En caso contrario, muestra un mensaje de felicitación y el numero de intentos que le tomo al usuario acertar.
4.	En caso de haber acertado o alcanzado el máximo de intentos, se da la opción de iniciar un nuevo juego.  
5.	El programa lleva un registro del numero de intentos del usuario, del numero de intentos restantes, y de los números generados previamente para evitar que se repitan. Además, cuenta con una función que limpia la barra (input) en cada nuevo intento, nuevo juego, o si se introduce un valor que no corresponda con los valores del juego.

## Estructura

-	**index.html:** estructura principal de la interfaz (proporcionado).
-	**style.css:** estilos visuales (proporcionado).
-	**app.js:** lógica en JavaScript (desarrollada).

### Variables principales (JS)

-	**`secretNumber`:** almacena la función generateSecretNumber(), que genera el número secreto aleatorio entre 1 y 10. 
-	**`counter`:** contador de intentos del usuario.
-	**`usedNumbersList`:** array que almacena los numero generados en intentos anteriores.
-	**`maxNumber`:** determina el tamaño de la lista y el numero mas grande generado por el programa. 
-	**`maxAttempts:`** número máximo de intentos del usuario.
-	**`userNumber:`** valor introducido por el usuario, que será comparado con secretNumber para determinar el acierto o fallo. 

### Funciones (JS)

-	**`textElement (element, texto)`:** permite modificar el texto mostrado. Retorna un elemento de texto (string), que puede variar según sea el caso. 
-	**`generateSecretNumber ()`:** genera el número secreto aleatorio entre 1 y 10, registra los números ya generados, y reinicia el registro al alcanzar el máximo posible. 
-	**`cleanInput ()`:** reestablece el valor del input a “”.
-	**`gameStart ()`:** inicializa el programa. 
	- Llama a generateSecretNumber, a textElement para generar la presentación.
	- Establece un valor inicial para counter y maxAttempts.
-	**`userAttempt()`:** recibe el input del usuario para userNumber y lo compara con secretNumber para retornar un valor booleano de acierto o error y realizar los siguientes procesos según sea el caso:
	- Llama a textElement para mostrar un mensaje. 
	- Modifica los valores de counter y maxAttempts.
	-	Llama a  cleanInput en cada nuevo intento o si el valor del input no concuerda con el esperado.
	-	Deshabilita el botón intentar.
	-	Habilita el botón reiniciar. 
-	**`restart()`:** reinicia el programa y lo reestablece a sus valores iniciales. 
	-	Habilita el botón intentar.
	-	Deshabilita el botón reiniciar. 
	-	Llama a  cleanInput.
o	Llama a gameStart. 
