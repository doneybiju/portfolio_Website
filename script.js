/* No external deps. CSP-friendly. */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

async function loadProjects() {
  try {
    const res = await fetch('./projects.json', {cache:'no-store'});
    if (!res.ok) return;
    const projects = await res.json();
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';
    projects.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        <p style="margin-top:10px">${p.link ? `<a href="${p.link}" rel="noopener nofollow">View</a>` : '<em>Private</em>'}</p>
      `;
      grid.appendChild(el);
    });
  } catch(e) {
    console.warn('Failed to load projects.json', e);
  }
}
loadProjects();
