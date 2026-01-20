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
  description: 'Os 5 elementos funcionais do SCI e suas subdivisoes',
  code: `flowchart TB
    subgraph COMANDO["COMANDO"]
        CI["Comandante do<br/>Incidente"]
    end

    subgraph STAFF["STAFF DO COMANDO"]
        direction LR
        OSEG["Oficial de<br/>Seguranca"]
        OIP["Oficial de<br/>Informacoes<br/>Publicas"]
        OLIG["Oficial de<br/>Ligacao"]
    end

    subgraph SECOES["SECOES PRINCIPAIS"]
        direction LR
        SOP["Secao de<br/>Operacoes"]
        SPLAN["Secao de<br/>Planejamento"]
        SLOG["Secao de<br/>Logistica"]
        SADM["Secao<br/>Admin/Financas"]
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
  title: 'Funcoes do Comandante do Incidente',
  type: 'flowchart',
  description: 'Responsabilidades e autoridade do CI',
  code: `flowchart TB
    subgraph CI_RESP["COMANDANTE DO INCIDENTE"]
        direction TB

        subgraph AUTH["AUTORIDADE"]
            A1["Estabelecer objetivos"]
            A2["Aprovar PAI"]
            A3["Designar pessoal-chave"]
            A4["Autorizar liberacao<br/>de informacoes"]
        end

        subgraph RESP["RESPONSABILIDADES"]
            R1["Seguranca de todos"]
            R2["Avaliar prioridades"]
            R3["Determinar estrategias"]
            R4["Coordenar acoes"]
            R5["Gerenciar recursos"]
        end

        subgraph TRANS["TRANSFERENCIA"]
            T1["Briefing completo"]
            T2["Passagem formal"]
            T3["Notificacao a todos"]
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
  title: 'Staff do Comando - Tres Oficiais',
  type: 'flowchart',
  description: 'Oficial de Seguranca, Informacoes Publicas e Ligacao',
  code: `flowchart LR
    subgraph OSEG["OFICIAL DE SEGURANCA"]
        direction TB
        S1["Desenvolver Plano<br/>de Seguranca"]
        S2["Monitorar condicoes<br/>inseguras"]
        S3["Implementar LCES"]
        S4["Autoridade para<br/>PARAR operacoes"]
    end

    subgraph OIP["OFICIAL DE INFORMACOES"]
        direction TB
        I1["Comunicados<br/>a imprensa"]
        I2["Informacoes ao<br/>publico"]
        I3["Coordenar<br/>entrevistas"]
        I4["Aprovar com CI"]
    end

    subgraph OLIG["OFICIAL DE LIGACAO"]
        direction TB
        L1["Contato com<br/>outras agencias"]
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
  title: 'Secao de Operacoes - Estrutura',
  type: 'flowchart',
  description: 'Organizacao da Secao de Operacoes com Divisoes e Grupos',
  code: `flowchart TB
    CSOP["Chefe da Secao<br/>de Operacoes<br/>(CSOp)"]

    subgraph DIVISOES["DIVISOES GEOGRAFICAS"]
        direction LR
        DN["Divisao<br/>Norte"]
        DS["Divisao<br/>Sul"]
        DL["Divisao<br/>Leste"]
    end

    subgraph GRUPOS["GRUPOS FUNCIONAIS"]
        direction LR
        GA["Grupo<br/>Aereo"]
        GM["Grupo<br/>Maquinas"]
        GR["Grupo<br/>Rescaldo"]
    end

    subgraph RECURSOS["RECURSOS TATICOS"]
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
  title: 'Secao de Planejamento - Unidades',
  type: 'flowchart',
  description: 'As 4 unidades da Secao de Planejamento',
  code: `flowchart TB
    CSPLAN["Chefe da Secao<br/>de Planejamento<br/>(CSPlan)"]

    subgraph UNIDADES["UNIDADES"]
        direction TB

        subgraph UREC["UNIDADE DE RECURSOS"]
            UR1["Check-in de recursos"]
            UR2["Cartoes T"]
            UR3["Status de recursos"]
        end

        subgraph USIT["UNIDADE DE SITUACAO"]
            US1["Mapas de situacao"]
            US2["Projecoes"]
            US3["Coleta de dados"]
        end

        subgraph UDOC["UNIDADE DE DOCUMENTACAO"]
            UD1["Arquivos do incidente"]
            UD2["SCI 214 - Registro"]
            UD3["Historico"]
        end

        subgraph UDEM["UNIDADE DE DESMOBILIZACAO"]
            UDM1["Plano de desmob"]
            UDM2["Check-out"]
            UDM3["Liberacao"]
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
  title: 'Secao de Logistica - Ramos e Unidades',
  type: 'flowchart',
  description: 'Organizacao da Secao de Logistica',
  code: `flowchart TB
    CSLOG["Chefe da Secao<br/>de Logistica<br/>(CSLog)"]

    subgraph RAMO_SERVICOS["RAMO DE SERVICOS"]
        direction TB
        UCOM["Unidade de<br/>Comunicacoes"]
        UMED["Unidade<br/>Medica"]
        UALIM["Unidade de<br/>Alimentacao"]
    end

    subgraph RAMO_APOIO["RAMO DE APOIO"]
        direction TB
        USUP["Unidade de<br/>Suprimentos"]
        UINST["Unidade de<br/>Instalacoes"]
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
  title: 'Secao Administrativa/Financas',
  type: 'flowchart',
  description: 'Unidades da Secao Admin/Financas',
  code: `flowchart TB
    CSADM["Chefe da Secao<br/>Admin/Financas<br/>(CSAdmin)"]

    subgraph UNIDADES["UNIDADES"]
        direction LR

        subgraph UTEMP["UNIDADE DE TEMPO"]
            UT1["Registro de horas"]
            UT2["Controle pessoal"]
            UT3["Equipamentos"]
        end

        subgraph UAQUI["UNIDADE DE AQUISICOES"]
            UA1["Compras"]
            UA2["Contratos"]
            UA3["Aluguel equip."]
        end

        subgraph UCUST["UNIDADE DE CUSTOS"]
            UC1["Registro custos"]
            UC2["Analise gastos"]
            UC3["Relatorios"]
        end

        subgraph UCOMP["UNIDADE DE COMPENSACAO"]
            UCP1["Acidentes"]
            UCP2["Danos"]
            UCP3["Reclamacoes"]
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
  description: 'Razao de supervisao recomendada: 1 para 3-7',
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
// SECOES DA PARTE II
// ----------------------------------------------------------------------------

const visaoGeralEor: Section = {
  id: 'visao-geral-eor',
  slug: 'visao-geral-eor',
  title: '2.1 Visao Geral da Estrutura Organizacional',
  part: 2,
  order: 1,
  content: `## Estrutura Organizacional de Resposta (EOR)

