## Fotbollsturnering

Din uppgift är att skapa en applikation för fotbollslag som söker medlemmar inför en fotbollsturnering.

1. Skapa upp följande data:
   - a. En array innehållandes objekt för flera lag (minst 3).
   - b. Varje lag ska innehålla:
        * i.   Lagnamn (sträng)
        * ii.  Array med namnen på nuvarande medlemmar. (strängar)
        * iii. Max antal medlemmar tillåtna (number)

2. För varje lag, ska du rendera ut en Team-komponent. Team-komponenten ska ta emot följande props:
   - a.  Lagnamn
   - b.  Lista över lagmedlemmar
   - c.  Max antal medlemmar

3. För varje lag ska det renderas ut en div med följande laginformation
   - a.  Lagnamn
   - b.  Antal medlemmar/Max antal medlemmar (t.ex 2/5)
   - c.  Lista över medlemmarnas namn.

4. Om det inte finns några medlemmar i ett lag - Skriv ut ett meddelande att medlemmar saknas.
   - a.  Om ett laget har medlemmar redan men inte är fullt - Färga div:en grön och skriv ut ett meddelande om att man kan ansöka för att gå med i detta lag.
   - b.  Om laget är fullt - Färga bakgrundsfärgen på din div röd, och all text vit. Skriv ut ett meddelande att laget ej tar emot ansökningar.
