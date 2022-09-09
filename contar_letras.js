function countLetters(cadena){
    let nuevaCadena = cadena.replace(/[`~! @#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    console.log(nuevaCadena.length);
}

countLetters("Hola  ??**");