// function addition(a, b) {
// 	return a + b;
// }
// console.log(addition(2, 3));

// function salutation(nom) {
// 	return "Bonjour " + nom;
// }
// console.log(salutation("Alice"));

// function estPair(nombre) {
// 	if (nombre % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(estPair(4));
// console.log(estPair(7));

// function aireRectangle(longueur, largeur) {
// 	return longueur * largeur;
// }
// console.log(aireRectangle(5, 3));

// function estMajuscule(chaine) {
// 	if (chaine === chaine.toUpperCase()) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(estMajuscule("HELLO"));
// console.log(estMajuscule("Hello"));

// function maxDeuxNombres(a, b) {
// 	if (a < b) {
// 		return b;
// 	} else {
// 		return a;
// 	}
// }
// console.log(maxDeuxNombres(5, 10));

// function difference(a, b) {
// 	return a - b;
// }
// console.log(difference(10, 3));

// function convertirEnCelsius(fahrenheit) {
// 	return (fahrenheit * 9) / 5 + 32;
// }
// console.log(convertirEnCelsius(100));

// function estMajeur(age) {
// 	if (age < 18) {
// 		return false;
// 	} else if (age >= 18) {
// 		return true;
// 	}
// }
// console.log(estMajeur(20));
// console.log(estMajeur(16));

// function maxTroisNombres(a, b, c) {
// 	if (a < b || c < b) {
// 		return b;
// 	} else if (a > b || a > c) {
// 		return a;
// 	} else {
// 		return c;
// 	}
// }
// console.log(maxTroisNombres(3, 7, 5));

// function calculer(a, b, fn) {
// 	return fn(a, b);
// }
// // function addition(x, y) {
// // 	return x + y;
// // }
// function multiplication(x, y) {
// 	return x * y;
// }

// console.log(calculer(5, 3, addition));
// console.log(calculer(5, 3, multiplication));

// function filtrerTexte(chaine, filtre) {
//     return filtre(chaine)
//   }

//   /**
//    * test si il y a une voyelle
//    * @param {string} c
//    * @returns {boolean}
//    */
//   function estVoyelle(c) {
//     return c.split("").filter((lettre) => lettre === "o" || lettre === "u" || lettre === "a" || lettre === "e" || lettre === "i" || lettre === "y");
//   }
//   console.log(filtrerTexte("Bonjour", estVoyelle));


// a faire
//   function appliquerTroisFois(valeur, fonction) {
//         return fonction(valeur)
//   }
//   function incrementer(x) {
//     for (let i = 0; i < 4; i++) {
//         return x++;
//     }
//   }
  
//   console.log(appliquerTroisFois(5, incrementer));

//   function transformerTexte(texte, transformation) {
//     return transformation(texte);
//   }
//   function majuscule(c) {
//     return c.toUpperCase();
//   }
//   function avecPoint(c) {
//     return c.split("").join(".");
//   }
  
//   console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
//   console.log(transformerTexte("bonjour", avecPoint));

// function conditionnelle(a, b, condition) {
//     return condition(a, b);
//   }
//   function estPairEtPositif(x, y) {
//     if (x >= 0 && y >= 0 && x % 2 === 0 && y % 2 === 0){
//         return x + y;
//     }else {
//         return x + y;
//     }
//   }
  
//   console.log(conditionnelle(4, 2, estPairEtPositif));
//   console.log(conditionnelle(3, 2, estPairEtPositif))

