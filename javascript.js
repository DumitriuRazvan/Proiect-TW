
/*function abdomene(){
	window.open("https://youtu.be/9p7-YC91Q74");
}


function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Citeste mai mult"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Citeste mai putin"; 
    moreText.style.display = "inline";
  }
}



function myFunction() {
  document.getElementById("ah").className = 'mystyle';
  document.getElementById("ah").style.fontFamily = "Raleway";
}



function afiseaza()
{
	document.getElementById("av").innerHTML = "CONTACTEAZA-NE ! NU EZITA!";
}

function myFunction4() {
  alert("Multumim pentru inscriere");
}

function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


function myFunction() {
  var btn = document.createElement("P");
  btn.innerText = "Body Pump";
  document.getElementById("af").appendChild(btn);
  document.getElementById("af").style.color = "orange";
  

}

function myFunction2() {
  document.getElementById("ah").className = 'mystyle';
  document.getElementById("ah").style.fontFamily = "Raleway";
}*/

//Acasa

function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Citeste mai mult"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Citeste mai putin"; 
    moreText.style.display = "inline";
  }
}



if (typeof(Storage) !== "undefined") {
  localStorage.setItem("lastname", "Antrenorul lunii este:");
  document.getElementById("aw").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("aw").innerHTML = "Sorry, your browser does not support Web Storage...";
}



var person = {
	nume:"Ionut Paval",
	clasa:"Body Pump"
};
document.getElementById("ac").innerHTML = person.nume;
document.getElementById("ac").style.color = "orange";
document.getElementById("ac").style.fontFamily = "Raleway";
document.getElementById("ac").style.fontSize = "xx-larger";

delete person.clasa;


function myFunction() {
  var btn = document.createElement("P");
  btn.innerText = "Body Pump";
  document.getElementById("af").appendChild(btn);
  document.getElementById("af").style.color = "orange";
  

}

document.getElementById("aj").className = 'mystyle3';





var Antrenori= '{"employees":[' +
'{"firstName":"Alex","lastName":"Vasiliu" },' +
'{"firstName":"Claudiu","lastName":"Rosu" },' +
'{"firstName":"Eduard","lastName":"Bujor" },' +
'{"firstName":"Luiza","lastName":"Bulgaru" }]}';
obj = JSON.parse(Antrenori);
var i;
var mesaj=" ";
for(i=0;i<=3;i++){
	mesaj = mesaj + obj.employees[i].firstName + " " + obj.employees[i].lastName +'<br>' +'<br>'; 
}

document.getElementById("az").innerHTML = mesaj;
document.getElementById("az").className = 'mystyle';


document.getElementById("ay").className = 'mystyle4';


var d = new Date();
document.getElementById("al").innerHTML = d;
document.getElementById("al").className = 'mystyle1';
document.getElementById("aq").className = 'mystyle1';


function abdomene(){
	window.open("https://youtu.be/9p7-YC91Q74");
}




document.getElementById("myBtn").className = 'mystyle3';

//Despre

function myFunction() {
  document.getElementById("ah").className = 'mystyle';
  document.getElementById("ah").style.fontFamily = "Raleway";
}



function myFunction2() {
  document.getElementById("ah").className = 'mystyle';
  document.getElementById("ah").style.fontFamily = "Raleway";
}


//CONTACT

function afiseaza()
{
	document.getElementById("av").innerHTML = "CONTACTEAZA-NE ! NU EZITA!";
}

function myFunction4() {
  alert("Multumim pentru inscriere");
}

function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


function myFunction2() {
  document.getElementById("ah").className = 'mystyle';
  document.getElementById("ah").style.fontFamily = "Raleway";
}


// -----------------------------------------------------------------------

