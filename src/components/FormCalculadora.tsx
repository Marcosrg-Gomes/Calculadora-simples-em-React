import { useState } from "react";
import "./FormCalculadora.css";

function FormCalculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number | string>(0);
  const [operacao, setOperacao] = useState("soma");

  function limpar() {
    setNum1("");
    setNum2("");
    setResultado(0);
  }


  function calcular() {
    if (num1.trim() === "" || num2.trim() === "") {
      setResultado("Digite os dois números");
      return;
    }

    const valor1 = Number.parseFloat(num1);
    const valor2 = Number.parseFloat(num2);

    if (operacao === "soma") {
      setResultado(valor1 + valor2);
    } else if (operacao === "subtracao") {
      setResultado(valor1 - valor2);
    } else if (operacao === "multiplicacao") {
      setResultado(valor1 * valor2);
    } else if (operacao === "divisao") {
      if (valor2 === 0) {
        setResultado("Erro: divisão por zero");
      } else {
        setResultado(valor1 / valor2);
      }
    }
  }

  return (
    <div className="calculadora">
      <h1 className="titulo">Calculadora</h1>

      <div className="campo">
        <label htmlFor="num1">Número 1</label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Digite o primeiro número"
        />
      </div>

      <div className="campo">
        <label htmlFor="num2">Número 2</label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Digite o segundo número"
        />
      </div>

      <div className="seletor">
        <label htmlFor="operacao">Operação</label>

        <select
          id="operacao"
          value={operacao}
          onChange={(e) => setOperacao(e.target.value)}
        >
          <option value="soma">Soma (+)</option>
          <option value="subtracao">Subtração (-)</option>
          <option value="multiplicacao">Multiplicação (×)</option>
          <option value="divisao">Divisão (÷)</option>
        </select>
      </div>

      <div className="botoes">
        <button
          type="button"
          className="botaoCalcular"
          onClick={calcular}
        >
          Calcular
        </button>

        <button
          type="button"
          className="botaoLimpar"
          onClick={limpar}
        >
          Limpar
        </button>
      </div>

      <div className="resultado">
        <span>Resultado</span>
        <strong>{resultado}</strong>
      </div>
    </div>
  );
}

export default FormCalculadora;

