import type { Section, Diagram } from '@/data/types';

// ============================================================
// PARTE VII - FORMULARIOS SCI: REFERENCIA COMPLETA CBMMT
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS MERMAID
// ------------------------------------------------------------

const diagramFormulariosPorCategoria: Diagram = {
  id: 'formularios-categorias',
  title: 'Formularios SCI por Categoria',
  type: 'flowchart',
  description: 'Organizacao dos 24 formularios SCI',
  code: `flowchart TB
    subgraph FORMS["24 FORMULARIOS SCI"]
        direction TB
    end

    subgraph PAI_OBR["PAI - OBRIGATORIOS"]
        direction LR
        PO1["SCI 200CG<br/>Capa"]
        PO2["SCI 202<br/>Objetivos"]
        PO3["SCI 204<br/>Atribuicoes"]
        PO4["SCI 205<br/>Radio"]
        PO5["SCI 206<br/>Plano Medico"]
        PO6["SCI 208<br/>Seguranca"]
    end

    subgraph PAI_OPC["PAI - OPCIONAIS"]
        direction LR
        PP1["SCI 203<br/>Organizacao"]
        PP2["SCI 205A<br/>Lista Contatos"]
        PP3["SCI 207<br/>Organograma"]
    end

    subgraph PLAN["PLANEJAMENTO"]
        direction LR
        PL1["SCI 201<br/>Briefing"]
        PL2["SCI 215<br/>Matriz Oper"]
        PL3["SCI 215A<br/>Riscos"]
    end

    subgraph OPER["OPERACIONAIS"]
        direction LR
        OP1["SCI 209<br/>Status"]
        OP2["SCI 211<br/>Check-In"]
        OP3["SCI 213RR<br/>Requisicao"]
        OP4["SCI 220<br/>Aereo"]
    end

    subgraph ADMIN["ADMINISTRATIVOS"]
        direction LR
        AD1["SCI 214<br/>Registro"]
        AD2["SCI 218<br/>Inventario"]
        AD3["SCI 221<br/>Desmob"]
    end

    subgraph CBMMT["CBMMT ESPECIFICOS"]
        direction LR
        CB1["SCI 233CG<br/>Acoes"]
        CB2["SCI 234CG<br/>Matriz"]
    end

    FORMS --> PAI_OBR
    FORMS --> PAI_OPC
    FORMS --> PLAN
    FORMS --> OPER
    FORMS --> ADMIN
    FORMS --> CBMMT

    classDef obrStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef opcStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef planStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef operStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef adminStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef cbmmtStyle fill:#0891B2,stroke:#0E7490,color:#FFFFFF

    class PO1,PO2,PO3,PO4,PO5,PO6 obrStyle
    class PP1,PP2,PP3 opcStyle
    class PL1,PL2,PL3 planStyle
    class OP1,OP2,OP3,OP4 operStyle
    class AD1,AD2,AD3 adminStyle
    class CB1,CB2 cbmmtStyle`
};

const diagramFluxoFormularios: Diagram = {
  id: 'fluxo-formularios',
  title: 'Fluxo de Uso dos Formularios',
  type: 'flowchart',
  description: 'Quando cada formulario e utilizado no ciclo operacional',
  code: `flowchart TB
    subgraph inicio["INICIO INCIDENTE"]
        F1["SCI 201<br/>Briefing"]
        F2["SCI 211<br/>Check-In"]
    end

    subgraph planejamento["PLANEJAMENTO"]
        F3["SCI 202<br/>Objetivos"]
        F4["SCI 215<br/>Matriz Oper"]
        F5["SCI 215A<br/>Riscos"]
    end

    subgraph pai["PAI COMPLETO"]
        F6["SCI 200CG Capa"]
        F7["SCI 203 Organizacao"]
        F8["SCI 204 Atribuicoes"]
        F9["SCI 205 Radio"]
        F10["SCI 206 Medico"]
        F11["SCI 208 Seguranca"]
    end

    subgraph operacao["OPERACAO"]
        F12["SCI 209 Status"]
        F13["SCI 210 Mudanca"]
        F14["SCI 213RR Requisicao"]
        F15["SCI 214 Registro"]
    end

    subgraph desmob["DESMOBILIZACAO"]
        F16["SCI 221<br/>Check-Out"]
    end

    inicio --> planejamento
    planejamento --> pai
    pai --> operacao
    operacao --> desmob

    classDef inicioStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef planStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef paiStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef operStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef desmobStyle fill:#F3E8FF,stroke:#7C3AED,color:#5B21B6

    class F1,F2 inicioStyle
    class F3,F4,F5 planStyle
    class F6,F7,F8,F9,F10,F11 paiStyle
    class F12,F13,F14,F15 operStyle
    class F16 desmobStyle`
};

