import type { Section, Diagram } from '@/data/types';

// Diagrama: 7 Fases do Fluxo Operacional
const diagramFasesFluxo: Diagram = {
  id: 'fases-fluxo-operacional',
  title: 'As 7 Fases do Fluxo Operacional',
  type: 'flowchart',
  code: `flowchart LR
    subgraph F1["FASE 1"]
        D[Detecção e Notificação]
    end

    subgraph F2["FASE 2"]
        A[Avaliação e Classificação]
    end

    subgraph F3["FASE 3"]
        DM[Despacho e Mobilização]
    end

    subgraph F4["FASE 4"]
        R[Resposta Inicial]
    end

    subgraph F5["FASE 5"]
        SCI[Ativação do SCI]
    end

    subgraph F6["FASE 6"]
        E[Estabelecimento do Comando]
    end

    subgraph F7["FASE 7"]
        EX[Expansão da Estrutura]
    end

    F1 --> F2 --> F3 --> F4 --> F5 --> F6 --> F7

    style F1 fill:#059669,color:#fff
    style F2 fill:#0891B2,color:#fff
    style F3 fill:#7C3AED,color:#fff
    style F4 fill:#D97706,color:#fff
    style F5 fill:#DC2626,color:#fff
    style F6 fill:#BE185D,color:#fff
    style F7 fill:#4F46E5,color:#fff`,
  description: 'As 7 fases do fluxo operacional desde a detecção até a expansão da estrutura'
};

// Diagrama: Fluxo de Detecção
const diagramDeteccao: Diagram = {
  id: 'fluxo-deteccao',
  title: 'Fluxo de Detecção e Notificação',
  type: 'flowchart',
  code: `flowchart TB
    subgraph DETECCAO["Fontes de Detecção"]
        SAT[Satélite INPE/NASA]
        DEN[Denúncia 193]
        PAT[Patrulha IRT]
        PAR[Parceiros ICMBio/Prevfogo]
    end

    subgraph SISTEMA["Sistemas"]
        ARGOS[Plataforma ARGOS]
        CAD[Sistema CAD 193]
    end

    subgraph SALAS["Salas de Situação"]
        SSC[SSC - Central]
        SSD[SSD - Regional]
    end

    SAT --> ARGOS
    DEN --> CAD
    PAT --> SSD
    PAR --> SSC

    ARGOS --> SSC
    CAD --> SSD

    SSC <--> SSD

    SSC --> ANALISE[Análise e Classificação]
    SSD --> ANALISE

    style SAT fill:#0891B2,color:#fff
    style DEN fill:#DC2626,color:#fff
    style ARGOS fill:#059669,color:#fff
    style SSC fill:#7C3AED,color:#fff
    style SSD fill:#7C3AED,color:#fff`,
  description: 'Como os incêndios são detectados e notificados às Salas de Situação'
};

// Diagrama: Processo de Classificação
const diagramClassificacao: Diagram = {
  id: 'processo-classificacao',
  title: 'Processo de Avaliação e Classificação',
  type: 'flowchart',
  code: `flowchart TD
    START[Notificação Recebida] --> ANALISE[Análise de Informações]

    ANALISE --> LOC{Localização}
    ANALISE --> TAM{Tamanho}
    ANALISE --> REC{Recursos Necessários}
    ANALISE --> AME{Ameaças}

    LOC --> CRIT[Aplicar Critérios POTIF]
    TAM --> CRIT
    REC --> CRIT
    AME --> CRIT

    CRIT --> N1{Até 3 IRTs?}

    N1 -->|Sim| NIVEL1[NÍVEL 1]
    N1 -->|Não| N2{4-7 IRTs?}

    N2 -->|Sim| NIVEL2[NÍVEL 2]
    N2 -->|Não| N3{7+ IRTs + Federal?}

    N3 -->|Sim| NIVEL3[NÍVEL 3]
    N3 -->|Não| NIVEL4[NÍVEL 4]

    NIVEL1 --> DESP[Despacho de Recursos]
    NIVEL2 --> DESP
    NIVEL3 --> DESP
    NIVEL4 --> DESP

    style NIVEL1 fill:#059669,color:#fff
    style NIVEL2 fill:#D97706,color:#fff
    style NIVEL3 fill:#DC2626,color:#fff
    style NIVEL4 fill:#7C3AED,color:#fff`,
  description: 'Fluxo de avaliação e classificação do nível de complexidade'
};

