export default function apiPostForm(e, url, data) {
    e.preventDefault()

    fetch('http://localhost:8000' + url, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json; charset=UTF-8" 
        },
        body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