const diagramFluxoRequisicao: Diagram = {
  id: 'fluxo-requisicao',
  title: 'Fluxo de Requisicao de Recursos (SCI 213RR)',
  type: 'sequence',
  description: 'Processo de solicitacao de recursos via SSC',
  code: `sequenceDiagram
    participant CSOp as CSOp
    participant CI as Comandante
    participant SPlan as SPlan/URec
    participant SSC as SSC

    Note over CSOp,SSC: FLUXO SCI 213RR

    CSOp->>CSOp: 1. Identifica necessidade
    CSOp->>CSOp: 2. Preenche SCI 213RR
    CSOp->>CI: 3. Solicita aprovacao
    CI->>CSOp: 4. Aprova requisicao

    rect rgb(220, 38, 38)
        CSOp->>SSC: 5. Envia requisicao
        SSC->>SSC: 6. Localiza recurso
        SSC->>CSOp: 7. Confirma despacho + ETA
    end

    SPlan->>SPlan: 8. Acompanha chegada
    SPlan->>CSOp: 9. Confirma check-in

    Note over CSOp,SSC: Recurso disponivel para atribuicao`
};

const diagramComunicacaoSeguranca: Diagram = {
  id: 'comunicacao-seguranca',
  title: 'Sistema de Comunicacoes e Seguranca',
  type: 'flowchart',
  description: 'Estrutura de comunicacoes e elementos LCES',
  code: `flowchart TB
    subgraph comunicacao["COMUNICACOES (SCI 205/205A)"]
        direction TB
        C1["Canal 1<br/>COMANDO<br/>CI + Chefes"]
        C2["Canal 2<br/>TATICO<br/>Divisoes"]
        C3["Canal 3<br/>GRUPOS<br/>Aereo/Maq"]
        C4["Canal 4<br/>LOGISTICA<br/>Suprimentos"]
        C5["Canal 5<br/>EMERGENCIA<br/>Todos"]
    end

    subgraph medico["PLANO MEDICO (SCI 206)"]
        direction TB
        M1["Posto PC<br/>Medico"]
        M2["Socorristas<br/>Divisoes"]
        M3["Evacuacao<br/>Terrestre/Aerea"]
        M4["Hospital<br/>Referencia"]
    end

    subgraph lces["SEGURANCA - LCES (SCI 208)"]
        direction TB
        L["L - Lookouts<br/>Observadores"]
        CE["C - Communications<br/>Check-in horario"]
        E["E - Escape Routes<br/>Rotas de Fuga"]
        S["S - Safety Zones<br/>Zonas Seguras"]
    end

    comunicacao --> lces
    medico --> lces

    classDef comStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef medStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef lcesStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class C1,C2,C3,C4,C5 comStyle
    class M1,M2,M3,M4 medStyle
    class L,CE,E,S lcesStyle`
};

const diagramFormulariosAdmin: Diagram = {
  id: 'formularios-administrativos',
  title: 'Formularios Administrativos e Controle',
  type: 'flowchart',
  description: 'Fluxo dos formularios de controle e registro',
  code: `flowchart TB
    subgraph registro["REGISTRO E CONTROLE"]
        direction TB
        R1["SCI 214<br/>Registro Atividades<br/>Diario de Bordo"]
        R2["SCI 218<br/>Inventario<br/>Viaturas/Equip"]
        R3["SCI 219<br/>Cartao T<br/>Status Visual"]
    end

    subgraph operacional["CICLO OPERACIONAL"]
        direction LR
        O1["SCI 211<br/>CHECK-IN<br/>Entrada"]
        O2["SCI 210<br/>MUDANCA<br/>Status"]
        O3["SCI 221<br/>CHECK-OUT<br/>Saida"]
    end

    subgraph status["STATUS DE RECURSOS"]
        direction LR
        S1["DISPONIVEL"]
        S2["DESPACHADO"]
        S3["DESIGNADO"]
        S4["FORA SERVICO"]
        S5["DESMOBILIZADO"]
    end

    O1 --> S1
    S1 --> S2 --> S3
    S3 --> S4
    S3 --> O3
    O3 --> S5
    O2 -.-> S1
    O2 -.-> S2
    O2 -.-> S3
    O2 -.-> S4

    registro --> operacional

    classDef regStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef opStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef statusStyle fill:#059669,stroke:#047857,color:#FFFFFF

    class R1,R2,R3 regStyle
    class O1,O2,O3 opStyle
    class S1,S2,S3,S4,S5 statusStyle`
};

const diagramFormulariosCbmmt: Diagram = {
  id: 'formularios-especificos-cbmmt',
  title: 'Formularios Especificos CBMMT',
  type: 'flowchart',
  description: 'SCI 233CG e SCI 234CG - Adaptacoes CBMMT',
  code: `flowchart TB
    subgraph sci233["SCI 233CG - CONTROLE DE ACOES"]
        direction TB
        A1["Acao 1<br/>Status: ABERTO"]
        A2["Acao 2<br/>Status: EXEC"]
        A3["Acao 3<br/>Status: CONC"]
        A4["Acao 4<br/>Status: CANCEL"]
    end

    subgraph sci234["SCI 234CG - MATRIZ ANALISE"]
        direction TB
        OBJ["OBJETIVO<br/>O que alcancar"]
        EST["ESTRATEGIA<br/>Abordagem geral"]
        TAT["TATICAS<br/>Acoes especificas"]
    end

    subgraph fluxo["FLUXO DE USO"]
        direction LR
        F1["CI define<br/>Objetivos"]
        F2["CSOp desenvolve<br/>SCI 234CG"]
        F3["CSOp cria<br/>SCI 215"]
        F4["CSPlan rastreia<br/>SCI 233CG"]
    end

    OBJ --> EST --> TAT
    F1 --> F2 --> F3 --> F4
    sci234 --> fluxo
    sci233 --> fluxo

    classDef acoesStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef matrizStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef fluxoStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class A1,A2,A3,A4 acoesStyle
    class OBJ,EST,TAT matrizStyle
    class F1,F2,F3,F4 fluxoStyle`
};