// 1. Culoare valida
function setBackgroundColor() {
  // Cautam elementul de tip input in care am adaugat culoarea
  var input = document.getElementById('myColor');
  // Luam valoarea din input
  var color = input.value;
  // Verificam daca valoarea este o culoare valida
  if (isValidColor(color)) {
    // Daca e o culoare valida -> schimbam culoarea background-ului 
    var body = document.getElementsByTagName('body');
    console.log({body});
    
    body[0].style.backgroundColor = color;
  } else {
    // Daca valoarea nu este o culoare valida aratam alerta
    alert('Culoare invalida!')
  }
}

// O culoare este valida daca reprezinta o culoare din limba engleza si poate fi folosita ca background-color sau color in CSS
// de exemplu: red, green, orange, limegreen
function isValidColor(value) {
  // creem un nou obiect de tipul Option si ii setam stilul
  var colorObject = new Option().style;
  // asociem valoarea din input stilului acestui obiect
  colorObject.color = value;
  // daca avem o culoare valida atunci asocierea a avut loc cu success iar cele doua sunt egale, intorcand true
  // daca nu avem o culoare valida atunci asocierea nu a avut loc iar colorObject.color va fi un string gol si nu va fi egal cu valoarea din input
  return colorObject.color === value;

}
// 1.Final culoare valida

// ---------------------------------------------------------------------------

// 3. Numar vizitari link
// Adaugam evenimentele de click pentru toate linkurile la incarcarea paginii
function init() {
  var links = document.getElementsByTagName("a");
  
  for (var index = 0; index < links.length; index++) {
    // Vrem sa punem numarul de clickuri doar pe linkurile care nu sunt in nav
    var isLinkInNav = false;
    if (links[index].href.indexOf('.html') !== -1) {
      // Daca un link are in atributul href '.html' atunci acesta este se afla in navigatia site-ului
      isLinkInNav = true;
    }
    
    if (isLinkInNav === false) {
      links[index].addEventListener('click', updateNumberOfClicks, false);
    }
  }

  // Vrem sa initializam numarul de click-uri si la initializare (page reload)
  setNumberOfClicksTextForLinks();

  // Initializam si calculul numarului de cuvinte
  getNumberOfWords();

  // Initializam calculul timpului petrecut pe pagini
  calculateTimeSpentOnPage();

  // Animatie pentru titlu
  animateTitle();
}

// Aceasta functie adauga numarul de click-uri pentru un link
// EX: Google (2)
function setNumberOfClicksTextForLinks() {
  // Aducem link-urile salvate in localStorage
  var localStorageLinks = localStorage.getItem("linkVisits");
  // Daca nu avem nimic salvat in localStorage nu are rost sa modificam text 
  if (localStorageLinks === null) {
    return;
  }

  // Deserializam lista de links din localStorage
  var deserializedList = JSON.parse(localStorageLinks);
  // Cautam toate link-urile de pe pagina
  var links = document.getElementsByTagName("a");

  // Vom avem o bucla dubla: una pentru linkurile din localStorage si una pentru linkurile de pe pagina

  // Iteram prin lista de linkuri din localStorage
  for (var i = 0; i < deserializedList.length; i++) {
    // Adaugam linkul din localStorage intr-o variabila 
    var localStorageLink = deserializedList[i].href;
    var localStorageNoClicks = deserializedList[i].numberOfClicks;

    // Apoi incepem cautarea pentru link-urile de pe pagina
    for (var j = 0; j < links.length; j++) {
      // Adaugam linkul din pagina intr-o variabila
      var pageLink = links[j].href;
      
      // Daca atributul href al linkului se potriveste cu cel din localStorage -> adaug numarul de click-uri langa text
      if (localStorageLink === pageLink) {
        // Luam valoarea existenta si o modificam prin a imparti textul in doua
        // Ex: Google (1) va fi impartit in doua folosind metoda .split -> ['Google', 1)]
        var linkText = links[j].innerText;
        var linkTextSeparated = linkText.split('(');
        // initialText este valoarea intiala a textului cand acesta nu a avut nici un click. Ex: Google
        var initialText = linkTextSeparated[0];
        console.log({linkText, linkTextSeparated, initialText});

        // Adaugam noua valoare + numarul de clicks
        links[j].innerText = initialText + ' (' + localStorageNoClicks + ')';
      }
    }

  }
}

