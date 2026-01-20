import type { Section, Diagram } from '@/data/types';

// Diagrama: 7 Fases do Fluxo Operacional
const diagramFasesFluxo: Diagram = {
  id: 'fases-fluxo-operacional',
  title: 'As 7 Fases do Fluxo Operacional',
  type: 'flowchart',
  code: `flowchart LR
    subgraph F1["FASE 1"]
        D[Deteccao e Notificacao]
    end

    subgraph F2["FASE 2"]
        A[Avaliacao e Classificacao]
    end

    subgraph F3["FASE 3"]
        DM[Despacho e Mobilizacao]
    end

    subgraph F4["FASE 4"]
        R[Resposta Inicial]
    end

    subgraph F5["FASE 5"]
        SCI[Ativacao do SCI]
    end

    subgraph F6["FASE 6"]
        E[Estabelecimento do Comando]
    end

    subgraph F7["FASE 7"]
        EX[Expansao da Estrutura]
    end

    F1 --> F2 --> F3 --> F4 --> F5 --> F6 --> F7

    style F1 fill:#059669,color:#fff
    style F2 fill:#0891B2,color:#fff
    style F3 fill:#7C3AED,color:#fff
    style F4 fill:#D97706,color:#fff
    style F5 fill:#DC2626,color:#fff
    style F6 fill:#BE185D,color:#fff
    style F7 fill:#4F46E5,color:#fff`,
  description: 'As 7 fases do fluxo operacional desde a deteccao ate a expansao da estrutura'
};

// Diagrama: Fluxo de Deteccao
const diagramDeteccao: Diagram = {
  id: 'fluxo-deteccao',
  title: 'Fluxo de Deteccao e Notificacao',
  type: 'flowchart',
  code: `flowchart TB
    subgraph DETECCAO["Fontes de Deteccao"]
        SAT[Satelite INPE/NASA]
        DEN[Denuncia 193]
        PAT[Patrulha IRT]
        PAR[Parceiros ICMBio/Prevfogo]
    end

    subgraph SISTEMA["Sistemas"]
        ARGOS[Plataforma ARGOS]
        CAD[Sistema CAD 193]
    end

    subgraph SALAS["Salas de Situacao"]
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

    SSC --> ANALISE[Analise e Classificacao]
    SSD --> ANALISE

    style SAT fill:#0891B2,color:#fff
    style DEN fill:#DC2626,color:#fff
    style ARGOS fill:#059669,color:#fff
    style SSC fill:#7C3AED,color:#fff
    style SSD fill:#7C3AED,color:#fff`,
  description: 'Como os incendios sao detectados e notificados as Salas de Situacao'
};

// Diagrama: Processo de Classificacao
const diagramClassificacao: Diagram = {
  id: 'processo-classificacao',
  title: 'Processo de Avaliacao e Classificacao',
  type: 'flowchart',
  code: `flowchart TD
    START[Notificacao Recebida] --> ANALISE[Analise de Informacoes]

    ANALISE --> LOC{Localizacao}
    ANALISE --> TAM{Tamanho}
    ANALISE --> REC{Recursos Necessarios}
    ANALISE --> AME{Ameacas}

    LOC --> CRIT[Aplicar Criterios POTIF]
    TAM --> CRIT
    REC --> CRIT
    AME --> CRIT

    CRIT --> N1{Ate 3 IRTs?}

    N1 -->|Sim| NIVEL1[NIVEL 1]
    N1 -->|Nao| N2{4-7 IRTs?}

    N2 -->|Sim| NIVEL2[NIVEL 2]
    N2 -->|Nao| N3{7+ IRTs + Federal?}

    N3 -->|Sim| NIVEL3[NIVEL 3]
    N3 -->|Nao| NIVEL4[NIVEL 4]

    NIVEL1 --> DESP[Despacho de Recursos]
    NIVEL2 --> DESP
    NIVEL3 --> DESP
    NIVEL4 --> DESP

    style NIVEL1 fill:#059669,color:#fff
    style NIVEL2 fill:#D97706,color:#fff
    style NIVEL3 fill:#DC2626,color:#fff
    style NIVEL4 fill:#7C3AED,color:#fff`,
  description: 'Fluxo de avaliacao e classificacao do nivel de complexidade'
};

