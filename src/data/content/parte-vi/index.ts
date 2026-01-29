import type { Section, Diagram } from '@/data/types';

// ============================================================
// PARTE VI - DESMOBILIZAÇÃO E ENCERRAMENTO
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS MERMAID
// ------------------------------------------------------------

const diagramFasesDesmobilizacao: Diagram = {
  id: 'fases-desmobilizacao',
  title: 'Fases da Desmobilização',
  type: 'flowchart',
  description: 'Processo completo de desmobilização por fases',
  code: `flowchart TB
    subgraph fase1["FASE 1 - PLANEJAMENTO"]
        P1["Incidente<br/>Estabiliza"]
        P2["CI Decide<br/>Iniciar Desmob"]
        P3["Plano de<br/>Desmobilização"]
    end

    subgraph fase2["FASE 2 - PRIORIZAÇÃO"]
        PR1["CSOp Identifica<br/>Recursos Excedentes"]
        PR2["Definição de<br/>Prioridades"]
        PR3["Lista de<br/>Liberações"]
    end

    subgraph fase3["FASE 3 - EXECUÇÃO"]
        E1["Notificação<br/>aos Recursos"]
        E2["Check-Out<br/>SCI 221"]
        E3["Liberação<br/>Autorizada"]
    end

    subgraph fase4["FASE 4 - ENCERRAMENTO"]
        EN1["Últimas<br/>Liberações"]
        EN2["Documentação<br/>Final"]
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
  title: 'Prioridades de Liberação de Recursos',
  type: 'flowchart',
  description: 'Ordem típica de liberação por tipo de recurso',
  code: `flowchart LR
    subgraph p1["1a PRIORIDADE"]
        R1["Recursos Locais<br/>Respondedores Iniciais<br/>Cooperadores Locais"]
    end

    subgraph p2["2a PRIORIDADE"]
        R2["Recursos Especializados<br/>EIAOPs de Outras Regiões<br/>GAvBM"]
    end

    subgraph p3["3a PRIORIDADE"]
        R3["Recursos de Apoio<br/>Outras Regiões"]
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
  description: 'Fluxo de liberação de recurso',
  code: `flowchart TB
    inicio["Recurso Recebe<br/>SCI 221"]

    subgraph estacoes["ESTAÇÕES DE CHECK-OUT"]
        direction LR
        E1["Comunicações<br/>Devolução Rádios"]
        E2["Instalações<br/>Área Limpa"]
        E3["Suprimentos<br/>Ferramentas"]
        E4["Suporte Terrestre<br/>Inspeção Viatura"]
        E5["Admin/Finanças<br/>Registro Tempo"]
        E6["OSeg<br/>Avaliação Pessoal"]
    end

    verificacao["Líder Desmob<br/>Verifica SCI 221"]
    liberacao["Liberação<br/>Autorizada"]
    saida["Recurso<br/>Desmobilizado"]

    inicio --> E1
    E1 --> E2 --> E3 --> E4 --> E5 --> E6
    E6 --> verificacao
    verificacao -->|Completo| liberacao
    verificacao -->|Pendências| inicio
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
  title: 'Responsabilidades na Desmobilização',
  type: 'flowchart',
  description: 'Papel de cada função no processo',
  code: `flowchart TB
    subgraph DESMOB["DESMOBILIZAÇÃO - RESPONSABILIDADES"]
        direction TB
    end

    subgraph CI_RESP["CI - COMANDANTE"]
        CI1["Aprovação Final"]
        CI2["Define Prioridades"]
        CI3["Autoriza Liberações"]
    end

    subgraph SPLAN["SPlan - PLANEJAMENTO"]
        SP1["Desenvolve Plano"]
        SP2["Coordena Processo"]
        SP3["Preenche SCI 221"]
    end

    subgraph SOP["SOp - OPERAÇÕES"]
        SO1["Identifica Excedentes"]
        SO2["Avalia Necessidades"]
        SO3["Lista Recursos"]
    end

    subgraph SLOG["SLog - LOGÍSTICA"]
        SL1["Organiza Transporte"]
        SL2["Inspeciona Viaturas"]
        SL3["Coleta Equipamentos"]
    end

    subgraph SADMIN["SAdmin - ADMIN/FIN"]
        SA1["Registro de Horas"]
        SA2["Processa Reclamações"]
        SA3["Custos Finais"]
    end

    subgraph OSEG["OSeg - SEGURANÇA"]
        OS1["Avalia Pessoal"]
        OS2["Trabalho/Descanso"]
        OS3["Aptidão Viagem"]
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
    subgraph extincao["EXTINÇÃO FINAL"]
        EX1["100% Perímetro<br/>Frio"]
        EX2["Rescaldo<br/>Completo"]
        EX3["Verificação<br/>Final"]
    end

    subgraph liberacao["ÚLTIMAS LIBERAÇÕES"]
        L1["Recursos de<br/>Patrulhamento"]
        L2["Staff<br/>(CSLog, CSPlan)"]
        L3["CI<br/>(Último a Sair)"]
    end

    subgraph admin["ENCERRAMENTO ADMIN"]
        A1["Documentação<br/>Final"]
        A2["Prestação<br/>de Contas"]
        A3["Comunicação<br/>Encerramento"]
    end

    subgraph pos["PÓS-INCIDENTE"]
        P1["Reunião<br/>Autoridades"]
        P2["AAR<br/>Revisão Pós-Ação"]
        P3["Lições<br/>Aprendidas"]
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
  title: 'Estrutura da Revisão Pós-Ação (AAR)',
  type: 'flowchart',
  description: 'As 5 perguntas-chave do AAR',
  code: `flowchart TB
    subgraph aar["AFTER ACTION REVIEW - AAR"]
        direction TB
        Q1["1. O QUE ESTAVA<br/>PLANEJADO?<br/>Objetivos, plano, expectativas"]
        Q2["2. O QUE REALMENTE<br/>ACONTECEU?<br/>Execução, resultados"]
        Q3["3. POR QUE HOUVE<br/>DIFERENÇAS?<br/>Desvios, fatores, falhas"]
        Q4["4. O QUE<br/>APRENDEMOS?<br/>Funcionou bem, não funcionou"]
        Q5["5. O QUE VAMOS<br/>FAZER?<br/>Mudanças, treinamentos"]
    end

    Q1 --> Q2 --> Q3 --> Q4 --> Q5

    subgraph resultado["RESULTADO"]
        R1["Relatório AAR"]
        R2["Recomendações"]
        R3["Plano de Ação"]
    end

    Q5 --> R1 --> R2 --> R3

    classDef qStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef rStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class Q1,Q2,Q3,Q4,Q5 qStyle
    class R1,R2,R3 rStyle`
};