A Estrutura Organizacional de Resposta e a forma como o incidente e organizado para permitir uma gestao eficiente. O SCI utiliza uma estrutura modular que se expande ou contrai conforme a necessidade.

---

### Os 5 Elementos Funcionais

O SCI e composto por **5 elementos funcionais** que cobrem todas as necessidades de gestao de um incidente:

| Elemento | Responsavel | Funcao Principal |
|----------|-------------|------------------|
| **Comando** | Comandante do Incidente (CI) | Direcao geral e tomada de decisao |
| **Operacoes** | Chefe de Operacoes (CSOp) | Execucao tatica das acoes |
| **Planejamento** | Chefe de Planejamento (CSPlan) | Coleta de informacoes e planejamento |
| **Logistica** | Chefe de Logistica (CSLog) | Suporte e recursos |
| **Admin/Financas** | Chefe Admin (CSAdmin) | Custos e aspectos administrativos |

---

### Principio da Modularidade

A estrutura se adapta ao tamanho do incidente:

**Incidente Simples (Nivel 1)**
- Apenas o CI, que acumula todas as funcoes

**Incidente em Crescimento (Nivel 2)**
- CI delega funcoes conforme necessario
- Primeiro a ser delegado: Operacoes

**Incidente Complexo (Nivel 3-4)**
- Estrutura completa ativada
- Divisoes e Grupos criados
- Todas as secoes com pessoal designado

---

### Nomenclatura Padrao

| Nivel | Titulo | Funcao |
|-------|--------|--------|
| Comando | Comandante | Responsavel geral |
| Secao | Chefe | Coordena uma area funcional |
| Ramo | Diretor | Subdivisao de Secao |
| Divisao/Grupo | Supervisor | Area geografica ou funcional |
| Unidade | Lider | Tarefa especifica |

> **IMPORTANTE:** A nomenclatura padronizada garante que todos saibam exatamente quem faz o que, independentemente da instituicao de origem.`,
  diagrams: [diagramEorCompleta]
};

const comando: Section = {
  id: 'comando',
  slug: 'comando',
  title: '2.2 Comando',
  part: 2,
  order: 2,
  content: `## O Comandante do Incidente (CI)

O Comandante do Incidente e a pessoa com autoridade geral sobre o incidente. E a unica posicao que sempre deve estar preenchida.

---

### Autoridade do CI

O Comandante do Incidente tem autoridade para:

