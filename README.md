# AZ-kvíz

Jednoduchá webová aplikace inspirovaná tradiční televizní show AZ-kvíz.

## K vyzkoušení

Aplikaci si můžete vyzkoušet na následujících adresách:

[azkviz.heliohost.org](http://azkviz.heliohost.org)

[azkviz.t15.org](http://azkviz.heliohost.org)

## Data pro soutěž

Data aplikace načítá z Excel sešitu ve formátu `.xlsx`. Struktura by měla vypadat následovně:

**1. sloupec (A):** Otázka

**2. sloupec (B):** Správná odpověď

**3. sloupec (C):** První špatná odpověď (volitelné, zobrazí se jako další možnost. Když chybí, jsou otázky otevřené.)

**Další sloupce (D+):** Další špatné odpovědi pro zmatení nepřítele (volitelné)