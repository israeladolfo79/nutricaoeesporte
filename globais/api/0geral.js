
async function bater_na_api(json){

    const ENDPOINT = ' http://127.0.0.1:5000/'
    const body = {
        'acao':'aaaa'
    }
    props = {
        method: 'POST',
        mode: 'cors', // pode ser cors ou basic(default)
        redirect: 'follow',
        body:JSON.stringify(body)
    }
    await fetch(ENDPOINT,props)
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

    return {}
}