// Diagrama: Ativacao do SCI
const diagramAtivacaoSCI: Diagram = {
  id: 'ativacao-sci',
  title: 'Criterios de Ativacao do SCI',
  type: 'flowchart',
  code: `flowchart TD
    INC[Incidente em Andamento] --> AVAL{Avaliacao Continua}

    AVAL --> C1{Nivel 2, 3 ou 4?}
    AVAL --> C2{Duracao > 12h?}
    AVAL --> C3{4+ IRTs?}
    AVAL --> C4{Multi-institucional?}

    C1 -->|Sim| ATIVAR[Ativar SCI]
    C2 -->|Sim| ATIVAR
    C3 -->|Sim| ATIVAR
    C4 -->|Sim| ATIVAR

    C1 -->|Nao| CHECK[Continuar Monitorando]
    C2 -->|Nao| CHECK
    C3 -->|Nao| CHECK
    C4 -->|Nao| CHECK

    CHECK --> AVAL

    ATIVAR --> CI[Designar CI]
    CI --> BRIEF[Briefing Inicial]
    BRIEF --> PAI[Primeiro PAI]

    style ATIVAR fill:#DC2626,color:#fff
    style CI fill:#059669,color:#fff`,
  description: 'Quando e como o SCI e ativado formalmente'
};

// Diagrama: Reuniao Tatica
const diagramReuniaoTaticaIV: Diagram = {
  id: 'reuniao-tatica-iv',
  title: 'Estrutura da Reuniao Tatica',
  type: 'flowchart',
  code: `flowchart TB
    subgraph ABERTURA["1. ABERTURA"]
        A1["CI abre reuniao"]
        A2["Confirma presentes"]
    end

    subgraph SITUACAO["2. SITUACAO ATUAL"]
        S1["Perimetro do incendio"]
        S2["Comportamento do fogo"]
        S3["Condicoes meteorologicas"]
    end

    subgraph OBJETIVOS["3. OBJETIVOS"]
        O1["Prioridades 1, 2, 3"]
        O2["Criterios de sucesso"]
    end

    subgraph TATICAS["4. ESTRATEGIA/TATICAS"]
        T1["Divisao de areas"]
        T2["Tecnicas de combate"]
        T3["Recursos por area"]
    end

    subgraph SEGURANCA["5. SEGURANCA"]
        SEG1["Riscos identificados"]
        SEG2["Rotas de fuga - LCES"]
    end

    subgraph COMUNICACAO["6. COMUNICACOES"]
        C1["Frequencias"]
        C2["Horarios de reporte"]
    end

    ABERTURA --> SITUACAO --> OBJETIVOS --> TATICAS --> SEGURANCA --> COMUNICACAO

    style ABERTURA fill:#059669,color:#fff
    style SITUACAO fill:#0891B2,color:#fff
    style OBJETIVOS fill:#DC2626,color:#fff
    style TATICAS fill:#D97706,color:#fff
    style SEGURANCA fill:#BE185D,color:#fff
    style COMUNICACAO fill:#7C3AED,color:#fff`,
  description: 'Pauta estruturada da reuniao tatica'
};

// Diagrama: Componentes do PAI
const diagramComponentesPAI: Diagram = {
  id: 'componentes-pai',
  title: 'Componentes do PAI',
  type: 'flowchart',
  code: `flowchart TB
    subgraph PAI["PLANO DE ACAO DO INCIDENTE"]
        direction TB
        SCI202["SCI 202<br/>Objetivos"]
        SCI203["SCI 203<br/>Organizacao"]
        SCI204["SCI 204<br/>Atribuicoes"]
        SCI205["SCI 205<br/>Comunicacoes"]
        SCI206["SCI 206<br/>Plano Medico"]
        SCI207["SCI 207<br/>Organograma"]
        SCI208["SCI 208<br/>Seguranca"]
    end

    CI[CI Aprova] --> PAI
    PAI --> DIST[Distribuicao]

    DIST --> CHEFES[Chefes de Secao]
    DIST --> SUPER[Supervisores]
    DIST --> SSC[SSC/SSD]

    style PAI fill:#DC2626,color:#fff
    style CI fill:#059669,color:#fff
    style DIST fill:#1E40AF,color:#fff`,
  description: 'Formularios que compoem o PAI'
};