// Diagrama: Ativação do SCI
const diagramAtivacaoSCI: Diagram = {
  id: 'ativacao-sci',
  title: 'Critérios de Ativação do SCI',
  type: 'flowchart',
  code: `flowchart TD
    INC[Incidente em Andamento] --> AVAL{Avaliação Contínua}

    AVAL --> C1{Nível 2, 3 ou 4?}
    AVAL --> C2{Duração > 12h?}
    AVAL --> C3{4+ IRTs?}
    AVAL --> C4{Multi-institucional?}

    C1 -->|Sim| ATIVAR[Ativar SCI]
    C2 -->|Sim| ATIVAR
    C3 -->|Sim| ATIVAR
    C4 -->|Sim| ATIVAR

    C1 -->|Não| CHECK[Continuar Monitorando]
    C2 -->|Não| CHECK
    C3 -->|Não| CHECK
    C4 -->|Não| CHECK

    CHECK --> AVAL

    ATIVAR --> CI[Designar CI]
    CI --> BRIEF[Briefing Inicial]
    BRIEF --> PAI[Primeiro PAI]

    style ATIVAR fill:#DC2626,color:#fff
    style CI fill:#059669,color:#fff`,
  description: 'Quando e como o SCI é ativado formalmente'
};

// Diagrama: Reunião Tática
const diagramReuniaoTaticaIV: Diagram = {
  id: 'reuniao-tatica-iv',
  title: 'Estrutura da Reunião Tática',
  type: 'flowchart',
  code: `flowchart TB
    subgraph ABERTURA["1. ABERTURA"]
        A1["CI abre reunião"]
        A2["Confirma presentes"]
    end

    subgraph SITUACAO["2. SITUAÇÃO ATUAL"]
        S1["Perímetro do incêndio"]
        S2["Comportamento do fogo"]
        S3["Condições meteorológicas"]
    end

    subgraph OBJETIVOS["3. OBJETIVOS"]
        O1["Prioridades 1, 2, 3"]
        O2["Critérios de sucesso"]
    end

    subgraph TATICAS["4. ESTRATÉGIA/TÁTICAS"]
        T1["Divisão de áreas"]
        T2["Técnicas de combate"]
        T3["Recursos por área"]
    end

    subgraph SEGURANCA["5. SEGURANÇA"]
        SEG1["Riscos identificados"]
        SEG2["Rotas de fuga - LCES"]
    end

    subgraph COMUNICACAO["6. COMUNICAÇÕES"]
        C1["Frequências"]
        C2["Horários de reporte"]
    end

    ABERTURA --> SITUACAO --> OBJETIVOS --> TATICAS --> SEGURANCA --> COMUNICACAO

    style ABERTURA fill:#059669,color:#fff
    style SITUACAO fill:#0891B2,color:#fff
    style OBJETIVOS fill:#DC2626,color:#fff
    style TATICAS fill:#D97706,color:#fff
    style SEGURANCA fill:#BE185D,color:#fff
    style COMUNICACAO fill:#7C3AED,color:#fff`,
  description: 'Pauta estruturada da reunião tática'
};

