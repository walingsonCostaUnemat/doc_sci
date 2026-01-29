import type { Section, Diagram } from '@/data/types';

// ============================================================================
// PARTE II - ESTRUTURA ORGANIZACIONAL DE RESPOSTA (EOR)
// ============================================================================

// ----------------------------------------------------------------------------
// DIAGRAMAS DA PARTE II
// ----------------------------------------------------------------------------

const diagramEorCompleta: Diagram = {
  id: 'eor-completa',
  title: 'Estrutura Organizacional de Resposta Completa',
  type: 'flowchart',
  description: 'Os 5 elementos funcionais do SCI e suas subdivisões',
  code: `flowchart TB
    subgraph COMANDO["COMANDO"]
        CI["Comandante do<br/>Incidente"]
    end

    subgraph STAFF["STAFF DO COMANDO"]
        direction LR
        OSEG["Oficial de<br/>Segurança"]
        OIP["Oficial de<br/>Informações<br/>Públicas"]
        OLIG["Oficial de<br/>Ligação"]
    end

    subgraph SECOES["SEÇÕES PRINCIPAIS"]
        direction LR
        SOP["Seção de<br/>Operações"]
        SPLAN["Seção de<br/>Planejamento"]
        SLOG["Seção de<br/>Logística"]
        SADM["Seção<br/>Admin/Finanças"]
    end

    CI --> OSEG
    CI --> OIP
    CI --> OLIG
    CI --> SOP
    CI --> SPLAN
    CI --> SLOG
    CI --> SADM

    classDef comando fill:#DC2626,stroke:#991B1B,color:#FFFFFF,stroke-width:2px
    classDef staff fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef secao fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF

    class CI comando
    class OSEG,OIP,OLIG staff
    class SOP,SPLAN,SLOG,SADM secao`
};

const diagramComando: Diagram = {
  id: 'comando-estrutura',
  title: 'Funções do Comandante do Incidente',
  type: 'flowchart',
  description: 'Responsabilidades e autoridade do CI',
  code: `flowchart TB
    subgraph CI_RESP["COMANDANTE DO INCIDENTE"]
        direction TB

        subgraph AUTH["AUTORIDADE"]
            A1["Estabelecer objetivos"]
            A2["Aprovar PAI"]
            A3["Designar pessoal-chave"]
            A4["Autorizar liberação<br/>de informações"]
        end

        subgraph RESP["RESPONSABILIDADES"]
            R1["Segurança de todos"]
            R2["Avaliar prioridades"]
            R3["Determinar estratégias"]
            R4["Coordenar ações"]
            R5["Gerenciar recursos"]
        end

        subgraph TRANS["TRANSFERÊNCIA"]
            T1["Briefing completo"]
            T2["Passagem formal"]
            T3["Notificação a todos"]
        end
    end

    classDef authStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef respStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef transStyle fill:#D97706,stroke:#B45309,color:#FFFFFF

    class A1,A2,A3,A4 authStyle
    class R1,R2,R3,R4,R5 respStyle
    class T1,T2,T3 transStyle`
};

const diagramStaffComando: Diagram = {
  id: 'staff-comando',
  title: 'Staff do Comando - Três Oficiais',
  type: 'flowchart',
  description: 'Oficial de Segurança, Informações Públicas e Ligação',
  code: `flowchart LR
    subgraph OSEG["OFICIAL DE SEGURANÇA"]
        direction TB
        S1["Desenvolver Plano<br/>de Segurança"]
        S2["Monitorar condições<br/>inseguras"]
        S3["Implementar LCES"]
        S4["Autoridade para<br/>PARAR operações"]
    end

    subgraph OIP["OFICIAL DE INFORMAÇÕES"]
        direction TB
        I1["Comunicados<br/>à imprensa"]
        I2["Informações ao<br/>público"]
        I3["Coordenar<br/>entrevistas"]
        I4["Aprovar com CI"]
    end

    subgraph OLIG["OFICIAL DE LIGAÇÃO"]
        direction TB
        L1["Contato com<br/>outras agências"]
        L2["Coordenar<br/>recursos externos"]
        L3["Manter lista<br/>de contatos"]
        L4["Representar CI"]
    end

    classDef segStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef infoStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef ligStyle fill:#059669,stroke:#047857,color:#FFFFFF

    class S1,S2,S3,S4 segStyle
    class I1,I2,I3,I4 infoStyle
    class L1,L2,L3,L4 ligStyle`
};

