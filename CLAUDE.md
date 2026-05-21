# Carta de Navegação — Notas para Claude

## Workflow de Git (SEMPRE)

Após completar tarefas com alterações ao código:

1. Commit no branch de trabalho
2. Push para o remote desse branch
3. **Fazer fast-forward merge para `main` e push para `origin/main`** — sem perguntar

Sequência completa:
```bash
git add -A
git commit -m "..."
git push -u origin <branch-actual>
git checkout main
git merge --ff-only <branch-actual>
git push origin main
git checkout <branch-actual>
```

O `main` é o branch de produção (Cloudflare Pages auto-deploy). O utilizador quer sincronização automática sem confirmação adicional.

## Princípios do projecto

- **Literacia em foco**: o tom é de aprendizagem e capacitação, não de alerta ou ameaça
- **Português europeu** (PT-PT) em todo o conteúdo visível
- **Sem alarmismo**: tom positivo, prático, capacitador
- **Mote central**: "Saber navegar é tão importante como saber ler."
- **Conteúdo contextualizado para Portugal**: exemplos reais (CTT, AT, MEO, MB Way, EMEL, etc.)
- **Sem tracking, sem publicidade**: ferramentas 100% client-side
- **Acessibilidade**: WCAG 2.1 AA (contraste, focus-visible, ARIA, navegação por teclado)

## Stack

- SvelteKit + adapter-static (output prerenderizado)
- Svelte 5 runes (`$state`, `$derived`, `$derived.by`, `$effect`, `$props`)
- Cloudflare Pages (deploy automático a partir de `main`)
- PWA via `static/sw.js` (incrementar `CACHE` para novas rotas)

## Identidade visual

- **Fonte headings/logo**: Lora (serif, Google Fonts)
- **Fonte corpo**: Inter (sans-serif)
- **Cor primária**: `#0d7a6c` (teal profundo — links, botões, destaques)
- **Cor de acento**: `#d4a76a` / `#c97d0f` (âmbar quente)
- **Fundo página**: `#faf9f5` (branco quente)
- **Fundo cartões**: `#ffffff`
- **Fundo secções alternadas**: `#f5f0e8` (areia suave)
- **Texto**: `#1c1c1e` / muted: `#6b7280`
- **Emergência**: `#c0392b`

## Temas visuais

Detecção automática por rota em `+layout.svelte`:
- **jovem**: `/pre-escolar`, `/primeiro-ciclo`, `/segundo-ciclo`, `/terceiro-ciclo`, `/secundario`
- **adulto**: `/adultos`, `/seniores`
- **neutro**: homepage e páginas partilhadas (padrão)

## Estrutura de conteúdo

### Grupos etários
- Pré-escolar (3–5 anos)
- 1.º Ciclo (6–9 anos)
- 2.º Ciclo (10–11 anos)
- 3.º Ciclo (12–14 anos)
- Secundário (15–17 anos)
- Adultos (18–59 anos)
- Seniores (60+ anos)

### Competências (4 pilares)
- **Reconhecer**: distinguir real/falso (notícias, perfis, mensagens)
- **Proteger**: dados, contas, dispositivos
- **Comunicar**: redes sociais, mensagens, partilha responsável
- **Agir**: o que fazer quando algo corre mal

### Rotas planeadas
- `/` — Homepage
- `/competencias` — Os 4 pilares com conteúdo detalhado
- `/recursos` — Materiais de apoio
- `/ferramentas` — Ferramentas práticas (verificadores, etc.)
- `/glossario` — Glossário de termos digitais
- `/sobre` — Sobre o projecto
- `/educadores` — Recursos para educadores
- `/emergencia` — Recursos de emergência digital
- `/pesquisa` — Pesquisa no site
- `/<grupo>` — Página de cada grupo etário (7 grupos)

## Relação com NavegaSeguro

Este projecto é independente do NavegaSeguro (ciberacaro/navegaseguro).
O NavegaSeguro é focado em cibersegurança reactiva; a Carta de Navegação é focada em literacia digital proactiva.
Não partilham código — são projectos separados com identidades próprias.
