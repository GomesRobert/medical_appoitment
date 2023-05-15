# Agendamento de consulta médica

### **Funcionalidades**

---

### **Cadastro de Usuário**

-[] O usuário precisa estar autenticado na aplicação.
-[] Não deve ser possível realizar o cadastro de uma especialidade já existente, ou seja, com o mesmo nome.
-[] O usuário precisa ter permissão de administrador.
-[] Não deve ser possível cadastrar uma especialidade com nome vazio.

### **Cadastro de Médico**

- [x] Deve ser possível cadastrar um médico
- [x] O médico deve possuí um CRM com 6 dígitos
- [x] O médico deve estar atrelado a um usaário
- [x] O médico deve ter uma e somente uma especialidade
- [x] Não deve ser possível cadastrar um médico sem CRM.
- [x] Não deve ser possível cadastrar o mesmo CRM mais de uma vez.

### **Cadastro de Informações do médico**

-[] Deve ser possível cadastrar a informação de um médico
-[] O médico ele deve estar cadastrado
-[] O médico deve estar autenticado na aplicação
-[] Não deve ser possível ter mais de um registro de informação pro médico
-[] O horário de término não deve ser menor que o horário de inicio de atendimento
-[] A duracão da consulta não pode ser menor ou igual a zero

### **Cadastro de agendamento**

-[] Deve set possivel cadastrar um agendamento
-[] O paciente deve estar cadastrado no sistema
-[] O paciente estar autenticado na aplicação
-[] O médico selecionado deve estar cadastrado no sistema
-[] O médico escolhido deve ter disponibilidade para o horáio selecionado
-[] O médico deve ter disponibilidade para o dia da semana escolhido
-[] O horário escolhido deve estar entre o horário de atendimento médico
-[] Não deve ser possivel cadastrar um agendamento se já existir outro agendamento
para o mesmo médico com a mesma data e horário selecionado.
-[] O Paciente não deve ter algum agendamento cadastrado para o mesmo dia e horário
escolhido.
