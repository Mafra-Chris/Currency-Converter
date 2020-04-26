class ConversorModel{
    constructor(){
        this.http = new HttpService();
    }
    
    getCurrency(){
        return this.http.get("http://data.fixer.io/api/latest?access_key=1513d68eb482d1e65fe0eef1cfd7fdbc")
            .then((resolve)=> {
                return resolve;
            })
            .catch((error)=>console.log(error));
    }

    async getMoeda(listaValue){
        var moedas = await this.getCurrency();

        if(listaValue == "dolar"){
            return moedas.rates.USD;
        }else if(listaValue == "euro"){
            return moedas.rates.EUR;
        }else if(listaValue == "iene"){
            return moedas.rates.JPY;
        }else if(listaValue == "libra"){
            return moedas.rates.GBP;   
        }else if(listaValue == "real"){
            return moedas.rates.BRL;   
        }
    }
}