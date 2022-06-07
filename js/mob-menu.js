(() => {
  const mobMenuRefs = {
    mobBtn: document.querySelector('[data-mobile-button]'),
    mobMenu: document.querySelector('[data-mobile-menu]'),
  };

  mobMenuRefs.mobBtn.addEventListener('click', toggleButton);

  function toggleButton() {
    const expanded = mobMenuRefs.mobBtn.getAttribute('aria-expanded') === 'true' || false;
    mobMenuRefs.mobBtn.classList.toggle('is-open');
    mobMenuRefs.mobBtn.setAttribute('aria-expanded', !expanded);

    mobMenuRefs.mobMenu.classList.toggle('is-open');
    document.body.classList.toggle('scroll-hidden');
  }
})();
