import type { Section, Diagram } from '@/data/types';

// ============================================================
// PARTE V - CICLO DE PLANEJAMENTO OPERACIONAL ("CICLO P")
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS MERMAID
// ------------------------------------------------------------

const diagramCicloP: Diagram = {
  id: 'ciclo-p-completo',
  title: 'Ciclo de Planejamento Operacional ("Ciclo P")',
  type: 'flowchart',
  description: 'Visao completa das 14 fases do Ciclo P',
  code: `flowchart TB
    subgraph base["BASE (Resposta Inicial)"]
        direction TB
        F1["1. Resposta Inicial<br/>e Avaliacao"]
        F2["2. Briefing do Incidente<br/>(SCI 201)"]
        F3["3. Briefing Representante<br/>Instituicao"]
        F4["4. Reuniao Inicial<br/>Comando Unificado"]
    end

    subgraph centro["CENTRO (Desenvolvimento)"]
        direction TB
        F5["5. Estabelecimento<br/>Objetivos (SCI 202)"]
        F6["6. Reuniao Staff<br/>Comando/Geral"]
        F7["7. Preparacao<br/>Reuniao Tatica"]
        F8["8. REUNIAO<br/>TATICA"]
        F9["9. Preparacao<br/>Reuniao Planejamento"]
        F10["10. REUNIAO DE<br/>PLANEJAMENTO"]
    end

    subgraph impl["IMPLEMENTACAO"]
        direction TB
        F11["11. Preparacao e<br/>Aprovacao PAI"]
        F12["12. Briefing Periodo<br/>Operacional"]
        F13["13. Execucao<br/>do PAI"]
        F14["14. Avaliacao<br/>de Progresso"]
    end

    F1 --> F2
    F2 --> F3
    F3 --> F4
    F4 --> F5
    F5 --> F6
    F6 --> F7
    F7 --> F8
    F8 --> F9
    F9 --> F10
    F10 --> F11
    F11 --> F12
    F12 --> F13
    F13 --> F14
    F14 -.->|Proximo Periodo| F5

    classDef baseStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef centroStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef implStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef reuniaoStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class F1,F2,F3,F4 baseStyle
    class F5,F6,F7,F9 centroStyle
    class F8,F10 reuniaoStyle
    class F11,F12,F13,F14 implStyle`
};

const diagramPeriodoOperacional: Diagram = {
  id: 'periodo-operacional',
  title: 'Ciclo de Periodos Operacionais',
  type: 'gantt',
  description: 'Exemplo de periodos operacionais diurno/noturno',
  code: `gantt
    title Ciclo de Periodos Operacionais - 3 Dias
    dateFormat HH:mm
    axisFormat %H:%M

    section Dia 1
    PO1 - Diurno           :active, po1, 06:00, 12h
    PO2 - Noturno          :po2, after po1, 12h

    section Dia 2
    PO3 - Diurno           :active, po3, 06:00, 12h
    PO4 - Noturno          :po4, after po3, 12h

    section Dia 3
    PO5 - Diurno           :active, po5, 06:00, 12h
    PO6 - Desmobilizacao   :done, po6, after po5, 12h`
};

const diagramObjetivosSmart: Diagram = {
  id: 'objetivos-smart',
  title: 'Caracteristicas SMART de Objetivos',
  type: 'flowchart',
  description: 'Criterios para objetivos efetivos',
  code: `flowchart TB
    subgraph SMART["OBJETIVOS SMART"]
        direction TB
    end

    subgraph S["S - SPECIFIC"]
        S1["Claro e detalhado"]
        S2["Nao ambiguo"]
        S3["Todos entendem"]
    end

    subgraph M["M - MEASURABLE"]
        M1["Verificavel"]
        M2["Quantificavel"]
        M3["Indicadores claros"]
    end

    subgraph A["A - ACHIEVABLE"]
        A1["Realista"]
        A2["Recursos disponiveis"]
        A3["Tempo adequado"]
    end

    subgraph R["R - RELEVANT"]
        R1["Contribui resolucao"]
        R2["Alinha estrategia"]
        R3["Prioridades certas"]
    end

    subgraph T["T - TIME-BOUND"]
        T1["Prazo definido"]
        T2["Periodo especifico"]
        T3["Deadline claro"]
    end

    SMART --> S
    SMART --> M
    SMART --> A
    SMART --> R
    SMART --> T

    classDef sStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef mStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef aStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef rStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef tStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class S1,S2,S3 sStyle
    class M1,M2,M3 mStyle
    class A1,A2,A3 aStyle
    class R1,R2,R3 rStyle
    class T1,T2,T3 tStyle`
};

const diagramReuniaoTatica: Diagram = {
  id: 'reuniao-tatica',
  title: 'Fluxo da Reuniao Tatica',
  type: 'flowchart',
  description: 'Etapas e participantes da Reuniao Tatica',
  code: `flowchart TB
    subgraph PARTICIPANTES["PARTICIPANTES"]
        P1["CSOp<br/>(Conduz)"]
        P2["OSeg<br/>Seguranca"]
        P3["CSPlan<br/>Planejamento"]
        P4["CSLog<br/>Logistica"]
    end

    subgraph ABERTURA["1. ABERTURA (CSOp)"]
        A1["Situacao Atual"]
        A2["Revisao Objetivos CI"]
    end

    subgraph TATICAS["2. APRESENTACAO TATICAS (CSOp)"]
        T1["Proposta por objetivo"]
        T2["Recursos necessarios"]
        T3["Divisoes/Grupos"]
    end

    subgraph AVALIACAO["3. AVALIACAO (Todos)"]
        AV1["OSeg: Riscos identificados"]
        AV2["CSLog: Viabilidade logistica"]
        AV3["CSPlan: Disponibilidade recursos"]
    end

    subgraph FINALIZACAO["4. FINALIZACAO"]
        F1["OSeg preenche SCI 215A"]
        F2["CSOp finaliza SCI 215"]
    end

    subgraph PRODUTOS["PRODUTOS FINAIS"]
        PR1["SCI 215<br/>Matriz Operacional"]
        PR2["SCI 215A<br/>Analise Riscos"]
    end

    PARTICIPANTES --> ABERTURA
    ABERTURA --> TATICAS
    TATICAS --> AVALIACAO
    AVALIACAO --> FINALIZACAO
    FINALIZACAO --> PRODUTOS

    classDef partStyle fill:#F3E8FF,stroke:#7C3AED,color:#5B21B6
    classDef aberStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef tatStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef avalStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef finStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef prodStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF

    class P1,P2,P3,P4 partStyle
    class A1,A2 aberStyle
    class T1,T2,T3 tatStyle
    class AV1,AV2,AV3 avalStyle
    class F1,F2 finStyle
    class PR1,PR2 prodStyle`
};

