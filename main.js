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

//   function appliquerTroisFois(valeur, fonction) {
//         for (let i = 0; i < 3; i++) {
//         valeur++
//         valeur= fonction(valeur)
//     }
//     return valeur
//   }
//   function incrementer(x) {

//     return x++
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
//         return x * y;
//     }   
//   }
  
//   console.log(conditionnelle(4, 2, estPairEtPositif));
//   console.log(conditionnelle(3, 2, estPairEtPositif))

// function estPositif(nombre) {
//     if (nombre > 0) {
//         return "Positif";
//     }else if (nombre < 0) {
//         return "Négatif";
//     }else {
//         return "Zéro";
//     }
//   }
//   console.log(estPositif(5));
//   console.log(estPositif(-3));
//   console.log(estPositif(0));

// function comparerNombres(a, b) {
//     if (a < b) {
//         return "Plus petit";
//     }else if (a > b) {
//         return "Plus grand";
//     }else {
//         return "Égal";
//     }
//   }
//   console.log(comparerNombres(5, 10));
//   console.log(comparerNombres(10, 5));
//   console.log(comparerNombres(7, 7));

// function calculerPrix(prix) {
//     if (prix > 100) {
//         let formule = 10 * prix / 100;
//         let result = prix -  formule;
//         return result;
        
//     }else if (prix < 100 && prix > 0) {
//         return prix;
//     }
//   }
//   console.log(calculerPrix(120));
//   console.log(calculerPrix(80));

// function tarif(age) {
//     if (age < 5) {
//         return "Gratuit";
//     }else if (age >= 5 && age <= 18) {
//         return "Réduit";
//     }else {
//         return "Plein tarif";
//     }
//   }
//   console.log(tarif(3));
//   console.log(tarif(15));
//   console.log(tarif(25));

// function longueurChaine(chaine) {
//     if(chaine.split("").length <= 10) {
//         return "Courte";
//     }else {
//         return "Longue";
//     }
//   }
//   console.log(longueurChaine("JavaScript"));
//   console.log(longueurChaine("Développement web"));

// function categorieTemperature(temp) {
//     if (temp > 30) {
//         return "Chaud";
//     }else if (temp <=30 && temp > 15) {
//         return "Tempéré";
//     }else {
//         return "Froid";
//     }
//   }
//   console.log(categorieTemperature(35));
//   console.log(categorieTemperature(20));
//   console.log(categorieTemperature(10));


// function multipleDeCinq(nombre) {
//     if (nombre % 5 === 0) {
//         return "Oui";
//     }else {
//         return "Non";
//     }
//   }
//   console.log(multipleDeCinq(10)); // Résultat attendu : "Oui"
//   console.log(multipleDeCinq(7));