import http from 'k6/http'
import { sleep, check } from 'k6'
//open() traz em string o que está em um arquivo
//json.parse transforma em objeto
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
    //iteration: 1
    stages: [
        { durantion: '5s', target: 10 },
        { durantion: '20s', target: 10 },
        { durantion: '20s', target: 10 },
        { durantion: '30s', target: 20 },
        { durantion: '5s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<50000'],
        http_req_failed: ['rate<0.01']
    }
}



export default function () {
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

    check(res, {
        'Validar que o status é 200': (r) => r.status === 200,
        'Validar que o Token é string': (r) => typeof (r.json().token) == 'string'
    })

    sleep(1)
}