const diagramReuniaoPlanejamento: Diagram = {
  id: 'reuniao-planejamento',
  title: 'Agenda da Reuniao de Planejamento',
  type: 'flowchart',
  description: 'Estrutura completa da reuniao formal',
  code: `flowchart TB
    subgraph abertura["ABERTURA (7 min)"]
        A1["1. Abertura<br/>CSPlan - 2min"]
        A2["2. Briefing Seguranca<br/>OSeg - 5min"]
    end

    subgraph situacao["SITUACAO (15 min)"]
        S1["3. Situacao Atual<br/>CSPlan - 10min"]
        S2["4. Objetivos<br/>CI - 5min"]
    end

    subgraph operacional["OPERACIONAL (35 min)"]
        O1["5. Plano Operacional<br/>CSOp - 20-30min"]
        O2["6. Plano Medico<br/>CSLog - 5min"]
    end

    subgraph suporte["SUPORTE (20 min)"]
        L1["7. Comunicacoes<br/>CSLog - 5min"]
        L2["8. Logistica<br/>CSLog - 10min"]
        L3["9. Admin/Financas<br/>CSAdmin - 5min"]
    end

    subgraph fechamento["FECHAMENTO (15 min)"]
        F1["10. Questoes<br/>Todos - 10min"]
        F2["11. Aprovacao<br/>CI - 5min"]
    end

    abertura --> situacao
    situacao --> operacional
    operacional --> suporte
    suporte --> fechamento

    classDef aberturaStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef situacaoStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef operStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef suporteStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef fechStyle fill:#F3E8FF,stroke:#7C3AED,color:#5B21B6

    class A1,A2 aberturaStyle
    class S1,S2 situacaoStyle
    class O1,O2 operStyle
    class L1,L2,L3 suporteStyle
    class F1,F2 fechStyle`
};

const diagramBriefingOperacional: Diagram = {
  id: 'briefing-operacional',
  title: 'Agenda do Briefing Operacional',
  type: 'flowchart',
  description: 'Estrutura do briefing antes do periodo operacional',
  code: `flowchart LR
    subgraph abertura["ABERTURA"]
        B1["1. Abertura<br/>2min"]
        B2["2. Situacao<br/>5min"]
        B3["3. Objetivos<br/>3min"]
    end

    subgraph seguranca["SEGURANCA"]
        S1["4. LCES<br/>5-10min"]
    end

    subgraph atribuicoes["ATRIBUICOES"]
        A1["5. Por Divisao<br/>15-20min"]
        A2["6. Comunicacoes<br/>3min"]
        A3["7. Logistica<br/>5min"]
    end

    subgraph fechamento["FECHAMENTO"]
        F1["8. Horarios<br/>2min"]
        F2["9. Perguntas<br/>5-10min"]
        F3["10. Encerramento<br/>2min"]
    end

    abertura --> seguranca
    seguranca --> atribuicoes
    atribuicoes --> fechamento

    classDef aberStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef segStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef atribStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef fechStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class B1,B2,B3 aberStyle
    class S1 segStyle
    class A1,A2,A3 atribStyle
    class F1,F2,F3 fechStyle`
};

const diagramExecucaoPai: Diagram = {
  id: 'execucao-pai',
  title: 'Fluxo de Execucao e Avaliacao',
  type: 'flowchart',
  description: 'Ciclo de execucao do PAI durante periodo operacional',
  code: `flowchart TB
    subgraph execucao["EXECUCAO DO PAI"]
        E1["Inicio do Periodo<br/>Operacional"]
        E2["Recursos em<br/>Posicao"]
        E3["Operacoes Conforme<br/>Plano"]
        E4["Ajustes<br/>Necessarios"]
    end

    subgraph monitoramento["MONITORAMENTO"]
        M1["Check-ins<br/>Periodicos"]
        M2["Atualizacao<br/>Mapas"]
        M3["Comunicacao<br/>CI-SSC"]
    end

    subgraph avaliacao["AVALIACAO"]
        A1["Objetivos<br/>Alcancados?"]
        A2["Licoes<br/>Aprendidas"]
        A3["Relatorio<br/>Fim Periodo"]
    end

    E1 --> E2
    E2 --> E3
    E3 --> E4
    E4 --> E3

    E3 --> M1
    M1 --> M2
    M2 --> M3
    M3 --> M1

    E3 --> A1
    A1 --> A2
    A2 --> A3
    A3 -.->|Proximo Ciclo P| E1

    classDef execStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef monStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef avalStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class E1,E2,E3,E4 execStyle
    class M1,M2,M3 monStyle
    class A1,A2,A3 avalStyle`
};

