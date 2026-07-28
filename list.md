# Cobertura das landing pages programáticas

Status atual + plano da semana de rush. Atualizar esse arquivo toda vez que uma fase nova entrar no ar — é o inventário único de "o que já existe" pra não duplicar trabalho.

## Resumo atual

- **132 páginas no ar** (81 estado + 51 cidade), 3 nichos: Padarias, Clínicas de Estética, Construtoras.
- **Teto de 30 do CLAUDE.md**: já estourado desde a Fase 1 (decisão consciente, não mexer retroativamente). Fase 2 (cidade) é extensão do mesmo padrão, não conta como "nicho novo" pro teto.
- **Estratégia combinada** (decidida nesta rodada): manter os 3 nichos atuais e aprofundar em cidade em vez de abrir nicho novo. Cidades entram em lotes de ~50 páginas por vez (não tudo de uma vez), maior população primeiro.

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

## Fase 2 — nicho novo (EM PAUSA — decisão desta rodada)

Decisão: em vez de abrir 4º nicho, aprofundar os 3 nichos atuais em cidade primeiro (ver Fase 3). Nicho novo fica pra depois, se necessário.

## Fase 3 — nicho × cidade (NO AR — lote 1, 51 páginas)

Fonte: `src/data/landingPages.ts`, array `BRAZILIAN_CITIES`. URL: `https://codexy.com.br/informacoes/chatbot-para-{nicho}-{cidade}-{uf}/`

**Critério de corte**: maiores cidades do Brasil por população (estimativa IBGE), entrando em lotes de ~50 páginas por vez (3 nichos × ~17 cidades), não todas de uma vez — usuário pediu ritmo gradual, "um pouco agora um pouco mais tarde".

**Cidade convive com estado** (não substitui) — página de estado cobre cauda longa, página de cidade cobre tráfego pago local mais específico.

**Slug**: sempre leva UF (`sao-paulo-sp`, `rio-de-janeiro-rj`) mesmo quando o nome da cidade não colide com nenhum estado — evita colisão (ex: cidade "São Paulo" e estado "São Paulo" ambos slugificariam pra `sao-paulo` sem o sufixo). Verificado no build: `chatbot-para-padarias-sao-paulo` (estado) e `chatbot-para-padarias-sao-paulo-sp` (cidade) coexistem sem conflito.

**Lote 1 — 17 cidades (51 páginas: 17 × 3 nichos):**

| # | Cidade | UF | Padarias | Clínicas de Estética | Construtoras |
|---|--------|----|----|----|----|
| 1 | São Paulo | SP | ✅ | ✅ | ✅ |
| 2 | Rio de Janeiro | RJ | ✅ | ✅ | ✅ |
| 3 | Brasília | DF | ✅ | ✅ | ✅ |
| 4 | Salvador | BA | ✅ | ✅ | ✅ |
| 5 | Fortaleza | CE | ✅ | ✅ | ✅ |
| 6 | Belo Horizonte | MG | ✅ | ✅ | ✅ |
| 7 | Manaus | AM | ✅ | ✅ | ✅ |
| 8 | Curitiba | PR | ✅ | ✅ | ✅ |
| 9 | Recife | PE | ✅ | ✅ | ✅ |
| 10 | Goiânia | GO | ✅ | ✅ | ✅ |
| 11 | Porto Alegre | RS | ✅ | ✅ | ✅ |
| 12 | Belém | PA | ✅ | ✅ | ✅ |
| 13 | Guarulhos | SP | ✅ | ✅ | ✅ |
| 14 | Campinas | SP | ✅ | ✅ | ✅ |
| 15 | São Luís | MA | ✅ | ✅ | ✅ |
| 16 | São Gonçalo | RJ | ✅ | ✅ | ✅ |
| 17 | Maceió | AL | ✅ | ✅ | ✅ |

`npm run build` rodado, 132 páginas prerenderizadas sem erro, 0 slugs duplicados, sitemap.xml com 137 URLs.

**Lote 2 (pendente, ~próximo)**: continuar por ordem populacional a partir da 18ª cidade — candidatas: Duque de Caxias (RJ), Natal (RN), Teresina (PI), Campo Grande (MS), São Bernardo do Campo (SP), Nova Iguaçu (RJ), João Pessoa (PB), Santo André (SP), Osasco (SP), Jaboatão dos Guararapes (PE), São José dos Campos (SP), Ribeirão Preto (SP), Uberlândia (MG), Sorocaba (SP), Contagem (MG), Aracaju (SE), Feira de Santana (BA) — mais ~17 pra fechar lote de 51. Confirmar lista exata com usuário antes de gerar (nomes/UF podem ter imprecisão de memória, vale checar fonte IBGE atualizada).

## Não esquecer amanhã

- [ ] Rodar lote 2 de cidades (~17 cidades, +51 páginas) quando usuário sinalizar
- [ ] Cada lote: `npm run build`, checar `dist/informacoes/<slug>/index.html`, checar sitemap sem duplicata
- [ ] Atualizar este `list.md` a cada lote novo
- [ ] Commit + push
