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
  description: 'Visão completa das 14 fases do Ciclo P',
  code: `flowchart TB
    subgraph base["BASE (Resposta Inicial)"]
        direction TB
        F1["1. Resposta Inicial<br/>e Avaliação"]
        F2["2. Briefing do Incidente<br/>(SCI 201)"]
        F3["3. Briefing Representante<br/>Instituição"]
        F4["4. Reunião Inicial<br/>Comando Unificado"]
    end

    subgraph centro["CENTRO (Desenvolvimento)"]
        direction TB
        F5["5. Estabelecimento<br/>Objetivos (SCI 202)"]
        F6["6. Reunião Staff<br/>Comando/Geral"]
        F7["7. Preparação<br/>Reunião Tática"]
        F8["8. REUNIÃO<br/>TÁTICA"]
        F9["9. Preparação<br/>Reunião Planejamento"]
        F10["10. REUNIÃO DE<br/>PLANEJAMENTO"]
    end

    subgraph impl["IMPLEMENTAÇÃO"]
        direction TB
        F11["11. Preparação e<br/>Aprovação PAI"]
        F12["12. Briefing Período<br/>Operacional"]
        F13["13. Execução<br/>do PAI"]
        F14["14. Avaliação<br/>de Progresso"]
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
    F14 -.->|Próximo Período| F5

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
  title: 'Ciclo de Períodos Operacionais',
  type: 'gantt',
  description: 'Exemplo de períodos operacionais diurno/noturno',
  code: `gantt
    title Ciclo de Períodos Operacionais - 3 Dias
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
    PO6 - Desmobilização   :done, po6, after po5, 12h`
};

const diagramObjetivosSmart: Diagram = {
  id: 'objetivos-smart',
  title: 'Características SMART de Objetivos',
  type: 'flowchart',
  description: 'Critérios para objetivos efetivos',
  code: `flowchart TB
    subgraph SMART["OBJETIVOS SMART"]
        direction TB
    end

    subgraph S["S - SPECIFIC"]
        S1["Claro e detalhado"]
        S2["Não ambíguo"]
        S3["Todos entendem"]
    end

    subgraph M["M - MEASURABLE"]
        M1["Verificável"]
        M2["Quantificável"]
        M3["Indicadores claros"]
    end

    subgraph A["A - ACHIEVABLE"]
        A1["Realista"]
        A2["Recursos disponíveis"]
        A3["Tempo adequado"]
    end

    subgraph R["R - RELEVANT"]
        R1["Contribui resolução"]
        R2["Alinha estratégia"]
        R3["Prioridades certas"]
    end

    subgraph T["T - TIME-BOUND"]
        T1["Prazo definido"]
        T2["Período específico"]
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
  title: 'Fluxo da Reunião Tática',
  type: 'flowchart',
  description: 'Etapas e participantes da Reunião Tática',
  code: `flowchart TB
    subgraph PARTICIPANTES["PARTICIPANTES"]
        P1["CSOp<br/>(Conduz)"]
        P2["OSeg<br/>Segurança"]
        P3["CSPlan<br/>Planejamento"]
        P4["CSLog<br/>Logística"]
    end

    subgraph ABERTURA["1. ABERTURA (CSOp)"]
        A1["Situação Atual"]
        A2["Revisão Objetivos CI"]
    end

    subgraph TATICAS["2. APRESENTAÇÃO TÁTICAS (CSOp)"]
        T1["Proposta por objetivo"]
        T2["Recursos necessários"]
        T3["Divisões/Grupos"]
    end

    subgraph AVALIACAO["3. AVALIAÇÃO (Todos)"]
        AV1["OSeg: Riscos identificados"]
        AV2["CSLog: Viabilidade logística"]
        AV3["CSPlan: Disponibilidade recursos"]
    end

    subgraph FINALIZACAO["4. FINALIZAÇÃO"]
        F1["OSeg preenche SCI 215A"]
        F2["CSOp finaliza SCI 215"]
    end

    subgraph PRODUTOS["PRODUTOS FINAIS"]
        PR1["SCI 215<br/>Matriz Operacional"]
        PR2["SCI 215A<br/>Análise Riscos"]
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
  title: 'Agenda da Reunião de Planejamento',
  type: 'flowchart',
  description: 'Estrutura completa da reunião formal',
  code: `flowchart TB
    subgraph abertura["ABERTURA (7 min)"]
        A1["1. Abertura<br/>CSPlan - 2min"]
        A2["2. Briefing Segurança<br/>OSeg - 5min"]
    end

    subgraph situacao["SITUAÇÃO (15 min)"]
        S1["3. Situação Atual<br/>CSPlan - 10min"]
        S2["4. Objetivos<br/>CI - 5min"]
    end

    subgraph operacional["OPERACIONAL (35 min)"]
        O1["5. Plano Operacional<br/>CSOp - 20-30min"]
        O2["6. Plano Médico<br/>CSLog - 5min"]
    end

    subgraph suporte["SUPORTE (20 min)"]
        L1["7. Comunicações<br/>CSLog - 5min"]
        L2["8. Logística<br/>CSLog - 10min"]
        L3["9. Admin/Finanças<br/>CSAdmin - 5min"]
    end

    subgraph fechamento["FECHAMENTO (15 min)"]
        F1["10. Questões<br/>Todos - 10min"]
        F2["11. Aprovação<br/>CI - 5min"]
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
  description: 'Estrutura do briefing antes do período operacional',
  code: `flowchart LR
    subgraph abertura["ABERTURA"]
        B1["1. Abertura<br/>2min"]
        B2["2. Situação<br/>5min"]
        B3["3. Objetivos<br/>3min"]
    end

    subgraph seguranca["SEGURANÇA"]
        S1["4. LCES<br/>5-10min"]
    end

    subgraph atribuicoes["ATRIBUIÇÕES"]
        A1["5. Por Divisão<br/>15-20min"]
        A2["6. Comunicações<br/>3min"]
        A3["7. Logística<br/>5min"]
    end

    subgraph fechamento["FECHAMENTO"]
        F1["8. Horários<br/>2min"]
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
  title: 'Fluxo de Execução e Avaliação',
  type: 'flowchart',
  description: 'Ciclo de execução do PAI durante período operacional',
  code: `flowchart TB
    subgraph execucao["EXECUÇÃO DO PAI"]
        E1["Início do Período<br/>Operacional"]
        E2["Recursos em<br/>Posição"]
        E3["Operações Conforme<br/>Plano"]
        E4["Ajustes<br/>Necessários"]
    end

    subgraph monitoramento["MONITORAMENTO"]
        M1["Check-ins<br/>Periódicos"]
        M2["Atualização<br/>Mapas"]
        M3["Comunicação<br/>CI-SSC"]
    end

    subgraph avaliacao["AVALIAÇÃO"]
        A1["Objetivos<br/>Alcançados?"]
        A2["Lições<br/>Aprendidas"]
        A3["Relatório<br/>Fim Período"]
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
    A3 -.->|Próximo Ciclo P| E1

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
  description: 'Formulários que compõem o Plano de Ação do Incidente',
  code: `flowchart TB
    subgraph pai["PLANO DE AÇÃO DO INCIDENTE (PAI)"]
        direction TB

        subgraph essenciais["ESSENCIAIS"]
            P1["CAPA<br/>Identificação"]
            P2["SCI 202<br/>Objetivos"]
            P3["SCI 203<br/>Organização"]
            P4["SCI 204<br/>Atribuições<br/>(por Divisão)"]
        end

        subgraph comunicacao["COMUNICAÇÃO"]
            P5["SCI 205<br/>Rádio"]
            P6["SCI 205A<br/>Lista Contatos"]
        end

        subgraph seguranca["SEGURANÇA"]
            P7["SCI 206<br/>Plano Médico"]
            P8["SCI 207<br/>Organograma"]
            P9["SCI 208<br/>Plano Segurança"]
        end

        subgraph planejamento["PLANEJAMENTO (Ref)"]
            P10["SCI 215<br/>Matriz Operacional"]
            P11["SCI 215A<br/>Análise Riscos"]
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
// SEÇÕES DE CONTEÚDO
// ------------------------------------------------------------

const visaoGeralCicloP: Section = {
  id: 'visao-geral-ciclo-p',
  slug: 'visao-geral-ciclo-p',
  title: '20. Visão Geral do Ciclo "P"',
  part: 5,
  order: 1,
  content: `## Conceito do Ciclo "P"