// Diagrama: Ciclo de Periodos Operacionais
const diagramCicloPeriodos: Diagram = {
  id: 'ciclo-periodos',
  title: 'Ciclo de Periodos Operacionais',
  type: 'flowchart',
  code: `flowchart LR
    subgraph DIA["PERIODO DIURNO 06:00-18:00"]
        D1["06:00 Inicio"]
        D2["07:00 Briefing"]
        D3["Operacoes"]
        D4["17:00 Transicao"]
    end

    subgraph NOITE["PERIODO NOTURNO 18:00-06:00"]
        N1["18:00 Inicio"]
        N2["19:00 Briefing"]
        N3["Operacoes"]
        N4["05:00 Transicao"]
    end

    D1 --> D2 --> D3 --> D4
    D4 --> N1
    N1 --> N2 --> N3 --> N4
    N4 --> D1

    style DIA fill:#FEF3C7,stroke:#D97706,color:#92400E
    style NOITE fill:#1E3A5F,stroke:#1E40AF,color:#FFFFFF`,
  description: 'Ciclo tipico de periodos operacionais diurno e noturno'
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
    LOCAL -->|Nao| SSD[Solicitar via SSD]

    SSD --> REGIONAL{Recurso Regional?}
    REGIONAL -->|Sim| DESPACHA[SSD Despacha]
    REGIONAL -->|Nao| SSC[Escalar para SSC]

    SSC --> ESTADUAL{Recurso Estadual?}
    ESTADUAL -->|Sim| SSCDESP[SSC Despacha]
    ESTADUAL -->|Nao| FEDERAL[Acionar Federais]

    ALOCA --> CHEGADA[Recurso Chega]
    DESPACHA --> CHEGADA
    SSCDESP --> CHEGADA
    FEDERAL --> CHEGADA

    CHEGADA --> CHECKIN[Check-In SCI 211]

    style NEED fill:#DC2626,color:#fff
    style SSC fill:#059669,color:#fff
    style CHECKIN fill:#1E40AF,color:#fff`,
  description: 'Processo de solicitacao e escalada de recursos'
};