const diagramFormulariosPai: Diagram = {
  id: 'formularios-pai',
  title: 'Estrutura do PAI Completo',
  type: 'flowchart',
  description: 'Formularios que compoem o Plano de Acao do Incidente',
  code: `flowchart TB
    subgraph pai["PLANO DE ACAO DO INCIDENTE (PAI)"]
        direction TB

        subgraph essenciais["ESSENCIAIS"]
            P1["CAPA<br/>Identificacao"]
            P2["SCI 202<br/>Objetivos"]
            P3["SCI 203<br/>Organizacao"]
            P4["SCI 204<br/>Atribuicoes<br/>(por Divisao)"]
        end

        subgraph comunicacao["COMUNICACAO"]
            P5["SCI 205<br/>Radio"]
            P6["SCI 205A<br/>Lista Contatos"]
        end

        subgraph seguranca["SEGURANCA"]
            P7["SCI 206<br/>Plano Medico"]
            P8["SCI 207<br/>Organograma"]
            P9["SCI 208<br/>Plano Seguranca"]
        end

        subgraph planejamento["PLANEJAMENTO (Ref)"]
            P10["SCI 215<br/>Matriz Operacional"]
            P11["SCI 215A<br/>Analise Riscos"]
        end

        subgraph anexos["ANEXOS"]
            P12["Mapas"]
            P13["Outros"]
        end
    end

    essenciais --> comunicacao
    comunicacao --> seguranca
    seguranca --> planejamento
    planejamento --> anexos

    classDef essStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef comStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef segStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef planStyle fill:#F3E8FF,stroke:#7C3AED,color:#5B21B6
    classDef anexStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class P1,P2,P3,P4 essStyle
    class P5,P6 comStyle
    class P7,P8,P9 segStyle
    class P10,P11 planStyle
    class P12,P13 anexStyle`
};

// ------------------------------------------------------------
// SECOES DE CONTEUDO
// ------------------------------------------------------------

const visaoGeralCicloP: Section = {
  id: 'visao-geral-ciclo-p',
  slug: 'visao-geral-ciclo-p',
  title: '20. Visao Geral do Ciclo "P"',
  part: 5,
  order: 1,
  content: `## Conceito do Ciclo "P"

O **Ciclo de Planejamento Operacional**, conhecido como **"Ciclo P"**, e o processo sistematico usado para desenvolver o Plano de Acao do Incidente (PAI) para cada periodo operacional.

### Definicao

- **CICLO "P":** Processo de planejamento que define etapas sequenciais desde a resposta inicial ate o briefing operacional do proximo periodo
- **NOME:** Chamado "Ciclo P" porque o diagrama se assemelha a letra "P"
- **OBJETIVO:** Transicao de resposta reativa (acoes imediatas) para resposta proativa (acoes planejadas)

### Quando Aplicar

**OBRIGATORIO:**
- Operacoes Nivel 3 e 4
- Operacoes que excedem um periodo operacional (12h)
- Multiplos periodos operacionais previstos

**RECOMENDADO:**
- Operacoes Nivel 2 complexas
- Quando planejamento formal beneficia coordenacao

**NAO NECESSARIO:**
- Nivel 1 (resposta inicial simples)
- Operacoes curtas (poucas horas)
- Recursos limitados sem necessidade de coordenacao complexa

---

## Fases do Ciclo "P"

O Ciclo "P" consiste em 14 etapas sequenciais divididas em tres grupos:

### Lado Esquerdo (Base - Resposta Inicial)

| Fase | Descricao |
|------|-----------|
| 1 | Resposta Inicial e Avaliacao |
| 2 | Briefing do Incidente (SCI 201) |
| 3 | Briefing do Representante da Instituicao |
| 4 | Reuniao Inicial do Comando Unificado |

### Centro (Desenvolvimento - Planejamento)

| Fase | Descricao |
|------|-----------|
| 5 | Estabelecimento/Atualizacao de Objetivos (SCI 202) |
| 6 | Reuniao com Staff do Comando e Staff Geral |
| 7 | Preparacao para Reuniao Tatica |
| 8 | **REUNIAO TATICA** |
| 9 | Preparacao para Reuniao de Planejamento |
| 10 | **REUNIAO DE PLANEJAMENTO** |

### Lado Direito (Implementacao)

| Fase | Descricao |
|------|-----------|
| 11 | Preparacao e Aprovacao do PAI |
| 12 | Briefing do Periodo Operacional |
| 13 | Execucao do PAI |
| 14 | Avaliacao de Progresso |

---

## Periodo Operacional

### Definicao e Duracao

- **PERIODO OPERACIONAL:** Intervalo de tempo especifico para o qual taticas sao planejadas e recursos designados
- **DURACAO TIPICA:** 12 horas (pode variar de 8 a 24 horas)

**Fatores que influenciam duracao:**
- Comportamento do incidente
- Disponibilidade de recursos
- Necessidade de descanso de pessoal
- Condicoes meteorologicas
- Operacoes diurnas vs noturnas

### Ciclo Diurno/Noturno (comum em incendios florestais)

**PERIODO DIURNO (06:00-18:00):**
- Operacoes taticas mais intensas
- Condicoes meteorologicas mais adversas (calor, vento)
- Maior disponibilidade de recursos
- Operacoes aereas possiveis

**PERIODO NOTURNO (18:00-06:00):**
- Operacoes reduzidas ou suspensas
- Condicoes mais favoraveis (umidade aumenta, vento diminui)
- Foco em rescaldo, patrulhamento
- Descanso de parte dos recursos

---

## Integracao com Estrutura CBMMT

### Papel das Salas de Situacao

**SSD/SSC durante Ciclo "P":**
- Monitora execucao do PAI
- Fornece suporte logistico
- Despacha recursos adicionais quando solicitado
- Recebe atualizacoes de progresso
- Nao participa diretamente de reunioes de planejamento

**CI no campo:** Conduz Ciclo "P" com staff no Posto de Comando.

### Aprovacao de PAI por Nivel

| Nivel | Aprovacao |
|-------|-----------|
| Nivel 2 | CI aprova PAI, informa SSC |
| Nivel 3-4 | CI aprova PAI, pode consultar SSC/DOp para decisoes estrategicas |`,
  diagrams: [diagramCicloP, diagramPeriodoOperacional]
};

