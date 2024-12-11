# API de Controle Financeiro

Esta API permitirá que o usuário registre entradas (receitas) e saídas (despesas), categorizadas de acordo com a natureza da transação. A principal funcionalidade será o gerenciamento dessas transações e a visualização de relatórios financeiros, como o saldo total e o histórico.

## Funcionalidades da API

1. **Registrar uma transação (entrada ou saída):**
   - **Dados:** Descrição, Valor, Categoria, Tipo de transação (entrada/saída), Data.
   - **Exemplo:** Registrar uma entrada de salário ou uma saída de supermercado.

2. **Consultar o saldo atual:**
   - Retorna o saldo acumulado de todas as transações (entradas - saídas).

3. **Visualizar o histórico de transações:**
   - Exibe uma lista das transações com filtros opcionais, como data ou categoria.

4. **Relatório financeiro (opcional):**
   - Um resumo com total de entradas, saídas e saldo final, podendo ser filtrado por período.