O **Ciclo de Planejamento Operacional**, conhecido como **"Ciclo P"**, é o processo sistemático usado para desenvolver o Plano de Ação do Incidente (PAI) para cada período operacional.

### Definição

- **CICLO "P":** Processo de planejamento que define etapas sequenciais desde a resposta inicial até o briefing operacional do próximo período
- **NOME:** Chamado "Ciclo P" porque o diagrama se assemelha à letra "P"
- **OBJETIVO:** Transição de resposta reativa (ações imediatas) para resposta proativa (ações planejadas)

### Quando Aplicar

**OBRIGATÓRIO:**
- Operações Nível 3 e 4
- Operações que excedem um período operacional (12h)
- Múltiplos períodos operacionais previstos

**RECOMENDADO:**
- Operações Nível 2 complexas
- Quando planejamento formal beneficia coordenação

**NÃO NECESSÁRIO:**
- Nível 1 (resposta inicial simples)
- Operações curtas (poucas horas)
- Recursos limitados sem necessidade de coordenação complexa

---

## Fases do Ciclo "P"

O Ciclo "P" consiste em 14 etapas sequenciais divididas em três grupos:

### Lado Esquerdo (Base - Resposta Inicial)

| Fase | Descrição |
|------|-----------|
| 1 | Resposta Inicial e Avaliação |
| 2 | Briefing do Incidente (SCI 201) |
| 3 | Briefing do Representante da Instituição |
| 4 | Reunião Inicial do Comando Unificado |

### Centro (Desenvolvimento - Planejamento)

| Fase | Descrição |
|------|-----------|
| 5 | Estabelecimento/Atualização de Objetivos (SCI 202) |
| 6 | Reunião com Staff do Comando e Staff Geral |
| 7 | Preparação para Reunião Tática |
| 8 | **REUNIÃO TÁTICA** |
| 9 | Preparação para Reunião de Planejamento |
| 10 | **REUNIÃO DE PLANEJAMENTO** |

### Lado Direito (Implementação)