// Diagrama: Componentes do PAI
const diagramComponentesPAI: Diagram = {
  id: 'componentes-pai',
  title: 'Componentes do PAI',
  type: 'flowchart',
  code: `flowchart TB
    subgraph PAI["PLANO DE AÇÃO DO INCIDENTE"]
        direction TB
        SCI202["SCI 202<br/>Objetivos"]
        SCI203["SCI 203<br/>Organização"]
        SCI204["SCI 204<br/>Atribuições"]
        SCI205["SCI 205<br/>Comunicações"]
        SCI206["SCI 206<br/>Plano Médico"]
        SCI207["SCI 207<br/>Organograma"]
        SCI208["SCI 208<br/>Segurança"]
    end

    CI[CI Aprova] --> PAI
    PAI --> DIST[Distribuição]

    DIST --> CHEFES[Chefes de Seção]
    DIST --> SUPER[Supervisores]
    DIST --> SSC[SSC/SSD]

    style PAI fill:#DC2626,color:#fff
    style CI fill:#059669,color:#fff
    style DIST fill:#1E40AF,color:#fff`,
  description: 'Formulários que compõem o PAI'
};

// Diagrama: Ciclo de Períodos Operacionais
const diagramCicloPeriodos: Diagram = {
  id: 'ciclo-periodos',
  title: 'Ciclo de Períodos Operacionais',
  type: 'flowchart',
  code: `flowchart LR
    subgraph DIA["PERÍODO DIURNO 06:00-18:00"]
        D1["06:00 Início"]
        D2["07:00 Briefing"]
        D3["Operações"]
        D4["17:00 Transição"]
    end

    subgraph NOITE["PERÍODO NOTURNO 18:00-06:00"]
        N1["18:00 Início"]
        N2["19:00 Briefing"]
        N3["Operações"]
        N4["05:00 Transição"]
    end

    D1 --> D2 --> D3 --> D4
    D4 --> N1
    N1 --> N2 --> N3 --> N4
    N4 --> D1

    style DIA fill:#FEF3C7,stroke:#D97706,color:#92400E
    style NOITE fill:#1E3A5F,stroke:#1E40AF,color:#FFFFFF`,
  description: 'Ciclo típico de períodos operacionais diurno e noturno'
};

// Diagrama: Escalada de Recursos
const diagramEscaladaRecursos: Diagram = {
  id: 'escalada-recursos',
  title: 'Fluxo de Escalada de Recursos',
  type: 'flowchart',
  code: `flowchart TB
    NEED[Necessidade Identificada] --> CSOP[CSOp Avalia]
    CSOP --> CSLOG[CSLog Verifica Disponibilidade]
    CSLOG --> LOCAL{Recurso Local?}

    LOCAL -->|Sim| ALOCA[Alocar Recurso]
    LOCAL -->|Não| SSD[Solicitar via SSD]

    SSD --> REGIONAL{Recurso Regional?}
    REGIONAL -->|Sim| DESPACHA[SSD Despacha]
    REGIONAL -->|Não| SSC[Escalar para SSC]

    SSC --> ESTADUAL{Recurso Estadual?}
    ESTADUAL -->|Sim| SSCDESP[SSC Despacha]
    ESTADUAL -->|Não| FEDERAL[Acionar Federais]

    ALOCA --> CHEGADA[Recurso Chega]
    DESPACHA --> CHEGADA
    SSCDESP --> CHEGADA
    FEDERAL --> CHEGADA

    CHEGADA --> CHECKIN[Check-In SCI 211]

    style NEED fill:#DC2626,color:#fff
    style SSC fill:#059669,color:#fff
    style CHECKIN fill:#1E40AF,color:#fff`,
  description: 'Processo de solicitação e escalada de recursos'
};

