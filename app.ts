//////////////////////////////////////////////////////
// Definizione tipologi di dato, interfacce e classi
//////////////////////////////////////////////////////

// Tipo criteriEligibilita
type criteriEligibilita = {
    fatturatoMax: number;
    settore: string;
};
   
// Interfaces
interface IStartup {
    nome: string;
    settore: string;
    descrizione: string;
    prodotti: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
    id: number;
    descrizione: string;
    criteriEligibilita: criteriEligibilita;
    assegnaAStartup(startup: IStartup): void;
}

interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    partecipaAttivita(startup: IStartup): void;
}

// Classi
class Startup implements IStartup {

    nome: string;
    settore: string;
    descrizione: string;
    prodotti: string[];
    fatturato: number;
    incentiviRicevuti: IIncentivo[];

    constructor(nome: string,
                settore: string,
                descrizione: string,
                prodotti: string[],
                fatturato: number
    ) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
        this.fatturato = fatturato;
        this.incentiviRicevuti = [];
        console.log(`${this.nome} opera nel settore ${this.settore}.\n${this.descrizione}\nProdotti: ${this.prodotti.join(", ")}.\nFatturato: ${this.fatturato}€.`);
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        this.incentiviRicevuti.push(incentivo);
        console.log(`Startup ${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione}.`);
    };

}

class Incentivo implements IIncentivo {
   
    id: number;
    descrizione: string;
    criteriEligibilita: criteriEligibilita;

    constructor(id: number,
                descrizione: string,
                criteriEligibilita: criteriEligibilita
    ) {
        this.id = id;
        this.descrizione = descrizione;
        this.criteriEligibilita = criteriEligibilita;
        console.log(`Incentivo nr. ${this.id}.\n${this.descrizione}\nCriteri di eligibilità: settore ${this.criteriEligibilita.settore} e fatturato < ${this.criteriEligibilita.fatturatoMax}€.`);
    }

    verificaEligibilita(startup: Startup): boolean {
        return this.criteriEligibilita.settore === startup.settore &&
               startup.fatturato < this.criteriEligibilita.fatturatoMax;
    }

    assegnaAStartup(startup: IStartup): void {
        console.log(`L'incentivo ID ${this.id} è stato assegnato alla startup ${startup.nome}.`);
    }

}

class Cittadino implements ICittadino {
    
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    constructor(nome: string,
                cognome: string,
                eta: number,
                interessiSportivi: string[]
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
        console.log(`${this.nome} ${this.cognome} ha ${this.eta} anni ed è interessato a ${this.interessiSportivi.join(", ")}.`);
    }

    partecipaAttivita(startup: IStartup): void {
        console.log(`${this.nome} ${this.cognome} partecipa alle attività promosse da ${startup.nome}.`);
    }
}


//////////////////////////////////////////////////////
// Dettagli degli oggetti
//////////////////////////////////////////////////////

// Startup 1: SenseWear
let nome1: string = "SenseWear";
let settore1: string = "wearable-tech"
let descrizione1: string = `Sviluppa dispositivi indossabili intelligenti per il monitoraggio semplice e quotidiano del proprio corpo.`;
let prodotti1: string[] = ["smartwatch", 
                           "soletta smart", 
                           "anelli smart", 
                           "fasce multisensore",
                           "maglietta multisensore"];
let fatturato1: number = 15000000;

// Startup2: InjuryGuard
let nome2: string = "InjuryGuard";
let settore2: string = "AI-driven injury prevention";
let descrizione2: string = `Utilizza l'intelligenza artificiale e l'analisi dei dati per prevenire infortuni e rendere l'allenamento più sicuro ed efficace.`
let prodotti2: string[] = ["smart dashboard per l'allenamento",
                           "smart dashboard per il recupero",
                           "smart dashboard per la riabilitazione",
                           "smart dashboard per la prevenzione"]
let fatturato2: number = 5000000;

// Startup3: HomeFit
let nome3: string = "HomeFit";
let settore3: string = "digital fitness";
let descrizione3: string = `Offre una piattaforma di fitness interattivo con lezioni virtuali per allenarsi comodamente da casa in modo personalizzato e coinvolgente.`
let prodotti3: string[] = ["videolezioni di corsi",
                           "videolezioni di esercizi singoli",
                           "consulenza individuale online",
                           "contenuti educativi sull'alimentazione"]  
