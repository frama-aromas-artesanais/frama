/* Ícones */
const icons = {
  whatsapp: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.22-1.37a9.9 9.9 0 0 0 4.82 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.18h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.17 8.17 0 0 1-1.25-4.38c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.57-3.71 8.28-8.33 8.28Zm4.53-6.2c-.25-.12-1.5-.74-1.73-.83-.24-.09-.4-.13-.57.13-.17.25-.66.83-.81 1-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.37-.77-1.87-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.21.21-.6.21-1.11.15-1.21-.06-.11-.23-.17-.48-.29Z"/></svg>',
  instagram: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

const whatsappLink = (msg) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg || `Olá! Vim pelo catálogo e gostaria de saber mais sobre os produtos da ${site.brandName}.`)}`;
const productWhatsappLink = (name) =>
  whatsappLink(`Olá! Tenho interesse na ${name}. Gostaria de saber mais sobre disponibilidade e pedido.`);
const categoryName = (id) => (categories.find((c) => c.id === id) || {}).name || id;
const $ = (s) => document.querySelector(s);
const isHome = !!$("#catalogo");
const home = isHome ? "" : "index.html";

/* Preenche textos da marca e ícones */
function fillCommon() {
  document.querySelectorAll("[data-brand]").forEach((el) => (el.textContent = site.brandName));
  document.querySelectorAll("[data-site]").forEach((el) => (el.textContent = site[el.dataset.site]));
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = whatsappLink(); el.target = "_blank"; el.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-icon]").forEach((el) => el.insertAdjacentHTML(el.dataset.pos || "afterbegin", icons[el.dataset.icon]));
  const ig = $("#ig"); if (ig) ig.href = site.instagramUrl;
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  // links de categoria no rodapé
  const fc = $("#footer-cats");
  if (fc) fc.innerHTML = categories.map((c) => `<li><a href="${home}?categoria=${c.id}#catalogo" data-cat="${c.id}">${c.name}</a></li>`).join("");

  // menu mobile
  const btn = $("#menu-btn"), mob = $("#mobile-nav");
  btn.innerHTML = icons.menu;
  btn.addEventListener("click", () => {
    const open = mob.classList.toggle("open");
    btn.innerHTML = open ? icons.close : icons.menu;
    btn.setAttribute("aria-expanded", open);
  });
  mob.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { mob.classList.remove("open"); btn.innerHTML = icons.menu; }));

  // links de categoria (menu e rodapé) na página inicial filtram sem recarregar
  if (isHome) {
    document.querySelectorAll("[data-cat]").forEach((a) =>
      a.addEventListener("click", (e) => { e.preventDefault(); selectCategory(a.dataset.cat); })
    );
  } else {
    document.querySelectorAll("a[href^='#']").forEach((a) => (a.href = "index.html" + a.getAttribute("href")));
  }
}

function productCard(p, action) {
  const url = `produto.html?slug=${p.slug}`;
  const btn = action === "interesse"
    ? `<a class="btn btn-primary btn-full" href="${productWhatsappLink(p.name)}" target="_blank" rel="noopener noreferrer">${icons.whatsapp} Tenho interesse</a>`
    : `<a class="btn btn-outline btn-full" href="${url}">Ver detalhes</a>`;
  return `<article class="card card-hover">
    <a class="card-img" href="${url}"><img src="${p.image}" alt="${p.name}" loading="lazy" width="1200" height="1408"></a>
    <div class="card-body">
      <p class="eyebrow">${categoryName(p.category)}</p>
      <h3><a href="${url}">${p.name}</a></h3>
      <p class="desc">${p.shortDescription}</p>
      <dl><div><dt>Fragrância:</dt><dd>${p.fragrance}</dd></div>${p.size ? `<div><dt>Tamanho:</dt><dd>${p.size}</dd></div>` : ""}</dl>
      <p class="price">${p.price}</p>
      ${btn}
    </div></article>`;
}

/* ---------- Página inicial ---------- */
let active = "todos";
function renderCatalog() {
  const filters = [{ id: "todos", label: "Todos" }, ...categories.map((c) => ({ id: c.id, label: c.short }))];
  $("#filters").innerHTML = filters.map((f) =>
    `<button type="button" class="filter${f.id === active ? " active" : ""}" aria-pressed="${f.id === active}" data-filter="${f.id}">${f.label}</button>`).join("");
  $("#filters").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => selectCategory(b.dataset.filter, false)));
  const list = active === "todos" ? products : products.filter((p) => p.category === active);
  $("#catalog-grid").innerHTML = list.map((p) => productCard(p, "detalhes")).join("");
}
function selectCategory(id, scroll = true) {
  active = id;
  const url = new URL(location.href);
  if (id === "todos") url.searchParams.delete("categoria"); else url.searchParams.set("categoria", id);
  url.hash = "catalogo";
  history.replaceState(null, "", url);
  renderCatalog();
  if (scroll) $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

function initHome() {
  $("#cat-grid").innerHTML = categories.map((c) => `<article class="card card-hover">
      <div class="card-img"><img src="${c.image}" alt="${c.name}" loading="lazy" width="1200" height="1408"></div>
      <div class="card-body"><h3 style="margin-top:0">${c.name}</h3><p class="desc">${c.description}</p>
      <button type="button" class="link" style="margin-top:1.25rem" data-select="${c.id}">Ver produtos ${icons.arrow}</button></div></article>`).join("");
  document.querySelectorAll("[data-select]").forEach((b) => b.addEventListener("click", () => selectCategory(b.dataset.select)));
  $("#featured-grid").innerHTML = products.filter((p) => p.featured).map((p) => productCard(p, "interesse")).join("");
  const q = new URLSearchParams(location.search).get("categoria");
  if (categories.some((c) => c.id === q)) active = q;
  renderCatalog();
  if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);
}

/* ---------- Página de produto ---------- */
function initProduct() {
  const slug = new URLSearchParams(location.search).get("slug");
  const p = products.find((x) => x.slug === slug);
  const root = $("#product");
  if (!p) {
    root.innerHTML = `<div class="pad" style="text-align:center"><h1>Produto não encontrado</h1><a class="btn btn-primary" style="margin-top:2rem" href="index.html#catalogo">Voltar ao catálogo</a></div>`;
    return;
  }
  document.title = `${p.name} — ${site.brandName}`;
  const rows = [["Fragrância", p.fragrance], ["Tamanho", p.size], ["Composição", p.composition], ["Modo de uso", p.usage], ["Disponibilidade", p.availability]]
    .filter((r) => r[1]).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  root.innerHTML = `<a class="back" href="index.html#catalogo">← Voltar ao catálogo</a>
    <div class="prod">
      <img class="rounded" src="${p.image}" alt="${p.name}">
      <div>
        <p class="eyebrow">${categoryName(p.category)}</p>
        <h1>${p.name}</h1>
        <p class="price">${p.price}</p>
        <p class="lead">${p.fullDescription}</p>
        <dl class="specs">${rows}</dl>
        <a class="btn btn-terracotta" href="${productWhatsappLink(p.name)}" target="_blank" rel="noopener noreferrer">${icons.whatsapp} Tenho interesse</a>
      </div>
    </div>`;
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug);
  if (related.length) {
    $("#related").innerHTML = `<div class="container pad" style="padding-top:0"><h2>Você também pode gostar</h2>
      <div class="grid grid-prod">${related.map((r) => productCard(r, "detalhes")).join("")}</div></div>`;
  }
}

fillCommon();
isHome ? initHome() : initProduct();