// ------------------------------------------------------------
// SEÇÕES DE CONTEÚDO
// ------------------------------------------------------------

const conceitosDesmobilizacao: Section = {
  id: 'conceitos-desmobilizacao',
  slug: 'conceitos-desmobilizacao',
  title: '28. Conceitos de Desmobilização',
  part: 6,
  order: 1,
  content: `## O Que É Desmobilização

**DESMOBILIZAÇÃO:** Liberação ordenada, segura e eficiente de recursos empenhados em um incidente, retornando-os ao seu local e condição originais.

### Por Que É Importante

| Aspecto | Importância |
|---------|-------------|
| **Eficiência** | Recursos não devem permanecer no incidente além do necessário |
| **Prontidão** | Recursos liberados podem responder a outros incidentes |
| **Custos** | Redução de despesas operacionais ao liberar recursos excedentes |
| **Bem-estar** | Permite descanso e recuperação de pessoal |
| **Prestação de Contas** | Documentação adequada de emprego e custos |

---

## Quando Iniciar o Planejamento

### Sinais de Estabilização

**REGRA GERAL:** Planejamento de desmobilização deve iniciar assim que incidente estabilizar.

**SINAIS:**
- Perímetro contido
- Objetivos principais alcançados
- Progressão do incêndio controlada
- Projeção de extinção possível

**TÍPICO EM INCÊNDIOS FLORESTAIS:**
- Após 70-80% de contenção
- Quando rescaldo é atividade principal
- Clima favorável (chuva prevista, umidade alta)

### Critérios por Nível CBMMT

| Nível | Abordagem |
|-------|-----------|
| Nível 1-2 | Desmobilização informal, recursos liberados conforme conclusão |
| Nível 3-4 | Plano formal de desmobilização (SCI 221) necessário |

---

## Tipos de Recursos

### Recursos Humanos e Bens Duráveis

**DEFINIÇÃO:** Pessoas, viaturas, equipamentos permanentes.

**EXEMPLOS:**
- Bombeiros (IRTs)
- Viaturas (caminhonetes, caminhões-pipa)
- Equipamentos (rádios, ferramentas duráveis)
- Máquinas (motoniveladoras, pás-carregadoras)
- Aeronaves

**PROCESSO:**
1. Inspeção antes de liberação
2. Manutenção se necessário
3. Abastecimento
4. Documentação de danos
5. Check-out formal

### Recursos de Consumo

**DEFINIÇÃO:** Bens descartáveis utilizados e consumidos durante incidente.

**EXEMPLOS:**
- Água, combustível, alimentação
- Ferramentas manuais descartáveis
- EPIs danificados
- Material médico

**PROCESSO:**
- Contabilização completa
- Custos arcados pela gestão do incidente
- Reabastecimento na unidade de origem
- Destinação adequada de resíduos`,
  diagrams: [diagramFasesDesmobilizacao]
};

