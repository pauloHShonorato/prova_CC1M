function adicionarNaTabela() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "APROVADO" : "REPROVADO";

    var tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaMatricula = novaLinha.insertCell(1);
    var celulaNota1 = novaLinha.insertCell(2);
    var celulaNota2 = novaLinha.insertCell(3);
    var celulaMedia = novaLinha.insertCell(4);
    var celulaSituacao = novaLinha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSituacao.innerHTML = situacao;

    // Adiciona a classe correspondente para mudar a cor da situação
    if (situacao === "APROVADO") {
        celulaSituacao.classList.add("aprovado");
    } else {
        celulaSituacao.classList.add("reprovado");
    }
}