| Fase | Descrição |
|------|-----------|
| 11 | Preparação e Aprovação do PAI |
| 12 | Briefing do Período Operacional |
| 13 | Execução do PAI |
| 14 | Avaliação de Progresso |

---

## Período Operacional

### Definição e Duração

- **PERÍODO OPERACIONAL:** Intervalo de tempo específico para o qual táticas são planejadas e recursos designados
- **DURAÇÃO TÍPICA:** 12 horas (pode variar de 8 a 24 horas)

**Fatores que influenciam duração:**
- Comportamento do incidente
- Disponibilidade de recursos
- Necessidade de descanso de pessoal
- Condições meteorológicas
- Operações diurnas vs noturnas

### Ciclo Diurno/Noturno (comum em incêndios florestais)

**PERÍODO DIURNO (06:00-18:00):**
- Operações táticas mais intensas
- Condições meteorológicas mais adversas (calor, vento)
- Maior disponibilidade de recursos
- Operações aéreas possíveis

**PERÍODO NOTURNO (18:00-06:00):**
- Operações reduzidas ou suspensas
- Condições mais favoráveis (umidade aumenta, vento diminui)
- Foco em rescaldo, patrulhamento
- Descanso de parte dos recursos

---

## Integração com Estrutura CBMMT

### Papel das Salas de Situação

**SSD/SSC durante Ciclo "P":**
- Monitora execução do PAI
- Fornece suporte logístico
- Despacha recursos adicionais quando solicitado
- Recebe atualizações de progresso
- Não participa diretamente de reuniões de planejamento

**CI no campo:** Conduz Ciclo "P" com staff no Posto de Comando.

### Aprovação de PAI por Nível

| Nível | Aprovação |
|-------|-----------|
| Nível 2 | CI aprova PAI, informa SSC |
| Nível 3-4 | CI aprova PAI, pode consultar SSC/DOp para decisões estratégicas |`,
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
- **PRIMEIRA VEZ:** Logo após CI assumir comando, antes do primeiro período operacional planejado
- **PERIODICIDADE:** Revisados e atualizados a cada período operacional (início do Ciclo "P")

### Responsável
- **COMANDANTE DO INCIDENTE:** Exclusivamente CI (ou Comando Unificado) estabelece objetivos
- **OUTROS NÃO ESTABELECEM OBJETIVOS:** CSOp desenvolve táticas, mas não objetivos

### Informações Consideradas pelo CI

**SITUAÇÃO ATUAL:**
- Tamanho do incêndio
- Comportamento do fogo
- Progresso até agora
- Recursos disponíveis

**PROJEÇÃO FUTURA:**
- Previsão meteorológica
- Comportamento esperado do fogo
- Disponibilidade futura de recursos

**PRIORIDADES:**
1. Segurança (sempre primeiro)
2. Proteção de vidas
3. Proteção de estruturas
4. Proteção de recursos naturais
5. Minimização de área queimada

---

## Características de Objetivos SMART

### S - Specific (Específicos)
Claro e detalhado, não ambíguo, todos entendem exatamente o que fazer.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Combater o fogo" | "Conter avanço no flanco norte usando linha de controle na estrada MT-100" |

### M - Measurable (Mensuráveis)
Pode-se determinar objetivamente se foi alcançado.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Melhorar a situação" | "Reduzir perímetro ativo de 5 km para 2 km" |

### A - Achievable (Atingíveis)
Possível com recursos e tempo disponíveis.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Extinguir 100% do incêndio nas próximas 6h" (500 ha) | "Completar 60% do perímetro de linha de controle nas próximas 12h" |

### R - Relevant (Relevantes)
Alinham-se com estratégia geral e prioridades.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Limpar acampamento base" | "Proteger as 3 residências no setor sul do incêndio" |

### T - Time-bound (Temporais)
Especifica quando deve ser alcançado.

| Exemplo RUIM | Exemplo BOM |
|--------------|-------------|
| "Conter fogo eventualmente" | "Conter fogo no flanco leste até as 18:00 de hoje" |

---

## Quantidade de Objetivos

- **IDEAL:** 2 a 5 objetivos por período operacional
- **MÍNIMO:** 1 objetivo claro
- **MÁXIMO:** Evitar mais de 7 objetivos (dificulta foco)

### Priorização
**SEGURANÇA SEMPRE PRIMEIRO.** Primeiro objetivo sempre relacionado à segurança.

**Exemplo de Objetivos Priorizados:**
1. Garantir segurança de todos combatentes (zonas seguras, rotas fuga, monitoramento)
2. Proteger residências no setor sul
3. Conter avanço no flanco norte até estrada MT-100
4. Completar 50% do rescaldo no setor leste

---

## Formulário SCI 202 - Objetivos do Incidente

### Estrutura do Formulário

**CABEÇALHO:**
- Nome do incidente
- Número do incidente
- Período operacional (data/horário início e fim)
- Data/hora de preparação

**SEÇÃO 1 - OBJETIVOS DO INCIDENTE:**
Lista numerada dos objetivos (2-5 objetivos)

**SEÇÃO 2 - CONSIDERAÇÕES DE SEGURANÇA:**
Mensagem de segurança do OSeg (ou CI se OSeg não designado)

**SEÇÃO 3 - INSTRUÇÕES ESPECIAIS:**
Restrições operacionais, prioridades especiais, coordenação com outras agências

**SEÇÃO 4 - APROVAÇÃO:**
Nome do CI, assinatura, data/hora

### Exemplo Preenchido

\`\`\`
SCI 202 - OBJETIVOS DO INCIDENTE

Incidente: Incêndio Florestal Fazenda Boa Esperança
Número: IF-2025-089
Período Operacional: PO3 - 06:00 15/ago às 18:00 15/ago
Data/Hora Preparação: 14/ago 17:30

OBJETIVOS DO INCIDENTE:

1. SEGURANÇA: Manter segurança de todos combatentes. Todas divisões
   devem ter zonas de segurança identificadas e rotas de fuga
   estabelecidas. Check-in/check-out obrigatório.

2. PROTEÇÃO: Proteger as 5 residências no setor sul através de ações
   defensivas e linha de controle. Concluir até 14:00.

3. CONTENÇÃO: Conter 100% do flanco norte usando estrada MT-100 como
   âncora. Completar linha de controle até as 16:00.

4. RESCALDO: Completar 70% do rescaldo no setor leste (já contido
   ontem). Priorizar 50 metros de profundidade.

CONSIDERAÇÕES DE SEGURANÇA:
- Vento previsto SE, 20-30 km/h, rajadas 40 km/h. ALTO RISCO 12:00-17:00.
- LCES obrigatório em todas divisões.
- Suspensão de operações se vento > 50 km/h.

APROVAÇÃO:
CI: Maj Roberto Silva
Data/Hora: 14/ago 17:45
\`\`\``,
  diagrams: [diagramObjetivosSmart]
};