1. **Estabelecer objetivos** do incidente
2. **Aprovar** o Plano de Acao do Incidente (PAI)
3. **Designar** pessoal-chave da organizacao
4. **Autorizar** liberacao de informacoes publicas
5. **Ordenar** desmobilizacao de recursos

---

### Responsabilidades Principais

| Responsabilidade | Descricao |
|-----------------|-----------|
| **Seguranca** | Garantir a seguranca de todos os envolvidos |
| **Avaliacao** | Avaliar prioridades do incidente |
| **Estrategia** | Determinar estrategias e taticas |
| **Coordenacao** | Coordenar todas as acoes |
| **Recursos** | Gerenciar alocacao de recursos |
| **Documentacao** | Garantir documentacao adequada |

---

### Transferencia de Comando

A transferencia de comando ocorre quando:

- Chega um oficial mais qualificado
- Mudanca de turno operacional
- Incidente muda de jurisdicao
- Complexidade exige mudanca

**Procedimento de Transferencia:**

1. O CI que sai prepara um briefing completo
2. Transferencia formal e comunicada a todos
3. Novo CI assume e e apresentado a equipe
4. Registro no SCI 201 (Briefing do Incidente)

---

### Comando Unificado

Quando multiplas agencias tem autoridade sobre o incidente, utiliza-se o **Comando Unificado**:

- Varios comandantes trabalham juntos
- Decisoes sao tomadas em conjunto
- Um unico PAI e desenvolvido
- Evita duplicacao de esforcos

> **NOTA:** No CBMMT, o Comando Unificado e comum em incidentes que envolvem ICMBio, SEMA, Defesa Civil e outras instituicoes.`,
  diagrams: [diagramComando]
};

const staffComando: Section = {
  id: 'staff-comando',
  slug: 'staff-comando',
  title: '2.3 Staff do Comando',
  part: 2,
  order: 3,
  content: `## Staff do Comando

O Staff do Comando e composto por tres posicoes que se reportam diretamente ao CI e nao fazem parte das Secoes.

---

### Oficial de Seguranca (OSeg)

Responsavel pela seguranca de todas as operacoes.

**Funcoes:**
- Desenvolver o Plano de Seguranca (SCI 208)
- Desenvolver a Analise de Risco (SCI 215A)
- Monitorar condicoes inseguras
- Implementar o sistema LCES
- Investigar acidentes

**Autoridade Especial:**
> O Oficial de Seguranca tem autoridade para **PARAR** qualquer operacao que considere insegura, sem necessidade de autorizacao previa do CI.

---

### Oficial de Informacoes Publicas (OIP)

Responsavel pela comunicacao com a midia e o publico.

**Funcoes:**
- Preparar comunicados a imprensa
- Organizar entrevistas
- Monitorar noticias sobre o incidente
- Coordenar com assessorias de comunicacao
- Manter historico de comunicacoes

**Regra Fundamental:**
> Toda informacao liberada deve ser **aprovada pelo CI** antes da divulgacao.

---

### Oficial de Ligacao (OLig)

Ponto de contato com outras agencias e organizacoes.

**Funcoes:**
- Manter contato com agencias cooperadoras
- Coordenar recursos de outras instituicoes
- Representar o CI em reunioes externas
- Manter lista atualizada de contatos
- Resolver questoes interinstitucionais

**Agencias Comuns em Incidentes Florestais no MT:**
- ICMBio
- SEMA-MT
- IBAMA
- Prefeituras
- Defesa Civil
- Fazendeiros/Proprietarios

---

### Quando Ativar o Staff

| Posicao | Ativar Quando |
|---------|---------------|
| OSeg | Sempre, desde o inicio (seguranca e prioridade 1) |
| OIP | Ha interesse da midia ou necessidade de comunicacao publica |
| OLig | Mais de uma agencia esta envolvida |`,
  diagrams: [diagramStaffComando]
};

const secaoOperacoes: Section = {
  id: 'secao-operacoes',
  slug: 'secao-operacoes',
  title: '2.4 Secao de Operacoes',
  part: 2,
  order: 4,
  content: `## Secao de Operacoes

A Secao de Operacoes e responsavel pela **execucao tatica** de todas as acoes de combate ao incidente.

---

### Chefe da Secao de Operacoes (CSOp)

O CSOp e geralmente a segunda posicao a ser delegada pelo CI, apos a carga de trabalho do Comando aumentar.

**Responsabilidades do CSOp:**
- Implementar o PAI
- Designar recursos para atribuicoes
- Supervisar operacoes taticas
- Solicitar recursos adicionais
- Manter CI informado do progresso

---

