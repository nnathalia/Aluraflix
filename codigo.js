
//Array no JS
var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
    "https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg",
    "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
    "https://vortexcultural.com.br/images/2021/01/10-Coisas-que-eu-odeio-em-voce.jpg",
    "https://play-lh.googleusercontent.com/xn9qXXG1GEJpEEsHtRHkhF1fgdhWIkiNKVZSUlJV6YiXVbxm0NRJZ0aAjxLxqsWVxqoh",
    "https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg",
    "https://dglibrary.org/wp-content/uploads/2021/04/71-WBN3FCBL._AC_SL1280_.jpg",
    "https://wp.ufpel.edu.br/empauta/files/2018/05/GuerraInfinitacartaz.jpg"
];

var listaNomeFilmes = [
    "ESCOLA DE ROCK",
    "A CHEGADA",
    "HOMEM-ARANHA NO ARANHAVERSO",
    "10 COISAS QUE EU ODEIO EM VOCÊ",
    "OPERAÇÃO BIG HERO",
    "SIMPLESMENTE ACONTECE",
    "YOUR NAME",
    "VINGADORES: GUERRA INFINITA"
];

// Instruções do for: Variável, condição, incremento
for (var i = 0; i < listaFilmes.length && i < listaNomeFilmes.length; i++){
    //Escrever no html
    document.write("<img src= " + listaFilmes[i] + ">");
    document.write("<p>" + listaNomeFilmes[i] + "</p>");   
}