const diagramSecaoOperacoes: Diagram = {
  id: 'secao-operacoes',
  title: 'Seção de Operações - Estrutura',
  type: 'flowchart',
  description: 'Organização da Seção de Operações com Divisões e Grupos',
  code: `flowchart TB
    CSOP["Chefe da Seção<br/>de Operações<br/>(CSOp)"]

    subgraph DIVISOES["DIVISÕES GEOGRÁFICAS"]
        direction LR
        DN["Divisão<br/>Norte"]
        DS["Divisão<br/>Sul"]
        DL["Divisão<br/>Leste"]
    end

    subgraph GRUPOS["GRUPOS FUNCIONAIS"]
        direction LR
        GA["Grupo<br/>Aéreo"]
        GM["Grupo<br/>Máquinas"]
        GR["Grupo<br/>Rescaldo"]
    end

    subgraph RECURSOS["RECURSOS TÁTICOS"]
        direction LR
        IRT1["IRT 01"]
        IRT2["IRT 02"]
        IRT3["IRT 03"]
        EQ["Equipamentos"]
    end

    CSOP --> DIVISOES
    CSOP --> GRUPOS
    DIVISOES --> RECURSOS
    GRUPOS --> RECURSOS

    classDef chefe fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef divisao fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef grupo fill:#059669,stroke:#047857,color:#FFFFFF
    classDef recurso fill:#6B7280,stroke:#4B5563,color:#FFFFFF

    class CSOP chefe
    class DN,DS,DL divisao
    class GA,GM,GR grupo
    class IRT1,IRT2,IRT3,EQ recurso`
};

const diagramSecaoPlanejamento: Diagram = {
  id: 'secao-planejamento',
  title: 'Seção de Planejamento - Unidades',
  type: 'flowchart',
  description: 'As 4 unidades da Seção de Planejamento',
  code: `flowchart TB
    CSPLAN["Chefe da Seção<br/>de Planejamento<br/>(CSPlan)"]

    subgraph UNIDADES["UNIDADES"]
        direction TB

        subgraph UREC["UNIDADE DE RECURSOS"]
            UR1["Check-in de recursos"]
            UR2["Cartões T"]
            UR3["Status de recursos"]
        end

        subgraph USIT["UNIDADE DE SITUAÇÃO"]
            US1["Mapas de situação"]
            US2["Projeções"]
            US3["Coleta de dados"]
        end

        subgraph UDOC["UNIDADE DE DOCUMENTAÇÃO"]
            UD1["Arquivos do incidente"]
            UD2["SCI 214 - Registro"]
            UD3["Histórico"]
        end

        subgraph UDEM["UNIDADE DE DESMOBILIZAÇÃO"]
            UDM1["Plano de desmob"]
            UDM2["Check-out"]
            UDM3["Liberação"]
        end
    end

    CSPLAN --> UREC
    CSPLAN --> USIT
    CSPLAN --> UDOC
    CSPLAN --> UDEM

    classDef chefe fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef unidade fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF

    class CSPLAN chefe
    class UR1,UR2,UR3,US1,US2,US3,UD1,UD2,UD3,UDM1,UDM2,UDM3 unidade`
};

const diagramSecaoLogistica: Diagram = {
  id: 'secao-logistica',
  title: 'Seção de Logística - Ramos e Unidades',
  type: 'flowchart',
  description: 'Organização da Seção de Logística',
  code: `flowchart TB
    CSLOG["Chefe da Seção<br/>de Logística<br/>(CSLog)"]

    subgraph RAMO_SERVICOS["RAMO DE SERVIÇOS"]
        direction TB
        UCOM["Unidade de<br/>Comunicações"]
        UMED["Unidade<br/>Médica"]
        UALIM["Unidade de<br/>Alimentação"]
    end

    subgraph RAMO_APOIO["RAMO DE APOIO"]
        direction TB
        USUP["Unidade de<br/>Suprimentos"]
        UINST["Unidade de<br/>Instalações"]
        UTRAN["Unidade de<br/>Transporte"]
    end

    CSLOG --> RAMO_SERVICOS
    CSLOG --> RAMO_APOIO

    classDef chefe fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef servico fill:#059669,stroke:#047857,color:#FFFFFF
    classDef apoio fill:#D97706,stroke:#B45309,color:#FFFFFF

    class CSLOG chefe
    class UCOM,UMED,UALIM servico
    class USUP,UINST,UTRAN apoio`
};

