(function () {
  'use strict';

  /* ── Phone: numeric-only ─────────────────────────────────────── */
  const phoneInput = document.getElementById('telefone');

  phoneInput.addEventListener('keydown', function (e) {
    const allow = [8, 9, 13, 27, 46, 37, 38, 39, 40, 35, 36];
    if (allow.includes(e.keyCode)) return;
    if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) return;
    if (!/\d/.test(e.key)) e.preventDefault();
  });

  /* ── Validation helpers ──────────────────────────────────────── */
  function showError(fieldId, errId, show) {
    const field = document.getElementById(fieldId);
    const err   = document.getElementById(errId);
    if (!field || !err) return;
    err.classList.toggle('visible', show);
    field.setAttribute('aria-invalid', show ? 'true' : 'false');
  }

  function validateNome() {
    const v  = document.getElementById('nome').value.trim();
    const ok = v.length >= 2;
    showError('nome', 'err-nome', !ok);
    return ok;
  }

  function validatePhone() {
    const digits = document.getElementById('telefone').value.replace(/\D/g, '');
    const ok     = digits.length >= 10;
    showError('telefone', 'err-telefone', !ok);
    return ok;
  }

  function validateEmail() {
    const v  = document.getElementById('email').value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    showError('email', 'err-email', !ok);
    return ok;
  }

  function validateSelect(id, errId) {
    const v  = document.getElementById(id).value;
    const ok = v !== '';
    showError(id, errId, !ok);
    return ok;
  }

  function validateDescricao() {
    const v  = document.getElementById('descricao').value.trim();
    const ok = v.length >= 10;
    showError('descricao', 'err-descricao', !ok);
    return ok;
  }

  /* ── Live validation on blur ─────────────────────────────────── */
  document.getElementById('nome').addEventListener('blur', validateNome);
  phoneInput.addEventListener('blur', validatePhone);
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('origem').addEventListener('change', () => validateSelect('origem', 'err-origem'));
  document.getElementById('investimento').addEventListener('change', () => validateSelect('investimento', 'err-investimento'));
  document.getElementById('descricao').addEventListener('blur', validateDescricao);

  /* ── Submission ──────────────────────────────────────────────── */
  const form        = document.getElementById('contactForm');
  const btnSubmit   = document.getElementById('btnSubmit');
  const formBody    = document.getElementById('formBody');
  const successOver = document.getElementById('successOverlay');
  const btnReset    = document.getElementById('btnReset');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const validNome   = validateNome();
    const validPhone  = validatePhone();
    const validEmail  = validateEmail();
    const validOrigem = validateSelect('origem', 'err-origem');
    const validInvest = validateSelect('investimento', 'err-investimento');
    const validDescr  = validateDescricao();

    if (!(validNome && validPhone && validEmail && validOrigem && validInvest && validDescr)) {
      const firstErr = form.querySelector('[aria-invalid="true"]');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Simulated submit — replace with real endpoint as needed
    btnSubmit.classList.add('loading');

    setTimeout(() => {
      btnSubmit.classList.remove('loading');
      formBody.style.display = 'none';
      successOver.classList.add('visible');
      successOver.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1400);
  });

  /* ── Reset ───────────────────────────────────────────────────── */
  btnReset.addEventListener('click', function () {
    form.reset();
    document.querySelectorAll('.field-error.visible').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('[aria-invalid="true"]').forEach(el => el.setAttribute('aria-invalid', 'false'));
    successOver.classList.remove('visible');
    formBody.style.display = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