// Diagrama: Estabelecimento do Comando
const diagramEstabelecimento: Diagram = {
  id: 'estabelecimento-comando',
  title: 'Estabelecimento do Comando',
  type: 'flowchart',
  code: `flowchart TB
    subgraph FASE1["1. DESIGNACAO"]
        D1["SSC/SSD identifica necessidade"]
        D2["Oficial qualificado selecionado"]
        D3["Comunicacao formal da designacao"]
    end

    subgraph FASE2["2. ASSUNCAO"]
        A1["CI chega ao local/assume remoto"]
        A2["Recebe briefing da situacao"]
        A3["Confirma assuncao via radio"]
    end

    subgraph FASE3["3. ESTRUTURACAO"]
        E1["Estabelece Posto de Comando"]
        E2["Ativa OSeg - Seguranca"]
        E3["Designa CSOp se necessario"]
        E4["Define canais de comunicacao"]
    end

    subgraph FASE4["4. DOCUMENTACAO"]
        DOC1["Prepara SCI 201 - Briefing"]
        DOC2["Envia copia para SSC/SSD"]
        DOC3["Registra hora de assuncao"]
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
  title: 'Ativacao do SCI',
  slug: 'ativacao-sci',
  part: 4,
  content: `## Ativacao do SCI

A ativacao do SCI marca a transicao de uma resposta convencional para uma operacao gerenciada formalmente.

### Quando Ativar o SCI

O SCI deve ser ativado quando o incidente apresentar **pelo menos uma** das seguintes caracteristicas:

| Criterio | Descricao |
|----------|-----------|
| **Nivel de Complexidade** | Operacao classificada como Nivel 2, 3 ou 4 |
| **Duracao** | Operacao estimada superior a 12 horas |
| **Recursos** | 4 ou mais IRTs empenhados simultaneamente |
| **Multi-institucional** | Envolvimento de orgaos externos (ICMBio, Prevfogo) |
| **Visibilidade** | Alta repercussao ou area critica (UC prioritaria) |

### Processo de Ativacao

1. **Decisao de Ativar**
   - SSC/SSD identifica necessidade
   - BEA assessora quando aplicavel
   - DOp autoriza para Niveis 3 e 4

2. **Designacao do CI**
   - Oficial qualificado e designado formalmente
   - Comunicacao a todos os recursos
   - Registro formal da designacao

3. **Assuncao do Comando**
   - CI chega ao local ou assume remotamente
   - Recebe briefing completo
   - Assume responsabilidade formal

### Quem Pode Ser CI

| Nivel | CI Recomendado |
|-------|----------------|
| Nivel 1 | Primeiro BM no local (praça ou oficial) |
| Nivel 2 | Oficial designado pela SSD/SSC |
| Nivel 3 | Oficial superior com experiencia SCI |
| Nivel 4 | Oficial superior + possivel Comando Unificado |

### Primeiro Ato do CI

Ao assumir, o CI deve:

1. Confirmar assuncao a SSC/SSD
2. Obter briefing da situacao atual
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

O estabelecimento do comando e o momento em que o CI assume formalmente e organiza a estrutura inicial da operacao.

### Local do Posto de Comando (PC)

O PC deve ser posicionado em local que permita:

- **Seguranca:** Fora da zona de risco
- **Comunicacao:** Sinal de radio/celular
- **Visibilidade:** Visao geral da operacao (se possivel)
- **Acesso:** Chegada e saida de recursos
- **Identificacao:** Facilmente localizavel

### Estrutura Inicial Minima

**Para incidente simples:**
\`\`\`
CI (acumula todas funcoes)
\`\`\`

**Para incidente em crescimento:**
\`\`\`
CI
├── OSeg (Oficial de Seguranca)
└── Responsavel pela Operacao de Combate
\`\`\`

### Briefing Inicial (SCI 201)

O CI deve preparar ou receber um briefing contendo:

| Item | Descricao |
|------|-----------|
| **Situacao** | O que esta acontecendo |
| **Objetivos** | O que queremos alcançar |
| **Organizacao** | Quem faz o que |
| **Recursos** | O que temos disponivel |
| **Comunicacoes** | Como nos comunicamos |
| **Seguranca** | Riscos e mitigacoes |

### Comunicacao da Assuncao

O CI deve comunicar formalmente:

1. **Para SSC/SSD:** "Assumo comando do incidente [nome/numero]"
2. **Para recursos no local:** "Sou o CI, reportem-se a mim"
3. **Registrar:** Data, hora, local da assuncao

### Primeiras Decisoes

1. **Prioridades:** Vida > Propriedade > Ambiente
2. **Estrategia inicial:** Ofensiva ou defensiva
3. **Recursos necessarios:** Solicitar reforcos se preciso
4. **Seguranca:** Avaliar riscos para combatentes`,
  diagrams: [diagramEstabelecimento],
};

export const reuniaoTatica: Section = {
  id: 'reuniao-tatica',
  title: 'Primeira Reuniao Tatica',
  slug: 'reuniao-tatica',
  part: 4,
  content: `## Primeira Reuniao Tatica

A reuniao tatica e o momento onde o CI alinha com os supervisores as acoes do periodo operacional.

### Quando Realizar

- Ao inicio de cada periodo operacional (12h)
- Quando ha mudanca significativa na situacao
- Apos chegada de recursos importantes
- Antes de operacoes de alto risco

### Participantes

| Funcao | Participacao |
|--------|--------------|
| **CI** | Conduz a reuniao |
| **CSOp** | Apresenta situacao tatica |
| **CSPlan** | Apresenta previsoes e alternativas |
| **CSLog** | Apresenta status de recursos |
| **OSeg** | Apresenta questoes de seguranca |
| **Supervisores de Divisao** | Quando aplicavel |

### Pauta da Reuniao

1. **Situacao Atual**
   - Perimetro do incendio
   - Areas controladas vs ativas
   - Comportamento do fogo
   - Condicoes meteorologicas

2. **Objetivos do Periodo**
   - O que queremos alcançar
   - Prioridades (1, 2, 3)
   - Criterios de sucesso

3. **Estrategia e Taticas**
   - Como vamos atingir objetivos
   - Divisao de areas
   - Tecnicas de combate

4. **Recursos**
   - Disponiveis vs necessarios
   - Solicitacoes pendentes
   - Rodizio de equipes

5. **Seguranca**
   - Riscos identificados
   - Medidas de mitigacao
   - Rotas de fuga
   - Zonas de seguranca

6. **Comunicacoes**
   - Frequencias de radio
   - Pontos de contato
   - Horarios de reporte

### Duracao

- Reuniao inicial: 30-45 minutos
- Reunioes de atualizacao: 15-20 minutos

### Documentacao

Decisoes da reuniao sao registradas e comunicadas via:
- SCI 202 (Objetivos)
- SCI 204 (Atribuicoes)
- Radio/Presencial para equipes`,
  diagrams: [diagramReuniaoTaticaIV],
};

