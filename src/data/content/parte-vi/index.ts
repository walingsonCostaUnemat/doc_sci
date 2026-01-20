import type { Section, Diagram } from '@/data/types';

// ============================================================
// PARTE VI - DESMOBILIZACAO E ENCERRAMENTO
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS MERMAID
// ------------------------------------------------------------

const diagramFasesDesmobilizacao: Diagram = {
  id: 'fases-desmobilizacao',
  title: 'Fases da Desmobilizacao',
  type: 'flowchart',
  description: 'Processo completo de desmobilizacao por fases',
  code: `flowchart TB
    subgraph fase1["FASE 1 - PLANEJAMENTO"]
        P1["Incidente<br/>Estabiliza"]
        P2["CI Decide<br/>Iniciar Desmob"]
        P3["Plano de<br/>Desmobilizacao"]
    end

    subgraph fase2["FASE 2 - PRIORIZACAO"]
        PR1["CSOp Identifica<br/>Recursos Excedentes"]
        PR2["Definicao de<br/>Prioridades"]
        PR3["Lista de<br/>Liberacoes"]
    end

    subgraph fase3["FASE 3 - EXECUCAO"]
        E1["Notificacao<br/>aos Recursos"]
        E2["Check-Out<br/>SCI 221"]
        E3["Liberacao<br/>Autorizada"]
    end

    subgraph fase4["FASE 4 - ENCERRAMENTO"]
        EN1["Ultimas<br/>Liberacoes"]
        EN2["Documentacao<br/>Final"]
        EN3["Encerramento<br/>Formal"]
    end

    P1 --> P2 --> P3
    P3 --> PR1 --> PR2 --> PR3
    PR3 --> E1 --> E2 --> E3
    E3 -.->|Repete por recurso| E1
    E3 --> EN1 --> EN2 --> EN3

    classDef planejStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef priorStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef execStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef encerStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class P1,P2,P3 planejStyle
    class PR1,PR2,PR3 priorStyle
    class E1,E2,E3 execStyle
    class EN1,EN2,EN3 encerStyle`
};

const diagramPrioridadesLiberacao: Diagram = {
  id: 'prioridades-liberacao',
  title: 'Prioridades de Liberacao de Recursos',
  type: 'flowchart',
  description: 'Ordem tipica de liberacao por tipo de recurso',
  code: `flowchart LR
    subgraph p1["1a PRIORIDADE"]
        R1["Recursos Locais<br/>Respondedores Iniciais<br/>Cooperadores Locais"]
    end

    subgraph p2["2a PRIORIDADE"]
        R2["Recursos Especializados<br/>EIAOPs de Outras Regioes<br/>GAvBM"]
    end

    subgraph p3["3a PRIORIDADE"]
        R3["Recursos de Apoio<br/>Outras Regioes"]
    end

    subgraph p4["4a PRIORIDADE"]
        R4["Recursos Finais<br/>Rescaldo/Patrulha<br/>CI e Staff"]
    end

    p1 --> p2 --> p3 --> p4

    classDef p1Style fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef p2Style fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef p3Style fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef p4Style fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class R1 p1Style
    class R2 p2Style
    class R3 p3Style
    class R4 p4Style`
};

const diagramProcessoCheckout: Diagram = {
  id: 'processo-checkout',
  title: 'Processo de Check-Out (SCI 221)',
  type: 'flowchart',
  description: 'Fluxo de liberacao de recurso',
  code: `flowchart TB
    inicio["Recurso Recebe<br/>SCI 221"]

    subgraph estacoes["ESTACOES DE CHECK-OUT"]
        direction LR
        E1["Comunicacoes<br/>Devolucao Radios"]
        E2["Instalacoes<br/>Area Limpa"]
        E3["Suprimentos<br/>Ferramentas"]
        E4["Suporte Terrestre<br/>Inspecao Viatura"]
        E5["Admin/Financas<br/>Registro Tempo"]
        E6["OSeg<br/>Avaliacao Pessoal"]
    end

    verificacao["Lider Desmob<br/>Verifica SCI 221"]
    liberacao["Liberacao<br/>Autorizada"]
    saida["Recurso<br/>Desmobilizado"]

    inicio --> E1
    E1 --> E2 --> E3 --> E4 --> E5 --> E6
    E6 --> verificacao
    verificacao -->|Completo| liberacao
    verificacao -->|Pendencias| inicio
    liberacao --> saida

    classDef inicioStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef estacaoStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef finalStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class inicio inicioStyle
    class E1,E2,E3,E4,E5,E6 estacaoStyle
    class verificacao,liberacao,saida finalStyle`
};

