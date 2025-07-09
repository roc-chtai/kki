
  // 左側紅色 btn 點擊展開並 scroll
  document.querySelectorAll('#section-nav .btn').forEach(btn => {
    btn.addEventListener('click', function(){
      var collapseId = this.getAttribute('data-target');
      var collapseEl = document.querySelector(collapseId);
      if(collapseEl){
        // 先全部收起
        document.querySelectorAll('.accordion-collapse').forEach(c => {
          if (c !== collapseEl) new bootstrap.Collapse(c, {toggle:false}).hide();
        });
        // 展開指定
        new bootstrap.Collapse(collapseEl, {toggle:true}).show();
setTimeout(() => {
  const yOffset = -75; // 負數表示往上偏移
  const y = collapseEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}, 250);

      }
      // active 樣式
      document.querySelectorAll('#section-nav .btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  // 手機下拉選單功能
  document.getElementById('mobile-nav')?.addEventListener('change', function() {
    const collapseId = this.value;
    const collapseEl = document.querySelector(collapseId);
    if(collapseEl){
      document.querySelectorAll('.accordion-collapse').forEach(c => {
        if (c !== collapseEl) new bootstrap.Collapse(c, {toggle:false}).hide();
      });
      new bootstrap.Collapse(collapseEl, {toggle:true}).show();
setTimeout(() => {
  const yOffset = -72;
  const y = collapseEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}, 250);

    }
  });
  // 點h5展開時同步左側active
  document.querySelectorAll('.card-header h5').forEach(header=>{
    header.addEventListener('click', function(){
      var target = this.getAttribute('data-bs-target');
      if(target){
        document.querySelectorAll('#section-nav .btn').forEach(b=>{
          b.classList.remove('active');
          if(b.getAttribute('data-target')===target) b.classList.add('active');
        });
      }
    });
  });