export const primeiroPai: Section = {
  id: 'primeiro-pai',
  title: 'Primeiro Plano de Acao do Incidente',
  slug: 'primeiro-pai',
  part: 4,
  content: `## Primeiro Plano de Acao do Incidente (PAI)

O PAI e o documento central que guia todas as operacoes durante um periodo operacional.

### Quando o PAI e Obrigatorio

| Situacao | PAI |
|----------|-----|
| Periodo operacional unico | Verbal/simplificado |
| Multiplos periodos | Escrito obrigatorio |
| Multi-institucional | Escrito obrigatorio |
| Nivel 3 ou 4 | Escrito completo |

### Componentes do PAI

O PAI completo inclui os seguintes formularios SCI:

| Formulario | Conteudo |
|------------|----------|
| **SCI 202** | Objetivos do incidente |
| **SCI 203** | Organizacao (quem faz o que) |
| **SCI 204** | Atribuicoes (detalhamento por divisao) |
| **SCI 205** | Plano de comunicacoes |
| **SCI 206** | Plano medico |
| **SCI 207** | Organograma |
| **SCI 208** | Mensagem de seguranca |

### Processo de Criacao

1. **CI define objetivos** (com input do staff)
2. **CSPlan compila** informacoes
3. **CSOp detalha** taticas
4. **CSLog confirma** recursos
5. **OSeg adiciona** mensagens de seguranca
6. **CI aprova** PAI final

### Distribuicao

O PAI deve ser distribuido para:
- Todos os chefes de secao
- Supervisores de divisao/grupo
- Lideres de equipe
- SSC/SSD (copia)

### Briefing do PAI

Antes de cada periodo operacional:
1. CI apresenta PAI em reuniao
2. Duvidas sao esclarecidas
3. Cada supervisor repassa para sua equipe
4. Execucao inicia no horario definido

### PAI Simplificado (Nivel 1-2)

Para operacoes menores, PAI pode ser verbal com registro minimo:
- Objetivos comunicados via radio
- Atribuicoes definidas no local
- Registro em caderneta do CI`,
  diagrams: [diagramComponentesPAI],
};

export const operacoesSustentadas: Section = {
  id: 'operacoes-sustentadas',
  title: 'Operacoes Sustentadas',
  slug: 'operacoes-sustentadas',
  part: 4,
  content: `## Operacoes Sustentadas

Operacoes que se estendem por multiplos periodos operacionais (dias ou semanas) requerem planejamento especifico.

### Caracteristicas

- Duracao superior a 24-48 horas
- Multiplos turnos de trabalho
- Necessidade de logistica permanente
- Planejamento para periodos futuros

### Ciclo de Periodos Operacionais

| Horario | Atividade |
|---------|-----------|
| 06:00 | Inicio periodo diurno |
| 07:00 | Briefing operacional |
| 12:00 | Atualizacao de situacao |
| 17:00 | Preparacao para transicao |
| 18:00 | Inicio periodo noturno |
| 19:00 | Briefing noturno |
| 05:00 | Preparacao para transicao |

### Estrutura para Operacoes Longas

**Base de Operacoes:**
- Acampamento para descanso
- Alimentacao para todas equipes
- Area de manutencao de equipamentos
- Posto medico

**Logistica Continua:**
- Reabastecimento de combustivel
- Agua potavel
- Alimentacao (3 refeicoes + lanches)
- EPIs reserva

### Rodizio de Pessoal

| Funcao | Maximo Continuo | Descanso Minimo |
|--------|-----------------|-----------------|
| Combate direto | 12 horas | 8 horas |
| Supervisao | 12 horas | 8 horas |
| CI | 12-16 horas | 8 horas |
| Apoio logistico | 12 horas | 8 horas |

### Documentacao Diaria

- Relatorio de situacao (diario)
- Atualizacao de mapa de operacoes
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

Processo de solicitar recursos adicionais quando os disponiveis sao insuficientes.

### Quando Escalar

- Incendio crescendo mais rapido que capacidade de controle
- Recursos atuais insuficientes
- Previamente planejado (antecipacao)
- Mudanca nas condicoes (vento, temperatura)

### Cadeia de Solicitacao

\`\`\`
CI --> CSOp --> CSLog --> SSC/SSD --> Recursos Externos
\`\`\`

### Tipos de Recursos Adicionais

| Recurso | Solicitar Via |
|---------|---------------|
| IRTs regionais | SSD |
| EIAOPs | SSC/BEA |
| GAvBM | SSC/BEA |
| Maquinario | SSC/SINFRA |
| Recursos federais | SSC/ICMBio |

### Informacoes na Solicitacao

1. **O que precisa:** Tipo e quantidade
2. **Para que:** Objetivo especifico
3. **Onde:** Local de emprego
4. **Quando:** Urgencia (imediato, proximo periodo)
5. **Quem recebe:** Ponto de contato no local

### Prioridades de Alocacao

Quando recursos sao escassos, priorizar:

1. **Vida humana em risco**
2. **Protecao de estruturas habitadas**
3. **UCs prioritarias**
4. **Areas de maior potencial de dano**
5. **Propriedades privadas**

### Documentacao

Toda solicitacao deve ser registrada:
- Formulario SCI 213 (Pedido de Recursos)
- Numero do pedido
- Status: Pendente / Aprovado / Negado / Atendido`,
  diagrams: [diagramEscaladaRecursos],
};