const diagramResponsabilidades: Diagram = {
  id: 'responsabilidades-desmob',
  title: 'Responsabilidades na Desmobilizacao',
  type: 'flowchart',
  description: 'Papel de cada funcao no processo',
  code: `flowchart TB
    subgraph DESMOB["DESMOBILIZACAO - RESPONSABILIDADES"]
        direction TB
    end

    subgraph CI_RESP["CI - COMANDANTE"]
        CI1["Aprovacao Final"]
        CI2["Define Prioridades"]
        CI3["Autoriza Liberacoes"]
    end

    subgraph SPLAN["SPlan - PLANEJAMENTO"]
        SP1["Desenvolve Plano"]
        SP2["Coordena Processo"]
        SP3["Preenche SCI 221"]
    end

    subgraph SOP["SOp - OPERACOES"]
        SO1["Identifica Excedentes"]
        SO2["Avalia Necessidades"]
        SO3["Lista Recursos"]
    end

    subgraph SLOG["SLog - LOGISTICA"]
        SL1["Organiza Transporte"]
        SL2["Inspeciona Viaturas"]
        SL3["Coleta Equipamentos"]
    end

    subgraph SADMIN["SAdmin - ADMIN/FIN"]
        SA1["Registro de Horas"]
        SA2["Processa Reclamacoes"]
        SA3["Custos Finais"]
    end

    subgraph OSEG["OSeg - SEGURANCA"]
        OS1["Avalia Pessoal"]
        OS2["Trabalho/Descanso"]
        OS3["Aptidao Viagem"]
    end

    DESMOB --> CI_RESP
    DESMOB --> SPLAN
    DESMOB --> SOP
    DESMOB --> SLOG
    DESMOB --> SADMIN
    DESMOB --> OSEG

    classDef ciStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef spStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef soStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef slStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef saStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef osStyle fill:#0891B2,stroke:#0E7490,color:#FFFFFF

    class CI1,CI2,CI3 ciStyle
    class SP1,SP2,SP3 spStyle
    class SO1,SO2,SO3 soStyle
    class SL1,SL2,SL3 slStyle
    class SA1,SA2,SA3 saStyle
    class OS1,OS2,OS3 osStyle`
};

const diagramEncerramento: Diagram = {
  id: 'encerramento-incidente',
  title: 'Processo de Encerramento do Incidente',
  type: 'flowchart',
  description: 'Etapas do encerramento formal',
  code: `flowchart TB
    subgraph extincao["EXTINCAO FINAL"]
        EX1["100% Perimetro<br/>Frio"]
        EX2["Rescaldo<br/>Completo"]
        EX3["Verificacao<br/>Final"]
    end

    subgraph liberacao["ULTIMAS LIBERACOES"]
        L1["Recursos de<br/>Patrulhamento"]
        L2["Staff<br/>(CSLog, CSPlan)"]
        L3["CI<br/>(Ultimo a Sair)"]
    end

    subgraph admin["ENCERRAMENTO ADMIN"]
        A1["Documentacao<br/>Final"]
        A2["Prestacao<br/>de Contas"]
        A3["Comunicacao<br/>Encerramento"]
    end

    subgraph pos["POS-INCIDENTE"]
        P1["Reuniao<br/>Autoridades"]
        P2["AAR<br/>Revisao Pos-Acao"]
        P3["Licoes<br/>Aprendidas"]
    end

    EX1 --> EX2 --> EX3
    EX3 --> L1 --> L2 --> L3
    L3 --> A1 --> A2 --> A3
    A3 --> P1 --> P2 --> P3

    classDef extStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef libStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef admStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef posStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class EX1,EX2,EX3 extStyle
    class L1,L2,L3 libStyle
    class A1,A2,A3 admStyle
    class P1,P2,P3 posStyle`
};