const responsabilidadesDesmob: Section = {
  id: 'responsabilidades-desmob',
  slug: 'responsabilidades-desmob',
  title: '29. Responsabilidades na Desmobilização',
  part: 6,
  order: 2,
  content: `## Comandante do Incidente

### Autoridade
- **APROVAÇÃO FINAL:** CI aprova todas as liberações de recursos
- **DECISÃO:** Determina quando iniciar processo formal de desmobilização

### Responsabilidades
- Estabelecer prioridades de liberação
- Aprovar Plano de Desmobilização
- Autorizar liberações específicas
- Coordenar com agências cooperadoras

---

## Seção de Planejamento

### Líder da Unidade de Desmobilização

**RESPONSÁVEL PRINCIPAL:** Se ativado, desenvolve e implementa plano.

**QUANDO ATIVAR:**
- Nível 3 e 4 (geralmente)
- Nível 2 complexo com muitos recursos
- Se não ativado, CSPlan assume

### Responsabilidades da Seção
- Desenvolver Plano de Desmobilização detalhado
- Coordenar processo com todas as seções
- Processar liberações (preencher SCI 221)
- Documentar todas as liberações
- Notificar unidades de origem sobre ETAs

---

## Seção de Operações

### Identificação de Recursos Excedentes

**RESPONSABILIDADE:** CSOp identifica quais recursos táticos não são mais necessários.

**PROCESSO:**
1. Avalia necessidades futuras
2. Compara com recursos disponíveis
3. Lista recursos excedentes
4. Prioriza liberações

**COMUNICAÇÃO:** Lista de recursos excedentes à Unidade de Desmobilização ou CSPlan (atualizada diariamente).

---

## Seção de Logística

### Transporte
- Organiza transporte para recursos sem meios próprios
- Coordena veículos para transporte de pessoal
- Agenda voos (se aplicável)
- Organiza comboios

### Inspeção de Viaturas

**VERIFICAÇÃO:**
- Condições mecânicas
- Danos causados durante incidente
- Nível de combustível
- Limpeza

**DOCUMENTAÇÃO:** Registro de danos para fins de compensação.

### Devolução de Equipamentos
- Coleta de rádios, ferramentas emprestadas, EPIs
- Verificação de quantidade e condição
- Registro de danos ou perdas

---

## Seção de Administração e Finanças

### Registro de Horas
- Processa registros de tempo de todo pessoal
- Cálculo de diárias e horas extras
- Verificação de check-in/check-out

### Processamento de Reclamações
- Danos a equipamentos
- Lesões ocorridas durante incidente
- Coordenação de compensações devidas

---

## Oficial de Ligação

- Coordena liberação de recursos de agências cooperadoras
- Comunicação com representantes de agências
- Pode articular realocação de recursos para outros incidentes ativos

---

## Oficial de Segurança

### Condições de Pessoal

**AVALIA:**
- Fadiga
- Lesões
- Condições para viajar
- Necessidade de descanso adicional

### Requisitos de Trabalho/Descanso

**GARANTE:** Todos atendam requisitos antes de viajar, especialmente motoristas de viaturas de grande porte.`,
  diagrams: [diagramResponsabilidades]
};

