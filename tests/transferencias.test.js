import http from 'k6/http';
import { sleep } from 'k6';
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";
import { obterToken } from '../helper/autenticacao.js'; 
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'))

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken()

  const url = 'http://localhost:3000/transferencias';

  const payload = JSON.stringify(postTransferencias)
  const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

  let res = http.post(url,payload,params);
  expect.soft(res.status).toBe(201);
  sleep(1);
}