const diagramAAR: Diagram = {
  id: 'aar-perguntas',
  title: 'Estrutura da Revisao Pos-Acao (AAR)',
  type: 'flowchart',
  description: 'As 5 perguntas-chave do AAR',
  code: `flowchart TB
    subgraph aar["AFTER ACTION REVIEW - AAR"]
        direction TB
        Q1["1. O QUE ESTAVA<br/>PLANEJADO?<br/>Objetivos, plano, expectativas"]
        Q2["2. O QUE REALMENTE<br/>ACONTECEU?<br/>Execucao, resultados"]
        Q3["3. POR QUE HOUVE<br/>DIFERENCAS?<br/>Desvios, fatores, falhas"]
        Q4["4. O QUE<br/>APRENDEMOS?<br/>Funcionou bem, nao funcionou"]
        Q5["5. O QUE VAMOS<br/>FAZER?<br/>Mudancas, treinamentos"]
    end

    Q1 --> Q2 --> Q3 --> Q4 --> Q5

    subgraph resultado["RESULTADO"]
        R1["Relatorio AAR"]
        R2["Recomendacoes"]
        R3["Plano de Acao"]
    end

    Q5 --> R1 --> R2 --> R3

    classDef qStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef rStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class Q1,Q2,Q3,Q4,Q5 qStyle
    class R1,R2,R3 rStyle`
};

// ------------------------------------------------------------
// SECOES DE CONTEUDO
// ------------------------------------------------------------

const conceitosDesmobilizacao: Section = {
  id: 'conceitos-desmobilizacao',
  slug: 'conceitos-desmobilizacao',
  title: '28. Conceitos de Desmobilizacao',
  part: 6,
  order: 1,
  content: `## O Que E Desmobilizacao

**DESMOBILIZACAO:** Liberacao ordenada, segura e eficiente de recursos empenhados em um incidente, retornando-os ao seu local e condicao originais.

### Por Que E Importante

| Aspecto | Importancia |
|---------|-------------|
| **Eficiencia** | Recursos nao devem permanecer no incidente alem do necessario |
| **Prontidao** | Recursos liberados podem responder a outros incidentes |
| **Custos** | Reducao de despesas operacionais ao liberar recursos excedentes |
| **Bem-estar** | Permite descanso e recuperacao de pessoal |
| **Prestacao de Contas** | Documentacao adequada de emprego e custos |

---

## Quando Iniciar o Planejamento

### Sinais de Estabilizacao

**REGRA GERAL:** Planejamento de desmobilizacao deve iniciar assim que incidente estabilizar.

**SINAIS:**
- Perimetro contido
- Objetivos principais alcancados
- Progressao do incendio controlada
- Projecao de extincao possivel

**TIPICO EM INCENDIOS FLORESTAIS:**
- Apos 70-80% de contencao
- Quando rescaldo e atividade principal
- Clima favoravel (chuva prevista, umidade alta)

### Criterios por Nivel CBMMT

| Nivel | Abordagem |
|-------|-----------|
| Nivel 1-2 | Desmobilizacao informal, recursos liberados conforme conclusao |
| Nivel 3-4 | Plano formal de desmobilizacao (SCI 221) necessario |

---

## Tipos de Recursos

### Recursos Humanos e Bens Duraveis

**DEFINICAO:** Pessoas, viaturas, equipamentos permanentes.

**EXEMPLOS:**
- Bombeiros (IRTs)
- Viaturas (caminhonetes, caminhoes-pipa)
- Equipamentos (radios, ferramentas duraveis)
- Maquinas (motoniveladoras, pas-carregadoras)
- Aeronaves

**PROCESSO:**
1. Inspecao antes de liberacao
2. Manutencao se necessario
3. Abastecimento
4. Documentacao de danos
5. Check-out formal

### Recursos de Consumo

**DEFINICAO:** Bens descartaveis utilizados e consumidos durante incidente.

**EXEMPLOS:**
- Agua, combustivel, alimentacao
- Ferramentas manuais descartaveis
- EPIs danificados
- Material medico

**PROCESSO:**
- Contabilizacao completa
- Custos arcados pela gestao do incidente
- Reabastecimento na unidade de origem
- Destinacao adequada de residuos`,
  diagrams: [diagramFasesDesmobilizacao]
};

