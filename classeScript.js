class Calculadora {
    constructor() {
        this.tela = document.getElementById("tela");
        this.telaAnterior = document.getElementById("telaAnterior")
        this.btn = document.querySelectorAll(".botao")
        this.num1 = null;
        this.num2 = null;
        this.operador = null;
        this.res=null;
        this.Mouse();
        this.Teclado();
        this.Operadores();
        this.Limpar();
        this.Delete();
        this.atuaTela();
    }
    Mouse() {
        this.btn.forEach((elemento) => {

            elemento.addEventListener('click', () => {
                this.Numeros(elemento.textContent);
                this.Operadores(elemento.textContent)
                this.Calcular(elemento.textContent)
                this.Limpar(elemento.textContent)
                this.Delete(elemento.textContent)
            })
        })
    }
    Teclado() {
        document.addEventListener('keyup', (event) => {
            this.Numeros(event.key)
            this.Operadores(event.key)
            this.Calcular(event.key);
            this.Limpar(event.key)
            this.Delete(event.key)
        })

    }

    atuaTela() {
        this.telaAnterior.innerHTML = ""
        this.tela.innerHTML = this.res
    }

    Numeros(elemento) {
        let bt = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.']
        if (bt.includes(elemento)) {
            this.tela.innerHTML += elemento;
        }
    }
    Operadores(elemento) {
        let operadores = ['+', '-', '*', '/']
        if (operadores.includes(elemento)) {
            this.telaAnterior.innerHTML = this.tela.innerHTML;
            this.num1 = this.tela.innerHTML;
            this.tela.innerHTML = "";
            this.operador = elemento
        }
    }
    Calcular(elemento) {
        if (elemento === "=" || elemento === "Enter") 
        {
            this.num2 = this.tela.innerHTML
            switch (this.operador) 
            {
                case '+':
                    this.res = parseFloat(this.num1) + parseFloat(this.num2)
                    this.atuaTela()
                    break;
                case '-':
                    this.res = parseFloat(this.num1) - parseFloat(this.num2)
                    this.atuaTela() 
                    break; 
                case '*':
                    this.res = parseFloat(this.num1) * parseFloat(this.num2)
                    this.atuaTela()
                    break;
                case '/':
                    this.res = parseFloat(this.num1) / parseFloat(this.num2)
                    this.atuaTela() 
                    break;     
            }
        }
    }
    Limpar(elemento) {
        if (elemento === "C" || elemento === "c") {
            this.tela.innerHTML = "";
            this.telaAnterior.innerHTML = ""
            this.num1 = null;
            this.num2 = null;
            this.operador = null;

        }
    }
    Delete(elemento) {
        if (elemento === "<=" || elemento === "Backspace") {
            console.log(elemento)
            this.tela.innerHTML = this.tela.innerHTML.slice(0, -1)
        }
    }

}
const Jogar = new Calculadora();