const planoDesmobilizacao: Section = {
  id: 'plano-desmobilizacao',
  slug: 'plano-desmobilizacao',
  title: '30. Plano de Desmobilização',
  part: 6,
  order: 3,
  content: `## Quando Necessário

### Obrigatório (Nível 3 e 4)

**CRITÉRIOS:**
- Múltiplas agências envolvidas
- Grande número de recursos (30+)
- Operações prolongadas (5+ dias)
- Recursos de diferentes regiões

### Opcional (Nível 2)
CI pode decidir por plano formal se julgar necessário.

### Não Necessário (Nível 1)
Geralmente liberações informais.

---

## Estrutura do Plano

### 1. Informações Gerais
- Contexto do incidente
- Status atual
- Projeção de encerramento
- Processo geral de desmobilização

### 2. Responsabilidades
- Quem faz o que
- Pontos de contato
- Cadeia de aprovação

### 3. Prioridades de Liberação
- Ordem de liberação de recursos
- Critérios utilizados
- Exceções

### 4. Procedimentos Específicos
- Passos detalhados para liberação
- Formulários necessários
- Inspeções requeridas
- Check-outs obrigatórios

### 5. Informações de Viagem
- Rotas
- Requisitos de trabalho/descanso
- Contatos de emergência
- Mapas

---

## Prioridades de Liberação

### Ordem Típica

| Prioridade | Recursos | Razão |
|------------|----------|-------|
| **1a** | Recursos locais (respondedores iniciais, cooperadores locais) | Retornar à prontidão para resposta local |
| **2a** | Recursos especializados de outras regiões (EIAOPs, GAvBM) | Custos altos, necessidade em outros locais |
| **3a** | Recursos de apoio de outras regiões | |
| **4a** | Recursos que continuarão até extinção final (rescaldo) | |

### Fatores que Influenciam

- **Custos:** Recursos mais caros liberados primeiro
- **Distância:** Recursos de muito longe liberados antes
- **Necessidade em outros locais:** Recursos requisitados para outro incidente
- **Fadiga:** Recursos muito fatigados liberados antes
- **Legislação trabalhista:** Limites de horas trabalhadas
- **Acordos:** Termos com agências cooperadoras

---

## Exemplo de Plano (Simplificado)

\`\`\`
PLANO DE DESMOBILIZAÇÃO
INCIDENTE: IF Fazenda Boa Esperança | NÚMERO: IF-2025-089
DATA: 18/agosto/2025

PREPARADO POR: Cap Oliveira (CSPlan)
APROVADO POR: Maj Silva (CI)

---

1. INFORMAÇÕES GERAIS

SITUAÇÃO: 95% contido. Área total: 850 hectares.
Operações principais concluídas. Rescaldo em andamento.
Previsão de conclusão em 48h.

RECURSOS: 58 bombeiros, 1 helicóptero, 2 motoniveladoras, 12 viaturas

---

2. PRIORIDADES DE LIBERAÇÃO

FASE 1 (18/agosto, 18:00):
- GAvBM (helicóptero) - retorno Cuiabá
- EMec (2 motoniveladoras) - retorno SINFRA
- EIAOP 03 - retorno Cuiabá (10 BMs)

FASE 2 (19/agosto, 06:00):
- EIAOP 05 - retorno Cuiabá (10 BMs)
- BMM Nobres - retorno Nobres (7 BMs)

FASE 3 (19/agosto, 18:00):
- BDBM Chapada - retorno (8 BMs)
- GCIF 1 e 2 - retorno Cuiabá (10 BMs)

FASE 4 (20/agosto, após extinção):
- BDBM Poconé - retorno (8 BMs)
- Staff do Comando e Planejamento

---

3. PROCEDIMENTOS

CHECK-OUT OBRIGATÓRIO (SCI 221):
1. Unid. Comunicações (devolução rádios)
2. Unid. Suporte Terrestre (inspeção viatura)
3. Unid. Suprimentos (devolução ferramentas)
4. Admin/Finanças (registro tempo)
5. Líder Desmob (liberação final)

DESCANSO: 8h mínimo (motoristas: 10h)
\`\`\``,
  diagrams: [diagramPrioridadesLiberacao]
};

