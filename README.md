<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#il-progetto">Il progetto: Innovazione sportiva, startup, incentivi e cittadini connessi</a></li>
    <li><a href="#funzionalita">Funzionalità</a></li>
    <li><a href="#struttura">Struttura del codice</a><li>
    <li><a href="#link">Link</a></li>
    <li><a href="#utilizzo">Utilizzo</a></li>
    <li><a href="#contribuire">Contribuire</a></li>
    <li><a href="#contatti">Contatti</a></li>
  </ol>
</details>



<!-- IL PROGETTO -->
## Il progetto

Questo progetto è un'applicazione sviluppata in TypeScript che simula un sistema di interazione tra startup innovative nel settore sportivo, incentivi statali volti a promuovere l'innovazione e cittadini interessati a partecipare alle attività proposte da queste aziende.<br><br>

L'obiettivo è creare un modello in cui gli incentivi statali siano assegnati alle startup che rispettano i requisiti, stimolando lo sviluppo tecnologico e favorendo la crescita economica, mentre i cittadini traggono beneficio dalle attività e dai servizi innovativi offerti.<br><br>

L'applicazione dimostra come la tecnologia possa semplificare la gestione delle risorse pubbliche e incentivare la partecipazione attiva della comunità, rendendo accessibili sia le opportunità offerte dalle startup che i vantaggi degli incentivi statali.<br><br>


<!-- FUNZIONALITà -->
## Funzionalità

- **Assegnazione degli incentivi**: Gli incentivi vengono associati alle startup se queste soddisfano i criteri di eligibilità definiti (settore e limite massimo di fatturato).
L’assegnazione è automatizzata tramite un doppio ciclo che confronta incentivi e startup.
Per ogni incentivo se si verifica che una startup rispetta i criteri, l'incentivo viene assegnato alla startup.
- **Interazione con i cittadini**: I cittadini, definiti con nome, età e interessi, possono partecipare alle attività organizzate da specifiche startup.
I cittadini partecipano alle attività di alcune startup, con una semplice simulazione di interazione.


<!-- Struttura -->
## Struttura del codice

### Tipi e Interfacce

- **`IStartup`**: Interfaccia per le startup.
- **`IIncentivo`**: Interfaccia per gli incentivi.
- **`ICittadino`**: Interfaccia per i cittadini.

### Classi

- **`Startup`**: Implementa `IStartup` e gestisce le informazioni della startup, i suoi prodotti, e gli incentivi ricevuti.
- **`Incentivo`**: Implementa `IIncentivo` e gestisce l'assegnazione degli incentivi.
- **`Cittadino`**: Implementa `ICittadino` e rappresenta i cittadini interessati a partecipare alle attività delle startup.

### Flusso Principale

1. **Creazione di oggetti**:
   - Tre startup con settori e descrizioni differenti.
   - Tre incentivi con criteri di eleggibilità specifici.
   - Tre cittadini con interessi sportivi diversi.

2. **Assegnazione degli incentivi**:
   - Gli incentivi vengono assegnati alle startup che soddisfano i criteri di eleggibilità.

3. **Partecipazione alle attività**:
   - I cittadini partecipano alle attività delle startup.


<!-- LINK -->
## Link al sito 

**Clicca qui:** https://codepen.io/ElisabettaNale/pen/azooNxr?editors=0011


<!-- UTILIZZO -->
## Utilizzo

1. **Clona il repository:**
    ```bash
    git clone https://github.com/ElisabettaNale/innovazione_sportiva_typescript.git
    ```
2. **Compila il codice TypeScript**
    ```bash
    tsc app.ts
    ```

3. **Esegui il file JavaScript generato** 
    ```bash
    node app.js
    ```

<!-- CONTRIBUIRE -->
## Contribuire

Se desideri contribuire al progetto, segui questi passaggi: 

1. **Forka il repository su GitHub.**

2. **Crea un nuovo branch per le tue modifiche.**

3. **Invia una request per l'integrazione delle tue modifiche nel repository principale.**


<!-- CONTATTI -->
## Contatti

Per qualsiasi domanda o suggerimenti, puoi contattarmi tramite:

- **Sito web professionale:** [Sezione contatti](https://elisabettanale.github.io/pages/contacts.html)
- **Profilo LinkedIn:** [Elisabetta Nale](https://www.linkedin.com/in/elisabetta-nale/)