function updateNumberOfClicks(e) {
  // Iau adresa linkului pe care am dat click
  var href = e.target.href;
  // Daca linkul este din menu
  console.log({e});
  
  // Iau toate linkurile salvate in localStorage
  var localStorageLinks = localStorage.getItem("linkVisits");

  // Daca nu am nici un link salvat in localStorage -> adaug o noua lista cu linkuri
  if (localStorageLinks === null) {
    // Vom salva un obiect de tipul href: numberOfClicks
    // Ex {
    //   href: "www.google.ro", numberOfClick : 1
    // }
    var linkObject = {
      href: href,
      numberOfClicks: 1
    };
    // Acest obiect se va regasi intr-o lista de obiecte de tipul acesta (avem mai multe link-uri asadar mai multe obiecte)
    var listOfLinks = [linkObject];
    // Folosim JSON.stringify pentru a serializa lista noastra de obiect intr-un JSON si o salvam in localStorage
    localStorage.setItem("linkVisits", JSON.stringify(listOfLinks));
  } else {
    // Daca avem deja lista de link-uri, cautam link-ul care ne intereseaza si ii incrementam numarul de click-uri
    // aceasta variabile ne ajuta sa adaugam linkuri noi in localStorage daca acestea nu existau deja: 
    // Ex: Google exista deja in localStorage dar Facebook nu. trebuie adaugat FAcebook alaturi de Google 
    var isAlreadyInLocalStorage = false; 
    // Pasul 1 -> Deserializam JSON (Mai sus am serializat ca sa putem salva in localStorage);
    var deserializedList = JSON.parse(localStorageLinks);
    // Pasul 2 -> cautam in lista linkul care se potriveste dupa href
    for (var i = 0; i < deserializedList.length; i++) {
      // Daca se potriveste href din lista cu href din linkul pe care am dat click...
      if (deserializedList[i].href === href) {
        // .... luam numarul de clicks si il incrementam
        var existingNumberOfClicks = deserializedList[i].numberOfClicks;
        // +existingNumberOfClicks este pentru a-i face cast din string in number
        deserializedList[i].numberOfClicks = +existingNumberOfClicks + 1;
        // iesim din bucla (am gasit ce ne interesa si nu mai are rost sa mergem mai departe) si marcam ca true ca am gasit acest link in localStorage
        isAlreadyInLocalStorage = true;
        break;
      }
    }

    // Pasul 2.1 -> Daca linkul pe care am dat click nu se afla in lista din localStorage -> il adaugam
    if (isAlreadyInLocalStorage === false) {
      // Creem un obiect nou (la fel ca mai sus)
      var newLink = {
        href: href,
        numberOfClicks: 1
      }
      deserializedList.push(newLink);
    }

    // Pasul 3 -> Serializam lista ce tocmai am actualizat-o si o salvam in localStorage
    localStorage.setItem("linkVisits", JSON.stringify(deserializedList));
  }

  // Actualizam numarul de click-uri 
  setNumberOfClicksTextForLinks();
}

// 3. Final numar vizitari link

// ---------------------------------------------------------------------------


// Numar cuvinte
function getNumberOfWords() {
  // Caut body dupa tag
  var body = document.getElementsByTagName('body');
  // Iau toate cuvintele din pagina
  var words = body[0].innerText;
  // Le impartim dupa spatiul dintre ele
  // EX: Google Twitter va deveni o lista cu doua elemente: ['Google', 'Twitter']
  var wordsSplit = words.split(' ');
  // Tinem numarul de cuvinte final
  var finalCountdown = 0;

  // Iteram prin lista de cuvinte si adunam numarul final de cuvinte
  for (var i = 0; i < wordsSplit.length; i++) {
    // Punem numarul de cuvinte dintr-un rand intr-o variabila
    var list = wordsSplit[i].match(/(\w+)/g);
    // Adunam la suma finala (doar daca randul are cuvinte)
    if (list !== null) {
      finalCountdown = finalCountdown + list.length;
    }
  }

  // Cautam elementul din footer unde vrem sa punem suma
  var footer = document.getElementById('wordsCounter');
  // Setam textul
  footer.innerText = footer.innerText + ' ' + finalCountdown;
}