const reuniaoTatica: Section = {
  id: 'reuniao-tatica',
  slug: 'reuniao-tatica',
  title: '22. Reunião Tática',
  part: 5,
  order: 3,
  content: `## Preparação para Reunião Tática

### Responsável
**CHEFE DA SEÇÃO DE OPERAÇÕES (CSOp):** Lidera preparação e condução da Reunião Tática.

### O Que CSOp Faz Antes da Reunião

**ANÁLISE:**
- Estuda objetivos do CI
- Analisa situação atual
- Consulta mapas
- Avalia recursos disponíveis
- Considera condições meteorológicas

**DESENVOLVIMENTO DE TÁTICAS:**
- Como alcançar cada objetivo
- Quais recursos necessários
- Onde alocar recursos (divisões/grupos)
- Estimativa de tempo

**FORMULÁRIOS:**
Inicia preenchimento do SCI 215 (Matriz de Planejamento Operacional)

**TEMPO DE PREPARAÇÃO:** 1-3 horas entre Reunião com Staff e Reunião Tática

---

## Participantes da Reunião Tática

### Participantes Obrigatórios

| Função | Papel |
|--------|-------|
| CSOp | Conduz reunião, apresenta táticas |
| OSeg | Avaliação de riscos |
| CSPlan/URec | Disponibilidade de recursos |
| CSLog | Viabilidade logística |
| CI | Pode participar ou delegar |

### Especialistas Técnico (podem ser convidados)
- Coordenador de Operações Aéreas
- Especialista em comportamento do fogo
- Especialista em maquinário
- Representantes de agências (ICMBio, Prevfogo)

---

## Condução da Reunião Tática

**DURAÇÃO:** 30 minutos a 2 horas (depende da complexidade)
**LOCAL:** Posto de Comando, com mapas e recursos visuais

### Agenda Típica

**1. ABERTURA (CSOp):**
Objetivo da reunião, revisão rápida de situação atual

**2. REVISÃO DE OBJETIVOS:**
Leitura dos objetivos estabelecidos pelo CI, confirmação de entendimento

**3. APRESENTAÇÃO DE TÁTICAS (CSOp):**
- Como alcançar cada objetivo
- Quais divisões/grupos
- Quais recursos
- Quando (sequência, horários)

**4. DISCUSSÃO (Todos):**
- **OSeg avalia:** Riscos de cada tática, medidas de mitigação
- **CSLog avalia:** Viabilidade logística, disponibilidade de suprimentos
- **CSPlan/URec avalia:** Disponibilidade de recursos, necessidade de recursos adicionais

**5. ANÁLISE DE RISCOS (OSeg + CSOp):**
Preenchimento do SCI 215A (identificação, probabilidade, severidade, mitigações)

**6. AJUSTES (CSOp):**
CSOp ajusta táticas baseado em feedback

**7. FINALIZAÇÃO:**
CSOp conclui SCI 215, OSeg conclui SCI 215A, aprovação de táticas

---

## Formulário SCI 215 - Matriz de Planejamento Operacional

### Estrutura do Formulário

| Coluna | Conteúdo |
|--------|----------|
| 1. Setores/Divisões/Grupos | Lista elementos operacionais |
| 2. Atribuição de Trabalho | O que cada um fará |
| 3. Recursos Designados | Quais recursos por divisão |
| 4. Solicitado | Recursos adicionais necessários |
| 5. ETA | Horário estimado de chegada |
| 6. Local de Reporte | Onde se apresentar |
| 7. Horário de Reporte | Quando se apresentar |

### Exemplo Simplificado SCI 215

\`\`\`
SCI 215 - MATRIZ DE PLANEJAMENTO OPERACIONAL
Incidente: IF Fazenda Boa Esperança | PO: 3 (06:00-18:00)

DIV/GRUPO | ATRIBUIÇÃO              | RECURSOS        | LOCAL  | HORA
----------|-------------------------|-----------------|--------|------
Div Norte | Conter flanco norte     | EIAOP 03 (10)   | PC     | 05:30
          | Linha controle 2km      | BDBM Chapada(8) | PC     | 05:30
          | Concluir 16:00          | EMec: 2 motos   | Div N  | 07:00
----------|-------------------------|-----------------|--------|------
Div Sul   | Proteção 5 residências  | EIAOP 05 (10)   | PC     | 05:30
          | Ações defensivas        | BMM Nobres (7)  | PC     | 05:30
          | Concluir 14:00          |                 |        |
----------|-------------------------|-----------------|--------|------
Div Leste | Rescaldo 70%            | GCIF 1 (5)      | A.Esp  | 06:00
          | 50m profundidade        | GCIF 2 (5)      | A.Esp  | 06:00

TOTAL RECURSOS: 58 bombeiros, 2 motoniveladoras
\`\`\`

---

## Formulário SCI 215A - Análise de Risco

### Estrutura

| Coluna | Conteúdo |
|--------|----------|
| Riscos/Perigos | Lista de riscos identificados |
| Probabilidade | Alta / Média / Baixa |
| Severidade | Alta / Média / Baixa |
| Medidas de Mitigação | O que será feito para reduzir risco |
| Responsável | Quem garante implementação |

### Exemplo Simplificado SCI 215A

\`\`\`
SCI 215A - ANÁLISE DE RISCO
Incidente: IF Fazenda Boa Esperança | PO: 3

RISCO/PERIGO         | PROB. | SEVER.| MITIGAÇÃO              | RESP.
---------------------|-------|-------|------------------------|--------
Vento forte SE       | ALTA  | ALTA  | Lookouts designados    | OSeg
20-30km/h            |       |       | Suspender se >50km/h   | CSOp
                     |       |       | Rota fuga clara        |
---------------------|-------|-------|------------------------|--------
Umidade baixa (25%)  | ALTA  | MÉDIA | Hidratação reforçada   | CSLog
Temp alta (38C)      |       |       | Rodízio de trabalho    | Sup Divs
---------------------|-------|-------|------------------------|--------
Comunicação limitada | MÉDIA | ALTA  | Celular como backup    | Sup Divs
em vales             |       |       | Check-in periódico     |

MENSAGEM PRINCIPAL: "LCES obrigatório em todas divisões"
\`\`\``,
  diagrams: [diagramReuniaoTatica]
};

