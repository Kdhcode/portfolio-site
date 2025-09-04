document.querySelector('.this-year').textContent = new Date().getFullYear();

    // Mobile Nav
    const burger = document.querySelector('.btn-hamburger');
    const nav = document.querySelector('header nav');
    burger?.addEventListener('click', ()=> nav.classList.toggle('active'));
    nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('active')));

    // ToTop
    const toTop = document.getElementById('toTop');
    const onScroll = () => {
      if (window.scrollY > 420) toTop.classList.add('show');
      else toTop.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

    // Project search (All only)
    (function(){
      const list = Array.from(document.querySelectorAll('#project .card'));
      const input = document.getElementById('projectSearch');
      function apply(){
        const q = (input.value || '').toLowerCase().trim();
        list.forEach(card=>{
          const text = (card.dataset.tags || '') + ' ' + card.innerText;
          const show = !q || text.toLowerCase().includes(q);
          card.style.display = show ? '' : 'none';
        });
      }
      input?.addEventListener('input', ()=> { clearTimeout(input._t); input._t = setTimeout(apply, 120); });
      apply();
    })();

    // README Modal
    (function(){
      const modal = document.getElementById('modal');
      const body = modal.querySelector('.modal__body');
      const close = modal.querySelector('.modal__close');

      document.querySelectorAll('.btn-readme').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const sel = btn.getAttribute('data-readme');
          const src = sel ? document.querySelector(sel) : null;
          body.innerHTML = src ? src.innerHTML : '<p>README 내용을 준비 중입니다.</p>';
          modal.classList.add('show');
          modal.setAttribute('aria-hidden','false');
        });
      });

      const hide = ()=>{
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden','true');
      };
      close.addEventListener('click', hide);
      modal.addEventListener('click', (e)=>{ if(e.target === modal) hide(); });
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') hide(); });
    })();