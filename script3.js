let czyTekstWidoczny = true;

function ukryjTekst() {
    document.getElementById('tekst');
    document.getElementById('tekst').style.color = 'blue';
    if (czyTekstWidoczny) {
        tekst.style.display = 'none';
        czyTekstWidoczny = false;
    } else {
        tekst.style.display = 'block';
        czyTekstWidoczny = true;
    }
}