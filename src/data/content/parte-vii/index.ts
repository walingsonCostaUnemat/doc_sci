import type { Section, Diagram } from '@/data/types';

// ============================================================
// PARTE VII - FORMULÁRIOS SCI: REFERÊNCIA COMPLETA CBMMT
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS MERMAID
// ------------------------------------------------------------

const diagramFormulariosPorCategoria: Diagram = {
  id: 'formularios-categorias',
  title: 'Formulários SCI por Categoria',
  type: 'flowchart',
  description: 'Organização dos 24 formulários SCI',
  code: `flowchart TB
    subgraph FORMS["24 FORMULÁRIOS SCI"]
        direction TB
    end

    subgraph PAI_OBR["PAI - OBRIGATÓRIOS"]
        direction LR
        PO1["SCI 200CG<br/>Capa"]
        PO2["SCI 202<br/>Objetivos"]
        PO3["SCI 204<br/>Atribuições"]
        PO4["SCI 205<br/>Rádio"]
        PO5["SCI 206<br/>Plano Médico"]
        PO6["SCI 208<br/>Segurança"]
    end

    subgraph PAI_OPC["PAI - OPCIONAIS"]
        direction LR
        PP1["SCI 203<br/>Organização"]
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
        OP3["SCI 213RR<br/>Requisição"]
        OP4["SCI 220<br/>Aéreo"]
    end

    subgraph ADMIN["ADMINISTRATIVOS"]
        direction LR
        AD1["SCI 214<br/>Registro"]
        AD2["SCI 218<br/>Inventário"]
        AD3["SCI 221<br/>Desmob"]
    end

    subgraph CBMMT["CBMMT ESPECÍFICOS"]
        direction LR
        CB1["SCI 233CG<br/>Ações"]
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
  title: 'Fluxo de Uso dos Formulários',
  type: 'flowchart',
  description: 'Quando cada formulário é utilizado no ciclo operacional',
  code: `flowchart TB
    subgraph inicio["INÍCIO INCIDENTE"]
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
        F7["SCI 203 Organização"]
        F8["SCI 204 Atribuições"]
        F9["SCI 205 Rádio"]
        F10["SCI 206 Médico"]
        F11["SCI 208 Segurança"]
    end

    subgraph operacao["OPERAÇÃO"]
        F12["SCI 209 Status"]
        F13["SCI 210 Mudança"]
        F14["SCI 213RR Requisição"]
        F15["SCI 214 Registro"]
    end

    subgraph desmob["DESMOBILIZAÇÃO"]
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
  title: 'Fluxo de Requisição de Recursos (SCI 213RR)',
  type: 'sequence',
  description: 'Processo de solicitação de recursos via SSC',
  code: `sequenceDiagram
    participant CSOp as CSOp
    participant CI as Comandante
    participant SPlan as SPlan/URec
    participant SSC as SSC

    Note over CSOp,SSC: FLUXO SCI 213RR

    CSOp->>CSOp: 1. Identifica necessidade
    CSOp->>CSOp: 2. Preenche SCI 213RR
    CSOp->>CI: 3. Solicita aprovação
    CI->>CSOp: 4. Aprova requisição

    rect rgb(220, 38, 38)
        CSOp->>SSC: 5. Envia requisição
        SSC->>SSC: 6. Localiza recurso
        SSC->>CSOp: 7. Confirma despacho + ETA
    end

    SPlan->>SPlan: 8. Acompanha chegada
    SPlan->>CSOp: 9. Confirma check-in

    Note over CSOp,SSC: Recurso disponível para atribuição`
};