const diagramEstruturaPai: Diagram = {
  id: 'estrutura-pai-formularios',
  title: 'Estrutura Completa do PAI',
  type: 'flowchart',
  description: 'Formularios que compoem o Plano de Acao do Incidente',
  code: `flowchart TB
    subgraph pai["PLANO DE ACAO DO INCIDENTE"]
        direction TB

        subgraph capa["IDENTIFICACAO"]
            C1["SCI 200CG<br/>Capa do PAI"]
        end

        subgraph objetivos["OBJETIVOS"]
            O1["SCI 202<br/>Objetivos do Incidente"]
        end

        subgraph organizacao["ORGANIZACAO"]
            OR1["SCI 203<br/>Lista Organizacao"]
            OR2["SCI 207<br/>Organograma"]
        end

        subgraph atribuicoes["ATRIBUICOES"]
            A1["SCI 204<br/>Atribuicoes por Divisao"]
        end

        subgraph comunicacao["COMUNICACAO"]
            CO1["SCI 205<br/>Frequencias Radio"]
            CO2["SCI 205A<br/>Lista Contatos"]
        end

        subgraph seguranca["SEGURANCA"]
            S1["SCI 206<br/>Plano Medico"]
            S2["SCI 208<br/>Plano Seguranca"]
        end

        subgraph anexos["ANEXOS"]
            AN1["Mapas"]
            AN2["Outros"]
        end
    end

    capa --> objetivos
    objetivos --> organizacao
    organizacao --> atribuicoes
    atribuicoes --> comunicacao
    comunicacao --> seguranca
    seguranca --> anexos

    classDef capaStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef objStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef orgStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef atribStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef comStyle fill:#F3E8FF,stroke:#7C3AED,color:#5B21B6
    classDef segStyle fill:#FEE2E2,stroke:#DC2626,color:#991B1B
    classDef anexStyle fill:#F3F4F6,stroke:#6B7280,color:#374151

    class C1 capaStyle
    class O1 objStyle
    class OR1,OR2 orgStyle
    class A1 atribStyle
    class CO1,CO2 comStyle
    class S1,S2 segStyle
    class AN1,AN2 anexStyle`
};

// ------------------------------------------------------------
// SECOES DE CONTEUDO
// ------------------------------------------------------------

const visaoGeralFormularios: Section = {
  id: 'visao-geral-formularios',
  slug: 'visao-geral-formularios',
  title: '36. Visao Geral dos Formularios SCI',
  part: 7,
  order: 1,
  content: `## Lista Completa de Formularios

Os formularios SCI sao ferramentas padronizadas para documentacao e comunicacao no Sistema de Comando de Incidentes. Esta parte apresenta **24 formularios** adaptados a realidade do CBMMT.

### Formularios do PAI (Obrigatorios)

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 200CG | Capa do PAI | Identificacao do plano |
| SCI 202 | Objetivos do Incidente | Objetivos SMART do CI |
| SCI 204 | Atribuicoes | Designacoes por Divisao/Grupo |
| SCI 205 | Comunicacoes Radio | Frequencias e canais |
| SCI 206 | Plano Medico | Atendimento e evacuacao |
| SCI 208 | Plano de Seguranca | Riscos e mitigacoes |

### Formularios do PAI (Opcionais)

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 203 | Organizacao | Lista de posicoes e ocupantes |
| SCI 205A | Lista Comunicacoes | Telefones, WhatsApp, satelite |
| SCI 207 | Organograma | Grafico visual da EOR |

### Formularios de Planejamento

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 201 | Briefing do Incidente | Transferencia de comando |
| SCI 215 | Matriz Operacional | Taticas detalhadas |
| SCI 215A | Analise de Riscos | Identificacao e mitigacao |

### Formularios Operacionais

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 209 | Resumo Status | Relatorio executivo |
| SCI 210 | Mudanca Status | Alteracao status recurso |
| SCI 211 | Check-In | Entrada de recursos |
| SCI 213 | Mensagem Geral | Comunicacao formal |
| SCI 213RR | Requisicao Recursos | Solicitacao de recursos |
| SCI 220 | Operacoes Aereas | Coordenacao GAvBM |

### Formularios Administrativos

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 214 | Registro Atividades | Diario de bordo |
| SCI 218 | Inventario Viaturas | Controle de veiculos |
| SCI 219 | Cartao "T" | Status visual de recursos |
| SCI 221 | Desmobilizacao | Check-out de recursos |

### Formularios CBMMT Especificos

| Codigo | Nome | Descricao |
|--------|------|-----------|
| SCI 233CG | Controle Acoes | Pendencias e tarefas |
| SCI 234CG | Matriz Analise | Objetivos → Taticas |

---

## Adaptacao ao CBMMT

### Contexto Mato Grosso

- **Distancias grandes:** Operacoes remotas
- **Clima extremo:** Calor 35-40°C, baixa umidade
- **Vegetacao diversa:** Cerrado, Pantanal, Amazonia
- **Infraestrutura limitada:** Areas rurais

### Recursos CBMMT

- Nomenclatura oficial (EIAOPs, BDBMs, BMMs, GCIFs, EMec, GAvBM)
- Estrutura SSD/SSC integrada
- Postos e graduacoes militares
- Sistema de comunicacao (VHF/UHF)

### Instituicoes Parceiras

- ICMBio (UCs federais)
- SEMA-MT (UCs estaduais)
- Prevfogo/IBAMA
- SINFRA (maquinas)
- Defesa Civil MT`,
  diagrams: [diagramFormulariosPorCategoria, diagramFluxoFormularios]
};