const diagramSecaoAdmin: Diagram = {
  id: 'secao-admin',
  title: 'Seção Administrativa/Finanças',
  type: 'flowchart',
  description: 'Unidades da Seção Admin/Finanças',
  code: `flowchart TB
    CSADM["Chefe da Seção<br/>Admin/Finanças<br/>(CSAdmin)"]

    subgraph UNIDADES["UNIDADES"]
        direction LR

        subgraph UTEMP["UNIDADE DE TEMPO"]
            UT1["Registro de horas"]
            UT2["Controle pessoal"]
            UT3["Equipamentos"]
        end

        subgraph UAQUI["UNIDADE DE AQUISIÇÕES"]
            UA1["Compras"]
            UA2["Contratos"]
            UA3["Aluguel equip."]
        end

        subgraph UCUST["UNIDADE DE CUSTOS"]
            UC1["Registro custos"]
            UC2["Análise gastos"]
            UC3["Relatórios"]
        end

        subgraph UCOMP["UNIDADE DE COMPENSAÇÃO"]
            UCP1["Acidentes"]
            UCP2["Danos"]
            UCP3["Reclamações"]
        end
    end

    CSADM --> UTEMP
    CSADM --> UAQUI
    CSADM --> UCUST
    CSADM --> UCOMP

    classDef chefe fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef unidade fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class CSADM chefe
    class UT1,UT2,UT3,UA1,UA2,UA3,UC1,UC2,UC3,UCP1,UCP2,UCP3 unidade`
};

const diagramAmplitudeControle: Diagram = {
  id: 'amplitude-controle',
  title: 'Amplitude de Controle Ideal',
  type: 'flowchart',
  description: 'Razão de supervisão recomendada: 1 para 3-7',
  code: `flowchart TB
    subgraph IDEAL["AMPLITUDE IDEAL: 1 PARA 5"]
        SUP["Supervisor"]
        S1["Subordinado 1"]
        S2["Subordinado 2"]
        S3["Subordinado 3"]
        S4["Subordinado 4"]
        S5["Subordinado 5"]

        SUP --> S1
        SUP --> S2
        SUP --> S3
        SUP --> S4
        SUP --> S5
    end

    subgraph EXCESSO["AMPLITUDE EXCESSIVA"]
        SUP2["Supervisor"]
        E1["Sub 1"]
        E2["Sub 2"]
        E3["Sub 3"]
        E4["Sub 4"]
        E5["Sub 5"]
        E6["Sub 6"]
        E7["Sub 7"]
        E8["Sub 8"]
        E9["Sub 9"]

        SUP2 --> E1
        SUP2 --> E2
        SUP2 --> E3
        SUP2 --> E4
        SUP2 --> E5
        SUP2 --> E6
        SUP2 --> E7
        SUP2 --> E8
        SUP2 --> E9
    end

    classDef supIdeal fill:#059669,stroke:#047857,color:#FFFFFF
    classDef subIdeal fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef supExcesso fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef subExcesso fill:#FEE2E2,stroke:#DC2626,color:#991B1B

    class SUP supIdeal
    class S1,S2,S3,S4,S5 subIdeal
    class SUP2 supExcesso
    class E1,E2,E3,E4,E5,E6,E7,E8,E9 subExcesso`
};

// ----------------------------------------------------------------------------
// SEÇÕES DA PARTE II
// ----------------------------------------------------------------------------