const estabelecimentoObjetivos: Section = {
  id: 'estabelecimento-objetivos',
  slug: 'estabelecimento-objetivos',
  title: '21. Estabelecimento de Objetivos (SCI 202)',
  part: 5,
  order: 2,
  content: `## Desenvolvimento de Objetivos pelo CI

### Momento
- **PRIMEIRA VEZ:** Logo apos CI assumir comando, antes do primeiro periodo operacional planejado
- **PERIODICIDADE:** Revisados e atualizados a cada periodo operacional (inicio do Ciclo "P")

### Responsavel
- **COMANDANTE DO INCIDENTE:** Exclusivamente CI (ou Comando Unificado) estabelece objetivos
- **OUTROS NAO ESTABELECEM OBJETIVOS:** CSOp desenvolve taticas, mas nao objetivos

### Informacoes Consideradas pelo CI

**SITUACAO ATUAL:**
- Tamanho do incendio
- Comportamento do fogo
- Progresso ate agora
- Recursos disponiveis

**PROJECAO FUTURA:**
- Previsao meteorologica
- Comportamento esperado do fogo
- Disponibilidade futura de recursos

**PRIORIDADES:**
1. Seguranca (sempre primeiro)
2. Protecao de vidas
3. Protecao de estruturas
4. Protecao de recursos naturais
5. Minimizacao de area queimada

---

## Caracteristicas de Objetivos SMART

### S - Specific (Especificos)
Claro e detalhado, nao ambiguo, todos entendem exatamente o que fazer.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Combater o fogo" | "Conter avanco no flanco norte usando linha de controle na estrada MT-100" |

### M - Measurable (Mensuraveis)
Pode-se determinar objetivamente se foi alcancado.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Melhorar a situacao" | "Reduzir perimetro ativo de 5 km para 2 km" |

### A - Achievable (Atingiveis)
Possivel com recursos e tempo disponiveis.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Extinguir 100% do incendio nas proximas 6h" (500 ha) | "Completar 60% do perimetro de linha de controle nas proximas 12h" |

### R - Relevant (Relevantes)
Alinham-se com estrategia geral e prioridades.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Limpar acampamento base" | "Proteger as 3 residencias no setor sul do incendio" |

### T - Time-bound (Temporais)
Especifica quando deve ser alcancado.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Conter fogo eventualmente" | "Conter fogo no flanco leste ate as 18:00 de hoje" |

---

## Quantidade de Objetivos

- **IDEAL:** 2 a 5 objetivos por periodo operacional
- **MINIMO:** 1 objetivo claro
- **MAXIMO:** Evitar mais de 7 objetivos (dificulta foco)

### Priorizacao
**SEGURANCA SEMPRE PRIMEIRO.** Primeiro objetivo sempre relacionado a seguranca.

**Exemplo de Objetivos Priorizados:**
1. Garantir seguranca de todos combatentes (zonas seguras, rotas fuga, monitoramento)
2. Proteger residencias no setor sul
3. Conter avanco no flanco norte ate estrada MT-100
4. Completar 50% do rescaldo no setor leste

---

## Formulario SCI 202 - Objetivos do Incidente

### Estrutura do Formulario

**CABECALHO:**
- Nome do incidente
- Numero do incidente
- Periodo operacional (data/horario inicio e fim)
- Data/hora de preparacao

**SECAO 1 - OBJETIVOS DO INCIDENTE:**
Lista numerada dos objetivos (2-5 objetivos)

**SECAO 2 - CONSIDERACOES DE SEGURANCA:**
Mensagem de seguranca do OSeg (ou CI se OSeg nao designado)

**SECAO 3 - INSTRUCOES ESPECIAIS:**
Restricoes operacionais, prioridades especiais, coordenacao com outras agencias

**SECAO 4 - APROVACAO:**
Nome do CI, assinatura, data/hora

### Exemplo Preenchido

\`\`\`
SCI 202 - OBJETIVOS DO INCIDENTE

Incidente: Incendio Florestal Fazenda Boa Esperanca
Numero: IF-2025-089
Periodo Operacional: PO3 - 06:00 15/ago as 18:00 15/ago
Data/Hora Preparacao: 14/ago 17:30

OBJETIVOS DO INCIDENTE:

1. SEGURANCA: Manter seguranca de todos combatentes. Todas divisoes
   devem ter zonas de seguranca identificadas e rotas de fuga
   estabelecidas. Check-in/check-out obrigatorio.

2. PROTECAO: Proteger as 5 residencias no setor sul atraves de acoes
   defensivas e linha de controle. Concluir ate 14:00.

3. CONTENCAO: Conter 100% do flanco norte usando estrada MT-100 como
   ancora. Completar linha de controle ate as 16:00.

4. RESCALDO: Completar 70% do rescaldo no setor leste (ja contido
   ontem). Priorizar 50 metros de profundidade.

CONSIDERACOES DE SEGURANCA:
- Vento previsto SE, 20-30 km/h, rajadas 40 km/h. ALTO RISCO 12:00-17:00.
- LCES obrigatorio em todas divisoes.
- Suspensao de operacoes se vento > 50 km/h.

APROVACAO:
CI: Maj Roberto Silva
Data/Hora: 14/ago 17:45
\`\`\``,
  diagrams: [diagramObjetivosSmart]
};

