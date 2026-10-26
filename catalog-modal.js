const ACC = { c: '#009fe3', m: '#e3007b', y: '#ffed00' };
const kind = g => /real|láser/i.test(g.tag) ? 'real' : 'design';
const slug = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const setHash = h => { try { history.replaceState(null, '', h || location.pathname + location.search); } catch {} };

// Normaliza los datos una sola vez
CATALOG.sections.forEach(s => s.items.forEach(p => {
  p.id = p.id || slug(p.title);
  p.colors = p.colors || []; p.badges = p.badges || [];
  if (!p.gallery || !p.gallery.length) p.gallery = p.img ? [{ src: p.img, local: p.local, tag: 'Diseño' }] : [];
  p.realImg = p.gallery.find(g => kind(g) === 'real');
}));

function catalog() {
  return {
    q: '', cat: 'Todo', open: false, cur: { gallery: [], prices: [], colors: [], badges: [] },
    tab: 'design', i: 0, zoom: false, ox: 50, oy: 50, tx: 0, ACC,
    tabs: [{ k: 'design', l: 'Diseño digital' }, { k: 'real', l: 'Foto real' }],
    cats: ['Todo', ...CATALOG.sections.map(s => s.title)],
    init() {
      const p = CATALOG.sections.flatMap(s => s.items).find(p => p.id === location.hash.slice(1));
      if (p) this.show(p);
    },
    get visible() {
      const q = this.q.trim().toLowerCase();
      return CATALOG.sections.filter(s => this.cat === 'Todo' || s.title === this.cat)
        .map(s => ({ ...s, items: s.items.filter(p => !q || (s.title + ' ' + p.title + ' ' + p.desc).toLowerCase().includes(q)) }))
        .filter(s => s.items.length);
    },
    n(t) { return this.cur.gallery.filter(g => kind(g) === t).length; },
    get imgs() { return this.cur.gallery.filter(g => kind(g) === this.tab); },
    get main() { return this.imgs[this.i]; },
    show(p) {
      this.cur = p; this.tab = this.n('design') ? 'design' : 'real';
      this.i = 0; this.zoom = false; this.open = true; setHash('#' + p.id);
    },
    close() { this.open = false; this.zoom = false; setHash(); },
    setTab(t) { if (this.n(t)) { this.tab = t; this.i = 0; this.zoom = false; } },
    go(i) { this.i = i; this.zoom = false; },
    step(d) { const l = this.imgs.length; if (l > 1) this.go((this.i + d + l) % l); },
    onKey(e) {
      if (!this.open) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.step(1);
      if (e.key === 'ArrowLeft') this.step(-1);
    },
    pan(e) {
      if (!this.zoom) return;
      const r = e.currentTarget.getBoundingClientRect();
      this.ox = (e.clientX - r.left) / r.width * 100; this.oy = (e.clientY - r.top) / r.height * 100;
    },
    swipe(e) { const d = e.changedTouches[0].clientX - this.tx; if (!this.zoom && Math.abs(d) > 60) this.step(d < 0 ? 1 : -1); },
    wa(t) {
      const m = t ? `Hola, me interesa el producto: ${t}` : 'Hola, me interesa un producto de su catálogo en línea.';
      return `https://wa.me/${CATALOG.phone}?text=` + encodeURIComponent(m);
    },
  };
}