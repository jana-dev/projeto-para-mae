var motivos = [
  "Mãe...",
  "A mais linda...",
  "A que parece mais nova que a própria filha... xD",
  "Que é Mãe de doguinhas",
  "Que cuidou de mim...",
  "Que me ensinou muita coisa boa..." ,
  "Me preparou para a vida...",
  "Me mostrou o que é não desistir..." ,
  "O que é amar o próximo..." ,
  "O que é perdoar..." ,
  "O que é ser trabalhadora..." ,
  "Obrigada por tudo o que fez por mim!!!" ,
  "Hoje estou em Floripa, mas estamos sempre juntas no coração e na alma!!!" ,
  "Feliz dia das Mães!!!!!!" ,
  "Te amo ♥︎♥︎♥︎" ,
  "*as fotos acabaram vai começar a repetir, mas curta a música XDD" ,
];

var imagens = [
  "./img/mae1.jpg",
  "./img/mae2.jpg",
  "./img/morrodocanal.jpg",
  "./img/mae de doguinha.JPG",
  "./img/jogatina.jpg",
  "./img/festa.jpg",
  "./img/festa2.jpg",
  "./img/IMG_20151213_161700414.jpg",
  "./img/TRilha 047.JPG",
  "./img/TRilha 063.JPG",
  "./img/TRilha 079.JPG",
  "./img/mae3.jpeg",
  "./img/mae4.jpeg",
  "./img/mae 5.jpeg",
  "./img/mae 6.jpeg",
  "./img/mae 7.jpeg",
];

var bt = "Próximo";
var i = 0;
function proximoslide(){
  document.getElementById("bt").innerHTML = bt;
  document.getElementById("textomotivos").innerHTML = motivos[i];
  document.getElementById("album").src = imagens[i];
  i++;
  document.getElementById("audio").play();
  
  if(i > 15)
  {
    i = 0
  }
  
}