// Diagrama: Estabelecimento do Comando
const diagramEstabelecimento: Diagram = {
  id: 'estabelecimento-comando',
  title: 'Estabelecimento do Comando',
  type: 'flowchart',
  code: `flowchart TB
    subgraph FASE1["1. DESIGNAÇÃO"]
        D1["SSC/SSD identifica necessidade"]
        D2["Oficial qualificado selecionado"]
        D3["Comunicação formal da designação"]
    end

    subgraph FASE2["2. ASSUNÇÃO"]
        A1["CI chega ao local/assume remoto"]
        A2["Recebe briefing da situação"]
        A3["Confirma assunção via rádio"]
    end

    subgraph FASE3["3. ESTRUTURAÇÃO"]
        E1["Estabelece Posto de Comando"]
        E2["Ativa OSeg - Segurança"]
        E3["Designa CSOp se necessário"]
        E4["Define canais de comunicação"]
    end

    subgraph FASE4["4. DOCUMENTAÇÃO"]
        DOC1["Prepara SCI 201 - Briefing"]
        DOC2["Envia cópia para SSC/SSD"]
        DOC3["Registra hora de assunção"]
    end

    FASE1 --> FASE2 --> FASE3 --> FASE4

    classDef fase1 fill:#059669,stroke:#047857,color:#FFFFFF
    classDef fase2 fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef fase3 fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef fase4 fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class D1,D2,D3 fase1
    class A1,A2,A3 fase2
    class E1,E2,E3,E4 fase3
    class DOC1,DOC2,DOC3 fase4`,
  description: 'Fases do estabelecimento formal do comando do incidente'
};

export const ativacaoSci: Section = {
  id: 'ativacao-sci',
  title: 'Ativação do SCI',
  slug: 'ativacao-sci',
  part: 4,
  content: `## Ativação do SCI

A ativação do SCI marca a transição de uma resposta convencional para uma operação gerenciada formalmente.

### Quando Ativar o SCI

O SCI deve ser ativado quando o incidente apresentar **pelo menos uma** das seguintes características:

| Critério | Descrição |
|----------|-----------|
| **Nível de Complexidade** | Operação classificada como Nível 2, 3 ou 4 |
| **Duração** | Operação estimada superior a 12 horas |
| **Recursos** | 4 ou mais IRTs empenhados simultaneamente |
| **Multi-institucional** | Envolvimento de órgãos externos (ICMBio, Prevfogo) |
| **Visibilidade** | Alta repercussão ou área crítica (UC prioritária) |

### Processo de Ativação

1. **Decisão de Ativar**
   - SSC/SSD identifica necessidade
   - BEA assessora quando aplicável
   - DOp autoriza para Níveis 3 e 4

2. **Designação do CI**
   - Oficial qualificado é designado formalmente
   - Comunicação a todos os recursos
   - Registro formal da designação

3. **Assunção do Comando**
   - CI chega ao local ou assume remotamente
   - Recebe briefing completo
   - Assume responsabilidade formal

### Quem Pode Ser CI

| Nível | CI Recomendado |
|-------|----------------|
| Nível 1 | Primeiro BM no local (praça ou oficial) |
| Nível 2 | Oficial designado pela SSD/SSC |
| Nível 3 | Oficial superior com experiência SCI |
| Nível 4 | Oficial superior + possível Comando Unificado |

### Primeiro Ato do CI

Ao assumir, o CI deve:

1. Confirmar assunção à SSC/SSD
2. Obter briefing da situação atual
3. Estabelecer Posto de Comando
4. Identificar prioridades imediatas
5. Comunicar objetivos iniciais`,
  diagrams: [diagramAtivacaoSCI],
};

