const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const cards = [...document.querySelectorAll('[data-category]')];
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
    document.querySelector('#filter-status').textContent = cards.filter(card => !card.hidden).length + ' projects shown';
  });
}