const reuniaoTatica: Section = {
  id: 'reuniao-tatica',
  slug: 'reuniao-tatica',
  title: '22. Reuniao Tatica',
  part: 5,
  order: 3,
  content: `## Preparacao para Reuniao Tatica

### Responsavel
**CHEFE DA SECAO DE OPERACOES (CSOp):** Lidera preparacao e conducao da Reuniao Tatica.

### O Que CSOp Faz Antes da Reuniao

**ANALISE:**
- Estuda objetivos do CI
- Analisa situacao atual
- Consulta mapas
- Avalia recursos disponiveis
- Considera condicoes meteorologicas

**DESENVOLVIMENTO DE TATICAS:**
- Como alcancar cada objetivo
- Quais recursos necessarios
- Onde alocar recursos (divisoes/grupos)
- Estimativa de tempo

**FORMULARIOS:**
Inicia preenchimento do SCI 215 (Matriz de Planejamento Operacional)

**TEMPO DE PREPARACAO:** 1-3 horas entre Reuniao com Staff e Reuniao Tatica

---

## Participantes da Reuniao Tatica

### Participantes Obrigatorios

| Funcao | Papel |
|--------|-------|
| CSOp | Conduz reuniao, apresenta taticas |
| OSeg | Avaliacao de riscos |
| CSPlan/URec | Disponibilidade de recursos |
| CSLog | Viabilidade logistica |
| CI | Pode participar ou delegar |

### Especialistas Tecnico (podem ser convidados)
- Coordenador de Operacoes Aereas
- Especialista em comportamento do fogo
- Especialista em maquinario
- Representantes de agencias (ICMBio, Prevfogo)

---

## Conducao da Reuniao Tatica

**DURACAO:** 30 minutos a 2 horas (depende da complexidade)
**LOCAL:** Posto de Comando, com mapas e recursos visuais

### Agenda Tipica

**1. ABERTURA (CSOp):**
Objetivo da reuniao, revisao rapida de situacao atual

**2. REVISAO DE OBJETIVOS:**
Leitura dos objetivos estabelecidos pelo CI, confirmacao de entendimento

**3. APRESENTACAO DE TATICAS (CSOp):**
- Como alcancar cada objetivo
- Quais divisoes/grupos
- Quais recursos
- Quando (sequencia, horarios)

**4. DISCUSSAO (Todos):**
- **OSeg avalia:** Riscos de cada tatica, medidas de mitigacao
- **CSLog avalia:** Viabilidade logistica, disponibilidade de suprimentos
- **CSPlan/URec avalia:** Disponibilidade de recursos, necessidade de recursos adicionais

**5. ANALISE DE RISCOS (OSeg + CSOp):**
Preenchimento do SCI 215A (identificacao, probabilidade, severidade, mitigacoes)

**6. AJUSTES (CSOp):**
CSOp ajusta taticas baseado em feedback

**7. FINALIZACAO:**
CSOp conclui SCI 215, OSeg conclui SCI 215A, aprovacao de taticas

---

## Formulario SCI 215 - Matriz de Planejamento Operacional

### Estrutura do Formulario

| Coluna | Conteudo |
|--------|----------|
| 1. Setores/Divisoes/Grupos | Lista elementos operacionais |
| 2. Atribuicao de Trabalho | O que cada um fara |
| 3. Recursos Designados | Quais recursos por divisao |
| 4. Solicitado | Recursos adicionais necessarios |
| 5. ETA | Horario estimado de chegada |
| 6. Local de Reporte | Onde se apresentar |
| 7. Horario de Reporte | Quando se apresentar |

### Exemplo Simplificado SCI 215

\`\`\`
SCI 215 - MATRIZ DE PLANEJAMENTO OPERACIONAL
Incidente: IF Fazenda Boa Esperanca | PO: 3 (06:00-18:00)

DIV/GRUPO | ATRIBUICAO              | RECURSOS        | LOCAL  | HORA
----------|-------------------------|-----------------|--------|------
Div Norte | Conter flanco norte     | EIAOP 03 (10)   | PC     | 05:30
          | Linha controle 2km      | BDBM Chapada(8) | PC     | 05:30
          | Concluir 16:00          | EMec: 2 motos   | Div N  | 07:00
----------|-------------------------|-----------------|--------|------
Div Sul   | Protecao 5 residencias  | EIAOP 05 (10)   | PC     | 05:30
          | Acoes defensivas        | BMM Nobres (7)  | PC     | 05:30
          | Concluir 14:00          |                 |        |
----------|-------------------------|-----------------|--------|------
Div Leste | Rescaldo 70%            | GCIF 1 (5)      | A.Esp  | 06:00
          | 50m profundidade        | GCIF 2 (5)      | A.Esp  | 06:00

TOTAL RECURSOS: 58 bombeiros, 2 motoniveladoras
\`\`\`

---

## Formulario SCI 215A - Analise de Risco

### Estrutura

| Coluna | Conteudo |
|--------|----------|
| Riscos/Perigos | Lista de riscos identificados |
| Probabilidade | Alta / Media / Baixa |
| Severidade | Alta / Media / Baixa |
| Medidas de Mitigacao | O que sera feito para reduzir risco |
| Responsavel | Quem garante implementacao |

### Exemplo Simplificado SCI 215A

\`\`\`
SCI 215A - ANALISE DE RISCO
Incidente: IF Fazenda Boa Esperanca | PO: 3

RISCO/PERIGO         | PROB. | SEVER.| MITIGACAO              | RESP.
---------------------|-------|-------|------------------------|--------
Vento forte SE       | ALTA  | ALTA  | Lookouts designados    | OSeg
20-30km/h            |       |       | Suspender se >50km/h   | CSOp
                     |       |       | Rota fuga clara        |
---------------------|-------|-------|------------------------|--------
Umidade baixa (25%)  | ALTA  | MEDIA | Hidratacao reforcada   | CSLog
Temp alta (38C)      |       |       | Rodizio de trabalho    | Sup Divs
---------------------|-------|-------|------------------------|--------
Comunicacao limitada | MEDIA | ALTA  | Celular como backup    | Sup Divs
em vales             |       |       | Check-in periodico     |

MENSAGEM PRINCIPAL: "LCES obrigatorio em todas divisoes"
\`\`\``,
  diagrams: [diagramReuniaoTatica]
};

