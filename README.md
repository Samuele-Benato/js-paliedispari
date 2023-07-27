# TRACCIA

## Palidroma (Istruzioni)

- Chiedere all'utente di inserire una parola

- Creare una funzione per capire se la parola inserita è palindroma

## Palidroma (Svolgimento)

- Chiedo una parola all'utente
- Creo una **FUNZIONE** per controllare :
  - **SE** le lettere una ad una sono uguali
    - Il numero è palidromo
  - **ALTRIMENTI**
    - Non è palindromo

## Pari e Dispari (Istruzioni)

- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

- Sommiamo i due numeri

- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

- Dichiariamo chi ha vinto.

## Pari e Dispari (Svolgimento)

- Creo due opzioni di scelta

  - pulsante pari
  - pulsante dispari

- Chiedere di inserire un numero da 1 a 5

- Creo una **FUNZIONE**
  - Con Math.floor(Math.random()\*(max-min)) + min; genero un numero casuale
  - sommo il numero casuale con il numero scelto dall'utente
  - return con la somma
- **SE** la somma è pari **E** l'utente ha scelto pari
  - l'utente ha vinto
    \_ **ALTRIMENTI SE** la somma è dispari e l'utente ha scelto dispari
  - L' utente ha vinto
- **ALTRIMENTI**
  - l'utente ha perso
