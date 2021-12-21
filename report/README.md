# 7 лаба

Станом на 2021 рік використання tsl 1.1 не бажано, варто використовувати останню версію tsl 1.3
В ході виконання лабораторної я згенерувала сертифікат (*.pem), CA (*-ca.pem) та ключ (*-key.pem).
При генерації використовувала aes-256 наступним чином: 
```
$ openssl genrsa -aes256 -out localhost-ca.key 4096
$ openssl req -x509 -new -nodes -key localhost-ca.key -sha256 -days 1825 -out localhost-ca.pem
```
Налаштувала перенаправлення з http на https.
В результаті в браузері сертифікат виглядає так:
![сертифікат](https://github.com/kocetora/koa-knex-hrm/blob/ssl/report/cert%20image.png)
Перенаправлення так:
![перенаправлення](https://github.com/kocetora/koa-knex-hrm/blob/ssl/report/redirect.png)
В лабі локально я зберігаю сертифікати і ключі в папці проекту, але в реальних умовах їх треба зберігати на HSM (hardware security module), використовувати DHE або ж nginx сервер ( [джерело](https://security.stackexchange.com/questions/27889/how-should-i-store-ssl-keys-on-the-server) ) 