const reuniaoPlanejamento: Section = {
  id: 'reuniao-planejamento',
  slug: 'reuniao-planejamento',
  title: '23-24. Reuniao de Planejamento',
  part: 5,
  order: 4,
  content: `## Preparacao para Reuniao de Planejamento

### Coordenacao pelo CSPlan

**RESPONSAVEL:** Chefe da Secao de Planejamento coordena todos os preparativos
**TEMPO DISPONIVEL:** 2-4 horas entre Reuniao Tatica e Reuniao de Planejamento

### Murais e Materiais Visuais

**AGENDA DA REUNIAO:** Mural visivel com tempo para cada item

**OBJETIVOS (SCI 202):** Versao grande postada em parede ou quadro

**MAPAS DO INCIDENTE:**
- Mapa grande (minimo A1, ideal A0 ou maior)
- Perimetro atual do incendio
- Divisoes marcadas com cores
- Instalacoes (PC, Base, Area de Espera)
- Linhas de controle planejadas

### Verificacao de Preparacao

**CSPlan verifica:**
- CSOp: SCI 215 finalizado? SCI 204 preparado?
- OSeg: SCI 215A finalizado? SCI 208 preparado?
- CSLog: SCI 205 preparado? Suporte identificado?
- CSAdmin: Estimativa de custos preparada?

---

## Reuniao de Planejamento

### Finalidade

- **APRESENTACAO:** Apresentar o plano operacional completo para o proximo periodo
- **VALIDACAO:** Garantir que todos entendem e concordam com o plano
- **COORDENACAO:** Assegurar que todas secoes e recursos estao alinhados
- **ULTIMA OPORTUNIDADE:** Identificar problemas ou conflitos antes de implementacao

### Participantes

**QUEM PARTICIPA:**
- Staff do Comando: CI, OSeg, OIP, OLig
- Staff Geral: CSOp, CSPlan, CSLog, CSAdmin
- Supervisores de todas Divisoes/Grupos
- Lideres de Unidades ativadas
- Representantes de agencias cooperadoras

**QUEM NAO PARTICIPA:**
- Recursos taticos no campo (receberao Briefing depois)
- Pessoal de apoio basico

### Conducao

- **FACILITADOR:** CSPlan conduz e facilita
- **LOCAL:** Posto de Comando, area para reunioes
- **DURACAO:** 60 a 90 minutos

---

## Agenda da Reuniao de Planejamento

### 1. Abertura (CSPlan - 2 min)
Boas-vindas, revisao da agenda, expectativas

### 2. Briefing de Seguranca (OSeg - 5 min)
Mensagem de seguranca baseada em SCI 215A, LCES, riscos principais

### 3. Situacao Atual (CSPlan - 10 min)
- Tamanho atual do incendio
- Comportamento do fogo
- Previsao meteorologica
- Recursos empenhados

### 4. Objetivos do Incidente (CI - 5 min)
CI le ou resume objetivos estabelecidos (SCI 202), explica raciocinio

### 5. Plano Operacional (CSOp - 20-30 min)
**Para cada Divisao/Grupo:**
1. Identificacao e supervisor
2. Area de responsabilidade (aponta no mapa)
3. Atribuicao (objetivo especifico)
4. Recursos designados
5. Taticas a serem usadas
6. Sequencia/timing
7. Seguranca especifica (zonas, rotas)

**Apos cada:** Supervisor confirma entendimento

### 6. Plano Medico (CSLog - 5 min)
- Instalacoes medicas
- Procedimentos de evacuacao
- Hospitais de referencia

### 7. Plano de Comunicacoes (CSLog - 5 min)
- Frequencias de radio por funcao
- Protocolo de comunicacao
- Outros meios (celular, satelite)

### 8. Suporte Logistico (CSLog - 10 min)
- Instalacoes (Base, Area de Espera, Helibase)
- Suprimentos (agua, combustivel, alimentacao)
- Transporte

### 9. Consideracoes Admin/Financeiras (CSAdmin - 5 min)
Custos estimados, registro de horas, contratacoes (se aplicavel)

### 10. Questoes e Esclarecimentos (CSPlan - 10-15 min)
Abertura para perguntas, resolucao de conflitos identificados

### 11. Aprovacao Final (CI - 5 min)
Comentarios finais, confirmacao de aprovacao, expectativas, agradecimento`,
  diagrams: [diagramReuniaoPlanejamento]
};

const preparacaoPai: Section = {
  id: 'preparacao-pai',
  slug: 'preparacao-pai',
  title: '25. Preparacao e Aprovacao do PAI',
  part: 5,
  order: 5,
  content: `## Compilacao do PAI

### Responsavel
- **SECAO DE PLANEJAMENTO:** CSPlan coordena compilacao
- **UNIDADE DE DOCUMENTACAO:** Frequentemente responsavel pela montagem fisica/digital

### Estrutura do PAI Completo

O PAI completo contem (em ordem):

| # | Componente | Descricao |
|---|------------|-----------|
| 1 | CAPA | Nome, numero, periodo, CI responsavel |
| 2 | SCI 202 | Objetivos do Incidente |
| 3 | SCI 203 | Organizacao (posicoes e ocupantes) |
| 4 | SCI 204 | Atribuicoes (um por Divisao/Grupo) |
| 5 | SCI 205 | Comunicacoes de Radio |
| 6 | SCI 205A | Lista de Comunicacoes |
| 7 | SCI 206 | Plano Medico |
| 8 | SCI 207 | Organograma (opcional mas recomendado) |
| 9 | SCI 208 | Plano de Seguranca |
| 10 | SCI 215 | Matriz Operacional (referencia) |
| 11 | SCI 215A | Analise de Riscos (referencia) |
| 12 | MAPAS | Mapa do incidente com divisoes |
| 13 | ANEXOS | Outros documentos relevantes |

### Deadline para Anexos

- **ESTABELECIDO NA REUNIAO:** Tipico 1-2 horas apos Reuniao de Planejamento
- **RESPONSABILIDADE:** Cada secao entrega seus formularios completos a SPlan

---

## Revisao pelo CI

### PAI Completo para CI

- **ENTREGA:** CSPlan entrega PAI compilado ao CI para revisao final
- **FORMATO:** Impresso (copia mestre) + Digital (PDF)

### Verificacao pelo CI

**CI VERIFICA:**
- **COMPLETUDE:** Todos formularios necessarios presentes?
- **CONSISTENCIA:** Informacoes em diferentes formularios sao consistentes?
- **ALINHAMENTO:** Plano operacional realmente alcancara objetivos?
- **VIABILIDADE:** Plano e realista com recursos disponiveis?
- **SEGURANCA:** Medidas de seguranca adequadas?

### Aprovacao ou Ajustes

- **SE APROVADO:** CI assina/aprova PAI
- **SE AJUSTES:** CI solicita correcoes, SPlan faz ajustes, resubmete
- **REGISTRO:** Data/hora de aprovacao, assinatura do CI, carimbada como "APROVADO"

---

## Reproducao e Distribuicao

### Copias Necessarias

**QUANTIDADE TIPICA:** 10-20 copias dependendo do tamanho da estrutura

**QUEM RECEBE COPIA COMPLETA:**
- CI e Staff do Comando
- Cada Chefe de Secao
- SSC
- Arquivo (2 copias)

**QUEM RECEBE COPIA PARCIAL (relevante):**

Supervisores de Divisao/Grupo recebem:
- SCI 202 (Objetivos)
- SCI 204 (sua atribuicao especifica)
- SCI 205/205A (Comunicacoes)
- SCI 206 (Plano Medico)
- SCI 208 (Seguranca)
- Mapa do incidente

**NAO RECEBEM:** SCI 215/215A (ferramentas internas de planejamento)

---

## Futuro com ARGOS-SCI

**SISTEMA DIGITAL PERMITIRA:**
- PAI digital disponivel em tablets
- Impressao on-demand
- Distribuicao eletronica automatica
- Atualizacoes em tempo real`,
  diagrams: [diagramFormulariosPai]
};

