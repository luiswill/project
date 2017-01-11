/**
 * @param {string} indexZeile ist die anzahl der Zeilen die der Benutzer bekommen moechte
 * @param {string} zielBereich ist der Ort (die div) der HTML-seite wo das Dreieck angezeigt werden soll
 * */

function printPascal(indexZeile, zielBereich)
{
    var aktuelleZeile = document.getElementById(indexZeile).value;//den vom benutzer gewuenschten wert ermitteln
    var pascal = computePascalDreieck(aktuelleZeile);
    var lineToAdd = "";
    var arr = String(pascal[aktuelleZeile - 1][Math.floor(aktuelleZeile /2)]).length; //2-dimensionaler array erstellen
    for (var i = aktuelleZeile - 1; i >= 0; i--)
    {
        var lineToAdd = "&nbsp;".repeat((aktuelleZeile - i) * arr)
        for (var j = 0; j <= i; j++)
        {
           lineToAdd += " " + "&nbsp;".repeat(arr - String(pascal[i][j]).length) 
           + pascal[i][j] + "&nbsp;".repeat(arr - String(pascal[i][j]).length); 
        }
        document.getElementById(zielBereich).innerHTML = "</br>" + lineToAdd 
        + document.getElementById(zielBereich).innerHTML;
    }
}

/**
 * @param {integer} aktuelleZeile ist der index der zeile die gerade errechnet wird 
 * @returns {array} ein 2 dimensionales array, dass das Pascal Dreieck wiedergibt
 * */
function computePascalDreieck(aktuelleZeile){
    
    var i, j;
    var pascal = new Array();

    for (i = 0; i < aktuelleZeile; i++)
    {
        pascal[i] = new Array();
        pascal[i][0] = 1;
        pascal[i][i] = 1;
    }
    for(i = 0; i < aktuelleZeile; i++)
    {
        for(j = 1; j < i; j++)
        {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
    }
    return pascal;
}

/**
* Wenn der Button geklickt wird, ausfuehruung dieses Skriptes zur berechnung der Pascal Dreieck
*/
var button = document.getElementById("cal");
button.onclick = function()
{
    printPascal("line", "pascal3");
};
