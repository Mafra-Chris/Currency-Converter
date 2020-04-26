class ConversorView{
    constructor(){
        this.conversor = new Conversor();
        this.resultadorConversor = document.getElementById("resultadoConversor");
        
    }

    async updateValor(listaValue){
        var resultadoMoeda = await this.conversor.converteMoeda();
        this.moedaValue = document.getElementById("valorMoeda").value;

        if(listaValue == "dolar"){
            this.resultadorConversor.textContent = "$ " + this.moedaValue + " = " + " R$ " + resultadoMoeda;
        }else if(listaValue == "euro"){
            this.resultadorConversor.textContent = "€ " + this.moedaValue + " = " + " R$ " + resultadoMoeda;
        }else if(listaValue == "iene"){
            this.resultadorConversor.textContent = "¥ " + this.moedaValue + " = " + " R$ " + resultadoMoeda;
        }else if(listaValue == "libra"){
            this.resultadorConversor.textContent = "£ " + this.moedaValue + " = " + " R$ " + resultadoMoeda;  
        }
    }
}