### Organizacao Tatica

A Secao de Operacoes pode ser organizada em:

**Divisoes (Geograficas)**
- Areas fisicas do incidente
- Ex: Divisao Norte, Divisao Sul, Divisao Leste

**Grupos (Funcionais)**
- Funcoes especificas independente de area
- Ex: Grupo Aereo, Grupo de Maquinas, Grupo de Rescaldo

---

### Hierarquia Tatica

| Nivel | Liderado Por | Contem |
|-------|--------------|--------|
| Secao | CSOp | Ate 5 Divisoes/Grupos |
| Divisao/Grupo | Supervisor | Ate 5 Equipes de Intervencao |
| Forca-Tarefa | Lider | Combinacao de recursos diferentes |
| Equipe de Intervencao | Lider | Recursos do mesmo tipo |

---

### Operacoes Aereas

Em incidentes com recursos aereos, cria-se o **Grupo de Operacoes Aereas**:

- Coordenador de Operacoes Aereas
- Helibase/Helispot
- Base de Avioes

**Formularios Especificos:**
- SCI 220 - Resumo de Operacoes Aereas

---

### Reuniao de Tatica

O CSOp conduz a **Reuniao Tatica** durante o Ciclo P para:

1. Apresentar estrategias e taticas
2. Definir atribuicoes de trabalho
3. Identificar necessidades de recursos
4. Coordenar com outras Secoes`,
  diagrams: [diagramSecaoOperacoes]
};

const secaoPlanejamento: Section = {
  id: 'secao-planejamento',
  slug: 'secao-planejamento',
  title: '2.5 Secao de Planejamento',
  part: 2,
  order: 5,
  content: `## Secao de Planejamento

A Secao de Planejamento e responsavel pela **coleta, avaliacao e disseminacao de informacoes** sobre o incidente, alem de preparar o PAI.

---

### Chefe da Secao de Planejamento (CSPlan)

**Responsabilidades:**
- Coletar e analisar informacoes do incidente
- Supervisar a preparacao do PAI
- Conduzir reunioes de planejamento
- Projetar necessidades futuras
- Manter documentacao do incidente
- Planejar a desmobilizacao

---

### Unidades da Secao de Planejamento

#### Unidade de Recursos
- Check-in de todos os recursos
- Manutencao dos Cartoes T
- Acompanhamento do status de recursos

#### Unidade de Situacao
- Coleta de informacoes de campo
- Atualizacao de mapas
- Projecoes do comportamento do incidente
- Preparacao de displays de situacao

#### Unidade de Documentacao
- Manter arquivos completos do incidente
- Registro de atividades (SCI 214)
- Duplicacao e distribuicao de documentos
- Preservacao de historico

#### Unidade de Desmobilizacao
- Preparar Plano de Desmobilizacao
- Coordenar liberacao de recursos
- Garantir verificacoes de checkout

---

### Especialistas Tecnicos

O CSPlan pode solicitar **Especialistas Tecnicos** para:

- Comportamento do fogo
- Meteorologia
- Meio ambiente
- Estruturas
- Outros conforme necessidade

---

### Produtos da Secao

| Produto | Descricao |
|---------|-----------|
| PAI | Plano de Acao do Incidente |
| SCI 209 | Resumo de Status do Incidente |
| Mapas | Situacao, operacoes, evacuacao |
| Projecoes | Comportamento esperado do incidente |`,
  diagrams: [diagramSecaoPlanejamento]
};

const secaoLogistica: Section = {
  id: 'secao-logistica',
  slug: 'secao-logistica',
  title: '2.6 Secao de Logistica',
  part: 2,
  order: 6,
  content: `## Secao de Logistica

A Secao de Logistica e responsavel por **fornecer instalacoes, servicos e materiais** para o incidente.

---

### Chefe da Secao de Logistica (CSLog)

**Responsabilidades:**
- Gerenciar todas as necessidades logisticas
- Supervisar unidades subordinadas
- Coordenar com CSPlan sobre necessidades futuras
- Garantir bem-estar das equipes

---

### Estrutura da Secao

A Secao de Logistica pode ser organizada em dois ramos:

#### Ramo de Servicos
Fornece servicos diretos ao pessoal e equipamentos.

| Unidade | Funcao |
|---------|--------|
| **Comunicacoes** | Radios, frequencias, manutencao |
| **Medica** | Atendimento de emergencia, prevencao |
| **Alimentacao** | Refeicoes, hidratacao, areas de descanso |

#### Ramo de Apoio
Fornece materiais e infraestrutura.

