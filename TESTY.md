# TESTY – Testowanie gry

## TEST 1 – Mapa i informacje

**PRÓBA:**
1. Uruchomić `start()`.
2. Wyświetlić mapę.
3. Sprawdzić liczbę pokoi i zaznaczenie aktualnej pozycji.
4. Wyświetlić dostępne informacje o grze.

**WYNIK OCZEKIWANY:**
Mapa zawiera 4 pokoje, z których tylko 1 jest zaznaczony jako aktualny. Wyświetlanie mapy i informacji nie zużywa energii ani nie zmienia stanu gry.

**WYNIK OTRZYMANY:** 4 pokoje, 1 zaznaczony, uzywanie informacjii nie zużywa energii.

**KTO SPRAWDZAŁ:** Srodix

---

## TEST 2 – Niepoprawne kierunki

**PRÓBA:**
1. Uruchomić `start()`.
2. Spróbować przejść w lewo z pokoju 1.
3. Spróbować przejść w nieznanym kierunku.
4. Sprawdzić pozycję, energię i pozostałe dane gry.

**WYNIK OCZEKIWANY:**
Gracz pozostaje w pokoju 1. Energia, pozycja i pozostałe dane nie zmieniają się. Niepoprawne ruchy nie są naliczane.

**WYNIK OTRZYMANY:** Ruch w lewo został anulowany, niepoprawna wartość odrzucona. Energia nie została wykorzystana.

**KTO SPRAWDZAŁ:** Srodix

---

## TEST 3 – Poprawny ruch w prawo

**PRÓBA:**
1. Uruchomić `start()`.
2. Sprawdzić początkową pozycję i energię.
3. Wykonać ruch w prawo.
4. Ponownie sprawdzić pozycję i energię.

**WYNIK OCZEKIWANY:**
Gracz przechodzi z pokoju 1 do pokoju 2. Energia zmniejsza się dokładnie o 1 punkt.

**WYNIK OTRZYMANY:** Przejście między pokojami zużywa tylko 1 energię.

**KTO SPRAWDZAŁ:** Srodix

---

## TEST 4 – Ponowne zabranie przedmiotu

**PRÓBA:**
1. Uruchomić `start()`.
2. Przejść do pokoju, w którym znajduje się przedmiot.
3. Zabrać przedmiot.
4. Spróbować zabrać ten sam przedmiot ponownie.
5. Sprawdzić stan ekwipunku.

**WYNIK OCZEKIWANY:**
Przedmiot można zabrać tylko jeden raz. Druga próba nie dodaje kolejnego egzemplarza do ekwipunku i nie zmienia stanu gry.

**WYNIK OTRZYMANY:** Wynik oczekiwany. Bezpiecznik został zebrany i dodany do ekwipunku. Po kolejnej próbie zebrania bezpiecznika wyskakuje feedback "Masz już bezpiecznik". Stan ekwipunku po próbie ponownego zebranie się nie zmienia, stan gry również się nie zmienia.

**KTO SPRAWDZAŁ:** JakBor3k.

---

## TEST 5 – Wymagania naprawy i otwarcia drzwi

**PRÓBA:**
1. Uruchomić `start()`.
2. Spróbować naprawić zasilanie bez bezpiecznika.
3. Spróbować otworzyć drzwi bez spełnienia wymaganych warunków.
4. Zdobyć bezpiecznik, ale nie naprawiać zasilania.
5. Ponownie spróbować otworzyć drzwi.

**WYNIK OCZEKIWANY:**
Bez bezpiecznika nie można naprawić zasilania. Drzwi nie otwierają się, dopóki nie zostaną spełnione oba wymagania. Nieudane próby nie zmieniają odpowiednich flag.

**WYNIK OTRZYMANY:** Bez bezpiecznika nie można naprawić zasilania, wyskakuje feedback o braku bezpiecznika. Drzwi nie otwierają się, dopóki nie zostaną spełnione oba warunki, wyskakuje feedback o braku zasilania lub braku bezpiecznika. W  ielokrotne próby nie zmieniają wyniku.

**KTO SPRAWDZAŁ:** JakBor3k.

---

## TEST 6 – Możliwość wygranej

**PRÓBA:**
1. Uruchomić `start()`.
2. Przemieszczać się między pokojami.
3. Zdobyć potrzebne przedmioty.
4. Naprawić zasilanie po zdobyciu bezpiecznika.
5. Spełnić drugi warunek otwarcia drzwi.
6. Otworzyć drzwi i zakończyć grę.

**WYNIK OCZEKIWANY:**
Po wykonaniu wszystkich wymaganych czynności w odpowiedniej kolejności gracz może otworzyć drzwi i wygrać przed wyczerpaniem energii. Gra wyświetla informację o zwycięstwie.

**WYNIK OTRZYMANY:** Po wykonaniu wszystkich wymaganych czynności w odpowiedniej kolejności gracz może otworzyć drzwi i wygrać przed wyczerpaniem energii. Gra wyświetla informację o zwycięstwie

**KTO SPRAWDZAŁ:** JakBor3k.

---

## TEST 7 – Porażka po 10 ruchach

**PRÓBA:**
1. Uruchomić `start()`.
2. Wykonać 10 poprawnych ruchów między pokojami, nie doprowadzając do zwycięstwa.
3. Sprawdzić energię i status gry.
4. Spróbować wykonać kolejny ruch.
5. Ponownie sprawdzić stan gry.

**WYNIK OCZEKIWANY:**
Po 10 poprawnych ruchach energia spada do 0 i następuje porażka. Gra informuje o przegranej. Jedenasty ruch nie zmienia pozycji, energii ani pozostałych danych.

**WYNIK OTRZYMANY:** Gra po skonczeniu energii konczy sie, jedyną opcją pozostaje funkcja start();

**KTO SPRAWDZAŁ:** Dworek

---

## TEST 8 – Reset stanu gry

**PRÓBA:**
1. Uruchomić `start()`.
2. Wykonać kilka poprawnych ruchów.
3. Zebrać przedmiot i zmienić dostępne flagi.
4. Ponownie wywołać `start()`.
5. Sprawdzić energię, pozycję, ekwipunek, flagi i status gry.

**WYNIK OCZEKIWANY:**
Ponowne wywołanie `start()` całkowicie resetuje grę. Energia wraca do wartości początkowej, gracz znajduje się w pokoju 1, ekwipunek jest pusty, wszystkie flagi wracają do wartości początkowych, a licznik ruchów zostaje wyzerowany.

**WYNIK OTRZYMANY:** wszystkie zmienne sie resetuja po uzyciu funkcji start()

**KTO SPRAWDZAŁ:** Dworek