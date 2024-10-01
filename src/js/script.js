let saldoAtual = 0;
let totalSaidas = 0;

window.onload = function() {
  const saldoInicialStorage = localStorage.getItem('saldoInicial');
  const ultimaEdicao = localStorage.getItem('ultimaEdicaoSaldo');

  if (saldoInicialStorage) {
    saldoAtual = parseFloat(saldoInicialStorage);
    document.getElementById("saldo").innerText = `R$ ${saldoAtual.toFixed(2)}`;
  }

  const hoje = new Date().toLocaleDateString();
  if (ultimaEdicao === hoje) {
    document.getElementById("saldo-inicial").disabled = true;
    document.getElementById("btn-saldo-inicial").disabled = true;
  }
};

function editarSaldoInicial() {
  const novoSaldoInicial = parseFloat(document.getElementById("saldo-inicial").value);

  if (isNaN(novoSaldoInicial)) {
    alert("Por favor, insira um saldo inicial válido.");
    return;
  }

  saldoAtual = novoSaldoInicial;
  document.getElementById("saldo").innerText = `R$ ${saldoAtual.toFixed(2)}`;
  localStorage.setItem('saldoInicial', saldoAtual);

  const hoje = new Date().toLocaleDateString();
  localStorage.setItem('ultimaEdicaoSaldo', hoje);

  document.getElementById("saldo-inicial").disabled = true;
  document.getElementById("btn-saldo-inicial").disabled = true;
}

function adicionarTransacao() {
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  if (!descricao || isNaN(valor)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  adicionarTransacaoNaTabela(descricao, valor, tipo);
  atualizarSaldo(tipo, valor);
  limparCampos();
}

function adicionarTransacaoNaTabela(descricao, valor, tipo) {
  const tabelaTransacoes = document.getElementById("tabela-transacoes").getElementsByTagName('tbody')[0];

  const novaLinha = tabelaTransacoes.insertRow();

  const celulaDescricao = novaLinha.insertCell(0);
  const celulaValor = novaLinha.insertCell(1);
  const celulaTipo = novaLinha.insertCell(2);

  celulaDescricao.innerText = descricao;
  celulaValor.innerText = `R$ ${valor.toFixed(2)}`;
  celulaTipo.innerText = tipo.charAt(0).toUpperCase() + tipo.slice(1);

  novaLinha.classList.add(tipo);

  if (tipo === "saida") {
    totalSaidas += valor;
  }
}

function atualizarSaldo(tipo, valor) {
  if (tipo === "entrada") {
    saldoAtual += valor;
  } else {
    saldoAtual -= valor;
  }

  document.getElementById("saldo").innerText = `R$ ${saldoAtual.toFixed(2)}`;
}

function limparCampos() {
  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
}

function calcularTroco() {
  const valorPago = parseFloat(document.getElementById("valor-pago").value);

  if (isNaN(valorPago) || valorPago <= 0) {
    alert("Por favor, insira um valor pago válido.");
    return;
  }

  const troco = valorPago - totalSaidas;

  if (troco < 0) {
    alert("O valor pago não cobre o total de despesas.");
    return;
  }

  const notas = [200, 100, 50, 20, 10, 5, 2];
  const moedas = [1, 0.50, 0.25, 0.10, 0.05];
  let trocoRestante = troco;
  let resultadoTroco = "";

  for (let i = 0; i < notas.length; i++) {
    const quantidadeNotas = Math.floor(trocoRestante / notas[i]);
    if (quantidadeNotas > 0) {
      resultadoTroco += `${quantidadeNotas} nota(s) de R$ ${notas[i]}\n`;
      trocoRestante -= quantidadeNotas * notas[i];
    }
  }

  for (let i = 0; i < moedas.length; i++) {
    const quantidadeMoedas = Math.floor(trocoRestante / moedas[i]);
    if (quantidadeMoedas > 0) {
      resultadoTroco += `${quantidadeMoedas} moeda(s) de R$ ${moedas[i].toFixed(2)}\n`;
      trocoRestante -= quantidadeMoedas * moedas[i];
    }
  }

  if (trocoRestante > 0) {
    resultadoTroco += `Troco restante: R$ ${trocoRestante.toFixed(2)}`;
  }

  document.getElementById("troco").innerText = `R$ ${troco.toFixed(2)}\n${resultadoTroco}`;
}
