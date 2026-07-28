# Cobertura das landing pages programáticas

Status atual + plano da semana de rush. Atualizar esse arquivo toda vez que uma fase nova entrar no ar — é o inventário único de "o que já existe" pra não duplicar trabalho.

## Fase 1 — nicho × estado (NO AR — 81 páginas)

Fonte: `src/data/landingPages.ts`. URL: `https://codexy.com.br/informacoes/chatbot-para-{nicho}-{estado}/`

**3 nichos:**
- Padarias
- Clínicas de Estética
- Construtoras

**27 estados (todos cobertos, um por nicho):**

| # | Estado | UF | Padarias | Clínicas de Estética | Construtoras |
|---|--------|----|----|----|----|
| 1 | Acre | AC | ✅ | ✅ | ✅ |
| 2 | Alagoas | AL | ✅ | ✅ | ✅ |
| 3 | Amapá | AP | ✅ | ✅ | ✅ |
| 4 | Amazonas | AM | ✅ | ✅ | ✅ |
| 5 | Bahia | BA | ✅ | ✅ | ✅ |
| 6 | Ceará | CE | ✅ | ✅ | ✅ |
| 7 | Distrito Federal | DF | ✅ | ✅ | ✅ |
| 8 | Espírito Santo | ES | ✅ | ✅ | ✅ |
| 9 | Goiás | GO | ✅ | ✅ | ✅ |
| 10 | Maranhão | MA | ✅ | ✅ | ✅ |
| 11 | Mato Grosso | MT | ✅ | ✅ | ✅ |
| 12 | Mato Grosso do Sul | MS | ✅ | ✅ | ✅ |
| 13 | Minas Gerais | MG | ✅ | ✅ | ✅ |
| 14 | Pará | PA | ✅ | ✅ | ✅ |
| 15 | Paraíba | PB | ✅ | ✅ | ✅ |
| 16 | Paraná | PR | ✅ | ✅ | ✅ |
| 17 | Pernambuco | PE | ✅ | ✅ | ✅ |
| 18 | Piauí | PI | ✅ | ✅ | ✅ |
| 19 | Rio de Janeiro | RJ | ✅ | ✅ | ✅ |
| 20 | Rio Grande do Norte | RN | ✅ | ✅ | ✅ |
| 21 | Rio Grande do Sul | RS | ✅ | ✅ | ✅ |
| 22 | Rondônia | RO | ✅ | ✅ | ✅ |
| 23 | Roraima | RR | ✅ | ✅ | ✅ |
| 24 | Santa Catarina | SC | ✅ | ✅ | ✅ |
| 25 | São Paulo | SP | ✅ | ✅ | ✅ |
| 26 | Sergipe | SE | ✅ | ✅ | ✅ |
| 27 | Tocantins | TO | ✅ | ✅ | ✅ |

**Total: 3 × 27 = 81 páginas, todas prerenderizadas, indexáveis, com FAQPage + BreadcrumbList (JSON-LD).**

## SEO — revisão feita nesta rodada

- Title/description únicos nas 81 (checado, sem duplicata).
- OG completo (title/description/image com width/height/alt/locale pt_BR) + Twitter card + canonical — todos únicos por página.
- **Adicionado agora**: JSON-LD `FAQPage` (rich snippet de FAQ no Google) e `BreadcrumbList` em todas as 81 páginas.
- Sitemap.xml (86 URLs) e robots.txt com `Sitemap:` — ok.
- Nenhum `noindex` vazando em página válida; slug inválido corretamente marcado noindex.

**Risco em aberto (não corrigido, é decisão de produto):** ~84% do texto visível é idêntico entre estados do mesmo nicho (só headline/intro/WhatsApp/SEO mudam). Google pode não indexar as 81 igualmente por conteúdo fino/duplicado. Não mexi nisso agora porque a correção real (conteúdo único por estado) contraria a regra de "criação rápida" — decisão de negócio, não meramente técnica.

## Fase 2 — planejamento (RUSH da semana, ainda não construído)

**Próximo nicho**: ainda não definido. Preciso do nome do nicho/segmento antes de gerar copy (pain points, benefits, FAQ são escritos uma vez por nicho — não dá pra inventar sem saber o público-alvo real). Assim que definir, é 1 `NicheTemplate` novo em `NICHE_TEMPLATES` → gera as 27 páginas de estado automaticamente, mesmo padrão da Fase 1.

**Atenção ao teto (CLAUDE.md): nunca passar de 30 páginas programáticas sem discutir.** Hoje já são 81 — acima do teto por decisão consciente anterior. Adicionar um 4º nicho = +27 páginas = 108 total. Antes de gerar, confirmar com o usuário se isso é intencional (o teto documentado existe exatamente pra forçar essa checagem).

## Fase 3 — granularidade de cidade (mencionada, mais adiante)

Usuário sinalizou que depois da fase de estado quer descer pra **cidade** (nicho × cidade, não só nicho × estado). Isso multiplica MUITO mais que estado (Brasil tem 5.570 municípios vs 27 estados) — antes de começar essa fase:

- Definir critério de corte (ex: só capitais + N maiores cidades por região, não todos os 5.570) — sem isso o teto de 30 páginas fica inviável de discutir.
- Decidir se cidade substitui estado ou convive com ele (ex: manter página de estado pra cauda longa + cidade pra tráfego pago local mais específico).
- Estrutura de dado já suporta: `StateInfo` viraria uma lista de `LocationInfo` mais genérica (label + uf + slug + preposição), só trocando a lista de origem — não precisa mudar `NicheTemplate` nem o pipeline de build/prerender/sitemap, que já são 100% data-driven.

## Não esquecer amanhã

- [ ] Usuário define o próximo nicho (nome + público-alvo)
- [ ] Escrever `NicheTemplate` novo (pain points/benefits/FAQ — uma vez só)
- [ ] Rodar `npm run build`, checar `dist/informacoes/<slug>/index.html` das novas 27 páginas
- [ ] Atualizar este `list.md` com a linha do nicho novo
- [ ] Commit + push