const responsabilidadesDesmob: Section = {
  id: 'responsabilidades-desmob',
  slug: 'responsabilidades-desmob',
  title: '29. Responsabilidades na Desmobilizacao',
  part: 6,
  order: 2,
  content: `## Comandante do Incidente

### Autoridade
- **APROVACAO FINAL:** CI aprova todas as liberacoes de recursos
- **DECISAO:** Determina quando iniciar processo formal de desmobilizacao

### Responsabilidades
- Estabelecer prioridades de liberacao
- Aprovar Plano de Desmobilizacao
- Autorizar liberacoes especificas
- Coordenar com agencias cooperadoras

---

## Secao de Planejamento

### Lider da Unidade de Desmobilizacao

**RESPONSAVEL PRINCIPAL:** Se ativado, desenvolve e implementa plano.

**QUANDO ATIVAR:**
- Nivel 3 e 4 (geralmente)
- Nivel 2 complexo com muitos recursos
- Se nao ativado, CSPlan assume

### Responsabilidades da Secao
- Desenvolver Plano de Desmobilizacao detalhado
- Coordenar processo com todas as secoes
- Processar liberacoes (preencher SCI 221)
- Documentar todas as liberacoes
- Notificar unidades de origem sobre ETAs

---

## Secao de Operacoes

### Identificacao de Recursos Excedentes

**RESPONSABILIDADE:** CSOp identifica quais recursos taticos nao sao mais necessarios.

**PROCESSO:**
1. Avalia necessidades futuras
2. Compara com recursos disponiveis
3. Lista recursos excedentes
4. Prioriza liberacoes

**COMUNICACAO:** Lista de recursos excedentes a Unidade de Desmobilizacao ou CSPlan (atualizada diariamente).

---

## Secao de Logistica

### Transporte
- Organiza transporte para recursos sem meios proprios
- Coordena veiculos para transporte de pessoal
- Agenda voos (se aplicavel)
- Organiza comboios

### Inspecao de Viaturas

**VERIFICACAO:**
- Condicoes mecanicas
- Danos causados durante incidente
- Nivel de combustivel
- Limpeza

**DOCUMENTACAO:** Registro de danos para fins de compensacao.

### Devolucao de Equipamentos
- Coleta de radios, ferramentas emprestadas, EPIs
- Verificacao de quantidade e condicao
- Registro de danos ou perdas

---

## Secao de Administracao e Financas

### Registro de Horas
- Processa registros de tempo de todo pessoal
- Calculo de diarias e horas extras
- Verificacao de check-in/check-out

### Processamento de Reclamacoes
- Danos a equipamentos
- Lesoes ocorridas durante incidente
- Coordenacao de compensacoes devidas

---

## Oficial de Ligacao

- Coordena liberacao de recursos de agencias cooperadoras
- Comunicacao com representantes de agencias
- Pode articular realocacao de recursos para outros incidentes ativos

---

## Oficial de Seguranca

### Condicoes de Pessoal

**AVALIA:**
- Fadiga
- Lesoes
- Condicoes para viajar
- Necessidade de descanso adicional

### Requisitos de Trabalho/Descanso

**GARANTE:** Todos atendam requisitos antes de viajar, especialmente motoristas de viaturas de grande porte.`,
  diagrams: [diagramResponsabilidades]
};