const formularioSci221: Section = {
  id: 'formulario-sci-221',
  slug: 'formulario-sci-221',
  title: '31. Formulário SCI 221 - Check-Out',
  part: 6,
  order: 4,
  content: `## Finalidade

- **GARANTIR COMPLETUDE:** Recurso completou todas obrigações antes de sair
- **DOCUMENTAÇÃO:** Registro formal de liberação
- **COORDENAÇÃO:** Informação para SPlan sobre status de recursos

---

## Quem Preenche

### Início
**LÍDER UNIDADE DESMOBILIZAÇÃO** inicia preenchimento do SCI 221:
- Identificação do recurso
- Unidade de origem
- Data/hora prevista de liberação

### Check-Out
**RECURSO PERCORRE** cada unidade/seção marcada no formulário, obtendo assinaturas que confirmam:
- Equipamentos devolvidos
- Tarefas administrativas completas
- Sem pendências

---

## Estrutura do Formulário

### Cabeçalho
- Nome do incidente
- Número
- Nome do recurso (IRT, viatura, pessoa)
- Unidade de origem
- Data/hora de liberação prevista

### Seção 1 - Informações de Viagem
- Destino
- Rota planejada
- ETA (tempo estimado de chegada)
- Meio de transporte

### Seção 2 - Check-Out (6 Estações)

| Estação | Verificações |
|---------|--------------|
| **Unidade de Comunicações** | Rádios devolvidos, equipamentos completos |
| **Unidade de Instalações/Base** | Área de dormir limpa e inspecionada |
| **Unidade de Suprimentos** | Ferramentas, EPIs, suprimentos devolvidos |
| **Unidade de Suporte Terrestre** | Viatura inspecionada, danos registrados, combustível |
| **Seção Admin/Finanças** | Registro de tempo completo, formulários assinados |
| **Oficial de Segurança** | Pessoal apto para viajar, requisitos de descanso atendidos |

### Seção 3 - Liberação Final
- Supervisor do recurso assina confirmando check-out completo
- Líder Unid. Desmob assina autorizando liberação
- Data/hora real de saída

---

## Processo de Check-Out

### Fluxo

1. **Recurso recebe SCI 221** do Líder Desmob
2. **Percorre estações** marcadas no formulário
3. **Cada unidade verifica** e assina se OK
4. **Retorna à Desmobilização** com SCI 221 completo
5. **Verificação final** pelo Líder Desmob
6. **Autorização** e registro de saída
7. **Recurso desmobilizado**

**TEMPO TÍPICO:** 30-60 minutos para completar todo check-out.

---

## Exemplo Preenchido

\`\`\`
SCI 221 - CHECK-OUT DE DESMOBILIZAÇÃO

INCIDENTE: IF Fazenda Boa Esperança | NÚMERO: IF-2025-089

RECURSO: EIAOP 03
LÍDER: Cb Carvalho
UNIDADE ORIGEM: BEA - Cuiabá
PESSOAL: 10 bombeiros

DATA/HORA LIBERAÇÃO: 18/ago/2025, 18:00
DESTINO: Cuiabá-MT
ROTA: MT-XXX -> BR-ZZZ
ETA: 21:30

---

CHECK-OUT:

[X] UNIDADE DE COMUNICAÇÕES
    - 10 rádios HT devolvidos
    - 2 rádios móveis devolvidos
    Assinatura: Cb Santos | 18/ago 17:15

[X] UNIDADE DE INSTALAÇÕES
    - Área de dormir limpa
    - Sem danos
    Assinatura: Sd Lima | 18/ago 17:20

[X] UNIDADE DE SUPRIMENTOS
    - 5 ferramentas devolvidas
    - 2 motosserras devolvidas
    Assinatura: Sgt Alves | 18/ago 17:25

[X] UNIDADE DE SUPORTE TERRESTRE
    - 2 caminhonetes inspecionadas
    - Dano menor registrado
    - Combustível: OK
    Assinatura: Cb Oliveira | 18/ago 17:35

[X] ADMIN/FINANÇAS
    - Planilhas de tempo verificadas
    - Total: 7 dias, 84 horas/BM
    Assinatura: Sgt Ferreira | 18/ago 17:40

[X] OFICIAL DE SEGURANÇA
    - Pessoal em boas condições
    - Motoristas descansados
    - APTOS PARA VIAGEM
    Assinatura: Cap Santos (OSeg) | 18/ago 17:45

---

LIBERAÇÃO FINAL:

SUPERVISOR: Cb Carvalho _________ 18/ago 17:50
LÍDER DESMOB: Cap Oliveira ______ 18/ago 17:52

SAÍDA REAL: 18/ago 18:05
\`\`\``,
  diagrams: [diagramProcessoCheckout]
};