| Unidade | Funcao |
|---------|--------|
| **Suprimentos** | Pedidos, recebimento, armazenamento |
| **Instalacoes** | Acampamentos, areas de pouso, PC |
| **Transporte** | Veiculos, combustivel, manutencao |

---

### Planos da Secao

A Logistica produz componentes do PAI:

- **SCI 205** - Plano de Comunicacoes
- **SCI 206** - Plano Medico

---

### Consideracoes no MT

Em operacoes de incendio florestal no Mato Grosso, considerar:

- Longas distancias ate pontos de apoio
- Calor extremo exige mais hidratacao
- Areas remotas dificultam comunicacao
- Necessidade de pontos de pouso para helicopteros`,
  diagrams: [diagramSecaoLogistica]
};

const secaoAdmin: Section = {
  id: 'secao-admin',
  slug: 'secao-admin',
  title: '2.7 Secao Administrativa/Financas',
  part: 2,
  order: 7,
  content: `## Secao Administrativa/Financas

A Secao Admin/Financas e responsavel por **rastrear custos, tempos e questoes administrativas** do incidente.

> **NOTA:** Esta secao so e ativada quando o incidente envolve custos significativos ou questoes administrativas complexas. E opcional para incidentes menores.

---

### Chefe da Secao Admin/Financas (CSAdmin)

**Responsabilidades:**
- Gerenciar todas as questoes financeiras
- Manter registros de custos
- Processar questoes de pessoal
- Coordenar com orgaos financeiros

---

### Unidades da Secao

#### Unidade de Tempo
- Registrar horas trabalhadas de pessoal
- Controlar uso de equipamentos
- Manter formularios de tempo
- Interface com sistemas de RH

#### Unidade de Aquisicoes
- Processar compras de emergencia
- Gerenciar contratos
- Alugar equipamentos necessarios
- Documentar todas aquisicoes

#### Unidade de Custos
- Consolidar informacoes de custos
- Preparar estimativas de custos
- Manter registro de gastos
- Fornecer relatorios financeiros

#### Unidade de Compensacao/Reclamacoes
- Investigar acidentes
- Processar reclamacoes por danos
- Manter registros para acoes legais
- Coordenar com seguradoras

---

### Quando Ativar

Ativar a Secao Admin/Financas quando:

- Incidente dura mais de um periodo operacional
- Ha contratacao de recursos externos
- Custos significativos estao envolvidos
- Ha potencial para acoes legais ou compensatorias

---

### Integracao com CBMMT

No contexto CBMMT, a Secao coordena:

- Diarias de pessoal
- Horas extras
- Ressarcimento de fazendeiros
- Custos de combustivel e alimentacao
- Contratos de maquinario`,
  diagrams: [diagramSecaoAdmin]
};

const amplitudeControle: Section = {
  id: 'amplitude-controle',
  slug: 'amplitude-controle',
  title: '2.8 Amplitude de Controle',
  part: 2,
  order: 8,
  content: `## Amplitude de Controle

A amplitude de controle e o numero de subordinados que um supervisor pode gerenciar efetivamente.

---

### Razao Recomendada

| Situacao | Razao |
|----------|-------|
| **Ideal** | 1 supervisor para 5 subordinados (1:5) |
| **Aceitavel** | 1:3 a 1:7 |
| **Problematico** | Mais de 1:7 |

---

### Por Que e Importante

Amplitude de controle adequada garante:

1. **Comunicacao efetiva** entre niveis
2. **Seguranca** atraves de supervisao adequada
3. **Responsabilizacao** clara
4. **Decisoes rapidas** quando necessario
5. **Bem-estar** das equipes

---

### Quando Expandir a Estrutura

Se um supervisor tem mais de 7 subordinados diretos:

**Opcao 1: Criar nivel intermediario**
- Agrupar recursos em equipes
- Designar lideres de equipe

**Opcao 2: Dividir area**
- Criar novas Divisoes ou Grupos
- Redistribuir recursos

---

### Sinais de Problema

Indicadores de amplitude excessiva:

- Supervisor nao consegue acompanhar todos
- Comunicacoes frequentemente perdidas
- Decisoes atrasadas
- Acidentes ou quase-acidentes aumentam
- Moral da equipe cai

---

### Exemplo Pratico

**Situacao Problematica:**
Um CSOp com 12 IRTs reportando diretamente.

**Solucao:**
Criar 3 Divisoes com 4 IRTs cada, com um Supervisor de Divisao para cada.

| Antes | Depois |
|-------|--------|
| CSOp → 12 IRTs | CSOp → 3 Supervisores → 4 IRTs cada |
| Razao 1:12 | Razao 1:3 (CSOp) e 1:4 (Supervisores) |`,
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