const planoDesmobilizacao: Section = {
  id: 'plano-desmobilizacao',
  slug: 'plano-desmobilizacao',
  title: '30. Plano de Desmobilizacao',
  part: 6,
  order: 3,
  content: `## Quando Necessario

### Obrigatorio (Nivel 3 e 4)

**CRITERIOS:**
- Multiplas agencias envolvidas
- Grande numero de recursos (30+)
- Operacoes prolongadas (5+ dias)
- Recursos de diferentes regioes

### Opcional (Nivel 2)
CI pode decidir por plano formal se julgar necessario.

### Nao Necessario (Nivel 1)
Geralmente liberacoes informais.

---

## Estrutura do Plano

### 1. Informacoes Gerais
- Contexto do incidente
- Status atual
- Projecao de encerramento
- Processo geral de desmobilizacao

### 2. Responsabilidades
- Quem faz o que
- Pontos de contato
- Cadeia de aprovacao

### 3. Prioridades de Liberacao
- Ordem de liberacao de recursos
- Criterios utilizados
- Excecoes

### 4. Procedimentos Especificos
- Passos detalhados para liberacao
- Formularios necessarios
- Inspecoes requeridas
- Check-outs obrigatorios

### 5. Informacoes de Viagem
- Rotas
- Requisitos de trabalho/descanso
- Contatos de emergencia
- Mapas

---

## Prioridades de Liberacao

### Ordem Tipica

| Prioridade | Recursos | Razao |
|------------|----------|-------|
| **1a** | Recursos locais (respondedores iniciais, cooperadores locais) | Retornar a prontidao para resposta local |
| **2a** | Recursos especializados de outras regioes (EIAOPs, GAvBM) | Custos altos, necessidade em outros locais |
| **3a** | Recursos de apoio de outras regioes | |
| **4a** | Recursos que continuarao ate extincao final (rescaldo) | |

### Fatores que Influenciam

- **Custos:** Recursos mais caros liberados primeiro
- **Distancia:** Recursos de muito longe liberados antes
- **Necessidade em outros locais:** Recursos requisitados para outro incidente
- **Fadiga:** Recursos muito fatigados liberados antes
- **Legislacao trabalhista:** Limites de horas trabalhadas
- **Acordos:** Termos com agencias cooperadoras

---

## Exemplo de Plano (Simplificado)

\`\`\`
PLANO DE DESMOBILIZACAO
INCIDENTE: IF Fazenda Boa Esperanca | NUMERO: IF-2025-089
DATA: 18/agosto/2025

PREPARADO POR: Cap Oliveira (CSPlan)
APROVADO POR: Maj Silva (CI)

---

1. INFORMACOES GERAIS

SITUACAO: 95% contido. Area total: 850 hectares.
Operacoes principais concluidas. Rescaldo em andamento.
Previsao de conclusao em 48h.

RECURSOS: 58 bombeiros, 1 helicoptero, 2 motoniveladoras, 12 viaturas

---

2. PRIORIDADES DE LIBERACAO

FASE 1 (18/agosto, 18:00):
- GAvBM (helicoptero) - retorno Cuiaba
- EMec (2 motoniveladoras) - retorno SINFRA
- EIAOP 03 - retorno Cuiaba (10 BMs)

FASE 2 (19/agosto, 06:00):
- EIAOP 05 - retorno Cuiaba (10 BMs)
- BMM Nobres - retorno Nobres (7 BMs)

FASE 3 (19/agosto, 18:00):
- BDBM Chapada - retorno (8 BMs)
- GCIF 1 e 2 - retorno Cuiaba (10 BMs)

FASE 4 (20/agosto, apos extincao):
- BDBM Pocone - retorno (8 BMs)
- Staff do Comando e Planejamento

---

3. PROCEDIMENTOS

CHECK-OUT OBRIGATORIO (SCI 221):
1. Unid. Comunicacoes (devolucao radios)
2. Unid. Suporte Terrestre (inspecao viatura)
3. Unid. Suprimentos (devolucao ferramentas)
4. Admin/Financas (registro tempo)
5. Lider Desmob (liberacao final)

DESCANSO: 8h minimo (motoristas: 10h)
\`\`\``,
  diagrams: [diagramPrioridadesLiberacao]
};