// Final Numar cuvinte


// --------------------------

// Intrebare in timp limita
function answerQuestion() {
  // In momentul in care raspund la intrebare opresc si timerul
  clearTimeout(window.timeout);

  // Cautam elementele
  var message = document.getElementById('questionMessage');
  var input = document.getElementById('questionInput');
  var question = document.getElementById('questionHeader');

  if (input.value === 'Ionut Paval') {
    message.innerText = 'Felicitari!';
  } else {
    message.innerText = 'Ai gresit!';
    question.style.display = 'none';
  }
}

// Cand facem focus pe input porneste functia
function startQuestionTimer() {
  // Declaram o variabila globala pentru a sti cand au trecut cele 3 secunde
  window.timer = 1;

  // Cautam elementele: input, intrebare
  var input = document.getElementById('questionInput');
  var question = document.getElementById('questionHeader');

  // Facem vizibila intrebarea
  question.style.display = 'block';

  // Creem un timer de 10 secunde care va apela block-ul de cod din interior odata ce  vor trece cele 10 secunde
  window.timeout = setTimeout(() => {
    input.readOnly = true; // facem inputul readonly
    input.blur(); // blur inseamna ca inputul nostru nu mai este focused (similar cu a da click in afara lui)
    alert('Timpul a expirat!');
  }, 10000);

  
}
// Final Intrebare in timp limita

// ----------------

// Timp petrecut pe pagina
function calculateTimeSpentOnPage() {
  // Stocam pagina curenta intr-o variabila
  var currentPage = window.location.href;

  setInterval(() => {
    // Stocam secundele intr-o variabile
    var seconds = 0;
     // Cautam in localstorage pagina si timpul petrecut
    var timeSpentLocalStorage = localStorage.getItem(currentPage);
    // Daca nu avem nimic in localStorage -> adaugam o noua intrare incepand cu secunda 1
    if (timeSpentLocalStorage === null) {
      seconds = 1;
      localStorage.setItem(currentPage, 1);
    } else {
      // daca avem ceva in localstorage pentru aceasta pagina, luam secundele existente si adaugam 1
      seconds = +timeSpentLocalStorage + 1;
      localStorage.setItem(currentPage, seconds);
    }

    // Actualizam footer
    var footer = document.getElementById("timeSpent");
    // Transformam secundele in minute si secunde
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds - minutes * 60;
    // Actualizam text
    footer.innerText = ' Timp petrecut: ' + minutes + ' minutes : ' + remainingSeconds + ' seconds';
  }, 1000);
}


// Final timp petrecut pe pagina

// ------------------------------------

// Aparitie treptata titlu.

// Creem o functie care ne da titlul temporar al paginii
// Ex: Daca titlul initial al paginii a fost ONE GYM, la prima rulare, dupa 100 milisecunde ne va da O si M 
// Asta pentru ca la prima rulare, i = 0 si luam prima si ultima litera apoi la urmatoarea rulare vom lua a doua si penultima
function getTempTitle(title, i) {
  window.tempArr[i] = title[i];
  window.tempArr[window.tempArr.length - 1 - i] = title[title.length - 1 - i];
  document.title = window.tempArr.join(''); // transformam lista intr-un string folosind functia .join
}

