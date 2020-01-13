let radioreveil= new RadioReveil(document.body,"../horloge/kalon.mp3");

function deuxdigits(x) {
    if (x >= 10)
        return x;
    else
        return "0" + x;
}