const formularioSci221: Section = {
  id: 'formulario-sci-221',
  slug: 'formulario-sci-221',
  title: '31. Formulario SCI 221 - Check-Out',
  part: 6,
  order: 4,
  content: `## Finalidade

- **GARANTIR COMPLETUDE:** Recurso completou todas obrigacoes antes de sair
- **DOCUMENTACAO:** Registro formal de liberacao
- **COORDENACAO:** Informacao para SPlan sobre status de recursos

---

## Quem Preenche

### Inicio
**LIDER UNIDADE DESMOBILIZACAO** inicia preenchimento do SCI 221:
- Identificacao do recurso
- Unidade de origem
- Data/hora prevista de liberacao

### Check-Out
**RECURSO PERCORRE** cada unidade/secao marcada no formulario, obtendo assinaturas que confirmam:
- Equipamentos devolvidos
- Tarefas administrativas completas
- Sem pendencias

---

## Estrutura do Formulario

### Cabecalho
- Nome do incidente
- Numero
- Nome do recurso (IRT, viatura, pessoa)
- Unidade de origem
- Data/hora de liberacao prevista

### Secao 1 - Informacoes de Viagem
- Destino
- Rota planejada
- ETA (tempo estimado de chegada)
- Meio de transporte

### Secao 2 - Check-Out (6 Estacoes)

| Estacao | Verificacoes |
|---------|--------------|
| **Unidade de Comunicacoes** | Radios devolvidos, equipamentos completos |
| **Unidade de Instalacoes/Base** | Area de dormir limpa e inspecionada |
| **Unidade de Suprimentos** | Ferramentas, EPIs, suprimentos devolvidos |
| **Unidade de Suporte Terrestre** | Viatura inspecionada, danos registrados, combustivel |
| **Secao Admin/Financas** | Registro de tempo completo, formularios assinados |
| **Oficial de Seguranca** | Pessoal apto para viajar, requisitos de descanso atendidos |

### Secao 3 - Liberacao Final
- Supervisor do recurso assina confirmando check-out completo
- Lider Unid. Desmob assina autorizando liberacao
- Data/hora real de saida

---

## Processo de Check-Out

### Fluxo

1. **Recurso recebe SCI 221** do Lider Desmob
2. **Percorre estacoes** marcadas no formulario
3. **Cada unidade verifica** e assina se OK
4. **Retorna a Desmobilizacao** com SCI 221 completo
5. **Verificacao final** pelo Lider Desmob
6. **Autorizacao** e registro de saida
7. **Recurso desmobilizado**

**TEMPO TIPICO:** 30-60 minutos para completar todo check-out.

---

## Exemplo Preenchido

\`\`\`
SCI 221 - CHECK-OUT DE DESMOBILIZACAO

INCIDENTE: IF Fazenda Boa Esperanca | NUMERO: IF-2025-089

RECURSO: EIAOP 03
LIDER: Cb Carvalho
UNIDADE ORIGEM: BEA - Cuiaba
PESSOAL: 10 bombeiros

DATA/HORA LIBERACAO: 18/ago/2025, 18:00
DESTINO: Cuiaba-MT
ROTA: MT-XXX -> BR-ZZZ
ETA: 21:30

---

CHECK-OUT:

[X] UNIDADE DE COMUNICACOES
    - 10 radios HT devolvidos
    - 2 radios moveis devolvidos
    Assinatura: Cb Santos | 18/ago 17:15

[X] UNIDADE DE INSTALACOES
    - Area de dormir limpa
    - Sem danos
    Assinatura: Sd Lima | 18/ago 17:20

[X] UNIDADE DE SUPRIMENTOS
    - 5 ferramentas devolvidas
    - 2 motosserras devolvidas
    Assinatura: Sgt Alves | 18/ago 17:25

[X] UNIDADE DE SUPORTE TERRESTRE
    - 2 caminhonetes inspecionadas
    - Dano menor registrado
    - Combustivel: OK
    Assinatura: Cb Oliveira | 18/ago 17:35

[X] ADMIN/FINANCAS
    - Planilhas de tempo verificadas
    - Total: 7 dias, 84 horas/BM
    Assinatura: Sgt Ferreira | 18/ago 17:40

[X] OFICIAL DE SEGURANCA
    - Pessoal em boas condicoes
    - Motoristas descansados
    - APTOS PARA VIAGEM
    Assinatura: Cap Santos (OSeg) | 18/ago 17:45

---

LIBERACAO FINAL:

SUPERVISOR: Cb Carvalho _________ 18/ago 17:50
LIDER DESMOB: Cap Oliveira ______ 18/ago 17:52

SAIDA REAL: 18/ago 18:05
\`\`\``,
  diagrams: [diagramProcessoCheckout]
};