export const estabelecimento: Section = {
  id: 'estabelecimento',
  title: 'Estabelecimento Inicial do Comando',
  slug: 'estabelecimento',
  part: 4,
  content: `## Estabelecimento Inicial do Comando

O estabelecimento do comando é o momento em que o CI assume formalmente e organiza a estrutura inicial da operação.

### Local do Posto de Comando (PC)

O PC deve ser posicionado em local que permita:

- **Segurança:** Fora da zona de risco
- **Comunicação:** Sinal de rádio/celular
- **Visibilidade:** Visão geral da operação (se possível)
- **Acesso:** Chegada e saída de recursos
- **Identificação:** Facilmente localizável

### Estrutura Inicial Mínima

**Para incidente simples:**
\`\`\`
CI (acumula todas funções)
\`\`\`

**Para incidente em crescimento:**
\`\`\`
CI
├── OSeg (Oficial de Segurança)
└── Responsável pela Operação de Combate
\`\`\`

### Briefing Inicial (SCI 201)

O CI deve preparar ou receber um briefing contendo:

| Item | Descrição |
|------|-----------|
| **Situação** | O que está acontecendo |
| **Objetivos** | O que queremos alcançar |
| **Organização** | Quem faz o que |
| **Recursos** | O que temos disponível |
| **Comunicações** | Como nos comunicamos |
| **Segurança** | Riscos e mitigações |

### Comunicação da Assunção

O CI deve comunicar formalmente:

1. **Para SSC/SSD:** "Assumo comando do incidente [nome/número]"
2. **Para recursos no local:** "Sou o CI, reportem-se a mim"
3. **Registrar:** Data, hora, local da assunção

### Primeiras Decisões

1. **Prioridades:** Vida > Propriedade > Ambiente
2. **Estratégia inicial:** Ofensiva ou defensiva
3. **Recursos necessários:** Solicitar reforços se preciso
4. **Segurança:** Avaliar riscos para combatentes`,
  diagrams: [diagramEstabelecimento],
};

export const reuniaoTatica: Section = {
  id: 'reuniao-tatica',
  title: 'Primeira Reunião Tática',
  slug: 'reuniao-tatica',
  part: 4,
  content: `## Primeira Reunião Tática

A reunião tática é o momento onde o CI alinha com os supervisores as ações do período operacional.

### Quando Realizar

- Ao início de cada período operacional (12h)
- Quando há mudança significativa na situação
- Após chegada de recursos importantes
- Antes de operações de alto risco

### Participantes

| Função | Participação |
|--------|--------------|
| **CI** | Conduz a reunião |
| **CSOp** | Apresenta situação tática |
| **CSPlan** | Apresenta previsões e alternativas |
| **CSLog** | Apresenta status de recursos |
| **OSeg** | Apresenta questões de segurança |
| **Supervisores de Divisão** | Quando aplicável |

### Pauta da Reunião

1. **Situação Atual**
   - Perímetro do incêndio
   - Áreas controladas vs ativas
   - Comportamento do fogo
   - Condições meteorológicas

2. **Objetivos do Período**
   - O que queremos alcançar
   - Prioridades (1, 2, 3)
   - Critérios de sucesso

3. **Estratégia e Táticas**
   - Como vamos atingir objetivos
   - Divisão de áreas
   - Técnicas de combate

4. **Recursos**
   - Disponíveis vs necessários
   - Solicitações pendentes
   - Rodízio de equipes

5. **Segurança**
   - Riscos identificados
   - Medidas de mitigação
   - Rotas de fuga
   - Zonas de segurança

6. **Comunicações**
   - Frequências de rádio
   - Pontos de contato
   - Horários de reporte

### Duração

- Reunião inicial: 30-45 minutos
- Reuniões de atualização: 15-20 minutos

### Documentação

Decisões da reunião são registradas e comunicadas via:
- SCI 202 (Objetivos)
- SCI 204 (Atribuições)
- Rádio/Presencial para equipes`,
  diagrams: [diagramReuniaoTaticaIV],
};