let fatturato3: number = 2000000;  

// Incentivo 1
let id1: number = 1;
let spiegazione1: string = `Finanziamento a fondo perduto per favorire l'adozione di algoritmi di intelligenza artificiale.`;
let criteriEligibilita1: criteriEligibilita = {fatturatoMax: 100000000, 
                                               settore: "AI-driven injury prevention"};

// Incentivo 2
let id2: number = 2;
let spiegazione2: string = `Esonero dalle imposte sul reddito. Favorire l'innovazione tecnologica`;
let criteriEligibilita2: criteriEligibilita = {fatturatoMax: 10000000, 
                                               settore: "AI-driven injury prevention"};

// Incentivo 3
let id3: number = 3;
let spiegazione3: string = `Detrazioni fiscali sulle spese di sviluppo di software.`
let criteriEligibilita3: criteriEligibilita = {fatturatoMax: 10000000, 
                                               settore: "digital fitness"};
   
// Cittadino 1
let nomePersona1: string = "Mario";
let cognomePersona1: string = "Rossi";
let eta1: number = 25;
let interessiSportivi1: string[] = ["snowboard", 
                                    "sollevamento pesi",
                                    "calcio"];

// Cittadino 2
let nomePersona2: string = "Marco";
let cognomePersona2: string = "Bianchi";
let eta2: number = 63;
let interessiSportivi2: string[] = ["pilates", 
                                    "ginnastica dolce",
                                    "yoga"];

// Cittadino 3
let nomePersona3: string = "Luigi";
let cognomePersona3: string = "Verdi";
let eta3: number = 38;
let interessiSportivi3: string[] = ["automobilismo", 
                                    "motociclismo"];


//////////////////////////////////////////////////////
// Main
//////////////////////////////////////////////////////

// Istanze
console.log("STARTUPs")
let startup1: Startup = new Startup(nome1,
                                    settore1,
                                    descrizione1,
                                    prodotti1,
                                    fatturato1);
let startup2: Startup = new Startup(nome2,
                                    settore2,
                                    descrizione2,
                                    prodotti2,
                                    fatturato2);
let startup3: Startup = new Startup(nome3,
                                    settore3,
                                    descrizione3,
                                    prodotti3,
                                    fatturato3); 
console.log("INCENTIVI")
let incentivo1: Incentivo = new Incentivo(id1,
                                          spiegazione1,
                                          criteriEligibilita1);  
let incentivo2: Incentivo = new Incentivo(id2,
                                          spiegazione2,
                                          criteriEligibilita2);  
let incentivo3: Incentivo = new Incentivo(id3,
                                          spiegazione3,
                                          criteriEligibilita3); 
console.log("CITTADINI")
let cittadino1: Cittadino = new Cittadino(nomePersona1,
                                          cognomePersona1,
                                          eta1,
                                          interessiSportivi1);
let cittadino2: Cittadino = new Cittadino(nomePersona2,
                                          cognomePersona2,
                                          eta2,
                                          interessiSportivi2);   
let cittadino3: Cittadino = new Cittadino(nomePersona3,
                                          cognomePersona3,
                                          eta3,
                                          interessiSportivi3);    
                                          
// Assegnazione incentivi
console.log("ASSEGNAZIONE INCENTIVI");
let startups: Startup[] = [startup1, startup2, startup3];
let incentivi: Incentivo[] = [incentivo1, incentivo2, incentivo3];
for (let incentivo of incentivi) {
    for (let startup of startups) {
        if (incentivo.verificaEligibilita(startup)) {
            incentivo.assegnaAStartup(startup);
            startup.riceviIncentivo(incentivo);
        }
    }
};

// Partecipazione cittadini alle attività proposte
console.log("PARTECIPAZIONE CIITADINI ALLE ATTVITA' PROPOSTE");
cittadino1.partecipaAttivita(startup2);
cittadino2.partecipaAttivita(startup3);
cittadino3.partecipaAttivita(startup2);                                                                                              