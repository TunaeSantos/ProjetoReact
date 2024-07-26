import React, {useState} from 'react'
import './App.css' 
import InputMask from 'react-input-mask';

function App() {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado ] = useState();

  function mudancaAltura(evt){
    setAltura(evt.target.value);
  }

  const calcularIMC= () => {
      const pesoFloat = parseFloat(peso);
      const alturaFloat = parseFloat(altura) / 100 ;

      if (pesoFloat > 0 && alturaFloat > 0) {
        const imc = pesoFloat / (alturaFloat * alturaFloat);
        setResultado(imc.toFixed(2));
      }
      else {
        setResultado ('Campos incorretos');
      }
  }

  const limparCampos = () => {
    setPeso('')
    setAltura('')
    setResultado('')
  }

  
  
  return (
    <>
      <h1>Tabela de medição do IMC</h1>
      <div>
        <p>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
        O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
        Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
        </p>
      </div>
      <form>
        <label for="number">Altura : (ex: 1,59)</label>
        <input type='number' id="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>

        <label for="Weight">Peso : (ex: 67.2)</label>
        <input type='number'  id="Weight"  onChange={(e) => setPeso(e.target.value)} value={peso}/>
        
        <button class="btn-enviar" type="button" onClick={calcularIMC}>Calcular</button>
        <button class="btn-reset" type="reset" onClick={limparCampos}>Limpar</button>
      </form>
      <table>
        <caption>
            <h2>Veja a interpretação do IMC</h2>
        </caption>
        <thead>
            <tr>
                <th>IMC</th>
                <th>Classificação</th>
                <th>Obesidade (Grau)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Menor que 18</td>
                <td>Magresa</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Normal</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 25,0 e 29,9</td>
                <td>Sobrepeso</td>
                <td>|</td>
            </tr>
            <tr>
                <td>Entre 30,0 e 39,9 </td>
                <td>Obesidade</td>
                <td>||</td>
            </tr>
            <tr>
                <td>Maior que 40,0 </td>
                <td>Obesidade Grave</td>
                <td>|||</td>
            </tr>
        </tbody>
    </table>
    <div class="calc-result">
      <span>Seu IMC: <b class="result">{resultado}</b> </span> 
    </div>
    </>
  )
}

export default App