const formulariosPai: Section = {
  id: 'formularios-pai',
  slug: 'formularios-pai',
  title: '37-40. Formularios do PAI',
  part: 7,
  order: 2,
  content: `## SCI 200CG - Capa do PAI

### Finalidade
Identificacao do Plano de Acao do Incidente.

### Conteudo
- Nome do incidente
- Numero do incidente
- Periodo operacional
- Data/hora de preparacao
- CI responsavel
- Logotipo CBMMT

---

## SCI 202 - Objetivos do Incidente

### Finalidade
Documentar objetivos SMART estabelecidos pelo CI.

### Estrutura

**CABECALHO:**
- Nome e numero do incidente
- Periodo operacional
- Data/hora preparacao

**SECAO 1 - OBJETIVOS:**
Lista numerada (2-5 objetivos)

**SECAO 2 - CONSIDERACOES SEGURANCA:**
Mensagem do OSeg

**SECAO 3 - INSTRUCOES ESPECIAIS:**
Restricoes, coordenacoes

**SECAO 4 - APROVACAO:**
Assinatura do CI

### Exemplo

\`\`\`
SCI 202 - OBJETIVOS DO INCIDENTE

Incidente: IF Fazenda Boa Esperanca
Periodo: PO3 - 06:00 as 18:00 de 15/ago

OBJETIVOS:
1. SEGURANCA: Manter seguranca de todos combatentes
2. PROTECAO: Proteger 5 residencias setor sul
3. CONTENCAO: Conter flanco norte ate MT-100
4. RESCALDO: Completar 70% setor leste

CONSIDERACOES SEGURANCA:
- Vento SE 20-30km/h, ALTO RISCO 12:00-17:00
- LCES obrigatorio todas divisoes

APROVADO: Maj Silva (CI) - 14/ago 17:45
\`\`\`

---

## SCI 203 - Lista de Organizacao

### Finalidade
Registrar todas posicoes ativadas e seus ocupantes.

### Quando Usar
- PAI formal (Nivel 3-4)
- Quando estrutura complexa precisa ser documentada

### Exemplo

\`\`\`
SCI 203 - ORGANIZACAO DO INCIDENTE

COMANDO:
- CI: Maj Roberto Silva (DOp)

STAFF DO COMANDO:
- OSeg: Cap Santos
- OIP: Ten Oliveira
- OLig: Ten Costa

STAFF GERAL:
- CSOp: Cap Silva
- CSPlan: Cap Oliveira
- CSLog: Ten Santos

DIVISOES:
- Div Norte: Sgt Silva (EIAOP 03, BDBM Chapada)
- Div Sul: Sgt Mendes (EIAOP 05, BMM Nobres)
- Div Leste: Cb Lima (GCIF 1, GCIF 2, BDBM Pocone)

GRUPOS:
- Grupo Aereo: Ten Souza (Heli-01 GAvBM)
\`\`\`

---

## SCI 204 - Atribuicoes

### Finalidade
Detalhar atribuicao especifica de cada Divisao/Grupo.

### Um Formulario por Divisao
Cada Divisao/Grupo recebe seu proprio SCI 204.

### Conteudo

| Campo | Descricao |
|-------|-----------|
| Divisao/Grupo | Identificacao |
| Supervisor | Responsavel |
| Recursos | IRTs designadas |
| Area Operacional | Limites geograficos |
| Atribuicao | Objetivo especifico |
| Taticas | Como executar |
| Seguranca | LCES especifico |
| Comunicacoes | Frequencias |
| Coordenacao | Com outras divisoes |

### Exemplo

\`\`\`
SCI 204 - ATRIBUICAO DIVISAO NORTE

DIVISAO: Norte
SUPERVISOR: Sgt Silva
PERIODO: PO3 (06:00-18:00)

RECURSOS:
- EIAOP 03 (10 BMs)
- BDBM Chapada (8 BMs)
- EMec: 2 motoniveladoras

AREA: Flancos norte e nordeste (2km linha)

ATRIBUICAO: Conter 100% flanco norte ate 16:00
usando estrada MT-100 como ancora

TATICAS:
- Motoniveladoras abrem aceiro 6m
- Ataque direto nas bordas
- Rescaldo imediato 10m

SEGURANCA:
- Zona segura: area desmatada na estrada
- Rota fuga: retornar a estrada
- Lookout: Cb Mendes

FREQUENCIA: Canal 2 (tatico)
\`\`\``,
  diagrams: [diagramEstruturaPai]
};