const reuniaoPlanejamento: Section = {
  id: 'reuniao-planejamento',
  slug: 'reuniao-planejamento',
  title: '23-24. Reunião de Planejamento',
  part: 5,
  order: 4,
  content: `## Preparação para Reunião de Planejamento

### Coordenação pelo CSPlan

**RESPONSÁVEL:** Chefe da Seção de Planejamento coordena todos os preparativos
**TEMPO DISPONÍVEL:** 2-4 horas entre Reunião Tática e Reunião de Planejamento

### Murais e Materiais Visuais

**AGENDA DA REUNIÃO:** Mural visível com tempo para cada item

**OBJETIVOS (SCI 202):** Versão grande postada em parede ou quadro

**MAPAS DO INCIDENTE:**
- Mapa grande (mínimo A1, ideal A0 ou maior)
- Perímetro atual do incêndio
- Divisões marcadas com cores
- Instalações (PC, Base, Área de Espera)
- Linhas de controle planejadas

### Verificação de Preparação

**CSPlan verifica:**
- CSOp: SCI 215 finalizado? SCI 204 preparado?
- OSeg: SCI 215A finalizado? SCI 208 preparado?
- CSLog: SCI 205 preparado? Suporte identificado?
- CSAdmin: Estimativa de custos preparada?

---

## Reunião de Planejamento

### Finalidade

- **APRESENTAÇÃO:** Apresentar o plano operacional completo para o próximo período
- **VALIDAÇÃO:** Garantir que todos entendem e concordam com o plano
- **COORDENAÇÃO:** Assegurar que todas seções e recursos estão alinhados
- **ÚLTIMA OPORTUNIDADE:** Identificar problemas ou conflitos antes de implementação

### Participantes

**QUEM PARTICIPA:**
- Staff do Comando: CI, OSeg, OIP, OLig
- Staff Geral: CSOp, CSPlan, CSLog, CSAdmin
- Supervisores de todas Divisões/Grupos
- Líderes de Unidades ativadas
- Representantes de agências cooperadoras

**QUEM NÃO PARTICIPA:**
- Recursos táticos no campo (receberão Briefing depois)
- Pessoal de apoio básico

### Condução

- **FACILITADOR:** CSPlan conduz e facilita
- **LOCAL:** Posto de Comando, área para reuniões
- **DURAÇÃO:** 60 a 90 minutos

---

## Agenda da Reunião de Planejamento

### 1. Abertura (CSPlan - 2 min)
Boas-vindas, revisão da agenda, expectativas

### 2. Briefing de Segurança (OSeg - 5 min)
Mensagem de segurança baseada em SCI 215A, LCES, riscos principais

### 3. Situação Atual (CSPlan - 10 min)
- Tamanho atual do incêndio
- Comportamento do fogo
- Previsão meteorológica
- Recursos empenhados

### 4. Objetivos do Incidente (CI - 5 min)
CI lê ou resume objetivos estabelecidos (SCI 202), explica raciocínio

### 5. Plano Operacional (CSOp - 20-30 min)
**Para cada Divisão/Grupo:**
1. Identificação e supervisor
2. Área de responsabilidade (aponta no mapa)
3. Atribuição (objetivo específico)
4. Recursos designados
5. Táticas a serem usadas
6. Sequência/timing
7. Segurança específica (zonas, rotas)

**Após cada:** Supervisor confirma entendimento

### 6. Plano Médico (CSLog - 5 min)
- Instalações médicas
- Procedimentos de evacuação
- Hospitais de referência

### 7. Plano de Comunicações (CSLog - 5 min)
- Frequências de rádio por função
- Protocolo de comunicação
- Outros meios (celular, satélite)

### 8. Suporte Logístico (CSLog - 10 min)
- Instalações (Base, Área de Espera, Helibase)
- Suprimentos (água, combustível, alimentação)
- Transporte

### 9. Considerações Admin/Financeiras (CSAdmin - 5 min)
Custos estimados, registro de horas, contratações (se aplicável)

### 10. Questões e Esclarecimentos (CSPlan - 10-15 min)
Abertura para perguntas, resolução de conflitos identificados

### 11. Aprovação Final (CI - 5 min)
Comentários finais, confirmação de aprovação, expectativas, agradecimento`,
  diagrams: [diagramReuniaoPlanejamento]
};