export const transicoesComando: Section = {
  id: 'transicoes-comando',
  title: 'Transicoes de Comando',
  slug: 'transicoes-comando',
  part: 4,
  content: `## Transicoes de Comando

A transferencia de comando entre CIs deve ser formal para garantir continuidade.

### Motivos para Transferencia

| Motivo | Exemplo |
|--------|---------|
| **Escala** | Incidente cresceu, precisa CI mais experiente |
| **Turno** | CI atual completou periodo maximo |
| **Competencia** | Chegou especialista mais qualificado |
| **Multi-institucional** | Estabelecimento de Comando Unificado |
| **Encerramento** | Reducao permite CI menos graduado |

### Processo de Transferencia

1. **Preparacao**
   - CI atual prepara SCI 201 atualizado
   - Compila todos documentos relevantes
   - Identifica questoes pendentes

2. **Briefing**
   - CI atual apresenta situacao ao novo CI
   - Passagem de todos documentos
   - Esclarecimento de duvidas

3. **Comunicacao**
   - Anuncio formal a todas as partes
   - "Comando transferido de [nome] para [nome] as [hora]"
   - Registro em log

4. **Assuncao**
   - Novo CI confirma assuncao
   - Assume autoridade imediatamente
   - CI anterior fica disponivel para consulta

### Briefing de Transferencia (SCI 201)

O briefing deve incluir:

| Topico | Conteudo |
|--------|----------|
| Situacao | Estado atual do incidente |
| Objetivos | O que estamos tentando alcançar |
| Organizacao | Estrutura atual do SCI |
| Recursos | O que temos, o que falta |
| Problemas | Questoes pendentes |
| Seguranca | Riscos ativos |

### Transferencia de Turno vs Transferencia de Comando

**Transferencia de Turno:**
- CI muda, mas nivel e estrategia se mantem
- Processo mais simples
- Foco em continuidade

**Transferencia de Comando:**
- Mudanca de autoridade (escalada/reducao)
- Processo mais formal
- Pode envolver mudanca de estrategia`,
  diagrams: [diagramFasesFluxo, diagramDeteccao, diagramClassificacao],
};

// Exportar todas as secoes da Parte IV
export const parteIVSections: Section[] = [
  ativacaoSci,
  estabelecimento,
  reuniaoTatica,
  primeiroPai,
  operacoesSustentadas,
  escaladaRecursos,
  transicoesComando,
];

// Mapa de slug para secao
export const parteIVSectionMap: Record<string, Section> = {
  'ativacao-sci': ativacaoSci,
  'estabelecimento': estabelecimento,
  'reuniao-tatica': reuniaoTatica,
  'primeiro-pai': primeiroPai,
  'operacoes-sustentadas': operacoesSustentadas,
  'escalada-recursos': escaladaRecursos,
  'transicoes-comando': transicoesComando,
};
