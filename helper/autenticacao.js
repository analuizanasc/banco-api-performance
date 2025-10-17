import http from 'k6/http'
//open() brings the string from the file
//json.parse transfom to a object
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export function obterToken() {
    const url = 'http://localhost:3000/login';

    //change a specific data from a object of fixtures
    //postLogin.username = "ana"
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = http.post(url, payload, params)

    return res.json('token')
}