const preparacaoPai: Section = {
  id: 'preparacao-pai',
  slug: 'preparacao-pai',
  title: '25. Preparação e Aprovação do PAI',
  part: 5,
  order: 5,
  content: `## Compilação do PAI

### Responsável
- **SEÇÃO DE PLANEJAMENTO:** CSPlan coordena compilação
- **UNIDADE DE DOCUMENTAÇÃO:** Frequentemente responsável pela montagem física/digital

### Estrutura do PAI Completo

O PAI completo contém (em ordem):

| # | Componente | Descrição |
|---|------------|-----------|
| 1 | CAPA | Nome, número, período, CI responsável |
| 2 | SCI 202 | Objetivos do Incidente |
| 3 | SCI 203 | Organização (posições e ocupantes) |
| 4 | SCI 204 | Atribuições (um por Divisão/Grupo) |
| 5 | SCI 205 | Comunicações de Rádio |
| 6 | SCI 205A | Lista de Comunicações |
| 7 | SCI 206 | Plano Médico |
| 8 | SCI 207 | Organograma (opcional mas recomendado) |
| 9 | SCI 208 | Plano de Segurança |
| 10 | SCI 215 | Matriz Operacional (referência) |
| 11 | SCI 215A | Análise de Riscos (referência) |
| 12 | MAPAS | Mapa do incidente com divisões |
| 13 | ANEXOS | Outros documentos relevantes |

### Deadline para Anexos

- **ESTABELECIDO NA REUNIÃO:** Típico 1-2 horas após Reunião de Planejamento
- **RESPONSABILIDADE:** Cada seção entrega seus formulários completos à SPlan

---

## Revisão pelo CI

### PAI Completo para CI

- **ENTREGA:** CSPlan entrega PAI compilado ao CI para revisão final
- **FORMATO:** Impresso (cópia mestre) + Digital (PDF)

### Verificação pelo CI

**CI VERIFICA:**
- **COMPLETUDE:** Todos formulários necessários presentes?
- **CONSISTÊNCIA:** Informações em diferentes formulários são consistentes?
- **ALINHAMENTO:** Plano operacional realmente alcançará objetivos?
- **VIABILIDADE:** Plano é realista com recursos disponíveis?
- **SEGURANÇA:** Medidas de segurança adequadas?

### Aprovação ou Ajustes

- **SE APROVADO:** CI assina/aprova PAI
- **SE AJUSTES:** CI solicita correções, SPlan faz ajustes, resubmete
- **REGISTRO:** Data/hora de aprovação, assinatura do CI, carimbada como "APROVADO"

---

## Reprodução e Distribuição

### Cópias Necessárias

**QUANTIDADE TÍPICA:** 10-20 cópias dependendo do tamanho da estrutura

**QUEM RECEBE CÓPIA COMPLETA:**
- CI e Staff do Comando
- Cada Chefe de Seção
- SSC
- Arquivo (2 cópias)

**QUEM RECEBE CÓPIA PARCIAL (relevante):**

Supervisores de Divisão/Grupo recebem:
- SCI 202 (Objetivos)
- SCI 204 (sua atribuição específica)
- SCI 205/205A (Comunicações)
- SCI 206 (Plano Médico)
- SCI 208 (Segurança)
- Mapa do incidente

**NÃO RECEBEM:** SCI 215/215A (ferramentas internas de planejamento)

---

## Futuro com ARGOS-SCI

**SISTEMA DIGITAL PERMITIRÁ:**
- PAI digital disponível em tablets
- Impressão on-demand
- Distribuição eletrônica automática
- Atualizações em tempo real`,
  diagrams: [diagramFormulariosPai]
};

