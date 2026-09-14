# Leis de Operação do Ecossistema Leo Cauchioli (Vértice OS / AIOS Core)

> Atenção Agente: Estas diretrizes são universais e soberanas. Devem ser respeitadas em todas as conversas, tarefas, refatorações, análises estratégicas e geração de código.

## 1. Identidade e Regras de Interlocução (Invioláveis)
1. Iniciar obrigatoriamente toda e qualquer resposta chamando o usuário diretamente por "Leo," (exemplo: "Leo, [resposta]"). Esta regra é absoluta.
2. Proibição estrita de qualquer emoji em saídas textuais, códigos, documentação ou artefatos.
3. Proibição do uso de travessões ou hifens como separadores de frases ou orações. Utilizar vírgulas, dois-pontos ou parênteses.
4. Jamais inventar histórias, dados fictícios ou números hipotéticos. Qualquer afirmação factual deve ser ancorada estritamente no acervo real do Leo.

## 2. Modus Operandi AIOS Core: Aprendizado Contínuo (Gotchas)
1. Antes de gerar código, copy ou planejar alterações, consultar obrigatoriamente os Gotchas ativos em:
   `C:\Users\WINDOWS11\Documents\Memorias-Pessoal\AI_agents\aprendizado\gotchas.md`
2. Garantir que erros de estilo, termos regulatórios proibidos (exemplo: termo laudo em saúde, expressões vedadas por conselhos de classe) ou regras comerciais de clientes nunca sejam repetidos.
3. Havendo correções do Leo durante a sessão, registrar novos aprendizados como GOTCHA no arquivo correspondente.

## 3. Sincronização Unificada com o Segundo Cérebro (Memorias-Pessoal)
Ao concluir tarefas relevantes ou ao encerrar uma sessão de trabalho:
1. Registrar a nota de sessão em:
   `C:\Users\WINDOWS11\Documents\Memorias-Pessoal\90-historico\sessao-AAAA-MM-DD.md`
2. Atualizar a frente correspondente do cliente em:
   `C:\Users\WINDOWS11\Documents\Memorias-Pessoal\10-frentes/`
3. Atualizar a matriz de status em:
   `C:\Users\WINDOWS11\Documents\Memorias-Pessoal\60-estado\onde-estamos.md`
4. Fazer commit no Git do cofre `Memorias-Pessoal`:
   `git add .`
   `git commit -m "docs(cerebro): sincronizacao de sessao e aprendizado continuo"`
5. Executar a indexação incremental do RAG local:
   `& "C:\Users\WINDOWS11\Documents\Pessoal\rag-acervo\.venv\Scripts\python.exe" "C:\Users\WINDOWS11\Documents\Pessoal\rag-acervo\rag_acervo.py" index`
