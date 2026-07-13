> Deep dives: activate skill `frontend-development` (resources/_shared/*). Rule chuẩn cty, verify 2 vòng từ Odi+Recruit.
>
> ⚠️ **Repo này là static marketing landing** (Vite+React, KHÔNG API/auth/form/antd) → chỉ subset áp dụng: **C. Styling · F. i18n/Routing · G. Structure**. Bỏ A (Data/API) · B (antd Forms) · D (Zod/antd validation) · E (Auth/RBAC). Xem `conventions.md` → `## FE convention`.

# Company FE Standard — Enforce Checklist

Distilled, actionable gate for the company FE standard (verified against **Odi Partner** +
**Recruit_CMS**, 2 rounds). Run this **before** writing a FE task and **after**, as a
self-review. Each item links the deep resource. Feature-workflow injects this into task
"Must read" (slice) and the verification checklist (verify).

> **How to read severity:** 🔴 = hard rule (block on violation) · 🟡 = strong default
> (deviate only with a noted reason) · 🔵 = stack/project-dependent (pick once, stay consistent).

---

## A. Data / API / Cache

- 🔴 **One axios instance**, default export, imported everywhere. Request interceptor: Bearer from **cookie** (`getCookie(STORAGES.ACCESS_TOKEN)`), skip unauthenticated endpoints. → `axios-setup.md`
- 🔴 **401 single-flight refresh** in the response interceptor (`isRefreshing` + `refreshSubscribers`), refresh request **tagged `_isRefreshToken`** to force logout instead of looping; never retry with `Bearer undefined`. → `axios-setup.md`
- 🔴 **API module = namespace object** `export const xApi = {...}` of async arrows, inline URLs. → `api-integration.md`
- 🔴 **Data hooks = ONE namespace object per feature** `export const xHooks = {...}` (incl. auth → `authHooks`). → `tanstack-query.md`
- 🔴 **Query keys central registry** (`constants/queryKey.ts`), built as array `[QueryKey.x.list, params|id]`, invalidate by **prefix-match**. Never inline key strings. → `tanstack-query.md`
- 🟡 **Cache after mutation = surgical via the shared helper** (`useMutationWithCache`): CREATE prepend+trim / UPDATE replace-at-index / DELETE remove, via `setQueriesData` predicate `queryKey[0]===prefix` + `type:'active'` + **invalidate safety-net**. Blanket `invalidateQueries` is the fallback, not the default. Also invalidate **detail + cross-feature stats (dashboard)**. → `tanstack-query.md`
- 🟡 **Query hooks** accept `(params|id, option?: Omit<UseQueryOptions,'queryKey'|'queryFn'>)`, spread `...option` last; detail gate `enabled: !!id`. → `tanstack-query.md`
- 🟡 **One QueryClient + global MutationCache** (success+error toast, opt-out `meta.skipGlobalNotify`). SPA: instantiate once-stable (don't recreate per render); SSR: `useState`-wrap. → `tanstack-query.md`
- 🔵 **Envelope unwrap location**: default **in-API** (`{rows,total}` / `object`); in-hook `select` is the valid peer — pick one, stay consistent. → `api-integration.md`
- 🔵 **Mutation fn arg**: `{id,body}` OR positional `(id,body)` — both company-valid; pick per project. → `api-integration.md`

## B. Components / Forms / UI

- 🔴 **List/CRUD screens use the keystone `FilterTable`** — don't hand-roll Table+Form+Modal. Reuse-audit FIRST. → `../ui-library/filter-table.md`
- 🔴 **FilterTable uses 4 generics** `<T,TCreate,TUpdate,TDetail>` (single `<T>` → `as unknown as` casts = anti-pattern). → `../ui-library/filter-table.md`
- 🔴 **Columns defined INLINE in the page** (`const columns: TableColumnsType<T> = useMemo(...)`) — **NO** `xColumns.tsx` file. → `../ui-library/filter-table.md`
- 🔴 **Antd feedback via `App.useApp()`** (modal/message/notification) — never static `Modal`/`message` imports (one circular-dep exception: MutationCache). Root: `<App notification={{maxCount:1,duration:3,showProgress:true}}>`, no nested `<App>`. → `antd-modal.md`
- 🟡 **Custom\* input wrappers for EVERY field** (value/onChange contract, `size='large'`, forwardRef) — no bare antd `<Input>` in forms. Complex fields ship companion `XxxFormItem` merging caller rules last `...(rules||[])`. → `custom-component.md`
- 🟡 **Diff-only PATCH on update** (changed fields only). → `../ui-library/filter-table.md`
- 🟡 **Group cohesive props** — pass the object (`detailData`) not its scattered fields. → `custom-component.md`
- 🟡 **Modal footer → inner Form submit** via shared `form.submit()` (preferred) or `useImperativeHandle` (fallback); never `dispatchEvent`. → `antd-modal.md`

## C. Styling

- 🔴 **Tokens from `COLORS`** (single source → Tailwind theme + Antd ConfigProvider); **never inline hex** (incl. Tailwind arbitrary `text-[#fff]`). → `tailwind-styling.md`
- 🔴 **Single `cn()=twMerge(clsx())`** helper (base: `constants/commonConst.tsx`); never import `clsx`/`tailwind-merge` directly; use `cn()` for conditional classes (not a template-literal ternary). → `tailwind-styling.md`
- 🟡 **Separators = Antd `<Divider />`** — not a `border-b`/`pb-2!` hack. → `antd-style.md`
- 🟡 **Postfix-bang `x!`** (Tailwind v4) to beat Antd; inline `style={{}}` only for dynamic values (colors from COLORS). Avoid `space-y-*`/`divide-*` on Antd-children containers → use `flex/grid gap`. → `tailwind-styling.md`
- 🟡 **Antd theme in ONE root ConfigProvider** keyed off COLORS (extract to `lib/antd/themeConfig.ts`). → `antd-style.md`

## D. TypeScript / Constants / Utils

- 🔵 **Validation = detect-and-adapt**: Zod present → Antd built-in rules + escalate to `zodRule` adapter for cross-field/regex/transform; no Zod → raw Antd rules + custom validators + `constants/regex`. New projects default to Zod. → `../form-management/antd-forms.md`
- 🔵 **Types**: Zod project → all `z.infer` are **T-prefixed** (objects + unions), `I`-prefix only for non-Zod infra interfaces. Non-Zod project → `I`-prefix entities + CRUD-suffix family (List/Detail/Create/Update/Filter). → `typescript-standards.md`
- 🟡 **Enums = T-prefix string-literal union** (avoid TS `enum`); runtime bag = `as const` object + `keyof typeof` union; `satisfies` for key/value contracts; **no ts-toolbelt**. → `typescript-standards.md`
- 🟡 **Options = centralized i18n-aware source** (factory `as const satisfies` or `useConstant` hook) + resolve via shared `findOption`; never raw string compare. → `constant-pattern.md`
- 🟡 **Reuse utils before creating** — numeral (priceFormat/`toNumber`/`-` null sentinel), dayjs (tokens from constants), libphonenumber (VN), null-safe search-normalize. → `utils-pattern.md`
- 🔵 **Validation message**: terse `{required:true}` from locale; explicit i18n only for `type`/`pattern`; validators reject `new Error(t(...))`. → `../form-management/antd-forms.md`
- 🔴 **No `== null` / `==`** (lint `eqeqeq`): nullish via `!x` / lodash `isNil`; object-has-content via lodash `isEmpty` (not `Object.keys().length`). → `typescript-standards.md`
- 🟡 **No hard-coded enum compare** — `status === xSchema.enum.X` (Zod) / `Xxx().value` (factory), never a raw literal. → `constant-pattern.md`
- 🟡 **No redundant expressions** (don't re-derive a value you already hold); **meaningful names** (no 1-char / cryptic abbrev, callback param = singular); **props interface = `I{Name}Props`**. → `typescript-standards.md`
- ⚠️ **NOT a rule:** do **not** add `as const` to ROUTES/STORAGES (company uses plain object literals — only COLORS/queryKey/option arrays use `as const`).

## E. Auth / RBAC

- 🔴 **Token + user in AES-encrypted cookies** via central helpers + `STORAGES` keys (never localStorage / `document.cookie`); set SameSite/Secure/Max-Age. → `auth-session.md`
- 🔴 **ONE root user Context** hydrated from cookie (hook throws outside provider); server state stays in TanStack Query. → `auth-session.md`
- 🔴 **Logout** = clear cookies + `setUser(null)` + `navigate(login)` + `queryClient.clear()`. → `auth-session.md`
- 🔴 **RBAC data-driven + FAIL-CLOSED** — centralized permission keys, single `usePermission` hook, route guard wrapper, UI gating `...(hasPerm(X)?[x]:[])`; unknown/empty role → all-false. **BE must enforce** (client = UX only). → `rbac-permissions.md`

## F. i18n / Routing / States

- 🟡 **Typed i18n key** `t(getKey('key'))` via `I18nKey` (typos = compile error); `.ts` dicts; language in a cookie. → `../react-vite/react-i18next.md`
- 🟡 **Route guard wrapper**: cookie token → redirect unauth to login; bounce authed from public-only; central fail-closed permission resolve → 403; return null while resolving. → `../react-vite/react-router.md`
- 🟡 **Global error boundary** wrapping the app tree; explicit loading/empty/error states; mutation errors surface via the global MutationCache (no inline mutation-error UI). → `loading-error.md`

## G. Structure / Tooling

- 🔴 **No barrel `index.ts`** re-exports (only a self-contained 3rd-party config index). → `../react-vite/file-organization.md`
- 🟡 **`@/` alias**: use consistently for cross-cutting imports OR don't configure it — never leave it configured-but-unused. → `../react-vite/file-organization.md`
- 🟡 **ESLint** `@typescript-eslint/no-explicit-any:'error'` + `unused-imports` + `eqeqeq:['error','always']` + `id-length:{min:2}`; **Prettier** (.prettierrc semi/singleQuote/2-space/es5/80); **Husky + lint-staged** pre-commit. ⚠️ *base hiện chỉ có config tối giản — đây là **target**, cần thêm các rule này vào `eslint.config.ts`.* → `../react-vite/file-organization.md`
- 🔵 **File-size 200 = soft** guideline; keystone files (FilterTable, i18n dict, registries) are accepted exceptions — don't split to chase the budget.
- 🟡 **By-type folders** (api/components/hooks/constants/utils/lib + types-or-schema + pages); comments sparse + load-bearing (why/gotcha), Vietnamese inline OK, commit messages English.

---

## See Also

- `../../../company-fe-standard.md`-style source (per project: `docs/agents/`) — full rationale
- Every 🔴/🟡 links its deep resource above; read the resource before implementing that area.