const encerramentoIncidente: Section = {
  id: 'encerramento-incidente',
  slug: 'encerramento-incidente',
  title: '32-33. Encerramento do Incidente',
  part: 6,
  order: 5,
  content: `## Execucao da Desmobilizacao

### Comunicacao de Liberacoes

**NOTIFICACAO AO RECURSO:**
- Antecedencia minima: 4-8 horas
- Informacoes: horario, destino, procedimentos, requisitos

**NOTIFICACAO A UNIDADE DE ORIGEM:**
- Identificacao do recurso
- Horario de saida
- ETA na unidade de origem
- Condicoes do recurso

### Preparacao do Recurso

**TEMPO ADEQUADO PARA:**
- Banho e troca de roupa
- Refeicao completa
- Descanso final (se necessario)
- Organizacao de equipamentos
- Preparacao de viatura (limpeza, verificacao, abastecimento)

### Check-Out Fisico

**PERCURSO PELAS ESTACOES:**
- Comunicacoes (devolucao radios)
- Suprimentos (devolucao ferramentas)
- Suporte Terrestre (inspecao viatura)
- Admin/Financas (acerto de contas)
- OSeg (avaliacao final)

**RESOLUCAO DE PENDENCIAS:** Recurso resolve antes de prosseguir.

---

## Extincao Final

### Criterios

**EXTINCAO DECLARADA QUANDO:**
- 100% do perimetro esta frio (sem calor residual)
- Rescaldo completo realizado
- Verificacao termal (se disponivel) negativa
- Patrulhamento final sem deteccao de focos
- Previsao meteorologica favoravel

### Verificacao Final

- Ultima patrulha: inspecao completa do perimetro
- Registro: fotos/videos da area extinta
- Relatorio final pelo CI ou ultimo recurso

---

## Ultimas Liberacoes

### Ordem de Saida

| Ordem | Recursos |
|-------|----------|
| 1o | Recursos de patrulhamento final |
| 2o | CSLog (logistica ate o fim) |
| 3o | CSPlan (documentacao final) |
| **Ultimo** | CI (sempre ultimo) |

### Desmontagem de Instalacoes

**PC E BASE:**
- Remocao de equipamentos
- Limpeza de area
- Restauracao de local (se necessario)
- Devolucao de areas emprestadas

---

## Transferencia de Comando (Reducao)

### Quando Ocorre
- Incidente estabilizado
- Complexidade reduz
- Estrutura grande nao mais necessaria

**EXEMPLO:** Maj Silva (CI Nivel 3) transfere para Sgt Santos (CI local) para operacoes finais de rescaldo.

### Procedimento
- Briefing usando SCI 201
- Transferencia formal
- Comunicacao a todos
- Atualizacao de documentos
- Novo CI opera com estrutura menor

---

## Encerramento Administrativo

### Documentacao Final

**COMPILACAO (Unid. Documentacao):**
- Todos os PAIs
- Todos formularios SCI
- Relatorios de combate
- Fotos/videos
- Mapas
- Registros de custos
- Plano de Desmobilizacao
- SCI 221 de todos recursos

**ARQUIVO:** Para prestacao de contas, analise futura, licoes aprendidas.

### Prestacao de Contas

**RELATORIO FINANCEIRO FINAL:**
- Horas trabalhadas (diarias)
- Combustivel consumido
- Alimentacao
- Contratacoes
- Danos compensados
- **CUSTO TOTAL DO INCIDENTE**

### Comunicacao de Encerramento

**CI COMUNICA:**
- SSC: incidente encerrado
- DOp: relatorio executivo
- Agencias cooperadoras: agradecimentos formais
- Proprietarios/comunidade: agradecimento, informacoes finais`,
  diagrams: [diagramEncerramento]
};