const visaoGeralEor: Section = {
  id: 'visao-geral-eor',
  slug: 'visao-geral-eor',
  title: '2.1 Visão Geral da Estrutura Organizacional',
  part: 2,
  order: 1,
  content: `## Estrutura Organizacional de Resposta (EOR)

A Estrutura Organizacional de Resposta é a forma como o incidente é organizado para permitir uma gestão eficiente. O SCI utiliza uma estrutura modular que se expande ou contrai conforme a necessidade.

---

### Os Elementos Funcionais do SCI

O SCI é composto pelo **Comando**, o **Staff do Comando** e o **Staff Geral (4 Seções)**, que juntos cobrem todas as necessidades de gestão de um incidente:

#### Comando

| Elemento | Responsável | Função Principal |
|----------|-------------|------------------|
| **Comando** | Comandante do Incidente (CI) | Direção geral e tomada de decisão |

#### Staff do Comando

O Staff do Comando é composto por **três posições individuais** que se reportam diretamente ao CI. Cada função é desempenhada por **uma única pessoa**:

| Posição | Função Principal |
|---------|------------------|
| **Oficial de Segurança (OSeg)** | Monitorar segurança, autoridade para parar operações inseguras |
| **Oficial de Informação Pública (OIP)** | Comunicação com mídia e público |
| **Oficial de Ligação (OLig)** | Contato com outras agências e instituições |

> **Diferença fundamental:** O Staff do Comando é composto por **funções individuais** (uma pessoa por posição), diferente das Seções que são **escalonáveis** e compostas por múltiplas pessoas trabalhando em conjunto.

#### Staff Geral (Seções)

As Seções são **estruturas escalonáveis**, compostas por várias pessoas que desempenham a função em conjunto, podendo ser subdivididas em Divisões, Grupos e Unidades conforme a demanda:

| Seção | Responsável | Função Principal |
|-------|-------------|------------------|
| **Operações** | Chefe de Operações (CSOp) | Execução tática das ações |
| **Planejamento** | Chefe de Planejamento (CSPlan) | Coleta de informações e planejamento |
| **Logística** | Chefe de Logística (CSLog) | Suporte e recursos |
| **Admin/Finanças** | Chefe Admin (CSAdmin) | Custos e aspectos administrativos |

---

### Princípio da Modularidade

A estrutura se adapta ao tamanho do incidente:

**Incidente Simples (Nível 1)**
- Apenas o CI, que acumula todas as funções

**Incidente em Crescimento (Nível 2)**
- CI delega funções conforme necessário
- Primeiro a ser delegado: Operações

**Incidente Complexo (Nível 3-4)**
- Estrutura completa ativada
- Divisões e Grupos criados
- Todas as seções com pessoal designado

---

### Nomenclatura Padrão

| Nível | Título | Função |
|-------|--------|--------|
| Comando | Comandante | Responsável geral |
| Staff do Comando | Oficial | Função individual (OSeg, OIP, OLig) |
| Seção | Chefe | Coordena uma área funcional (escalonável) |
| Divisão/Grupo | Supervisor | Área geográfica ou funcional |
| Unidade | Líder | Tarefa específica |

> **IMPORTANTE:** A nomenclatura padronizada garante que todos saibam exatamente quem faz o que, independentemente da instituição de origem.`,
  diagrams: [diagramEorCompleta]
};

const comando: Section = {
  id: 'comando',
  slug: 'comando',
  title: '2.2 Comando',
  part: 2,
  order: 2,
  content: `## O Comandante do Incidente (CI)

O Comandante do Incidente é a pessoa com autoridade geral sobre o incidente. É a única posição que sempre deve estar preenchida.

---

### Autoridade do CI

O Comandante do Incidente tem autoridade para:

1. **Estabelecer objetivos** do incidente
2. **Aprovar** o Plano de Ação do Incidente (PAI)
3. **Designar** pessoal-chave da organização
4. **Autorizar** liberação de informações públicas
5. **Ordenar** desmobilização de recursos

---

### Responsabilidades Principais

| Responsabilidade | Descrição |
|-----------------|-----------|
| **Segurança** | Garantir a segurança de todos os envolvidos |
| **Avaliação** | Avaliar prioridades do incidente |
| **Estratégia** | Determinar estratégias e táticas |
| **Coordenação** | Coordenar todas as ações |
| **Recursos** | Gerenciar alocação de recursos |
| **Documentação** | Garantir documentação adequada |

---

### Transferência de Comando

A transferência de comando ocorre quando:

- Chega um oficial mais qualificado
- Mudança de ciclo operacional
- Incidente muda de jurisdição
- Complexidade exige mudança

**Procedimento de Transferência:**

1. O CI que sai prepara um briefing completo
2. Transferência formal é comunicada a todos
3. Novo CI assume e é apresentado à equipe
4. Registro no SCI 201 (Briefing do Incidente)

---

### Comando Unificado

Quando múltiplas agências têm autoridade sobre o incidente, utiliza-se o **Comando Unificado**:

- Vários comandantes trabalham juntos
- Decisões são tomadas em conjunto
- Um único PAI é desenvolvido
- Evita duplicação de esforços

> **NOTA:** No CBMMT, o Comando Unificado é comum em incidentes que envolvem ICMBio, SEMA, Defesa Civil e outras instituições.`,
  diagrams: [diagramComando]
};

