# SISTEMA MOBILE DA RIFORT BUS

## Requisitos:

### Funcionais:
O sistema deverá:
* Consultar a lotação de ônibus específicos de São Paulo
* Consultar a previsão de chegada de ônibus específicos de São Paulo
* Consultar a localização em tempo real de ônibus específicos de São Paulo
* Todas as consultas estarão visíveis ao usuário após sua realização
* Para realizar as consultas, usuário deverá informar o número do ônibus, seu sentido e o ponto de parada desejado
* É possível solicitar contato ao suporte da RIFORT, informando e-mail, assunto e a mensagem. O mesmo será respondido no e-mail informado

### Não funcionais

* O sistema usará o MySql com o MySql Workbench para gerenciar o Banco de Dados
* O sistema será desenvolvido utilizando:
    1. Linguagens - Javascript, Typescript, PHP, SQL.
    2. Compiladores & Servers - Nodejs, Artisan
    3. Frameworks - React Native e Laravel
    4. ORM - Eloquent

## Case of use Diagram:

![Diagrama de caso de uso](https://github.com/RafaelDuarteF/rifort-web-vue-laravel/assets/103393497/50b8b661-60b2-4aa7-9b6d-8d64c1e8fb27)

# Fluxogram Diagram:

![Fluxograma de consulta RIFORT](https://github.com/RafaelDuarteF/rifort-web-vue-laravel/assets/103393497/cfd3d012-0b0a-455f-8b88-8e88e0333ce7)

Fluxograma do sistema de consulta RIFORT.

## Database

### Model Entity Relashionship

![MLR Rifort](https://github.com/RafaelDuarteF/rifort-web-vue-laravel/assets/103393497/352ee180-d02b-4c81-abf6-1ebf584700da)

### Class Diagram

![Diagrama de Classe RIFORT](https://github.com/RafaelDuarteF/rifort-web-vue-laravel/assets/103393497/dafff9b7-125a-467e-a290-225c9995083a)
