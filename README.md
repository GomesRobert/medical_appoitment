# Agendamento de consulta médica

### **Funcionalidades**

---

### **Cadastro de Usuário**

- Deve ser possível o usuário realizar um cadastro
- O usuário não precisa estar autenticado no sistema para se cadastrar
- Não deve ser possível realizar o cadastro de um usuário sem username e senha.
- Não deve ser possível realizar um cadastro de username já existente.
- Não deve ser possível o usuário cadastrar a permissão de administrador.

---

### **Cadastro de Especialidade**

- Deve ser possivel um usuário cadastrar uma especialidade
- O usuário precisa estar autenticado na aplicação.
- Não deve ser possível realizar o cadastro de uma especialidade já existente, ou seja, com o mesmo nome.
- O usuário precisa ter permissão de administrador.
- Não deve ser possível cadastrar uma especialidade com nome vazio.

### **Cadastro de Médico**

- [] Deve ser possível cadastrar um médico
- O médico deve possuí um CRM com 6 dígitos
- O médico deve estar atrelado a um usaário
- O médico deve ter uma e somente uma especialidade
- Não deve ser possível cadastrar um médico sem CRM.
- Não deve ser possível cadastrar o mesmo CRM mais de uma vez.

### **Cadastro de Informações do médico**

- Deve ser possível cadastrar a informação de um médico
- O médico ele deve estar cadastrado
- O médico deve estar autenticado na aplicação
- Não deve ser possível ter mais de um registro de informação pro médico
- O horário de término não deve ser menor que o horário de inicio de atendimento
- A duracão da consulta não pode ser menor ou igual a zero
