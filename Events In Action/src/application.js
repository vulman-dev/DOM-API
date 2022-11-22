export default () => {
    // BEGIN (write your solution here)
    const links = document.querySelectorAll('[data-bs-toggle]');

    links.forEach((link) => {
        link.addEventListener('click', () => {
            const nav = link.closest('.nav');
            const activeNav = nav.querySelector('.active');
            activeNav.classList.remove('active');
            link.classList.add('active');

            const contentId = link.dataset.bsTarget;
            const content = document.getElementById(contentId.slice(1));

            const tab = content.closest('.tab-content');
            const activeTab = tab.querySelector('.active');
            activeTab.classList.remove('active');
            content.classList.add('active');
        });
    });
    // END

    // TEACHER SOLUTION
    const handle = (e, container) => {
        const targetTab = e.target;
        if (targetTab.classList.contains('active')) {
            return;
        }

        const targetTabContentId = targetTab.dataset.bsTarget;
        const targetTabContent = document.querySelector(targetTabContentId);

        const activeTab = container.querySelector('.active');
        const activeTabContentId = activeTab.dataset.bsTarget;
        const activeTabContent = document.querySelector(activeTabContentId);

        targetTab.classList.add('active');
        targetTabContent.classList.add('active');

        activeTab.classList.remove('active');
        activeTabContent.classList.remove('active');
    };

    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav) => {
        const tabs = nav.querySelectorAll('[data-bs-toggle]');
        tabs.forEach((tab) => {
            tab.addEventListener('click', (event) => handle(event, nav));
        });
    });
    // END
};