const staffComando: Section = {
  id: 'staff-comando',
  slug: 'staff-comando',
  title: '2.3 Staff do Comando',
  part: 2,
  order: 3,
  content: `## Staff do Comando

O Staff do Comando é composto por três posições que se reportam diretamente ao CI e não fazem parte das Seções.

---

### Oficial de Segurança (OSeg)

Responsável pela segurança de todas as operações.

**Funções:**
- Desenvolver o Plano de Segurança (SCI 208)
- Desenvolver a Análise de Risco (SCI 215A)
- Monitorar condições inseguras
- Implementar o sistema LCES
- Investigar acidentes

**Autoridade Especial:**
> O Oficial de Segurança tem autoridade para **PARAR** qualquer operação que considere insegura, sem necessidade de autorização prévia do CI.

---

### Oficial de Informações Públicas (OIP)

Responsável pela comunicação com a mídia e o público.

**Funções:**
- Preparar comunicados à imprensa
- Organizar entrevistas
- Monitorar notícias sobre o incidente
- Coordenar com assessorias de comunicação
- Manter histórico de comunicações

**Regra Fundamental:**
> Toda informação liberada deve ser **aprovada pelo CI** antes da divulgação.

---

### Oficial de Ligação (OLig)

Ponto de contato com outras agências e organizações.

**Funções:**
- Manter contato com agências cooperadoras
- Coordenar recursos de outras instituições
- Representar o CI em reuniões externas
- Manter lista atualizada de contatos
- Resolver questões interinstitucionais

**Agências Comuns em Incidentes Florestais no MT:**
- ICMBio
- SEMA-MT
- IBAMA
- Prefeituras
- Defesa Civil
- Fazendeiros/Proprietários

---

### Quando Ativar o Staff

| Posição | Ativar Quando |
|---------|---------------|
| OSeg | Sempre, desde o início (segurança é prioridade 1) |
| OIP | Há interesse da mídia ou necessidade de comunicação pública |
| OLig | Mais de uma agência está envolvida |`,
  diagrams: [diagramStaffComando]
};

const secaoOperacoes: Section = {
  id: 'secao-operacoes',
  slug: 'secao-operacoes',
  title: '2.4 Seção de Operações',
  part: 2,
  order: 4,
  content: `## Seção de Operações

A Seção de Operações é responsável pela **execução tática** de todas as ações de combate ao incidente.

---

### Chefe da Seção de Operações (CSOp)

O CSOp é geralmente a segunda posição a ser delegada pelo CI, após a carga de trabalho do Comando aumentar.

**Responsabilidades do CSOp:**
- Implementar o PAI
- Designar recursos para atribuições
- Supervisar operações táticas
- Solicitar recursos adicionais
- Manter CI informado do progresso

---

### Organização Tática

A Seção de Operações pode ser organizada em:

**Divisões (Geográficas)**
- Áreas físicas do incidente
- Ex: Divisão Norte, Divisão Sul, Divisão Leste

**Grupos (Funcionais)**
- Funções específicas independente de área
- Ex: Grupo Aéreo, Grupo de Máquinas, Grupo de Rescaldo

---

### Hierarquia Tática

| Nível | Liderado Por | Contém |
|-------|--------------|--------|
| Seção | CSOp | Até 5 Divisões/Grupos |
| Divisão/Grupo | Supervisor | Até 5 Equipes de Intervenção |
| Força-Tarefa | Líder | Combinação de recursos diferentes |
| Equipe de Intervenção | Líder | Recursos do mesmo tipo |

---

### Operações Aéreas

Em incidentes com recursos aéreos, cria-se o **Grupo de Operações Aéreas**:

- Coordenador de Operações Aéreas
- Helibase/Helispot
- Base de Aviões

**Formulários Específicos:**
- SCI 220 - Resumo de Operações Aéreas

---

### Reunião de Tática

O CSOp conduz a **Reunião Tática** durante o Ciclo P para:

1. Apresentar estratégias e táticas
2. Definir atribuições de trabalho
3. Identificar necessidades de recursos
4. Coordenar com outras Seções`,
  diagrams: [diagramSecaoOperacoes]
};