const formulariosComunicacao: Section = {
  id: 'formularios-comunicacao',
  slug: 'formularios-comunicacao',
  title: '41-44. Comunicacoes e Seguranca',
  part: 7,
  order: 3,
  content: `## SCI 205 - Comunicacoes de Radio

### Finalidade
Documentar frequencias e canais de radio para o incidente.

### Estrutura por Funcao

| Canal | Frequencia | Funcao | Usuarios |
|-------|------------|--------|----------|
| 1 | 148.500 MHz | Comando | CI, Chefes Secao, OSeg |
| 2 | 148.525 MHz | Tatico Divisoes | CSOp, Supervisores |
| 3 | 148.550 MHz | Tatico Grupos | Grupo Aereo, Maquinas |
| 4 | 148.575 MHz | Logistica | CSLog, Suprimentos |
| 5 | 148.600 MHz | Emergencia | Todas unidades |

### Protocolo
- Disciplina de radio
- Chamadas curtas e objetivas
- Identificacao clara

---

## SCI 205A - Lista de Comunicacoes

### Finalidade
Complementar SCI 205 com outros meios de comunicacao.

### Conteudo

**TELEFONES CELULARES:**
| Funcao | Nome | Numero |
|--------|------|--------|
| CI | Maj Silva | (65) 9XXXX-YYYY |
| CSOp | Cap Silva | (65) 9XXXX-YYYY |
| CSLog | Ten Santos | (65) 9XXXX-YYYY |

**WHATSAPP:**
- Grupo Comando: "IF Boa Esperanca - Comando"
- Grupo Operacional: "IF Boa Esperanca - Ops"

**TELEFONE SATELITE:**
- PC: +870 XXX XXX XXX

**CONTATOS EXTERNOS:**
- SSC Cuiaba: (65) 3XXX-YYYY
- Hospital Sinop: (66) 3XXX-YYYY

---

## SCI 206 - Plano Medico

### Finalidade
Garantir atendimento medico adequado no incidente.

### Estrutura Completa

**1. INSTALACOES MEDICAS:**
- Posto Atendimento no PC
- Posto Avancado (se aplicavel)

**2. PESSOAL MEDICO:**
- Ten Martins (medico) - PC
- Sd Oliveira (socorrista) - Div Norte

**3. EQUIPAMENTOS:**
- Kit primeiros socorros por divisao
- Desfibrilador no PC
- Macas (2)

**4. PROCEDIMENTOS EMERGENCIA:**
- Comunicar OSeg via Canal 5
- Evacuacao terrestre: Viatura designada
- Evacuacao aerea: Heli-01 (se disponivel)

**5. HOSPITAIS DE REFERENCIA:**

| Hospital | Distancia | Tempo | Recursos |
|----------|-----------|-------|----------|
| Hospital Sinop | 45km | 40min | UTI, Queimados |
| UPA Sinop | 40km | 35min | Urgencia |
| Hospital CBA | 450km | 5h / 1h heli | Referencia |

**6. ROTA EVACUACAO:**
PC → MT-XXX → Sinop (ambulancia aguarda)

---

## SCI 208 - Plano de Seguranca

### Finalidade
Identificar riscos e estabelecer medidas de mitigacao.

### Riscos Tipicos MT

| Risco | Probabilidade | Severidade | Mitigacao |
|-------|---------------|------------|-----------|
| Vento forte | ALTA | ALTA | Lookouts, suspender se >50km/h |
| Desidratacao | ALTA | MEDIA | Hidratacao forcada, rodizio |
| Comunicacao limitada | MEDIA | ALTA | Celular backup, check-in periodico |
| Terreno acidentado | MEDIA | MEDIA | Briefing, buddy system |
| Fogo de copa | BAIXA | ALTA | Ataque indireto, evacuacao |

### LCES Obrigatorio

**L - Lookouts (Observadores):**
- 1 por divisao em posicao elevada
- Monitoramento continuo de vento e fogo

**C - Communications (Comunicacoes):**
- Check-in horario obrigatorio
- Canal 5 para emergencias

**E - Escape Routes (Rotas de Fuga):**
- Identificadas e comunicadas a todos
- Primaria e secundaria por divisao

**S - Safety Zones (Zonas Seguras):**
- Demarcadas em cada area operacional
- Tamanho adequado para todos recursos`,
  diagrams: [diagramComunicacaoSeguranca]
};

