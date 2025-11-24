const SaluteController = {};
const ENV = import.meta.env;

SaluteController.salute = async (data) => {
    return await fetch(`${ENV.VITE_API_URL}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(({data}) => {
        return data;
    }).catch(console.log);
}

export default SaluteController;