const briefingOperacional: Section = {
  id: 'briefing-operacional',
  slug: 'briefing-operacional',
  title: '26. Briefing do Período Operacional',
  part: 5,
  order: 6,
  content: `## Finalidade do Briefing

- **COMUNICAR O PLANO:** Apresentar PAI a todos que o executarão
- **ATRIBUIÇÕES CLARAS:** Cada supervisor/recurso sabe exatamente o que fazer
- **ALINHAMENTO:** Todos operando com mesma informação
- **ÚLTIMA CHANCE:** Esclarecimentos finais antes de iniciar operações

---

## Responsável e Participantes

### Condutor
**CHEFE DA SEÇÃO DE OPERAÇÕES (CSOp)** conduz Briefing Operacional.
- Pode delegar: Em grandes operações, cada Supervisor pode briefar sua equipe.

### Participantes

**OBRIGATÓRIO:**
- Todos Supervisores de Divisão/Grupo
- Líderes de Força-Tarefa
- Líderes de Equipes de Intervenção
- Recursos táticos (idealmente todos combatentes)

**STAFF:**
- OSeg (segurança)
- Representante SPlan (situação)
- Representante SLog (logística)

### Configuração

| Tamanho Operação | Formato |
|------------------|---------|
| Grande | Briefing geral (supervisores) 30-45 min + Briefings de divisão (equipes) 15-20 min |
| Média | Briefing único com todos 30-45 min |

---

## Local e Horário

**LOCAL TÍPICO:**
- Base (se recursos iniciam lá)
- PC (se próximo)
- Área de Espera

**HORÁRIO:** 30-60 minutos ANTES do início do período operacional

**Exemplo:**
- PO inicia: 06:00
- Briefing: 05:00 ou 05:15

---

## Agenda do Briefing Operacional

### 1. Abertura (CSOp - 2 min)
Qual período operacional, duração, propósito do briefing

### 2. Situação Atual (SPlan - 5 min)
Tamanho atual, progressos, condições atuais, previsão do tempo HOJE

### 3. Objetivos do Período (CSOp - 3 min)
Leitura dos objetivos do SCI 202, ênfase nas prioridades

### 4. Segurança (OSeg - 5-10 min) **MAIS IMPORTANTE**

**CONDIÇÕES:**
- Meteorologia (vento, temperatura, umidade)
- Comportamento esperado do fogo
- Perigos específicos

**LCES:**
- **L**ookouts: Quem são, onde estarão
- **C**ommunications: Frequências, check-ins
- **E**scape Routes: Rotas de fuga primárias/secundárias
- **S**afety Zones: Onde são, como identificar

**PROCEDIMENTOS DE EMERGÊNCIA:**
- Sinal de evacuação
- Ponto de encontro
- Como solicitar ajuda médica

**ÊNFASE:** "Se não se sentir seguro, PARE. Comunique ao seu supervisor. Segurança é prioridade número 1."

### 5. Atribuições Operacionais (CSOp - 15-20 min)

**PARA CADA DIVISÃO/GRUPO:**
1. **SUPERVISOR:** "Divisão Norte, Sgt Silva supervisiona."
2. **ÁREA/FUNÇÃO:** Aponta no mapa
3. **OBJETIVO:** "Conter 100% até 16:00 usando estrada MT-100."
4. **RECURSOS:** "EIAOP 03, BDBM Chapada, 2 motos. Total 18 combatentes."
5. **TÁTICAS:** "Motos abrem aceiro, vocês fazem ataque direto, rescaldo imediato."
6. **SEGURANÇA:** "Zona de segurança: área desmatada. Rota de fuga: retornar à estrada."
7. **COORDENAÇÃO:** "Grupo Aéreo fará reconhecimento 07:00."
8. **ONDE REPORTAR:** "Apresentar-se no PC às 05:40."

**APÓS CADA:** Supervisor confirma: "Sgt Silva, entendido?"

### 6. Comunicações (CSLog/CSOp - 3 min)
Revisão rápida das frequências, protocolo de check-in

### 7. Logística (CSLog - 5 min)
Água, combustível, alimentação, ferramentas, transporte

### 8. Horários (CSOp - 2 min)
Início, fim, próximo briefing

### 9. Perguntas (CSOp - 5-10 min)
Abertura para dúvidas, esclarecimentos

### 10. Encerramento (CSOp - 2 min)
Motivação, encaminhamento, último lembrete: "Segurança primeiro, sempre."

---

## Briefings de Divisão/Grupo

### Quando Necessários
Em grandes operações, quando impraticável reunir todos combatentes.

### Processo
1. Briefing principal: apenas supervisores
2. Briefings de divisão: cada supervisor briefa sua equipe

### Conteúdo Específico
- Situação específica da área
- Atribuição detalhada da divisão
- Táticas específicas
- Divisão de trabalho entre equipes
- Segurança específica (LCES para área)
- Comunicações internas da divisão`,
  diagrams: [diagramBriefingOperacional]
};