const encerramentoIncidente: Section = {
  id: 'encerramento-incidente',
  slug: 'encerramento-incidente',
  title: '32-33. Encerramento do Incidente',
  part: 6,
  order: 5,
  content: `## Execução da Desmobilização

### Comunicação de Liberações

**NOTIFICAÇÃO AO RECURSO:**
- Antecedência mínima: 4-8 horas
- Informações: horário, destino, procedimentos, requisitos

**NOTIFICAÇÃO À UNIDADE DE ORIGEM:**
- Identificação do recurso
- Horário de saída
- ETA na unidade de origem
- Condições do recurso

### Preparação do Recurso

**TEMPO ADEQUADO PARA:**
- Banho e troca de roupa
- Refeição completa
- Descanso final (se necessário)
- Organização de equipamentos
- Preparação de viatura (limpeza, verificação, abastecimento)

### Check-Out Físico

**PERCURSO PELAS ESTAÇÕES:**
- Comunicações (devolução rádios)
- Suprimentos (devolução ferramentas)
- Suporte Terrestre (inspeção viatura)
- Admin/Finanças (acerto de contas)
- OSeg (avaliação final)

**RESOLUÇÃO DE PENDÊNCIAS:** Recurso resolve antes de prosseguir.

---

## Extinção Final

### Critérios

**EXTINÇÃO DECLARADA QUANDO:**
- 100% do perímetro está frio (sem calor residual)
- Rescaldo completo realizado
- Verificação termal (se disponível) negativa
- Patrulhamento final sem detecção de focos
- Previsão meteorológica favorável

### Verificação Final

- Última patrulha: inspeção completa do perímetro
- Registro: fotos/vídeos da área extinta
- Relatório final pelo CI ou último recurso

---

## Últimas Liberações

### Ordem de Saída

| Ordem | Recursos |
|-------|----------|
| 1o | Recursos de patrulhamento final |
| 2o | CSLog (logística até o fim) |
| 3o | CSPlan (documentação final) |
| **Último** | CI (sempre último) |

### Desmontagem de Instalações

**PC E BASE:**
- Remoção de equipamentos
- Limpeza de área
- Restauração de local (se necessário)
- Devolução de áreas emprestadas

---

## Transferência de Comando (Redução)

### Quando Ocorre
- Incidente estabilizado
- Complexidade reduz
- Estrutura grande não mais necessária

**EXEMPLO:** Maj Silva (CI Nível 3) transfere para Sgt Santos (CI local) para operações finais de rescaldo.

### Procedimento
- Briefing usando SCI 201
- Transferência formal
- Comunicação a todos
- Atualização de documentos
- Novo CI opera com estrutura menor

---

## Encerramento Administrativo

### Documentação Final

**COMPILAÇÃO (Unid. Documentação):**
- Todos os PAIs
- Todos formulários SCI
- Relatórios de combate
- Fotos/vídeos
- Mapas
- Registros de custos
- Plano de Desmobilização
- SCI 221 de todos recursos

**ARQUIVO:** Para prestação de contas, análise futura, lições aprendidas.

### Prestação de Contas

**RELATÓRIO FINANCEIRO FINAL:**
- Horas trabalhadas (diárias)
- Combustível consumido
- Alimentação
- Contratações
- Danos compensados
- **CUSTO TOTAL DO INCIDENTE**

### Comunicação de Encerramento

**CI COMUNICA:**
- SSC: incidente encerrado
- DOp: relatório executivo
- Agências cooperadoras: agradecimentos formais
- Proprietários/comunidade: agradecimento, informações finais`,
  diagrams: [diagramEncerramento]
};

