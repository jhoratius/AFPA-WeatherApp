function adresseIP(){
fetch('https://api.ipify.org?format=json').then(resultat => console.log(resultat))
}

adresseIP();