const formulariosOperacionais: Section = {
  id: 'formularios-operacionais',
  slug: 'formularios-operacionais',
  title: '47-51. Formularios Operacionais',
  part: 7,
  order: 4,
  content: `## SCI 209 - Resumo do Status do Incidente

### Finalidade
Relatorio executivo para niveis superiores (DOp, Comando-Geral).

### Quando Preparar
- Diariamente (final do dia)
- A pedido de autoridades
- Antes de eventos importantes

### Conteudo Principal

\`\`\`
SCI 209 - RESUMO STATUS

Incidente: IF Fazenda Boa Esperanca
Data/Hora: 15/ago/2025, 18:00

SITUACAO ATUAL:
- Area queimada: 850 hectares
- Perimetro: 12 km
- Contencao: 95%
- Status: Sob controle, rescaldo em andamento

RECURSOS: 40 BMs, 8 viaturas
OBJETIVOS PO3: 4 de 5 alcancados
PREVISAO: Extincao 16/ago 12:00

PREPARADO: Sgt Ferreira (USit)
APROVADO: Maj Silva (CI)
\`\`\`

---

## SCI 210 - Mudanca de Status de Recurso

### Status Possiveis

| Status | Descricao |
|--------|-----------|
| DISPONIVEL | Em base, pronto para acionamento |
| DESPACHADO | Em deslocamento para incidente |
| DESIGNADO | No incidente, com atribuicao |
| FORA DE SERVICO | Temporariamente indisponivel |
| DESMOBILIZADO | Liberado, retornando a base |

### Exemplo

\`\`\`
SCI 210 - MUDANCA STATUS

Recurso     | Anterior   | Novo       | Data/Hora    | Obs
------------|------------|------------|--------------|------------
EIAOP 03    | DESIGNADO  | FORA SERV. | 15/ago 14:00 | Descanso 8h
GAvBM       | DESIGNADO  | DESMOB.    | 15/ago 16:00 | Retorno CBA
BDBM Pocone | DESPACHADO | DESIGNADO  | 15/ago 09:00 | Check-in PC

REGISTRADO: Ten Costa (URec)
\`\`\`

---

## SCI 211 - Check-In de Recursos

### Importancia
- Controle de quem esta no incidente
- Base para contabilizacao de pessoal
- Informacoes para logistica
- Dados para desmobilizacao

### Informacoes Coletadas

**IDENTIFICACAO:**
- Nome/Designacao do recurso
- Lider e pessoal
- Unidade de origem

**CHEGADA:**
- Data/hora
- Meio de transporte
- Equipamentos trazidos

**NECESSIDADES:**
- Alimentacao, alojamento
- Combustivel, agua
- Comunicacoes

**QUALIFICACOES:**
- Certificacoes SCI
- Especializacoes

---

## SCI 213 - Mensagem Geral

### Quando Usar
- Mensagens que requerem registro formal
- Solicitacoes de recursos
- Mudancas importantes
- Quando radio/telefone insuficiente

### Formato

\`\`\`
SCI 213 - MENSAGEM GERAL

DE: Cap Silva (CSOp)
PARA: Ten Santos (CSLog)
DATA/HORA: 14/ago/2025, 16:30

ASSUNTO: Solicitacao Combustivel PO3

MENSAGEM:
Solicito para PO3 (amanha 15/ago):
1. DIESEL: 400 litros
2. GASOLINA: 100 litros
3. MISTURA 2T: 40 litros

PRAZO: Disponivel Base ate 05:00 de 15/ago

Cap Silva _____________ 14/ago 16:30

RESPOSTA:
Solicitacao APROVADA. Entrega 04:00.

Ten Santos _____________ 14/ago 17:00
\`\`\`

---

## SCI 213RR - Requisicao de Recursos

### Fluxo CBMMT

1. CSOp identifica necessidade
2. Preenche SCI 213RR
3. CI aprova
4. Envia a SSC
5. SSC localiza e despacha
6. URec acompanha chegada

### Conteudo

\`\`\`
SCI 213RR - REQUISICAO DE RECURSOS

SOLICITANTE: Cap Silva (CSOp)
DATA: 13/ago/2025, 14:30

RECURSO SOLICITADO:
- Tipo: BDBM (Brigada)
- Quantidade: 1 (8 BMs + lider)
- Qualificacoes: SCI-100, Combate IF

JUSTIFICATIVA:
Incendio expandiu alem capacidade atual.
Necessario reforco flanco norte.

PRIORIDADE: ALTA
ETA DESEJADO: 13/ago ate 17:00

LOCAL: PC - Fazenda Boa Esperanca
COORDENADAS: -11.8640, -55.5030

APROVACAO CI: [X] APROVADO
Maj Silva _____________ 13/ago 14:45

PROCESSAMENTO SSC:
Recurso: BDBM Chapada dos Guimaraes
ETA: 13/ago 16:30
Despachado: 13/ago 15:00
\`\`\``,
  diagrams: [diagramFluxoRequisicao]
};

