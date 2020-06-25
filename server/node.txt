const express = require("express"); // Aducem modulul express
var cors = require('cors'); // Acest modul este pentru a putea face request de pe alt domeniu catre acest server 
const app = express();
app.use(cors()); // Setam ca serverul nostru sa primeasca cereri si de pe alte domenii

// Creem un url de unde putem cauta in lista de todos
// Apelam acest url din fisierul nostru HTML folosind Ajax (xmlhttprequest) catre http://localhost:3000/todos
app.get("/todos", function (req, res) {
  // Luam din url ceea ce am tasta in input 
  // De ex: Daca url-ul meu este http://localhost:3000/todos?title=razvan atunci title va fi 'razvan'
  let title = req.query.title;
  // Aducem modulul de citire fisiere intr-o variabila
  let fs = require("fs");
  // Parsam fisierul json si il pune si pe acesta intr-o variabila
  // Aceasta variabila contine o lista cu toate todos
  let todos = JSON.parse(fs.readFileSync("todos.json", "utf-8"));

  let finalResponse = []; // Aceasta lista va contine ceea ce vom trimite inapoi la html 
  // Iteram prin lista noastra de todos si luam doar acele todos care au in titlu ceea ce am tasta noi
  for (var i = 0; i < todos.length; i++) {
    // Daca titlul contine ce am cautat il adaugam in lista finala
    if (todos[i].title.indexOf(title) !== -1) {
      finalResponse.push(todos[i].title);
    }
  }

  // Trimitem raspunsul inapoi catre html
  res.send(JSON.stringify(finalResponse));
});


// Creem un url de unde putem cauta in lista de user (dupa nume)
// Apelam acest url din fisierul nostru HTML folosind Ajax (xmlhttprequest) catre http://localhost:3000/users
app.get("/users", function (req, res) {
  // Luam did url ceea ce am tasta in input 
  // De ex: Daca url-ul meu este http://localhost:3000/users?name=razvan atunci title va fi 'razvan'
  let name = req.query.name;
  // Aducem modulul de citire fisiere intr-o variabila
  let fs = require("fs");
  let finalResponse = []; // Aceasta lista va contine ceea ce vom trimite inapoi la html 
  // Aducem continutul fisierului intr-o variabila
  let fileContent = fs.readFileSync('users.xml', 'utf-8');
  // Impartim fisierul dupa \n (adica in cate o linie pentru fiecare rand)
  let lines = fileContent.split(/\r?\n/);
  // Citim fiecare linie si cautam dupa numele user-ului

  for (var i = 0; i < lines.length; i++) {
    // Daca linia contine nodul <name> si contine si numele pe care l-am cautat -> adaugam in lista
    if (lines[i].indexOf('<name>') && lines[i].indexOf(name) !== -1) {
      finalResponse.push(lines[i]);
    }
  }
  // Trimitem raspunsul inapoi catre html
  res.send(JSON.stringify(finalResponse));
});

// Pornim serverul pe portul 3000
app.listen(3000, function() {
  console.log('Am pornit serverul pe portul 3000');
  console.log('Pentru a accesa serverul, mergi pe localhost:3000/todos sau localhost:3000/users ');
});