function animateTitle() {
  var title = document.title;
  // Impartim numarul literelor din titlu la 2 pentru ca vom afisa cate doua litere deodata
  var halvedTitle = Math.floor(title.length / 2);
  // Avem nevoie de un timer pentru a tine cont cate milisecunde au trecut si pentru a-l opri la timpul oportun
  var timer = 0;

  // Creem o lista globala unde tinem cate un spatiu gol pentru fiecare litera din titlu
  // De ex: Daca titlul este ONE atunci lista va avea [' ', ' ', ' ']
  // Folosim spatiile libere pentru a le inlocui ulterior cu cate doua litere
  window.tempArr = [];

  for (var i = 0; i < title.length; i++) {
    // iteram prin titlu si inseram un spatiu pentru fiecare litera (vezi mai sus)
    window.tempArr.push(' ');
  }

  // Vrem doua litere sa fie afisate la fiecare 100 milisecunde
  var interval = setInterval(() => {
    // Algoritmul nostru nu trebuie sa ruleze decat numarul de litere din titlu / 2
    if (timer <= halvedTitle) {
      getTempTitle(title, timer);
    } else {
      // Daca a rulat pana avem toate literele afisate, il oprim
      clearInterval(interval);
    }
    timer+=1; // incrementam timerul
  }, 2000);
}

// Final Aparitie treptata titlu.


// -----------------------------------

// Expresii regulate
function isEmailValid() {
  // Luat elementul de tip input
  var input = document.getElementById('fourthRegex');

  // Adresa de email valida de tipul test@gmail.com
  // Pentru a afla detalii amanuntite despre expresia regulata -> ia valoarea de mai jos si cauta aici https://regex101.com/
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = re.test(String(input.value).toLowerCase());
  if (isValid) {
    alert('Adresa de email este valida!');
  } else {
    alert('Adresa de email nu este valida!');
  }
}

function isThirdValid() {
  // Luat elementul de tip input
  var input = document.getElementById('thirdRegex');
  // (www.) = primele listere sunt www.
  // (com\/ro\/edu\/gov) = ultimele litere sunt
  // [^\/]+ = intre cele doua de mai sus poate fi orice care nu contine /
  var re = /^(www.)[^\/]+(com\/ro\/edu\/gov)$/;

  var isValid = re.test(String(input.value).toLowerCase());
  if (isValid) {
    alert('Textul este valid!');
  } else {
    alert('Textul nu este valid!');
  }
}

function isSecondValid() {
  // Luat elementul de tip input
  var input = document.getElementById('secondRegex');
  // (072) = primele listere sunt www.
  // [0-9]{7}+ - doar 7 cifre dupa 072
  var re = /^(072)[0-9]{7}$/;

  var isValid = re.test(String(input.value).toLowerCase());
  if (isValid) {
    alert('Textul este valid!');
  } else {
    alert('Textul nu este valid!');
  }
}

function isFirstValid() {
  // Luat elementul de tip input
  var input = document.getElementById('firstRegex');
  // [A-Z] = prima litera este litera mare 
  // [a-z]+ = urmatoarele litere sunt mici
  var re = /^[A-Z][a-z]+$/;
  var isValid = re.test(String(input.value));
  if (isValid) {
    alert('Textul este valid!');
  } else {
    alert('Textul nu este valid!');
  }
}