const formulariosAdministrativos: Section = {
  id: 'formularios-administrativos',
  slug: 'formularios-administrativos',
  title: '52-57. Formularios Administrativos',
  part: 7,
  order: 5,
  content: `## SCI 214 - Registro de Atividades

### Finalidade
Diario de bordo individual de cada membro da EOR.

### O Que Registrar
- Decisoes tomadas
- Ordens recebidas/emitidas
- Mudancas significativas
- Problemas encontrados
- Recursos chegando/saindo
- Acidentes/incidentes
- Condicoes meteorologicas criticas

### Exemplo (CSOp)

\`\`\`
SCI 214 - REGISTRO DE ATIVIDADES

NOME: Cap Silva | POSICAO: CSOp
DATA: 15/ago/2025 (PO3)

HORA  | EVENTO
------|------------------------------------------
05:00 | Inicio PO3. Briefing operacional PC
06:00 | Inicio operacoes. Todas divisoes em posicao
09:00 | Vento aumentando (25km/h). OSeg alertado
09:30 | Div Sul: objetivo alcancado (5 residencias)
14:00 | Div Norte: linha controle 80% completa
16:00 | Div Norte: objetivo alcancado! 100% linha
18:00 | Fim PO3. ZERO acidentes. Objetivos alcancados

ASSINATURA: Cap Silva _____________ 18:30
\`\`\`

---

## SCI 215 e 215A - Matriz e Riscos

**Documentados na Parte V (Ciclo P)** com exemplos completos.

- **SCI 215:** Matriz de Planejamento Operacional
- **SCI 215A:** Analise de Riscos do Plano

---

## SCI 218 - Inventario de Veiculos/Equipamentos

### Responsavel
Unidade de Suporte Terrestre (Secao Logistica)

### Categorias

**VIATURAS OPERACIONAIS (IRTs):**

| Viatura | Placa | Tipo | Origem | Status | Local |
|---------|-------|------|--------|--------|-------|
| S10-BEA03 | ABC-1234 | Camion. | BEA CBA | Operacional | Div Norte |
| Ranger-08 | GHI-9012 | Camion. | BDBM CH | Operacional | Div Norte |

**VIATURAS DE APOIO:**
- Caminhao Pipa 10.000L - Base
- Caminhao Bau Carga - Base

**MAQUINAS PESADAS:**
- Motoniveladora SINFRA01 - Desmob. 14/ago
- Motoniveladora SINFRA02 - Desmob. 14/ago

**AERONAVES:**
- Heli-01 (PT-XXX) AS350 GAvBM - Desmob. 15/ago

---

## SCI 219 - Cartao "T"

### Conceito
Ferramenta visual para rastrear status de cada recurso.

### Informacoes no Cartao

\`\`\`
┌──────────────────────────────────────┐
│         SCI 219 - CARTAO "T"         │
├──────────────────────────────────────┤
│ RECURSO: EIAOP 03                    │
│ LIDER: Cb Marcos Carvalho            │
│ PESSOAL: 10 BMs                      │
│ ORIGEM: BEA Cuiaba                   │
├──────────────────────────────────────┤
│ STATUS ATUAL: DESIGNADO              │
│ ATRIBUICAO: Divisao Norte            │
│ SUPERVISOR: Sgt Silva                │
├──────────────────────────────────────┤
│ CHECK-IN: 13/ago 14:00               │
│ TEMPO MAXIMO: 14 dias                │
└──────────────────────────────────────┘

CORES:
VERDE = Disponivel
AMARELO = Designado
VERMELHO = Fora de Servico
AZUL = Desmobilizado
\`\`\`

---

## SCI 220 - Resumo de Operacoes Aereas

### Quando Usar
Operacoes com GAvBM (helicopteros).

### Conteudo

\`\`\`
SCI 220 - OPERACOES AEREAS

AERONAVE: PT-XXX / Heli-01
TIPO: AS350 B3 (Esquilo)
OPERADOR: GAvBM Cuiaba
PILOTO: Ten Souza
FREQUENCIA: Canal 4

MISSAO PO3:
1. Reconhecimento aereo (07:00-08:00)
2. Apoio Div Norte (standby 08:00-16:00)
3. Reconhecimento final (15:00-16:00)

RESTRICOES:
- Vento > 40km/h: suspende voos
- Operacao APENAS diurna

SEGURANCA:
- LZ primario: Helibase
- LZ alternativo: Campo futebol fazenda
- Distancia minima rotor: 50m
\`\`\``,
  diagrams: [diagramFormulariosAdmin]
};