const reunioesEncerramento: Section = {
  id: 'reunioes-encerramento',
  slug: 'reunioes-encerramento',
  title: '34. Reuniões de Encerramento e AAR',
  part: 6,
  order: 6,
  content: `## Reunião com Administração (Autoridades)

### Quando Realizar

**INDICAÇÕES:**
- Incidentes graves com repercussão midiática
- Incidentes com escrutínio público
- Esforços de recuperação de longo prazo
- Lições importantes aprendidas

### Participantes

**AUTORIDADES:**
- Comando-Geral CBMMT
- DOp
- Comandantes Regionais
- Representantes de agências cooperadoras

**EQUIPE DO INCIDENTE:**
- CI
- Chefes de Seção principais

### Conteúdo

**APRESENTAÇÃO:**
- Resumo do incidente e cronologia
- Recursos empenhados
- Resultados alcançados
- Custos
- Desafios enfrentados
- Lições aprendidas
- Recomendações

---

## Revisão Pós-Ação (After Action Review - AAR)

### Finalidade

**APRENDIZADO:** Identificar o que funcionou e o que precisa melhorar.

> **NÃO É** sessão de culpa ou punição.
> **É** oportunidade de aprendizado organizacional.

### Quando Realizar

**LOGO APÓS INCIDENTE:** Dentro de 1-2 semanas após encerramento, enquanto memórias estão frescas.

### Participantes

**EQUIPE DO INCIDENTE:**
- CI e todo Staff do Comando
- Todo Staff Geral
- Supervisores de Divisão/Grupo
- Líderes de IRTs
- Representantes de agências cooperadoras

**FACILITADOR:** CSPlan geralmente conduz.

---

## As 5 Perguntas-Chave do AAR

### 1. O QUE ESTAVA PLANEJADO?
- Quais eram os objetivos?
- Qual era o plano?
- O que esperávamos alcançar?

### 2. O QUE REALMENTE ACONTECEU?
- O que fizemos?
- Como executamos?
- Quais foram os resultados?

### 3. POR QUE HOUVE DIFERENÇAS?
- O que causou desvios do plano?
- Quais fatores não foram previstos?
- Onde o plano falhou?

### 4. O QUE APRENDEMOS?
- O que funcionou bem?
- O que não funcionou?
- O que faríamos diferente?
- Quais boas práticas identificamos?

### 5. O QUE VAMOS FAZER?
- Quais mudanças implementaremos?
- Quais treinamentos são necessários?
- Quais procedimentos precisam atualização?
- Quais equipamentos precisamos?

---

## Documentação do AAR

### Relatório de AAR

**CSPlan COMPILA:**
- Resumo do incidente
- Principais decisões tomadas
- O que funcionou (sustain)
- O que precisa melhorar (improve)
- Recomendações específicas
- Plano de ação para implementação

### Distribuição
- Participantes
- DOp
- BEA
- Comando-Geral
- Arquivo de lições aprendidas

### Seguimento

- **IMPLEMENTAÇÃO:** BEA ou DOp designa responsáveis
- **MONITORAMENTO:** Acompanhamento de implementação
- **COMPARTILHAMENTO:** Lições aprendidas compartilhadas com todo CBMMT

---

## Transição para Recuperação

### Diferença Entre Resposta e Recuperação

| Aspecto | Resposta | Recuperação |
|---------|----------|-------------|
| Foco | Ações imediatas | Ações de médio/longo prazo |
| Objetivo | Salvar vidas, proteger, conter | Restaurar área afetada |
| Exemplo | Combate ao incêndio | Replantio, controle erosão |

### Papel do CBMMT na Recuperação

**ASSESSORIA:**
- Mapas de área queimada
- Avaliação de intensidade do fogo
- Áreas de maior preocupação
- Recomendações iniciais

**COORDENAÇÃO:**
- Participar de reunião de transição
- Apresentar situação final
- Recomendar ações de recuperação
- Transferir informações para agência responsável

**DOCUMENTAÇÃO ÚTIL:**
- Mapas de severidade do fogo
- Fotos antes/depois
- Relatórios de danos
- Dados de custos de combate`,
  diagrams: [diagramAAR]
};

// ------------------------------------------------------------
// EXPORTAÇÕES
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
