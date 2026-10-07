// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
console.log("╔══════════════════════════════════════════════════════╗");
console.log("║                  C O N S O L E   L O G               ║");
console.log("╠══════════════════════════════════════════════════════╣");
console.log("║                                                      ║");
console.log("║  [12:04:17] SYSTEM     :: WARNING                    ║");
console.log("║  [12:04:18] SECURITY   :: BREACH DETECTED            ║");
console.log("║  [12:04:19] SERVER     :: CONNECTION LOST            ║");
console.log("║                                                      ║");
console.log("║  >>> U C I E C Z K A   Z   S E R W E R O W N I <<<   ║");
console.log("║                                                      ║");
console.log("║  [12:04:23] EXIT       :: ACCESS DENIED              ║");
console.log("║  [12:04:24] SYS POWER  :: 10 tur                     ║");
console.log("║                                                      ║");
console.log("╚══════════════════════════════════════════════════════╝");

  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function pomoc() {
  console.log("Dostepne komendy:");
  console.log('start()');
  console.log('pomoc()');
  console.log('status()');
  console.log('mapa()');
  console.log('rozejrzyj()');
  console.log('idz("prawo")');
  console.log('idz("lewo")');
  console.log('akcja("karta")');
  console.log('akcja("bezpiecznik")');
  console.log('akcja("napraw")');
  console.log('akcja("wyjdz")');
  console.log("Ruch i udane akcje kosztuja 1 energie.");
  console.log("Czytanie informacji nie zuzywa energii.");
}
function status() {
  console.log("=== STATUS ===");
  console.log("Pokoj: " + nazwaPokoju(pokoj));
  console.log("Energia: " + energia);
  console.log("Karta: " + (karta ? "tak" : "nie"));
  console.log("Bezpiecznik: " + (bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: " + (zasilanie ? "dziala" : "nie dziala"));
  console.log("Stan gry: " + (koniec ? "zakonczona" : "trwa"));
  console.log("Wygrana: " + (wygrana ? "tak" : "nie"));
}
function nazwaPokoju(numer) {
  switch (numer) {
    case 1:
      return "Recepcja";
    case 2: 
      return "Magazyn";
    case 3: 
      return "Serwerownia";
    case 4:
      return "Wyjscie"
    default:
      return "Nieznane pomieszczenie";
  }
}

function mapa() {
    for (let i = 1; i <= 4; i++) {
        console.log(
            `${i} ${nazwaPokoju(i)} ${i === pokoj ? "<-- jesteś tutaj" : ""}`
        );
    }
}


function rozejrzyj() {
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  console.log("Opis pokoju do uzupelnienia");
}

// SEKCJA B — RUCH
function idz(kierunek) {
  // TODO B1: zablokuj ruch po koncu gry.
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  console.log("Ruch do uzupelnienia");
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
    if(koniec)
  { 
    console.log("Koniec gry. Akcja zablokowana.");
    return;
  }

  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
    switch(co)
  {
    case "karta":
     if (pokoj !== 1 || karta) {
    console.log("Tutaj nie ma karty do zabrania.");
    return;
  }
  karta = true;
  console.log("Zabierasz karte.");
   break;
    case "bezpiecznik":
      if(pokoj !== 2)
      {
        console.log("W tym pokoju nie ma bezpiecznika.");
   return;
      }
      if(bezpiecznik)
      {
        console.log("Masz już bezpiecznik.");
   return;
      }
      if(zasilanie)
      {
        console.log("Zasilanie zostało już włączone.");
   return;
      }
      bezpiecznik = true;
      console.log("Zabierasz bezpiecznik.")
   break;
  case "napraw":
      if(pokoj !== 3)
        {
          console.log("W tym pokoju nie ma generatora.");
  return;
        }  

      if(bezpiecznik == false)
      {
        console.log("Nie posiadasz: bezpiecznik.");
  return;
      }

      if(zasilanie)
      {
        console.log("Zasilanie jest już włączone.");
  return;
      }

      zasilanie = true;
      bezpiecznik = false;
      console.log("Zasilanie zostało włączone.");
  break;
  case "wyjdz":
      if(pokoj !== 4)
        {
          console.log("W tym pokoju nie ma wyjscia.");
  return;

        }  

      if(zasilanie == false)
        {
          console.log("Nie ma zasilania.");
  return;
        }

        if(karta == false)
        {
        console.log("Nie posiadasz karty.");
  return;

        }
        
        wygrana = true;
        koniec = true;
  break;
  default:
  return;
  break;
  }
  zakonczTure();

  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