const reunioesEncerramento: Section = {
  id: 'reunioes-encerramento',
  slug: 'reunioes-encerramento',
  title: '34. Reunioes de Encerramento e AAR',
  part: 6,
  order: 6,
  content: `## Reuniao com Administracao (Autoridades)

### Quando Realizar

**INDICACOES:**
- Incidentes graves com repercussao midiatica
- Incidentes com escrutinio publico
- Esforcos de recuperacao de longo prazo
- Licoes importantes aprendidas

### Participantes

**AUTORIDADES:**
- Comando-Geral CBMMT
- DOp
- Comandantes Regionais
- Representantes de agencias cooperadoras

**EQUIPE DO INCIDENTE:**
- CI
- Chefes de Secao principais

### Conteudo

**APRESENTACAO:**
- Resumo do incidente e cronologia
- Recursos empenhados
- Resultados alcancados
- Custos
- Desafios enfrentados
- Licoes aprendidas
- Recomendacoes

---

## Revisao Pos-Acao (After Action Review - AAR)

### Finalidade

**APRENDIZADO:** Identificar o que funcionou e o que precisa melhorar.

> **NAO E** sessao de culpa ou punicao.
> **E** oportunidade de aprendizado organizacional.

### Quando Realizar

**LOGO APOS INCIDENTE:** Dentro de 1-2 semanas apos encerramento, enquanto memorias estao frescas.

### Participantes

**EQUIPE DO INCIDENTE:**
- CI e todo Staff do Comando
- Todo Staff Geral
- Supervisores de Divisao/Grupo
- Lideres de IRTs
- Representantes de agencias cooperadoras

**FACILITADOR:** CSPlan geralmente conduz.

---

## As 5 Perguntas-Chave do AAR

### 1. O QUE ESTAVA PLANEJADO?
- Quais eram os objetivos?
- Qual era o plano?
- O que esperavamos alcancar?

### 2. O QUE REALMENTE ACONTECEU?
- O que fizemos?
- Como executamos?
- Quais foram os resultados?

### 3. POR QUE HOUVE DIFERENCAS?
- O que causou desvios do plano?
- Quais fatores nao foram previstos?
- Onde o plano falhou?

### 4. O QUE APRENDEMOS?
- O que funcionou bem?
- O que nao funcionou?
- O que fariamos diferente?
- Quais boas praticas identificamos?

### 5. O QUE VAMOS FAZER?
- Quais mudancas implementaremos?
- Quais treinamentos sao necessarios?
- Quais procedimentos precisam atualizacao?
- Quais equipamentos precisamos?

---

## Documentacao do AAR

### Relatorio de AAR

**CSPlan COMPILA:**
- Resumo do incidente
- Principais decisoes tomadas
- O que funcionou (sustain)
- O que precisa melhorar (improve)
- Recomendacoes especificas
- Plano de acao para implementacao

### Distribuicao
- Participantes
- DOp
- BEA
- Comando-Geral
- Arquivo de licoes aprendidas

### Seguimento

- **IMPLEMENTACAO:** BEA ou DOp designa responsaveis
- **MONITORAMENTO:** Acompanhamento de implementacao
- **COMPARTILHAMENTO:** Licoes aprendidas compartilhadas com todo CBMMT

---

## Transicao para Recuperacao

### Diferenca Entre Resposta e Recuperacao

| Aspecto | Resposta | Recuperacao |
|---------|----------|-------------|
| Foco | Acoes imediatas | Acoes de medio/longo prazo |
| Objetivo | Salvar vidas, proteger, conter | Restaurar area afetada |
| Exemplo | Combate ao incendio | Replantio, controle erosao |

### Papel do CBMMT na Recuperacao

**ASSESSORIA:**
- Mapas de area queimada
- Avaliacao de intensidade do fogo
- Areas de maior preocupacao
- Recomendacoes iniciais

**COORDENACAO:**
- Participar de reuniao de transicao
- Apresentar situacao final
- Recomendar acoes de recuperacao
- Transferir informacoes para agencia responsavel

**DOCUMENTACAO UTIL:**
- Mapas de severidade do fogo
- Fotos antes/depois
- Relatorios de danos
- Dados de custos de combate`,
  diagrams: [diagramAAR]
};

// ------------------------------------------------------------
// EXPORTACOES
// ------------------------------------------------------------

export const parteVISections: Section[] = [
  conceitosDesmobilizacao,
  responsabilidadesDesmob,
  planoDesmobilizacao,
  formularioSci221,
  encerramentoIncidente,
  reunioesEncerramento
];

export const parteVISectionMap: Record<string, Section> = {
  'conceitos-desmobilizacao': conceitosDesmobilizacao,
  'responsabilidades-desmob': responsabilidadesDesmob,
  'plano-desmobilizacao': planoDesmobilizacao,
  'formulario-sci-221': formularioSci221,
  'encerramento-incidente': encerramentoIncidente,
  'reunioes-encerramento': reunioesEncerramento
};