const secaoPlanejamento: Section = {
  id: 'secao-planejamento',
  slug: 'secao-planejamento',
  title: '2.5 Seção de Planejamento',
  part: 2,
  order: 5,
  content: `## Seção de Planejamento

A Seção de Planejamento é responsável pela **coleta, avaliação e disseminação de informações** sobre o incidente, além de preparar o PAI.

---

### Chefe da Seção de Planejamento (CSPlan)

**Responsabilidades:**
- Coletar e analisar informações do incidente
- Supervisar a preparação do PAI
- Conduzir reuniões de planejamento
- Projetar necessidades futuras
- Manter documentação do incidente
- Planejar a desmobilização

---

### Unidades da Seção de Planejamento

#### Unidade de Recursos
- Check-in de todos os recursos
- Manutenção dos Cartões T
- Acompanhamento do status de recursos

#### Unidade de Situação
- Coleta de informações de campo
- Atualização de mapas
- Projeções do comportamento do incidente
- Preparação de displays de situação

#### Unidade de Documentação
- Manter arquivos completos do incidente
- Registro de atividades (SCI 214)
- Duplicação e distribuição de documentos
- Preservação de histórico

#### Unidade de Desmobilização
- Preparar Plano de Desmobilização
- Coordenar liberação de recursos
- Garantir verificações de checkout

---

### Especialistas Técnicos

O CSPlan pode solicitar **Especialistas Técnicos** para:

- Comportamento do fogo
- Meteorologia
- Meio ambiente
- Estruturas
- Outros conforme necessidade

---

### Produtos da Seção

| Produto | Descrição |
|---------|-----------|
| PAI | Plano de Ação do Incidente |
| SCI 209 | Resumo de Status do Incidente |
| Mapas | Situação, operações, evacuação |
| Projeções | Comportamento esperado do incidente |`,
  diagrams: [diagramSecaoPlanejamento]
};

const secaoLogistica: Section = {
  id: 'secao-logistica',
  slug: 'secao-logistica',
  title: '2.6 Seção de Logística',
  part: 2,
  order: 6,
  content: `## Seção de Logística

A Seção de Logística é responsável por **fornecer instalações, serviços e materiais** para o incidente.

---

### Chefe da Seção de Logística (CSLog)

**Responsabilidades:**
- Gerenciar todas as necessidades logísticas
- Supervisar unidades subordinadas
- Coordenar com CSPlan sobre necessidades futuras
- Garantir bem-estar das equipes

---

### Estrutura da Seção

A Seção de Logística pode ser organizada em dois ramos:

#### Ramo de Serviços
Fornece serviços diretos ao pessoal e equipamentos.

| Unidade | Função |
|---------|--------|
| **Comunicações** | Rádios, frequências, manutenção |
| **Médica** | Atendimento de emergência, prevenção |
| **Alimentação** | Refeições, hidratação, áreas de descanso |

#### Ramo de Apoio
Fornece materiais e infraestrutura.

| Unidade | Função |
|---------|--------|
| **Suprimentos** | Pedidos, recebimento, armazenamento |
| **Instalações** | Acampamentos, áreas de pouso, PC |
| **Transporte** | Veículos, combustível, manutenção |

---

### Planos da Seção

A Logística produz componentes do PAI:

- **SCI 205** - Plano de Comunicações
- **SCI 206** - Plano Médico

---

### Considerações no MT

Em operações de incêndio florestal no Mato Grosso, considerar:

- Longas distâncias até pontos de apoio
- Calor extremo exige mais hidratação
- Áreas remotas dificultam comunicação
- Necessidade de pontos de pouso para helicópteros`,
  diagrams: [diagramSecaoLogistica]
};