export const primeiroPai: Section = {
  id: 'primeiro-pai',
  title: 'Primeiro Plano de Ação do Incidente',
  slug: 'primeiro-pai',
  part: 4,
  content: `## Primeiro Plano de Ação do Incidente (PAI)

O PAI é o documento central que guia todas as operações durante um período operacional.

### Quando o PAI é Obrigatório

| Situação | PAI |
|----------|-----|
| Período operacional único | Verbal/simplificado |
| Múltiplos períodos | Escrito obrigatório |
| Multi-institucional | Escrito obrigatório |
| Nível 3 ou 4 | Escrito completo |

### Componentes do PAI

O PAI completo inclui os seguintes formulários SCI:

| Formulário | Conteúdo |
|------------|----------|
| **SCI 202** | Objetivos do incidente |
| **SCI 203** | Organização (quem faz o que) |
| **SCI 204** | Atribuições (detalhamento por divisão) |
| **SCI 205** | Plano de comunicações |
| **SCI 206** | Plano médico |
| **SCI 207** | Organograma |
| **SCI 208** | Mensagem de segurança |

### Processo de Criação

1. **CI define objetivos** (com input do staff)
2. **CSPlan compila** informações
3. **CSOp detalha** táticas
4. **CSLog confirma** recursos
5. **OSeg adiciona** mensagens de segurança
6. **CI aprova** PAI final

### Distribuição

O PAI deve ser distribuído para:
- Todos os chefes de seção
- Supervisores de divisão/grupo
- Líderes de equipe
- SSC/SSD (cópia)

### Briefing do PAI

Antes de cada período operacional:
1. CI apresenta PAI em reunião
2. Dúvidas são esclarecidas
3. Cada supervisor repassa para sua equipe
4. Execução inicia no horário definido

### PAI Simplificado (Nível 1-2)

Para operações menores, PAI pode ser verbal com registro mínimo:
- Objetivos comunicados via rádio
- Atribuições definidas no local
- Registro em caderneta do CI`,
  diagrams: [diagramComponentesPAI],
};

export const operacoesSustentadas: Section = {
  id: 'operacoes-sustentadas',
  title: 'Operações Sustentadas',
  slug: 'operacoes-sustentadas',
  part: 4,
  content: `## Operações Sustentadas

Operações que se estendem por múltiplos períodos operacionais (dias ou semanas) requerem planejamento específico.

### Características

- Duração superior a 24-48 horas
- Múltiplos turnos de trabalho
- Necessidade de logística permanente
- Planejamento para períodos futuros

### Ciclo de Períodos Operacionais

| Horário | Atividade |
|---------|-----------|
| 06:00 | Início período diurno |
| 07:00 | Briefing operacional |
| 12:00 | Atualização de situação |
| 17:00 | Preparação para transição |
| 18:00 | Início período noturno |
| 19:00 | Briefing noturno |
| 05:00 | Preparação para transição |

### Estrutura para Operações Longas

**Base de Operações:**
- Acampamento para descanso
- Alimentação para todas equipes
- Área de manutenção de equipamentos
- Posto médico

**Logística Contínua:**
- Reabastecimento de combustível
- Água potável
- Alimentação (3 refeições + lanches)
- EPIs reserva

### Rodízio de Pessoal

| Função | Máximo Contínuo | Descanso Mínimo |
|--------|-----------------|-----------------|
| Combate direto | 12 horas | 8 horas |
| Supervisão | 12 horas | 8 horas |
| CI | 12-16 horas | 8 horas |
| Apoio logístico | 12 horas | 8 horas |

### Documentação Diária

- Relatório de situação (diário)
- Atualização de mapa de operações
- Registro de recursos empenhados
- Controle de horas trabalhadas
- Registro de incidentes/acidentes`,
  diagrams: [diagramCicloPeriodos],
};

