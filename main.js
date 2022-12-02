// Parašykite programą, kuri turėtų tris kintamuosius, saugančius galimo trikampio kraštinių
// ilgių reikšmes.
// Panaudodami duotus kintamuosius nustatykite koks trikampis gali susidaryti su duotomis
// kraštinėmis - lygiakraštis, lygiašonis, status, įvairiakraštis ar joks. 
// Pasirinktu būdu atspausdinkite koks trikampis susidaro ir jei susidaro.
// Patikrinkite savo programą su tokiais duomenimis:
// 1) 3, 4, 5
// 2) 8, 2, 10
// 3) 4, 4, 4
// 4) 6, 7, 6

var a = 3;
var b = 4;
var c = 5;
var trikampis = 'nesusidaro trikampis';
// Tikriname ar susidaro trikampis
if (a + b > c && a + c > b && b + c > a) {
    // console.log('trikampis susidaro')
    trikampis = 'trikampis susidaro,';

    // Tikriname ar trikampis lygiakrastis 
    if (a == b && b == c && a == c) {
        // console.log('jis yra lygiakrastis')
        trikampis += ' jis yra lygiakrastis';

    // Tikriname ar trikampis lygiasonis
    } else if ( a == b && b != c && a != c || a == c && c != b && a != b || b == c && c !=a && b != a) {
        // console.log('jis yra lygiasonis')
        trikampis += ' jis yra lygiasonis';

        // Tikriname ar ivairiakrastis trikampis
    } else {
        // console.log ('jis yra ivairiakrastis')
        trikampis += ' jis yra ivairiakrastis';
    }
    // Tikriname ar trikampis statusis
    if (c * c == a * a + b * b || a * a == b * b + c * c || b * b == a * a + c * c) {
        // console.log ('ir statusis')
        trikampis += ' ir statusis';
    }
      
} else trikampis;
// console.log(trikampis)

 
var krastines = document.getElementById('krastines');
krastines.innerHTML = a + ', ' + b + ' ,' + c; 

var atsakymas = document.getElementById('atsakymas');
atsakymas.innerHTML = trikampis;  

// Tikriname ar trikampis statusis
// else if (c * c == a * a + b * b || a * a == b * b + c * c || b * b == a * a + c * c) {
//     console.log ('trikampis statusis')
