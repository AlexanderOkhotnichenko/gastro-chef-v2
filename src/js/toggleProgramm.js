export function toggleProgramm() {
  const tabsCategories = document.querySelectorAll('.meal-categories-toggle');
  const contenCategories = document.querySelectorAll('.meal-description-top-box');
  const tabsPlan = document.querySelectorAll('.meal-plan-day');
  const contenPlan = document.querySelectorAll('.meal-plan-table');

  tabsCategories.forEach((tab) => {
    tab.addEventListener('click', function() {
      
      contenCategories.forEach((el) => {
        el.classList.add('hidden');
      });
      
      const activeEl = document.querySelector('.meal-categories-toggle.active');
      const content = document.querySelector('#' + tab.dataset.tab);

      activeEl.classList.remove('active');
      this.classList.add('active');
      content.classList.remove('hidden');
    });
  });

  tabsPlan.forEach((plan) => {
    plan.addEventListener('click', function() {
      
      contenPlan.forEach((el) => {
        el.classList.add('hidden');
      });
      
      const activeEl = document.querySelector('.meal-plan-day.active');
      const content = document.querySelector('#' + plan.dataset.plan);

      activeEl.classList.remove('active');
      this.classList.add('active');
      content.classList.remove('hidden');
    });
  });

  // function renderContent(list, target, contentEl) {
  //   list.forEach((item) => {
  //     item.addEventListener('click', function() {
        
  //       contenCategories.forEach((el) => {
  //         el.classList.add('hidden');
  //       });
        
  //       const activeEl = document.querySelector(contentEl);
  //       const content = document.querySelector('#' + item.dataset.target);
  
  //       activeEl.classList.remove('active');
  //       this.classList.add('active');
  //       content.classList.remove('hidden');
  //     });
  //   });
  // }
  // renderContent(tabsCategories, 'tab', document.querySelector('.meal-categories-toggle.active'));
}