const briefingOperacional: Section = {
  id: 'briefing-operacional',
  slug: 'briefing-operacional',
  title: '26. Briefing do Periodo Operacional',
  part: 5,
  order: 6,
  content: `## Finalidade do Briefing

- **COMUNICAR O PLANO:** Apresentar PAI a todos que o executarao
- **ATRIBUICOES CLARAS:** Cada supervisor/recurso sabe exatamente o que fazer
- **ALINHAMENTO:** Todos operando com mesma informacao
- **ULTIMA CHANCE:** Esclarecimentos finais antes de iniciar operacoes

---

## Responsavel e Participantes

### Condutor
**CHEFE DA SECAO DE OPERACOES (CSOp)** conduz Briefing Operacional.
- Pode delegar: Em grandes operacoes, cada Supervisor pode briefar sua equipe.

### Participantes

**OBRIGATORIO:**
- Todos Supervisores de Divisao/Grupo
- Lideres de Forca-Tarefa
- Lideres de Equipes de Intervencao
- Recursos taticos (idealmente todos combatentes)

**STAFF:**
- OSeg (seguranca)
- Representante SPlan (situacao)
- Representante SLog (logistica)

### Configuracao

| Tamanho Operacao | Formato |
|------------------|---------|
| Grande | Briefing geral (supervisores) 30-45 min + Briefings de divisao (equipes) 15-20 min |
| Media | Briefing unico com todos 30-45 min |

---

## Local e Horario

**LOCAL TIPICO:**
- Base (se recursos iniciam la)
- PC (se proximo)
- Area de Espera

**HORARIO:** 30-60 minutos ANTES do inicio do periodo operacional

**Exemplo:**
- PO inicia: 06:00
- Briefing: 05:00 ou 05:15

---

## Agenda do Briefing Operacional

### 1. Abertura (CSOp - 2 min)
Qual periodo operacional, duracao, proposito do briefing

### 2. Situacao Atual (SPlan - 5 min)
Tamanho atual, progressos, condicoes atuais, previsao do tempo HOJE

### 3. Objetivos do Periodo (CSOp - 3 min)
Leitura dos objetivos do SCI 202, enfase nas prioridades

### 4. Seguranca (OSeg - 5-10 min) **MAIS IMPORTANTE**

**CONDICOES:**
- Meteorologia (vento, temperatura, umidade)
- Comportamento esperado do fogo
- Perigos especificos

**LCES:**
- **L**ookouts: Quem sao, onde estarao
- **C**ommunications: Frequencias, check-ins
- **E**scape Routes: Rotas de fuga primarias/secundarias
- **S**afety Zones: Onde sao, como identificar

**PROCEDIMENTOS DE EMERGENCIA:**
- Sinal de evacuacao
- Ponto de encontro
- Como solicitar ajuda medica

**ENFASE:** "Se nao se sentir seguro, PARE. Comunique ao seu supervisor. Seguranca e prioridade numero 1."

### 5. Atribuicoes Operacionais (CSOp - 15-20 min)

**PARA CADA DIVISAO/GRUPO:**
1. **SUPERVISOR:** "Divisao Norte, Sgt Silva supervisiona."
2. **AREA/FUNCAO:** Aponta no mapa
3. **OBJETIVO:** "Conter 100% ate 16:00 usando estrada MT-100."
4. **RECURSOS:** "EIAOP 03, BDBM Chapada, 2 motos. Total 18 combatentes."
5. **TATICAS:** "Motos abrem aceiro, voces fazem ataque direto, rescaldo imediato."
6. **SEGURANCA:** "Zona de seguranca: area desmatada. Rota de fuga: retornar a estrada."
7. **COORDENACAO:** "Grupo Aereo fara reconhecimento 07:00."
8. **ONDE REPORTAR:** "Apresentar-se no PC as 05:40."

**APOS CADA:** Supervisor confirma: "Sgt Silva, entendido?"

### 6. Comunicacoes (CSLog/CSOp - 3 min)
Revisao rapida das frequencias, protocolo de check-in

### 7. Logistica (CSLog - 5 min)
Agua, combustivel, alimentacao, ferramentas, transporte

### 8. Horarios (CSOp - 2 min)
Inicio, fim, proximo briefing

### 9. Perguntas (CSOp - 5-10 min)
Abertura para duvidas, esclarecimentos

### 10. Encerramento (CSOp - 2 min)
Motivacao, encaminhamento, ultimo lembrete: "Seguranca primeiro, sempre."

---

## Briefings de Divisao/Grupo

### Quando Necessarios
Em grandes operacoes, quando impraticavel reunir todos combatentes.

### Processo
1. Briefing principal: apenas supervisores
2. Briefings de divisao: cada supervisor briefa sua equipe

### Conteudo Especifico
- Situacao especifica da area
- Atribuicao detalhada da divisao
- Taticas especificas
- Divisao de trabalho entre equipes
- Seguranca especifica (LCES para area)
- Comunicacoes internas da divisao`,
  diagrams: [diagramBriefingOperacional]
};