const execucaoAvaliacao: Section = {
  id: 'execucao-avaliacao',
  slug: 'execucao-avaliacao',
  title: '27. Execução e Avaliação',
  part: 5,
  order: 7,
  content: `## Execução do PAI

### Início do Período Operacional

- **HORÁRIO:** Recursos iniciam operações conforme planejado (ex: 06:00)
- **SUPERVISORES:** Posicionam equipes conforme SCI 204
- **CI/CSOP:** Monitoram início, garantem que todos estão em posição

### Operações Conforme Plano

**IDEAL:** Recursos executam exatamente como planejado

**REALIDADE:** Ajustes são sempre necessários baseados em:
- Condições reais encontradas
- Mudanças no comportamento do fogo
- Disponibilidade de recursos
- Problemas imprevistos

### Comunicação Durante Execução

**CHECK-INS PERIÓDICOS:**
- Inicial: "Div Norte em posição, iniciando operações"
- A cada hora: "Div Norte, 30% da linha completada, progresso normal"
- Ao completar: "Div Norte, objetivo alcançado"

**MUDANÇAS:**
- Supervisor reporta: "Div Norte, terreno mais difícil que esperado, vou precisar 2h adicionais"
- CSOp aprova ajustes: "Div Norte, entendido, tome o tempo necessário. Priorize segurança."

---

## Papel do CI Durante Execução

### Supervisão Estratégica

**CI NÃO GERENCIA TÁTICAS** - CSOp gerencia operações táticas

**CI MONITORA:**
- Progresso geral em relação aos objetivos
- Status de recursos (fadiga, disponibilidade)
- Condições que podem exigir mudança de estratégia
- Necessidade de recursos adicionais

### Comunicação com SSC

**ATUALIZAÇÕES PERIÓDICAS:**
- Início do PO
- Meio do PO (situação intermediária)
- Fim do PO (resultados)

**SOLICITAÇÕES:** CI solicita recursos adicionais via SSC quando necessário

### Decisões Estratégicas

- **MUDANÇA DE OBJETIVOS:** Se situação mudar drasticamente, CI pode revisar objetivos
- **SUSPENSÃO DE OPERAÇÕES:** CI decide se operações devem ser suspensas (ex: vento muito forte)

---

## Monitoramento de Progresso

### Responsáveis
- **SEÇÃO DE OPERAÇÕES:** CSOp monitora progresso tático
- **SEÇÃO DE PLANEJAMENTO:** Unidade de Situação monitora situação geral

### Ferramentas
- Comunicações (reportes de rádio de supervisores)
- Reconhecimento (OSeg ou pessoal SPlan visitam divisões)
- Observação aérea (se disponível)
- Mapas (atualização contínua)

### Indicadores de Progresso

| Objetivo | Indicadores |
|----------|-------------|
| 1. Segurança | Acidentes/lesões: 0, Violações: nenhuma |
| 2. Proteção Estruturas | 5 residências protegidas: sim/não |
| 3. Contenção | % linha completada: 20%, 40%, 60%, 80%, 100% |
| 4. Rescaldo | % área rescaldada, profundidade atingida |

---

## Ajustes Durante o Período

### Quando Ajustar
- Progresso muito mais lento que esperado
- Condições mudaram (vento, comportamento fogo)
- Recursos insuficientes
- Novo risco identificado

### Quem Decide
- **AJUSTES TÁTICOS (pequenos):** CSOp decide e implementa
- **AJUSTES ESTRATÉGICOS (grandes):** CI decide, pode consultar staff

### Comunicação de Ajustes
- **Afetados diretamente:** CSOp comunica via rádio
- **Todos (se significativo):** Transmissão geral
- **SSC:** CI informa de ajustes importantes

---

## Avaliação ao Final do Período

### Momento
- Final do período operacional (últimas 1-2 horas)
- Antes do próximo Ciclo P

### Perguntas Avaliadas

**OBJETIVOS ALCANÇADOS?**
- Objetivo 1: sim/não, por quê?
- Objetivo 2: sim/não, por quê?
- Objetivo 3: parcialmente, por quê?

**TÁTICAS EFETIVAS?**
- O que funcionou bem?
- O que não funcionou?
- Ajustes necessários?

**RECURSOS ADEQUADOS?**
- Suficientes?
- Bem utilizados?
- Necessidade para próximo período?

**SEGURANÇA MANTIDA?**
- Acidentes/incidentes?
- Quase-acidentes?
- Medidas de segurança efetivas?

**LOGÍSTICA ADEQUADA?**
- Suprimentos suficientes?
- Comunicações funcionaram?
- Instalações adequadas?

### Reunião de Avaliação (Opcional)

- **DURAÇÃO:** 15-30 minutos
- **CONTEÚDO:** O que deu certo, o que melhorar, lições aprendidas
- **NÃO É FORMAL:** Não é a Reunião de Planejamento do próximo período

---

## Relatório de Fim de Período

### Conteúdo

**SITUAÇÃO AO FINAL:**
- Tamanho do incêndio
- Percentual contido
- Área rescaldada
- Objetivos alcançados vs não alcançados

**RECURSOS:**
- Total empenhado
- Status atual

**PRÓXIMAS AÇÕES:**
- Planos para próximo período
- Recursos adicionais necessários

### Distribuição
- CI (aprovação)
- SSC
- Arquivo`,
  diagrams: [diagramExecucaoPai]
};

// ------------------------------------------------------------
// EXPORTAÇÕES
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
