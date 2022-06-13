

const fetchData = (method, url, data) => {
    let pack;
    if (method === "post" || method === "put") {
        pack = {
            method,
            body: JSON.stringify(data),
            headers:{"content-type": "application/json"},
        } 
    }else{
        pack = {
            method
        }
    }
    

    const response = fetch(url, pack)
        .then(res => {
            return (res.json());
        })
        .then(data => {
            return data;
        })
        .catch((err) =>{
            return "err";
    });

    return response;
}

module.exports = fetchData;