const execucaoAvaliacao: Section = {
  id: 'execucao-avaliacao',
  slug: 'execucao-avaliacao',
  title: '27. Execucao e Avaliacao',
  part: 5,
  order: 7,
  content: `## Execucao do PAI

### Inicio do Periodo Operacional

- **HORARIO:** Recursos iniciam operacoes conforme planejado (ex: 06:00)
- **SUPERVISORES:** Posicionam equipes conforme SCI 204
- **CI/CSOP:** Monitoram inicio, garantem que todos estao em posicao

### Operacoes Conforme Plano

**IDEAL:** Recursos executam exatamente como planejado

**REALIDADE:** Ajustes sao sempre necessarios baseados em:
- Condicoes reais encontradas
- Mudancas no comportamento do fogo
- Disponibilidade de recursos
- Problemas imprevistos

### Comunicacao Durante Execucao

**CHECK-INS PERIODICOS:**
- Inicial: "Div Norte em posicao, iniciando operacoes"
- A cada hora: "Div Norte, 30% da linha completada, progresso normal"
- Ao completar: "Div Norte, objetivo alcancado"

**MUDANCAS:**
- Supervisor reporta: "Div Norte, terreno mais dificil que esperado, vou precisar 2h adicionais"
- CSOp aprova ajustes: "Div Norte, entendido, tome o tempo necessario. Priorize seguranca."

---

## Papel do CI Durante Execucao

### Supervisao Estrategica

**CI NAO GERENCIA TATICAS** - CSOp gerencia operacoes taticas

**CI MONITORA:**
- Progresso geral em relacao aos objetivos
- Status de recursos (fadiga, disponibilidade)
- Condicoes que podem exigir mudanca de estrategia
- Necessidade de recursos adicionais

### Comunicacao com SSC

**ATUALIZACOES PERIODICAS:**
- Inicio do PO
- Meio do PO (situacao intermediaria)
- Fim do PO (resultados)

**SOLICITACOES:** CI solicita recursos adicionais via SSC quando necessario

### Decisoes Estrategicas

- **MUDANCA DE OBJETIVOS:** Se situacao mudar drasticamente, CI pode revisar objetivos
- **SUSPENSAO DE OPERACOES:** CI decide se operacoes devem ser suspensas (ex: vento muito forte)

---

## Monitoramento de Progresso

### Responsaveis
- **SECAO DE OPERACOES:** CSOp monitora progresso tatico
- **SECAO DE PLANEJAMENTO:** Unidade de Situacao monitora situacao geral

### Ferramentas
- Comunicacoes (reportes de radio de supervisores)
- Reconhecimento (OSeg ou pessoal SPlan visitam divisoes)
- Observacao aerea (se disponivel)
- Mapas (atualizacao continua)

### Indicadores de Progresso

| Objetivo | Indicadores |
|----------|-------------|
| 1. Seguranca | Acidentes/lesoes: 0, Violacoes: nenhuma |
| 2. Protecao Estruturas | 5 residencias protegidas: sim/nao |
| 3. Contencao | % linha completada: 20%, 40%, 60%, 80%, 100% |
| 4. Rescaldo | % area rescaldada, profundidade atingida |

---

## Ajustes Durante o Periodo

### Quando Ajustar
- Progresso muito mais lento que esperado
- Condicoes mudaram (vento, comportamento fogo)
- Recursos insuficientes
- Novo risco identificado

### Quem Decide
- **AJUSTES TATICOS (pequenos):** CSOp decide e implementa
- **AJUSTES ESTRATEGICOS (grandes):** CI decide, pode consultar staff

### Comunicacao de Ajustes
- **Afetados diretamente:** CSOp comunica via radio
- **Todos (se significativo):** Transmissao geral
- **SSC:** CI informa de ajustes importantes

---

## Avaliacao ao Final do Periodo

### Momento
- Final do periodo operacional (ultimas 1-2 horas)
- Antes do proximo Ciclo P

### Perguntas Avaliadas

**OBJETIVOS ALCANCADOS?**
- Objetivo 1: sim/nao, por que?
- Objetivo 2: sim/nao, por que?
- Objetivo 3: parcialmente, por que?

**TATICAS EFETIVAS?**
- O que funcionou bem?
- O que nao funcionou?
- Ajustes necessarios?

**RECURSOS ADEQUADOS?**
- Suficientes?
- Bem utilizados?
- Necessidade para proximo periodo?

**SEGURANCA MANTIDA?**
- Acidentes/incidentes?
- Quase-acidentes?
- Medidas de seguranca efetivas?

**LOGISTICA ADEQUADA?**
- Suprimentos suficientes?
- Comunicacoes funcionaram?
- Instalacoes adequadas?

### Reuniao de Avaliacao (Opcional)

- **DURACAO:** 15-30 minutos
- **CONTEUDO:** O que deu certo, o que melhorar, licoes aprendidas
- **NAO E FORMAL:** Nao e a Reuniao de Planejamento do proximo periodo

---

## Relatorio de Fim de Periodo

### Conteudo

**SITUACAO AO FINAL:**
- Tamanho do incendio
- Percentual contido
- Area rescaldada
- Objetivos alcancados vs nao alcancados

**RECURSOS:**
- Total empenhado
- Status atual

**PROXIMAS ACOES:**
- Planos para proximo periodo
- Recursos adicionais necessarios

### Distribuicao
- CI (aprovacao)
- SSC
- Arquivo`,
  diagrams: [diagramExecucaoPai]
};

// ------------------------------------------------------------
// EXPORTACOES
// ------------------------------------------------------------

export const parteVSections: Section[] = [
  visaoGeralCicloP,
  estabelecimentoObjetivos,
  reuniaoTatica,
  reuniaoPlanejamento,
  preparacaoPai,
  briefingOperacional,
  execucaoAvaliacao
];

export const parteVSectionMap: Record<string, Section> = {
  'visao-geral-ciclo-p': visaoGeralCicloP,
  'estabelecimento-objetivos': estabelecimentoObjetivos,
  'reuniao-tatica': reuniaoTatica,
  'reuniao-planejamento': reuniaoPlanejamento,
  'preparacao-pai': preparacaoPai,
  'briefing-operacional': briefingOperacional,
  'execucao-avaliacao': execucaoAvaliacao
};
