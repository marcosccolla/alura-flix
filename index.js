let listaFilmes = [null];

function adicionarFilme() {
  var elementoPoster = document.getElementById("poster");
  var poster = elementoPoster.value;

  var elementoFilme = document.getElementById("filme");
  var filme = elementoFilme.value;

  if (poster.endsWith(".jpg") || poster.endsWith(".png")) {
    if (listaFilmes[0] == null) {
      listaFilmes[0] = { titulo: filme, poster: poster };
    }

    var repetido = false;
    for (var i = 0; i < listaFilmes.length; i++) {
      if (filme == listaFilmes[i].titulo || poster == listaFilmes[i].poster) {
        repetido = true;
        break;
      }
    }

    if (!repetido) {
      listaFilmes.push({ titulo: filme, poster: poster });
    }

    listarFilmes(listaFilmes);
  } else {
    console.error("Endereço de pôster inválido.");
  }

  elementoFilme.value = "";
  elementoPoster.value = "";
}

function removerFilme() {
  if (listaFilmes[0] == undefined || listaFilmes[0] == null) {
    return;
  }

  var elementoPoster = document.getElementById("poster");
  var poster = elementoPoster.value;

  var elementoFilme = document.getElementById("filme");
  var filme = elementoFilme.value;

  for (var i = 0; i < listaFilmes.length; i++) {
    if (filme == listaFilmes[i].titulo || poster == listaFilmes[i].poster) {
      listaFilmes.splice(i, 1);
      break;
    }
  }

  elementoFilme.value = "";
  elementoPoster.value = "";
  listarFilmes(listaFilmes);
}

function listarFilmes(listaFilmes) {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  console.log(listaFilmes);

  if (listaFilmes[0] == undefined || listaFilmes[0] == null) {
    elementoListaFilmes.innerHTML = "";
    return;
  }

  // popula os pôsteres na tabela (talvez seja a largura da imagem)
  var tempInnerHTML = '<table align="center"><tr>';
  for (var i = 0; i < listaFilmes.length; i++) {
    var nomeFilme =
      '<td><img src="' +
      listaFilmes[i].poster +
      '"><br>' +
      listaFilmes[i].titulo +
      "</td>";

    tempInnerHTML += nomeFilme;
  }
  tempInnerHTML += "</tr></table>";
  elementoListaFilmes.innerHTML = tempInnerHTML;
}

var elemento = document.getElementById("listaFilmes");
