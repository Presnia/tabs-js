const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        function getElements(element) {
            element.forEach((item) => {
            item.classList.remove('active');
        });
        }

        if (!currentBtn.classList.contains('active')) {
            getElements(tabsBtn);

            getElements(tabsItems);

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        }
        
        
    });
}

document.querySelector('.tabs__nav-btn').click();