const formulariosCbmmt: Section = {
  id: 'formularios-cbmmt',
  slug: 'formularios-cbmmt',
  title: '58-60. Formularios Especificos CBMMT',
  part: 7,
  order: 6,
  content: `## SCI 221 - Check-Out de Desmobilizacao

**Documentado na Parte VI** com exemplo completo.

Formulario que garante que recurso completou todas tarefas antes de ser liberado.

---

## SCI 233CG - Controle de Acoes em Aberto

### Finalidade
Rastrear pendencias e tarefas que precisam ser completadas.

### Estrutura

\`\`\`
SCI 233CG - CONTROLE DE ACOES EM ABERTO

Incidente: IF Fazenda Boa Esperanca | Data: 15/ago/2025

Nº | Acao                  | Resp.  | Prazo  | Status | Obs
---|----------------------|--------|--------|--------|------------
01 | Solicitar 3 IRTs     | CSOp   | 13/ago | CONC.  | Chegaram
02 | Estabelecer Base     | CSLog  | 13/ago | CONC.  | Operacional
03 | Coordenar ICMBio     | OLig   | 14/ago | CONC.  | 2 brigadistas
04 | Plano Desmobilizacao | CSPlan | 15/ago | EXEC.  | 70% completo
05 | Investigacao causa   | CI     | 16/ago | ABERTO | PC sera acionada
06 | Relatorio final DOp  | CSPlan | 17/ago | ABERTO | Apos extincao

LEGENDA:
ABERTO = Nao iniciado
EXEC. = Em execucao
CONC. = Concluido
CANCEL. = Cancelado

ATUALIZADO: Cap Oliveira (CSPlan) | 15/ago 18:00
\`\`\`

---

## SCI 234CG - Matriz de Analise de Trabalho

### Finalidade
Desdobrar objetivos em estrategias e taticas.

### Uso
Auxilia CSOp a transformar objetivos (SCI 202) em plano tatico (SCI 215).

### Estrutura por Objetivo

\`\`\`
SCI 234CG - MATRIZ DE ANALISE DE TRABALHO

Incidente: IF Fazenda Boa Esperanca | PO: 3

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 1: Garantir seguranca de todos combatentes      │
├──────────────────────────────────────────────────────────┤
│ ESTRATEGIA: Implementar LCES em todas divisoes           │
├──────────────────────────────────────────────────────────┤
│ TATICAS:                                                  │
│ 1. Designar lookouts em posicoes elevadas                │
│ 2. Estabelecer check-in horario obrigatorio              │
│ 3. Identificar rotas fuga para cada area                 │
│ 4. Demarcar zonas seguranca em cada divisao              │
│ 5. Briefing seguranca antes inicio operacoes             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 2: Proteger 5 residencias setor sul             │
├──────────────────────────────────────────────────────────┤
│ ESTRATEGIA: Defesa estrutural e linha preventiva         │
├──────────────────────────────────────────────────────────┤
│ TATICAS:                                                  │
│ 1. Divisao Sul posicionar entre fogo e residencias       │
│ 2. Remover combustivel em raio 30m de cada casa          │
│ 3. Construir linha controle 200m ao sul                  │
│ 4. Linha molhada perimetro imediato                      │
│ 5. Preparar sistema defesa se fogo aproximar             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 3: Conter flanco norte usando MT-100            │
├──────────────────────────────────────────────────────────┤
│ ESTRATEGIA: Ataque indireto usando estrada como ancora   │
├──────────────────────────────────────────────────────────┤
│ TATICAS:                                                  │
│ 1. Motoniveladoras abrem aceiro 6m largura               │
│ 2. Equipes fazem linha molhada ao longo aceiro           │
│ 3. Contra-fogo controlado se necessario                  │
│ 4. Rescaldo imediato 10m profundidade                    │
│ 5. Patrulhamento continuo linha concluida                │
└──────────────────────────────────────────────────────────┘

OBSERVACOES:
Taticas podem ser ajustadas conforme situacao real.
Supervisores tem autonomia tatica dentro das estrategias.

PREPARADO: Cap Silva (CSOp) | 14/ago 16:00
REVISADO: Maj Silva (CI) | 14/ago 16:30
\`\`\`

---

## Resumo dos Formularios

### Total: 24 Formularios

**Por Categoria:**
- PAI Obrigatorios: 6
- PAI Opcionais: 3
- Planejamento: 3
- Operacionais: 6
- Administrativos: 4
- CBMMT Especificos: 2

### Destaques da Adaptacao CBMMT

- Nomenclatura IRTs (EIAOPs, BDBMs, BMMs, GCIFs)
- Recursos GAvBM (helicoptero)
- Integracao SSC/SSD
- Postos/graduacoes militares
- Geografia MT (estradas, distancias, hospitais)
- Clima MT (calor extremo, desidratacao)
- Instituicoes parceiras (ICMBio, SINFRA, SEMA)`,
  diagrams: [diagramFormulariosCbmmt]
};

// ------------------------------------------------------------
// EXPORTACOES
// ------------------------------------------------------------

export const parteVIISections: Section[] = [
  visaoGeralFormularios,
  formulariosPai,
  formulariosComunicacao,
  formulariosOperacionais,
  formulariosAdministrativos,
  formulariosCbmmt
];

export const parteVIISectionMap: Record<string, Section> = {
  'visao-geral-formularios': visaoGeralFormularios,
  'formularios-pai': formulariosPai,
  'formularios-comunicacao': formulariosComunicacao,
  'formularios-operacionais': formulariosOperacionais,
  'formularios-administrativos': formulariosAdministrativos,
  'formularios-cbmmt': formulariosCbmmt
};
