const viaggiArray = [
  {
    id: 1,
    nome: "Tour delle Alpi",
    dataInizio: "01/06/2025",
    dataFine: "10/06/2025",
    immagine: "src/public/img/alpi.png",
    accompagnatori: [
      { id: 101, nome: "Giovanni", cognome: "Rossi" },
      { id: 102, nome: "Maria", cognome: "Bianchi" },
    ],
    listaTuristi: [
      { id: 201, nome: "Luca", cognome: "Verdi", email: "luca.verdi@mail.com", codiceFiscale: "LV12345678A", numeroCellulare: "3331234001" },
      { id: 202, nome: "Anna", cognome: "Neri", email: "anna.neri@mail.com", codiceFiscale: "AN23456789B", numeroCellulare: "3331234002" },
      { id: 211, nome: "Carlo", cognome: "Benedetti", email: "carlo.benedetti@mail.com", codiceFiscale: "CB34567890C", numeroCellulare: "3331234003" },
      { id: 212, nome: "Serena", cognome: "Fabbri", email: "serena.fabbri@mail.com", codiceFiscale: "SF45678901D", numeroCellulare: "3331234004" },
      { id: 221, nome: "Matteo", cognome: "Colombo", email: "matteo.colombo@mail.com", codiceFiscale: "MC56789012E", numeroCellulare: "3331234005" },
      { id: 222, nome: "Elisa", cognome: "Marchi", email: "elisa.marchi@mail.com", codiceFiscale: "EM67890123F", numeroCellulare: "3331234006" },
    ]
  },
  {
    id: 2,
    nome: "Tour della Costa",
    dataInizio: "15/07/2025",
    dataFine: "25/07/2025",
    immagine: "src/public/img/costa.png",
    accompagnatori: [
      { id: 103, nome: "Marco", cognome: "Ricci" },
      { id: 104, nome: "Elena", cognome: "Moretti" },
    ],
    listaTuristi: [
      { id: 213, nome: "Giovanni", cognome: "Rinaldi", email: "giovanni.rinaldi@mail.com", codiceFiscale: "GR78901234G", numeroCellulare: "3331234007" },
      { id: 214, nome: "Chiara", cognome: "Galli", email: "chiara.galli@mail.com", codiceFiscale: "CG89012345H", numeroCellulare: "3331234008" },
      { id: 223, nome: "Andrea", cognome: "Russo", email: "andrea.russo@mail.com", codiceFiscale: "AR90123456I", numeroCellulare: "3331234009" },
      { id: 224, nome: "Giada", cognome: "Serafini", email: "giada.serafini@mail.com", codiceFiscale: "GS01234567J", numeroCellulare: "3331234010" },
    ]
  },
  {
    id: 3,
    nome: "Viaggio nelle Dolomiti",
    dataInizio: "10/08/2025",
    dataFine: "20/08/2025",
    immagine: "src/public/img/dolomiti.png",
    accompagnatori: [
      { id: 105, nome: "Luca", cognome: "Serra" },
    ],
    listaTuristi: [
      { id: 215, nome: "Francesco", cognome: "De Luca", email: "francesco.deluca@mail.com", codiceFiscale: "FD12345678K", numeroCellulare: "3331234011" },
      { id: 216, nome: "Martina", cognome: "Conti", email: "martina.conti@mail.com", codiceFiscale: "MC23456789L", numeroCellulare: "3331234012" },
      { id: 225, nome: "Alessio", cognome: "Pellegrini", email: "alessio.pellegrini@mail.com", codiceFiscale: "AP34567890M", numeroCellulare: "3331234013" },
      { id: 226, nome: "Valeria", cognome: "Fontana", email: "valeria.fontana@mail.com", codiceFiscale: "VF45678901N", numeroCellulare: "3331234014" },
    ]
  },
  {
    id: 4,
    nome: "Esplorando la Sicilia",
    dataInizio: "05/09/2025",
    dataFine: "15/09/2025",
    immagine: "src/public/img/sicilia.png",
    accompagnatori: [
      { id: 106, nome: "Giorgio", cognome: "Ferrari" },
      { id: 107, nome: "Sara", cognome: "Romano" },
    ],
    listaTuristi: [
      { id: 217, nome: "Paolo", cognome: "Mancini", email: "paolo.mancini@mail.com", codiceFiscale: "PM56789012O", numeroCellulare: "3331234015" },
      { id: 218, nome: "Giulia", cognome: "Santoro", email: "giulia.santoro@mail.com", codiceFiscale: "GS67890123P", numeroCellulare: "3331234016" },
      { id: 227, nome: "Daniele", cognome: "Greco", email: "daniele.greco@mail.com", codiceFiscale: "DG78901234Q", numeroCellulare: "3331234017" },
      { id: 228, nome: "Sara", cognome: "Rizzi", email: "sara.rizzi@mail.com", codiceFiscale: "SR89012345R", numeroCellulare: "3331234018" },
    ]
  },
  {
    id: 5,
    nome: "Avventura in Sardegna",
    dataInizio: "01/10/2025",
    dataFine: "12/10/2025",
    immagine: "src/public/img/sardegna.png",
    accompagnatori: [
      { id: 108, nome: "Alessandro", cognome: "De Angelis" },
      { id: 109, nome: "Valentina", cognome: "Borelli" },
    ],
    listaTuristi: [
      { id: 219, nome: "Federico", cognome: "Leone", email: "federico.leone@mail.com", codiceFiscale: "FL90123456S", numeroCellulare: "3331234019" },
      { id: 220, nome: "Silvia", cognome: "Riva", email: "silvia.riva@mail.com", codiceFiscale: "SR01234567T", numeroCellulare: "3331234020" },
      { id: 229, nome: "Nicola", cognome: "Barbieri", email: "nicola.barbieri@mail.com", codiceFiscale: "NB12345678U", numeroCellulare: "3331234021" },
      { id: 230, nome: "Elena", cognome: "Ferraro", email: "elena.ferraro@mail.com", codiceFiscale: "EF23456789V", numeroCellulare: "3331234022" },
    ]
  }
];

export default viaggiArray;