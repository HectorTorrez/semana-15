const request = require('request'); 
const fs = require('fs'); 
 
request('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body) => { 
    if (error) { 
        console.error(`Could not send request to API: ${error.message}`); 
        return; 
    } 
 
    if (response.statusCode != 200) { 
        console.error(`Expected status code 200 but received 
${response.statusCode}.`); 
        return; 
    } 
 
    console.log('Procesando lista de  bitcoin'); 
    bitcoin = JSON.parse(body); 
    let bitcoinList = ''; 
    Array.from(bitcoin).forEach(bitcoin => { 
        bitcoinList += `${bitcoin['bpi']}, ${bitcoin['code']}\n`; 
    }); 
 
    fs.writeFile('bitcoinList.txt', bitcoinList, (error) => { 
        if (error) { 
            console.error(`No se ha podido guardar:  ${error}`); 
            return; 
        } 
 
        console.log('Lista de bitcoin se guarda en bitcoinList.txt');; 
    }); 
}); 