const secaoAdmin: Section = {
  id: 'secao-admin',
  slug: 'secao-admin',
  title: '2.7 Seção Administrativa/Finanças',
  part: 2,
  order: 7,
  content: `## Seção Administrativa/Finanças

A Seção Admin/Finanças é responsável por **rastrear custos, tempos e questões administrativas** do incidente.

> **NOTA:** Esta seção só é ativada quando o incidente envolve custos significativos ou questões administrativas complexas. É opcional para incidentes menores.

---

### Chefe da Seção Admin/Finanças (CSAdmin)

**Responsabilidades:**
- Gerenciar todas as questões financeiras
- Manter registros de custos
- Processar questões de pessoal
- Coordenar com órgãos financeiros

---

### Unidades da Seção

#### Unidade de Tempo
- Registrar horas trabalhadas de pessoal
- Controlar uso de equipamentos
- Manter formulários de tempo
- Interface com sistemas de RH

#### Unidade de Aquisições
- Processar compras de emergência
- Gerenciar contratos
- Alugar equipamentos necessários
- Documentar todas aquisições

#### Unidade de Custos
- Consolidar informações de custos
- Preparar estimativas de custos
- Manter registro de gastos
- Fornecer relatórios financeiros

#### Unidade de Compensação/Reclamações
- Investigar acidentes
- Processar reclamações por danos
- Manter registros para ações legais
- Coordenar com seguradoras

---

### Quando Ativar

Ativar a Seção Admin/Finanças quando:

- Incidente dura mais de um período operacional
- Há contratação de recursos externos
- Custos significativos estão envolvidos
- Há potencial para ações legais ou compensatórias

---

### Integração com CBMMT

No contexto CBMMT, a Seção coordena:

- Diárias de pessoal
- Horas extras
- Ressarcimento de fazendeiros
- Custos de combustível e alimentação
- Contratos de maquinário`,
  diagrams: [diagramSecaoAdmin]
};

const amplitudeControle: Section = {
  id: 'amplitude-controle',
  slug: 'amplitude-controle',
  title: '2.8 Amplitude de Controle',
  part: 2,
  order: 8,
  content: `## Amplitude de Controle

A amplitude de controle é o número de subordinados que um supervisor pode gerenciar efetivamente.

---

### Razão Recomendada

| Situação | Razão |
|----------|-------|
| **Ideal** | 1 supervisor para 5 subordinados (1:5) |
| **Aceitável** | 1:3 a 1:7 |
| **Problemático** | Mais de 1:7 |

---

### Por Que é Importante

Amplitude de controle adequada garante:

1. **Comunicação efetiva** entre níveis
2. **Segurança** através de supervisão adequada
3. **Responsabilização** clara
4. **Decisões rápidas** quando necessário
5. **Bem-estar** das equipes

---

### Quando Expandir a Estrutura

Se um supervisor tem mais de 7 subordinados diretos:

**Opção 1: Criar nível intermediário**
- Agrupar recursos em equipes
- Designar líderes de equipe

**Opção 2: Dividir área**
- Criar novas Divisões ou Grupos
- Redistribuir recursos

---

### Sinais de Problema

Indicadores de amplitude excessiva:

- Supervisor não consegue acompanhar todos
- Comunicações frequentemente perdidas
- Decisões atrasadas
- Acidentes ou quase-acidentes aumentam
- Moral da equipe cai

---

### Exemplo Prático

**Situação Problemática:**
Um CSOp com 12 IRTs reportando diretamente.

**Solução:**
Criar 3 Divisões com 4 IRTs cada, com um Supervisor de Divisão para cada.

| Antes | Depois |
|-------|--------|
| CSOp → 12 IRTs | CSOp → 3 Supervisores → 4 IRTs cada |
| Razão 1:12 | Razão 1:3 (CSOp) e 1:4 (Supervisores) |`,
  diagrams: [diagramAmplitudeControle]
};

// ----------------------------------------------------------------------------
// EXPORTS
// ----------------------------------------------------------------------------

export const parteIISections: Section[] = [
  visaoGeralEor,
  comando,
  staffComando,
  secaoOperacoes,
  secaoPlanejamento,
  secaoLogistica,
  secaoAdmin,
  amplitudeControle
];

export const parteIISectionMap: Record<string, Section> = {
  'visao-geral-eor': visaoGeralEor,
  'comando': comando,
  'staff-comando': staffComando,
  'secao-operacoes': secaoOperacoes,
  'secao-planejamento': secaoPlanejamento,
  'secao-logistica': secaoLogistica,
  'secao-admin': secaoAdmin,
  'amplitude-controle': amplitudeControle
};
