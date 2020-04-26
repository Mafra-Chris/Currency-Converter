class ConversorController{
    constructor(){
        this.http = new HttpService();
        this.conversorModel = new ConversorModel();
        this.conversorView = new ConversorView();
        this.conversor = new Conversor();
        
    }

    converteBtn(){
        event.preventDefault();
        this.listaValue = document.querySelector("#listaMoedas").value;
        this.conversor.converteMoeda();
        this.conversorView.updateValor(this.listaValue);
    }
    
}