const diagramComunicacaoSeguranca: Diagram = {
  id: 'comunicacao-seguranca',
  title: 'Sistema de Comunicações e Segurança',
  type: 'flowchart',
  description: 'Estrutura de comunicações e elementos LCES',
  code: `flowchart TB
    subgraph comunicacao["COMUNICAÇÕES (SCI 205/205A)"]
        direction TB
        C1["Canal 1<br/>COMANDO<br/>CI + Chefes"]
        C2["Canal 2<br/>TÁTICO<br/>Divisões"]
        C3["Canal 3<br/>GRUPOS<br/>Aéreo/Maq"]
        C4["Canal 4<br/>LOGÍSTICA<br/>Suprimentos"]
        C5["Canal 5<br/>EMERGÊNCIA<br/>Todos"]
    end

    subgraph medico["PLANO MÉDICO (SCI 206)"]
        direction TB
        M1["Posto PC<br/>Médico"]
        M2["Socorristas<br/>Divisões"]
        M3["Evacuação<br/>Terrestre/Aérea"]
        M4["Hospital<br/>Referência"]
    end

    subgraph lces["SEGURANÇA - LCES (SCI 208)"]
        direction TB
        L["L - Lookouts<br/>Observadores"]
        CE["C - Communications<br/>Check-in horário"]
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
  title: 'Formulários Administrativos e Controle',
  type: 'flowchart',
  description: 'Fluxo dos formulários de controle e registro',
  code: `flowchart TB
    subgraph registro["REGISTRO E CONTROLE"]
        direction TB
        R1["SCI 214<br/>Registro Atividades<br/>Diário de Bordo"]
        R2["SCI 218<br/>Inventário<br/>Viaturas/Equip"]
        R3["SCI 219<br/>Cartão T<br/>Status Visual"]
    end

    subgraph operacional["CICLO OPERACIONAL"]
        direction LR
        O1["SCI 211<br/>CHECK-IN<br/>Entrada"]
        O2["SCI 210<br/>MUDANÇA<br/>Status"]
        O3["SCI 221<br/>CHECK-OUT<br/>Saída"]
    end

    subgraph status["STATUS DE RECURSOS"]
        direction LR
        S1["DISPONÍVEL"]
        S2["DESPACHADO"]
        S3["DESIGNADO"]
        S4["FORA SERVIÇO"]
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
  title: 'Formulários Específicos CBMMT',
  type: 'flowchart',
  description: 'SCI 233CG e SCI 234CG - Adaptações CBMMT',
  code: `flowchart TB
    subgraph sci233["SCI 233CG - CONTROLE DE AÇÕES"]
        direction TB
        A1["Ação 1<br/>Status: ABERTO"]
        A2["Ação 2<br/>Status: EXEC"]
        A3["Ação 3<br/>Status: CONC"]
        A4["Ação 4<br/>Status: CANCEL"]
    end

    subgraph sci234["SCI 234CG - MATRIZ ANÁLISE"]
        direction TB
        OBJ["OBJETIVO<br/>O que alcançar"]
        EST["ESTRATÉGIA<br/>Abordagem geral"]
        TAT["TÁTICAS<br/>Ações específicas"]
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
  description: 'Formulários que compõem o Plano de Ação do Incidente',
  code: `flowchart TB
    subgraph pai["PLANO DE AÇÃO DO INCIDENTE"]
        direction TB

        subgraph capa["IDENTIFICAÇÃO"]
            C1["SCI 200CG<br/>Capa do PAI"]
        end

        subgraph objetivos["OBJETIVOS"]
            O1["SCI 202<br/>Objetivos do Incidente"]
        end

        subgraph organizacao["ORGANIZAÇÃO"]
            OR1["SCI 203<br/>Lista Organização"]
            OR2["SCI 207<br/>Organograma"]
        end

        subgraph atribuicoes["ATRIBUIÇÕES"]
            A1["SCI 204<br/>Atribuições por Divisão"]
        end

        subgraph comunicacao["COMUNICAÇÃO"]
            CO1["SCI 205<br/>Frequências Rádio"]
            CO2["SCI 205A<br/>Lista Contatos"]
        end

        subgraph seguranca["SEGURANÇA"]
            S1["SCI 206<br/>Plano Médico"]
            S2["SCI 208<br/>Plano Segurança"]
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
// SEÇÕES DE CONTEÚDO
// ------------------------------------------------------------

const visaoGeralFormularios: Section = {
  id: 'visao-geral-formularios',
  slug: 'visao-geral-formularios',
  title: '36. Visão Geral dos Formulários SCI',
  part: 7,
  order: 1,
  content: `## Lista Completa de Formulários

Os formulários SCI são ferramentas padronizadas para documentação e comunicação no Sistema de Comando de Incidentes. Esta parte apresenta **24 formulários** adaptados à realidade do CBMMT.

### Formulários do PAI (Obrigatórios)

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 200CG | Capa do PAI | Identificação do plano |
| SCI 202 | Objetivos do Incidente | Objetivos SMART do CI |
| SCI 204 | Atribuições | Designações por Divisão/Grupo |
| SCI 205 | Comunicações Rádio | Frequências e canais |
| SCI 206 | Plano Médico | Atendimento e evacuação |
| SCI 208 | Plano de Segurança | Riscos e mitigações |

### Formulários do PAI (Opcionais)

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 203 | Organização | Lista de posições e ocupantes |
| SCI 205A | Lista Comunicações | Telefones, WhatsApp, satélite |
| SCI 207 | Organograma | Gráfico visual da EOR |

### Formulários de Planejamento

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 201 | Briefing do Incidente | Transferência de comando |
| SCI 215 | Matriz Operacional | Táticas detalhadas |
| SCI 215A | Análise de Riscos | Identificação e mitigação |

### Formulários Operacionais

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 209 | Resumo Status | Relatório executivo |
| SCI 210 | Mudança Status | Alteração status recurso |
| SCI 211 | Check-In | Entrada de recursos |
| SCI 213 | Mensagem Geral | Comunicação formal |
| SCI 213RR | Requisição Recursos | Solicitação de recursos |
| SCI 220 | Operações Aéreas | Coordenação GAvBM |

### Formulários Administrativos

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 214 | Registro Atividades | Diário de bordo |
| SCI 218 | Inventário Viaturas | Controle de veículos |
| SCI 219 | Cartão "T" | Status visual de recursos |
| SCI 221 | Desmobilização | Check-out de recursos |

### Formulários CBMMT Específicos

| Código | Nome | Descrição |
|--------|------|-----------|
| SCI 233CG | Controle Ações | Pendências e tarefas |
| SCI 234CG | Matriz Análise | Objetivos → Táticas |

---

## Adaptação ao CBMMT

### Contexto Mato Grosso

- **Distâncias grandes:** Operações remotas
- **Clima extremo:** Calor 35-40°C, baixa umidade
- **Vegetação diversa:** Cerrado, Pantanal, Amazônia
- **Infraestrutura limitada:** Áreas rurais

### Recursos CBMMT

- Nomenclatura oficial (EIAOPs, BDBMs, BMMs, GCIFs, EMec, GAvBM)
- Estrutura SSD/SSC integrada
- Postos e graduações militares
- Sistema de comunicação (VHF/UHF)

### Instituições Parceiras

- ICMBio (UCs federais)
- SEMA-MT (UCs estaduais)
- Prevfogo/IBAMA
- SINFRA (máquinas)
- Defesa Civil MT`,
  diagrams: [diagramFormulariosPorCategoria, diagramFluxoFormularios]
};

const formulariosPai: Section = {
  id: 'formularios-pai',
  slug: 'formularios-pai',
  title: '37-40. Formulários do PAI',
  part: 7,
  order: 2,
  content: `## SCI 200CG - Capa do PAI

### Finalidade
Identificação do Plano de Ação do Incidente.

### Conteúdo
- Nome do incidente
- Número do incidente
- Período operacional
- Data/hora de preparação
- CI responsável
- Logotipo CBMMT

---

## SCI 202 - Objetivos do Incidente

### Finalidade
Documentar objetivos SMART estabelecidos pelo CI.

### Estrutura

**CABEÇALHO:**
- Nome e número do incidente
- Período operacional
- Data/hora preparação

**SEÇÃO 1 - OBJETIVOS:**
Lista numerada (2-5 objetivos)

**SEÇÃO 2 - CONSIDERAÇÕES SEGURANÇA:**
Mensagem do OSeg

**SEÇÃO 3 - INSTRUÇÕES ESPECIAIS:**
Restrições, coordenações

**SEÇÃO 4 - APROVAÇÃO:**
Assinatura do CI

### Exemplo

\`\`\`
SCI 202 - OBJETIVOS DO INCIDENTE

Incidente: IF Fazenda Boa Esperança
Período: PO3 - 06:00 às 18:00 de 15/ago

OBJETIVOS:
1. SEGURANÇA: Manter segurança de todos combatentes
2. PROTEÇÃO: Proteger 5 residências setor sul
3. CONTENÇÃO: Conter flanco norte até MT-100
4. RESCALDO: Completar 70% setor leste

CONSIDERAÇÕES SEGURANÇA:
- Vento SE 20-30km/h, ALTO RISCO 12:00-17:00
- LCES obrigatório todas divisões

APROVADO: Maj Silva (CI) - 14/ago 17:45
\`\`\`

---

## SCI 203 - Lista de Organização

### Finalidade
Registrar todas posições ativadas e seus ocupantes.

### Quando Usar
- PAI formal (Nível 3-4)
- Quando estrutura complexa precisa ser documentada

### Exemplo

\`\`\`
SCI 203 - ORGANIZAÇÃO DO INCIDENTE

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

DIVISÕES:
- Div Norte: Sgt Silva (EIAOP 03, BDBM Chapada)
- Div Sul: Sgt Mendes (EIAOP 05, BMM Nobres)
- Div Leste: Cb Lima (GCIF 1, GCIF 2, BDBM Poconé)

GRUPOS:
- Grupo Aéreo: Ten Souza (Heli-01 GAvBM)
\`\`\`

---

## SCI 204 - Atribuições

### Finalidade
Detalhar atribuição específica de cada Divisão/Grupo.

### Um Formulário por Divisão
Cada Divisão/Grupo recebe seu próprio SCI 204.

### Conteúdo

| Campo | Descrição |
|-------|-----------|
| Divisão/Grupo | Identificação |
| Supervisor | Responsável |
| Recursos | IRTs designadas |
| Área Operacional | Limites geográficos |
| Atribuição | Objetivo específico |
| Táticas | Como executar |
| Segurança | LCES específico |
| Comunicações | Frequências |
| Coordenação | Com outras divisões |

### Exemplo

\`\`\`
SCI 204 - ATRIBUIÇÃO DIVISÃO NORTE

DIVISÃO: Norte
SUPERVISOR: Sgt Silva
PERÍODO: PO3 (06:00-18:00)

RECURSOS:
- EIAOP 03 (10 BMs)
- BDBM Chapada (8 BMs)
- EMec: 2 motoniveladoras

ÁREA: Flancos norte e nordeste (2km linha)

ATRIBUIÇÃO: Conter 100% flanco norte até 16:00
usando estrada MT-100 como âncora

TÁTICAS:
- Motoniveladoras abrem aceiro 6m
- Ataque direto nas bordas
- Rescaldo imediato 10m

SEGURANÇA:
- Zona segura: área desmatada na estrada
- Rota fuga: retornar à estrada
- Lookout: Cb Mendes

FREQUÊNCIA: Canal 2 (tático)
\`\`\``,
  diagrams: [diagramEstruturaPai]
};

const formulariosComunicacao: Section = {
  id: 'formularios-comunicacao',
  slug: 'formularios-comunicacao',
  title: '41-44. Comunicações e Segurança',
  part: 7,
  order: 3,
  content: `## SCI 205 - Comunicações de Rádio

### Finalidade
Documentar frequências e canais de rádio para o incidente.

### Estrutura por Função

| Canal | Frequência | Função | Usuários |
|-------|------------|--------|----------|
| 1 | 148.500 MHz | Comando | CI, Chefes Seção, OSeg |
| 2 | 148.525 MHz | Tático Divisões | CSOp, Supervisores |
| 3 | 148.550 MHz | Tático Grupos | Grupo Aéreo, Máquinas |
| 4 | 148.575 MHz | Logística | CSLog, Suprimentos |
| 5 | 148.600 MHz | Emergência | Todas unidades |

### Protocolo
- Disciplina de rádio
- Chamadas curtas e objetivas
- Identificação clara

---

## SCI 205A - Lista de Comunicações

### Finalidade
Complementar SCI 205 com outros meios de comunicação.

### Conteúdo

**TELEFONES CELULARES:**
| Função | Nome | Número |
|--------|------|--------|
| CI | Maj Silva | (65) 9XXXX-YYYY |
| CSOp | Cap Silva | (65) 9XXXX-YYYY |
| CSLog | Ten Santos | (65) 9XXXX-YYYY |

**WHATSAPP:**
- Grupo Comando: "IF Boa Esperança - Comando"
- Grupo Operacional: "IF Boa Esperança - Ops"

**TELEFONE SATÉLITE:**
- PC: +870 XXX XXX XXX

**CONTATOS EXTERNOS:**
- SSC Cuiabá: (65) 3XXX-YYYY
- Hospital Sinop: (66) 3XXX-YYYY

---

## SCI 206 - Plano Médico

### Finalidade
Garantir atendimento médico adequado no incidente.

### Estrutura Completa

**1. INSTALAÇÕES MÉDICAS:**
- Posto Atendimento no PC
- Posto Avançado (se aplicável)

**2. PESSOAL MÉDICO:**
- Ten Martins (médico) - PC
- Sd Oliveira (socorrista) - Div Norte

**3. EQUIPAMENTOS:**
- Kit primeiros socorros por divisão
- Desfibrilador no PC
- Macas (2)

**4. PROCEDIMENTOS EMERGÊNCIA:**
- Comunicar OSeg via Canal 5
- Evacuação terrestre: Viatura designada
- Evacuação aérea: Heli-01 (se disponível)

**5. HOSPITAIS DE REFERÊNCIA:**

| Hospital | Distância | Tempo | Recursos |
|----------|-----------|-------|----------|
| Hospital Sinop | 45km | 40min | UTI, Queimados |
| UPA Sinop | 40km | 35min | Urgência |
| Hospital CBA | 450km | 5h / 1h heli | Referência |

**6. ROTA EVACUAÇÃO:**
PC → MT-XXX → Sinop (ambulância aguarda)

---

## SCI 208 - Plano de Segurança

### Finalidade
Identificar riscos e estabelecer medidas de mitigação.

### Riscos Típicos MT

| Risco | Probabilidade | Severidade | Mitigação |
|-------|---------------|------------|-----------|
| Vento forte | ALTA | ALTA | Lookouts, suspender se >50km/h |
| Desidratação | ALTA | MÉDIA | Hidratação forçada, rodízio |
| Comunicação limitada | MÉDIA | ALTA | Celular backup, check-in periódico |
| Terreno acidentado | MÉDIA | MÉDIA | Briefing, buddy system |
| Fogo de copa | BAIXA | ALTA | Ataque indireto, evacuação |

### LCES Obrigatório

**L - Lookouts (Observadores):**
- 1 por divisão em posição elevada
- Monitoramento contínuo de vento e fogo

**C - Communications (Comunicações):**
- Check-in horário obrigatório
- Canal 5 para emergências

**E - Escape Routes (Rotas de Fuga):**
- Identificadas e comunicadas a todos
- Primária e secundária por divisão

**S - Safety Zones (Zonas Seguras):**
- Demarcadas em cada área operacional
- Tamanho adequado para todos recursos`,
  diagrams: [diagramComunicacaoSeguranca]
};

const formulariosOperacionais: Section = {
  id: 'formularios-operacionais',
  slug: 'formularios-operacionais',
  title: '47-51. Formulários Operacionais',
  part: 7,
  order: 4,
  content: `## SCI 209 - Resumo do Status do Incidente

### Finalidade
Relatório executivo para níveis superiores (DOp, Comando-Geral).

### Quando Preparar
- Diariamente (final do dia)
- A pedido de autoridades
- Antes de eventos importantes

### Conteúdo Principal

\`\`\`
SCI 209 - RESUMO STATUS

Incidente: IF Fazenda Boa Esperança
Data/Hora: 15/ago/2025, 18:00

SITUAÇÃO ATUAL:
- Área queimada: 850 hectares
- Perímetro: 12 km
- Contenção: 95%
- Status: Sob controle, rescaldo em andamento

RECURSOS: 40 BMs, 8 viaturas
OBJETIVOS PO3: 4 de 5 alcançados
PREVISÃO: Extinção 16/ago 12:00

PREPARADO: Sgt Ferreira (USit)
APROVADO: Maj Silva (CI)
\`\`\`

---

## SCI 210 - Mudança de Status de Recurso

### Status Possíveis

| Status | Descrição |
|--------|-----------|
| DISPONÍVEL | Em base, pronto para acionamento |
| DESPACHADO | Em deslocamento para incidente |
| DESIGNADO | No incidente, com atribuição |
| FORA DE SERVIÇO | Temporariamente indisponível |
| DESMOBILIZADO | Liberado, retornando à base |

### Exemplo

\`\`\`
SCI 210 - MUDANÇA STATUS

Recurso     | Anterior   | Novo       | Data/Hora    | Obs
------------|------------|------------|--------------|------------
EIAOP 03    | DESIGNADO  | FORA SERV. | 15/ago 14:00 | Descanso 8h
GAvBM       | DESIGNADO  | DESMOB.    | 15/ago 16:00 | Retorno CBA
BDBM Poconé | DESPACHADO | DESIGNADO  | 15/ago 09:00 | Check-in PC

REGISTRADO: Ten Costa (URec)
\`\`\`

---

## SCI 211 - Check-In de Recursos

### Importância
- Controle de quem está no incidente
- Base para contabilização de pessoal
- Informações para logística
- Dados para desmobilização

### Informações Coletadas

**IDENTIFICAÇÃO:**
- Nome/Designação do recurso
- Líder e pessoal
- Unidade de origem

**CHEGADA:**
- Data/hora
- Meio de transporte
- Equipamentos trazidos

**NECESSIDADES:**
- Alimentação, alojamento
- Combustível, água
- Comunicações

**QUALIFICAÇÕES:**
- Certificações SCI
- Especializações

---

## SCI 213 - Mensagem Geral

### Quando Usar
- Mensagens que requerem registro formal
- Solicitações de recursos
- Mudanças importantes
- Quando rádio/telefone insuficiente

### Formato

\`\`\`
SCI 213 - MENSAGEM GERAL

DE: Cap Silva (CSOp)
PARA: Ten Santos (CSLog)
DATA/HORA: 14/ago/2025, 16:30

ASSUNTO: Solicitação Combustível PO3

MENSAGEM:
Solicito para PO3 (amanhã 15/ago):
1. DIESEL: 400 litros
2. GASOLINA: 100 litros
3. MISTURA 2T: 40 litros

PRAZO: Disponível Base até 05:00 de 15/ago

Cap Silva _____________ 14/ago 16:30

RESPOSTA:
Solicitação APROVADA. Entrega 04:00.

Ten Santos _____________ 14/ago 17:00
\`\`\`

---

## SCI 213RR - Requisição de Recursos

### Fluxo CBMMT

1. CSOp identifica necessidade
2. Preenche SCI 213RR
3. CI aprova
4. Envia à SSC
5. SSC localiza e despacha
6. URec acompanha chegada

### Conteúdo

\`\`\`
SCI 213RR - REQUISIÇÃO DE RECURSOS

SOLICITANTE: Cap Silva (CSOp)
DATA: 13/ago/2025, 14:30

RECURSO SOLICITADO:
- Tipo: BDBM (Brigada)
- Quantidade: 1 (8 BMs + líder)
- Qualificações: SCI-100, Combate IF

JUSTIFICATIVA:
Incêndio expandiu além capacidade atual.
Necessário reforço flanco norte.

PRIORIDADE: ALTA
ETA DESEJADO: 13/ago até 17:00

LOCAL: PC - Fazenda Boa Esperança
COORDENADAS: -11.8640, -55.5030

APROVAÇÃO CI: [X] APROVADO
Maj Silva _____________ 13/ago 14:45

PROCESSAMENTO SSC:
Recurso: BDBM Chapada dos Guimarães
ETA: 13/ago 16:30
Despachado: 13/ago 15:00
\`\`\``,
  diagrams: [diagramFluxoRequisicao]
};

const formulariosAdministrativos: Section = {
  id: 'formularios-administrativos',
  slug: 'formularios-administrativos',
  title: '52-57. Formulários Administrativos',
  part: 7,
  order: 5,
  content: `## SCI 214 - Registro de Atividades

### Finalidade
Diário de bordo individual de cada membro da EOR.

### O Que Registrar
- Decisões tomadas
- Ordens recebidas/emitidas
- Mudanças significativas
- Problemas encontrados
- Recursos chegando/saindo
- Acidentes/incidentes
- Condições meteorológicas críticas

### Exemplo (CSOp)

\`\`\`
SCI 214 - REGISTRO DE ATIVIDADES

NOME: Cap Silva | POSIÇÃO: CSOp
DATA: 15/ago/2025 (PO3)

HORA  | EVENTO
------|------------------------------------------
05:00 | Início PO3. Briefing operacional PC
06:00 | Início operações. Todas divisões em posição
09:00 | Vento aumentando (25km/h). OSeg alertado
09:30 | Div Sul: objetivo alcançado (5 residências)
14:00 | Div Norte: linha controle 80% completa
16:00 | Div Norte: objetivo alcançado! 100% linha
18:00 | Fim PO3. ZERO acidentes. Objetivos alcançados

ASSINATURA: Cap Silva _____________ 18:30
\`\`\`

---

## SCI 215 e 215A - Matriz e Riscos

**Documentados na Parte V (Ciclo P)** com exemplos completos.

- **SCI 215:** Matriz de Planejamento Operacional
- **SCI 215A:** Análise de Riscos do Plano

---

## SCI 218 - Inventário de Veículos/Equipamentos

### Responsável
Unidade de Suporte Terrestre (Seção Logística)

### Categorias

**VIATURAS OPERACIONAIS (IRTs):**

| Viatura | Placa | Tipo | Origem | Status | Local |
|---------|-------|------|--------|--------|-------|
| S10-BEA03 | ABC-1234 | Camion. | BEA CBA | Operacional | Div Norte |
| Ranger-08 | GHI-9012 | Camion. | BDBM CH | Operacional | Div Norte |

**VIATURAS DE APOIO:**
- Caminhão Pipa 10.000L - Base
- Caminhão Baú Carga - Base

**MÁQUINAS PESADAS:**
- Motoniveladora SINFRA01 - Desmob. 14/ago
- Motoniveladora SINFRA02 - Desmob. 14/ago

**AERONAVES:**
- Heli-01 (PT-XXX) AS350 GAvBM - Desmob. 15/ago

---

## SCI 219 - Cartão "T"

### Conceito
Ferramenta visual para rastrear status de cada recurso.

### Informações no Cartão

\`\`\`
┌──────────────────────────────────────┐
│         SCI 219 - CARTÃO "T"         │
├──────────────────────────────────────┤
│ RECURSO: EIAOP 03                    │
│ LÍDER: Cb Marcos Carvalho            │
│ PESSOAL: 10 BMs                      │
│ ORIGEM: BEA Cuiabá                   │
├──────────────────────────────────────┤
│ STATUS ATUAL: DESIGNADO              │
│ ATRIBUIÇÃO: Divisão Norte            │
│ SUPERVISOR: Sgt Silva                │
├──────────────────────────────────────┤
│ CHECK-IN: 13/ago 14:00               │
│ TEMPO MÁXIMO: 14 dias                │
└──────────────────────────────────────┘

CORES:
VERDE = Disponível
AMARELO = Designado
VERMELHO = Fora de Serviço
AZUL = Desmobilizado
\`\`\`

---

## SCI 220 - Resumo de Operações Aéreas

### Quando Usar
Operações com GAvBM (helicópteros).

### Conteúdo

\`\`\`
SCI 220 - OPERAÇÕES AÉREAS

AERONAVE: PT-XXX / Heli-01
TIPO: AS350 B3 (Esquilo)
OPERADOR: GAvBM Cuiabá
PILOTO: Ten Souza
FREQUÊNCIA: Canal 4

MISSÃO PO3:
1. Reconhecimento aéreo (07:00-08:00)
2. Apoio Div Norte (standby 08:00-16:00)
3. Reconhecimento final (15:00-16:00)

RESTRIÇÕES:
- Vento > 40km/h: suspende voos
- Operação APENAS diurna

SEGURANÇA:
- LZ primário: Helibase
- LZ alternativo: Campo futebol fazenda
- Distância mínima rotor: 50m
\`\`\``,
  diagrams: [diagramFormulariosAdmin]
};

const formulariosCbmmt: Section = {
  id: 'formularios-cbmmt',
  slug: 'formularios-cbmmt',
  title: '58-60. Formulários Específicos CBMMT',
  part: 7,
  order: 6,
  content: `## SCI 221 - Check-Out de Desmobilização

**Documentado na Parte VI** com exemplo completo.

Formulário que garante que recurso completou todas tarefas antes de ser liberado.

---

## SCI 233CG - Controle de Ações em Aberto

### Finalidade
Rastrear pendências e tarefas que precisam ser completadas.

### Estrutura

\`\`\`
SCI 233CG - CONTROLE DE AÇÕES EM ABERTO

Incidente: IF Fazenda Boa Esperança | Data: 15/ago/2025

Nº | Ação                  | Resp.  | Prazo  | Status | Obs
---|----------------------|--------|--------|--------|------------
01 | Solicitar 3 IRTs     | CSOp   | 13/ago | CONC.  | Chegaram
02 | Estabelecer Base     | CSLog  | 13/ago | CONC.  | Operacional
03 | Coordenar ICMBio     | OLig   | 14/ago | CONC.  | 2 brigadistas
04 | Plano Desmobilização | CSPlan | 15/ago | EXEC.  | 70% completo
05 | Investigação causa   | CI     | 16/ago | ABERTO | PC será acionada
06 | Relatório final DOp  | CSPlan | 17/ago | ABERTO | Após extinção

LEGENDA:
ABERTO = Não iniciado
EXEC. = Em execução
CONC. = Concluído
CANCEL. = Cancelado

ATUALIZADO: Cap Oliveira (CSPlan) | 15/ago 18:00
\`\`\`

---

## SCI 234CG - Matriz de Análise de Trabalho

### Finalidade
Desdobrar objetivos em estratégias e táticas.

### Uso
Auxilia CSOp a transformar objetivos (SCI 202) em plano tático (SCI 215).

### Estrutura por Objetivo

\`\`\`
SCI 234CG - MATRIZ DE ANÁLISE DE TRABALHO

Incidente: IF Fazenda Boa Esperança | PO: 3

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 1: Garantir segurança de todos combatentes      │
├──────────────────────────────────────────────────────────┤
│ ESTRATÉGIA: Implementar LCES em todas divisões           │
├──────────────────────────────────────────────────────────┤
│ TÁTICAS:                                                  │
│ 1. Designar lookouts em posições elevadas                │
│ 2. Estabelecer check-in horário obrigatório              │
│ 3. Identificar rotas fuga para cada área                 │
│ 4. Demarcar zonas segurança em cada divisão              │
│ 5. Briefing segurança antes início operações             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 2: Proteger 5 residências setor sul             │
├──────────────────────────────────────────────────────────┤
│ ESTRATÉGIA: Defesa estrutural e linha preventiva         │
├──────────────────────────────────────────────────────────┤
│ TÁTICAS:                                                  │
│ 1. Divisão Sul posicionar entre fogo e residências       │
│ 2. Remover combustível em raio 30m de cada casa          │
│ 3. Construir linha controle 200m ao sul                  │
│ 4. Linha molhada perímetro imediato                      │
│ 5. Preparar sistema defesa se fogo aproximar             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ OBJETIVO 3: Conter flanco norte usando MT-100            │
├──────────────────────────────────────────────────────────┤
│ ESTRATÉGIA: Ataque indireto usando estrada como âncora   │
├──────────────────────────────────────────────────────────┤
│ TÁTICAS:                                                  │
│ 1. Motoniveladoras abrem aceiro 6m largura               │
│ 2. Equipes fazem linha molhada ao longo aceiro           │
│ 3. Contra-fogo controlado se necessário                  │
│ 4. Rescaldo imediato 10m profundidade                    │
│ 5. Patrulhamento contínuo linha concluída                │
└──────────────────────────────────────────────────────────┘

OBSERVAÇÕES:
Táticas podem ser ajustadas conforme situação real.
Supervisores têm autonomia tática dentro das estratégias.

PREPARADO: Cap Silva (CSOp) | 14/ago 16:00
REVISADO: Maj Silva (CI) | 14/ago 16:30
\`\`\`

---

## Resumo dos Formulários

### Total: 24 Formulários

**Por Categoria:**
- PAI Obrigatórios: 6
- PAI Opcionais: 3
- Planejamento: 3
- Operacionais: 6
- Administrativos: 4
- CBMMT Específicos: 2

### Destaques da Adaptação CBMMT

- Nomenclatura IRTs (EIAOPs, BDBMs, BMMs, GCIFs)
- Recursos GAvBM (helicóptero)
- Integração SSC/SSD
- Postos/graduações militares
- Geografia MT (estradas, distâncias, hospitais)
- Clima MT (calor extremo, desidratação)
- Instituições parceiras (ICMBio, SINFRA, SEMA)`,
  diagrams: [diagramFormulariosCbmmt]
};

// ------------------------------------------------------------
// EXPORTAÇÕES
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