function isFifthValid() {
  // Luat elementul de tip input
  var input = document.getElementById('fifthRegex');
  // [A-Z] = prima litera este litera mare 
  // [0-8]+ = urmatoarea este o cifra
  // [!@#] = un simbol special dintre cele trei
  // [A-Z]+$ = urmeaza doar litere mari pana la final
  var re = /^[A-Z][0-9][!@#][A-Z]+$/;
  var isValid = re.test(String(input.value));
  if (isValid) {
    alert('Textul este valid!');
  } else {
    alert('Textul nu este valid!');
  }
}


// Final expresii regulate


// -----------------------------

// Alert propriu

// Alert Varianta I
function myalert_a(message) {
  // Creem un element nou de tip div
  var tag = document.createElement("div");
  // ii dam o clasa si un id (clasa .alert are stil definit in contact.html sus la <style>)
  tag.className = 'alert';
  tag.id = 'alert1';

  // Textul care va aparea in alert
   var text = document.createElement("p");
   text.innerText = message
   tag.appendChild(text);

   // Button pentru a inchide alert
   var button = document.createElement("button");
   button.innerText = 'Inchide';
   // Adaugam un event pe acest buton
   button.addEventListener('click', closeAlert1);
   // Adaugam butonul in alert
   tag.appendChild(button);

   var element = document.getElementsByTagName("body")[0];
   // Adaugam alert in body
   element.appendChild(tag);
}

// Functie apelata de butonul 'Arata Varianta I'
function showAlert1() {
  myalert_a('Fitness');
}


// Functie apelata cand dam click pe 'Inchide' in interiorul ferestrei
function closeAlert1() {
  // cautam fereastra de alerta
  var alert = document.getElementById('alert1');
  alert.remove();
}
// Final alert Varianta I


// Alert Varianta II

function myalert_b(config) {
  // cautam fereastra de tip alert
  var alert = document.getElementById('alert2');
  // Cautam textul pentru alert
  var text = document.getElementById('alertMsg');
  // Cautam butonul
  var button = document.getElementById('closeAlert2');

  // Facem fereastra visibila
  alert.style.visibility = 'visible';

  // Setam textul din obiectul de configurare
  text.innerText = config.message;

  // Setam evenimentul de click din obiectul de configurare
  button.addEventListener('click', config.click);
}

// Functie apelata de butonul 'Arata Varianta II'
function showAlert2() {
  myalert_b({
    message: 'Aerobic',
    click: closeAlert2
  });
}

// Function apelata de butonul 'Inchide' din interiorul ferestrei
function closeAlert2() {
  // cautam fereastra de tip alert
  var alert = document.getElementById('alert2');
  // Ascundem fereastra
  alert.style.visibility = 'hidden';
}
// Final Varianta II


// Final Alert propriu



// Facem request catre server si aducem datele
function getDataFromServer(form) {
  // Creez un obiect nou pentru XML Http request
  let xhttp = new XMLHttpRequest();
  // Iau ce am tastat din forma
  let userInfo = form.elements.namedItem("userInfo").value;

  // Daca nu am tastat nimic in input nu are rost sa merg mai departe cu algoritmul
  if (userInfo === '') {
    return false;
  }
  // Apelam ceea ce este in interiorul acestei functii atunci cand serverul ne-a raspuns
  xhttp.onreadystatechange = function(data) {
    // Citim datele doar daca requestul a avut loc cu succes (200 == Ok/Success)
    if (this.readyState == 4 && this.status == 200) {
      // Luam raspunsul de la server (este de tip json)
      let response = xhttp.responseText;
      // Transformam raspunsul de tip json intr-un obiect javascript
      let responseParsed = JSON.parse(response);
      // Cautam paragraful unde setam raspunsul
      let paragraph = document.getElementById("nodeResults");
      paragraph.innerText = "";
      paragraph.innerText = "S-au gasit " + responseParsed.length + " rezultate cautand dupa '" + userInfo + "'";
      // Cautam elementul div unde setam toate resultatele
      let allResults = document.getElementById("allResults");
      // Resetam rezultatele
      allResults.innerText = "";

      // Adauga cate un paragraph pentru fiecare rezultat
      for(var i = 0; i< responseParsed.length; i++) {
        // Creez un nou paragraf
        let newParagraph = document.createElement('p');
        newParagraph.innerText = responseParsed[i];
        // Il adaug in div
        allResults.appendChild(newParagraph);
      }
    }
};

  // Trecem url-ul serverului + ce anume vrem sa cautam in lista de todos sau users: in cazul nostru, ceea ce am tastat in input
  xhttp.open(form.method, form.action + userInfo, true);
  xhttp.send();

  return false;
}