export const escaladaRecursos: Section = {
  id: 'escalada-recursos',
  title: 'Escalada de Recursos',
  slug: 'escalada-recursos',
  part: 4,
  content: `## Escalada de Recursos

Processo de solicitar recursos adicionais quando os disponíveis são insuficientes.

### Quando Escalar

- Incêndio crescendo mais rápido que capacidade de controle
- Recursos atuais insuficientes
- Previamente planejado (antecipação)
- Mudança nas condições (vento, temperatura)

### Cadeia de Solicitação

\`\`\`
CI --> CSOp --> CSLog --> SSC/SSD --> Recursos Externos
\`\`\`

### Tipos de Recursos Adicionais

| Recurso | Solicitar Via |
|---------|---------------|
| IRTs regionais | SSD |
| EIAOPs | SSC/BEA |
| GAvBM | SSC/BEA |
| Maquinário | SSC/SINFRA |
| Recursos federais | SSC/ICMBio |

### Informações na Solicitação

1. **O que precisa:** Tipo e quantidade
2. **Para que:** Objetivo específico
3. **Onde:** Local de emprego
4. **Quando:** Urgência (imediato, próximo período)
5. **Quem recebe:** Ponto de contato no local

### Prioridades de Alocação

Quando recursos são escassos, priorizar:

1. **Vida humana em risco**
2. **Proteção de estruturas habitadas**
3. **UCs prioritárias**
4. **Áreas de maior potencial de dano**
5. **Propriedades privadas**

### Documentação

Toda solicitação deve ser registrada:
- Formulário SCI 213 (Pedido de Recursos)
- Número do pedido
- Status: Pendente / Aprovado / Negado / Atendido`,
  diagrams: [diagramEscaladaRecursos],
};

export const transicoesComando: Section = {
  id: 'transicoes-comando',
  title: 'Transições de Comando',
  slug: 'transicoes-comando',
  part: 4,
  content: `## Transições de Comando

A transferência de comando entre CIs deve ser formal para garantir continuidade.

### Motivos para Transferência

| Motivo | Exemplo |
|--------|---------|
| **Escala** | Incidente cresceu, precisa CI mais experiente |
| **Turno** | CI atual completou período máximo |
| **Competência** | Chegou especialista mais qualificado |
| **Multi-institucional** | Estabelecimento de Comando Unificado |
| **Encerramento** | Redução permite CI menos graduado |

### Processo de Transferência

1. **Preparação**
   - CI atual prepara SCI 201 atualizado
   - Compila todos documentos relevantes
   - Identifica questões pendentes

2. **Briefing**
   - CI atual apresenta situação ao novo CI
   - Passagem de todos documentos
   - Esclarecimento de dúvidas

3. **Comunicação**
   - Anúncio formal a todas as partes
   - "Comando transferido de [nome] para [nome] às [hora]"
   - Registro em log

4. **Assunção**
   - Novo CI confirma assunção
   - Assume autoridade imediatamente
   - CI anterior fica disponível para consulta

### Briefing de Transferência (SCI 201)

O briefing deve incluir:

| Tópico | Conteúdo |
|--------|----------|
| Situação | Estado atual do incidente |
| Objetivos | O que estamos tentando alcançar |
| Organização | Estrutura atual do SCI |
| Recursos | O que temos, o que falta |
| Problemas | Questões pendentes |
| Segurança | Riscos ativos |

### Transferência de Turno vs Transferência de Comando

**Transferência de Turno:**
- CI muda, mas nível e estratégia se mantêm
- Processo mais simples
- Foco em continuidade

**Transferência de Comando:**
- Mudança de autoridade (escalada/redução)
- Processo mais formal
- Pode envolver mudança de estratégia`,
  diagrams: [diagramFasesFluxo, diagramDeteccao, diagramClassificacao],
};

// Exportar todas as seções da Parte IV
export const parteIVSections: Section[] = [
  ativacaoSci,
  estabelecimento,
  reuniaoTatica,
  primeiroPai,
  operacoesSustentadas,
  escaladaRecursos,
  transicoesComando,
];

// Mapa de slug para seção
export const parteIVSectionMap: Record<string, Section> = {
  'ativacao-sci': ativacaoSci,
  'estabelecimento': estabelecimento,
  'reuniao-tatica': reuniaoTatica,
  'primeiro-pai': primeiroPai,
  'operacoes-sustentadas': operacoesSustentadas,
  'escalada-recursos': escaladaRecursos,
  'transicoes-comando': transicoesComando,
};
