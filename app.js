// app.js
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  // Render the app structure
  app.appendChild(Header());
  app.appendChild(Main());
});

// Header Component
function Header() {
  const header = document.createElement('header');
  header.className = 'header';

  // State management
  let expanded = false;
  let toggled = false;

  // Logo
  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = 'header__logo';
  logo.setAttribute('aria-label', 'Яндекс.Дом');
  header.appendChild(logo);

  // Menu button
  const menuButton = document.createElement('button');
  menuButton.className = 'header__menu';
  menuButton.setAttribute('aria-expanded', 'false');
  
  const menuText = document.createElement('span');
  menuText.className = 'header__menu-text a11y-hidden';
  menuText.textContent = 'Открыть меню';
  menuButton.appendChild(menuText);
  
  menuButton.addEventListener('click', () => {
    if (!toggled) toggled = true;
    expanded = !expanded;
    
    menuButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    menuText.textContent = expanded ? 'Закрыть меню' : 'Открыть меню';
    
    const linksClass = 'header__links' + 
      (expanded ? ' header__links_opened' : '') + 
      (toggled ? ' header__links-toggled' : '');
    links.className = linksClass;
  });
  
  header.appendChild(menuButton);

  // Links
  const links = document.createElement('ul');
  links.className = 'header__links';
  
  const linkItems = [
    { text: 'Сводка', href: '/', current: true },
    { text: 'Устройства', href: '/devices' },
    { text: 'Сценарии', href: '/scripts' }
  ];
  
  linkItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'header__item';
    
    const a = document.createElement('a');
    a.className = 'header__link' + (item.current ? ' header__link_current' : '');
    a.href = item.href;
    a.textContent = item.text;
    if (item.current) a.setAttribute('aria-current', 'page');
    
    li.appendChild(a);
    links.appendChild(li);
  });
  
  header.appendChild(links);

  return header;
}

// Main Component
function Main() {
  const main = document.createElement('main');
  main.className = 'main';

  // General Section
  const generalSection = document.createElement('section');
  generalSection.className = 'section main__general';
  
  const generalTitle = document.createElement('h2');
  generalTitle.className = 'section__title section__title-header section__main-title';
  generalTitle.textContent = 'Главное';
  generalSection.appendChild(generalTitle);
  
  const heroDashboard = document.createElement('div');
  heroDashboard.className = 'hero-dashboard';
  
  // Primary Dashboard
  const primaryDashboard = document.createElement('div');
  primaryDashboard.className = 'hero-dashboard__primary';
  
  const dashboardTitle = document.createElement('h3');
  dashboardTitle.className = 'hero-dashboard__title';
  dashboardTitle.textContent = 'Привет, Геннадий!';
  primaryDashboard.appendChild(dashboardTitle);
  
  const dashboardSubtitle = document.createElement('p');
  dashboardSubtitle.className = 'hero-dashboard__subtitle';
  dashboardSubtitle.textContent = 'Двери и окна закрыты, сигнализация включена.';
  primaryDashboard.appendChild(dashboardSubtitle);
  
  const dashboardInfo = document.createElement('ul');
  dashboardInfo.className = 'hero-dashboard__info';
  
  const homeInfo = document.createElement('li');
  homeInfo.className = 'hero-dashboard__item';
  homeInfo.innerHTML = `
    <div class="hero-dashboard__item-title">Дома</div>
    <div class="hero-dashboard__item-details">
      +23
      <span class="a11y-hidden">°</span>
    </div>
  `;
  
  const outsideInfo = document.createElement('li');
  outsideInfo.className = 'hero-dashboard__item';
  outsideInfo.innerHTML = `
    <div class="hero-dashboard__item-title">За окном</div>
    <div class="hero-dashboard__item-details">
      +19
      <span class="a11y-hidden">°</span>
      <div class="hero-dashboard__icon hero-dashboard__icon_rain" role="img" aria-label="Дождь"></div>
    </div>
  `;
  
  dashboardInfo.appendChild(homeInfo);
  dashboardInfo.appendChild(outsideInfo);
  primaryDashboard.appendChild(dashboardInfo);
  heroDashboard.appendChild(primaryDashboard);
  
  // Schedule
  const schedule = document.createElement('ul');
  schedule.className = 'hero-dashboard__schedule';
  
  const events = [
    { icon: 'temp', iconLabel: 'Температура', title: 'Philips Cooler', subtitle: 'Начнет охлаждать в 16:30' },
    { icon: 'light', iconLabel: 'Освещение', title: 'Xiaomi Yeelight LED Smart Bulb', subtitle: 'Включится в 17:00' },
    { icon: 'light', iconLabel: 'Освещение', title: 'Xiaomi Yeelight LED Smart Bulb', subtitle: 'Включится в 17:00' }
  ];
  
  events.forEach(event => {
    schedule.appendChild(createEvent(event));
  });
  
  heroDashboard.appendChild(schedule);
  generalSection.appendChild(heroDashboard);
  main.appendChild(generalSection);
  
  // Scripts Section
  const scriptsSection = document.createElement('section');
  scriptsSection.className = 'section main__scripts';
  
  const scriptsTitle = document.createElement('h2');
  scriptsTitle.className = 'section__title section__title-header';
  scriptsTitle.textContent = 'Избранные сценарии';
  scriptsSection.appendChild(scriptsTitle);
  
  const eventGrid = document.createElement('ul');
  eventGrid.className = 'event-grid';
  
  const scriptEvents = [
    { slim: true, icon: 'light2', iconLabel: 'Освещение', title: 'Выключить весь свет в доме и во дворе' },
    { slim: true, icon: 'schedule', iconLabel: 'Расписание', title: 'Я ухожу' },
    { slim: true, icon: 'light2', iconLabel: 'Освещение', title: 'Включить свет в коридоре' },
    { slim: true, icon: 'temp2', iconLabel: 'Температура', title: 'Набрать горячую ванну', subtitle: 'Начнётся в 18:00' },
    { slim: true, icon: 'temp2', iconLabel: 'Температура', title: 'Сделать пол тёплым во всей квартире' }
  ];
  
  scriptEvents.forEach(event => {
    eventGrid.appendChild(createEvent(event));
  });
  
  scriptsSection.appendChild(eventGrid);
  main.appendChild(scriptsSection);
  
  // Devices Section
  const devicesSection = document.createElement('section');
  devicesSection.className = 'section main__devices';
  
  const devicesTitleDiv = document.createElement('div');
  devicesTitleDiv.className = 'section__title';
  
  const devicesTitle = document.createElement('h2');
  devicesTitle.className = 'section__title-header';
  devicesTitle.textContent = 'Избранные устройства';
  devicesTitleDiv.appendChild(devicesTitle);
  
  // Tabs data
const TABS = {
        all: {
            title: 'Все',
            items: [{
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Yeelight LED Smart Bulb',
                subtitle: 'Включено'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'D-Link Omna 180 Cam',
                subtitle: 'Включится в 17:00'
            }, {
                icon: 'temp',
                iconLabel: 'Температура',
                title: 'Elgato Eve Degree Connected',
                subtitle: 'Выключено до 17:00'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'LIFX Mini Day & Dusk A60 E27',
                subtitle: 'Включится в 17:00'
            }, {
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Mi Air Purifier 2S',
                subtitle: 'Включено'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'Philips Zhirui',
                subtitle: 'Включено'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'Philips Zhirui',
                subtitle: 'Включено'
            }, {
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Mi Air Purifier 2S',
                subtitle: 'Включено'
            }]
        },
        kitchen: {
            title: 'Кухня',
            items: [{
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Yeelight LED Smart Bulb',
                subtitle: 'Включено'
            }, {
                icon: 'temp',
                iconLabel: 'Температура',
                title: 'Elgato Eve Degree Connected',
                subtitle: 'Выключено до 17:00'
            }]
        },
        hall: {
            title: 'Зал',
            items: [{
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'Philips Zhirui',
                subtitle: 'Выключено'
            }, {
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Mi Air Purifier 2S',
                subtitle: 'Выключено'
            }]
        },
        lights: {
            title: 'Лампочки',
            items: [{
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'D-Link Omna 180 Cam',
                subtitle: 'Включится в 17:00'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'LIFX Mini Day & Dusk A60 E27',
                subtitle: 'Включится в 17:00'
            }, {
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Mi Air Purifier 2S',
                subtitle: 'Включено'
            }, {
                icon: 'light',
                iconLabel: 'Освещение',
                title: 'Philips Zhirui',
                subtitle: 'Включено'
            }]
        },
        cameras: {
            title: 'Камеры',
            items: [{
                icon: 'light2',
                iconLabel: 'Освещение',
                title: 'Xiaomi Mi Air Purifier 2S',
                subtitle: 'Включено'
            }]
        }
    };
  
  // Create 64x repeated items for 'all' tab
  const original = TABS.all.items;
    const repeatCount = 64; // 2**6
    const newItems = new Array(repeatCount * original.length);

    for (let i = 0; i < repeatCount; ++i) {
        for (let j = 0; j < original.length; ++j) {
            newItems[i * original.length + j] = original[j];
        }
    }

    TABS.all.items = newItems;

    const TABS_KEYS = Object.keys(TABS);
  
  // Select dropdown
  const select = document.createElement('select');
  select.className = 'section__select';

  TABS_KEYS.forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = TABS[key].title;
    if (key === 'all') {
      option.selected = true;
      option.setAttribute('selected', ''); // Добавляем атрибут selected
    }
    select.appendChild(option);
  });
  
  select.addEventListener('input', (e) => {
    const activeTab = e.target.value;
    updateActiveTab(activeTab, panelWrapper, TABS_KEYS);
  });
  
  devicesTitleDiv.appendChild(select);
  
  // Tabs
  const tabs = document.createElement('ul');
  tabs.setAttribute('role', 'tablist');
  tabs.className = 'section__tabs';
  
  TABS_KEYS.forEach(key => {
    const tab = document.createElement('li');
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', key === 'all' ? 'true' : 'false');
    tab.className = 'section__tab' + (key === 'all' ? ' section__tab_active' : '');
    tab.id = `tab_${key}`;
    tab.setAttribute('aria-controls', `panel_${key}`);
    if (key === 'all') {
      tab.setAttribute('tabindex', '0'); // Добавляем tabindex для активной вкладки
    }
    tab.textContent = TABS[key].title;
    
    tab.addEventListener('click', () => {
      updateActiveTab(key, panelWrapper, TABS_KEYS);
      select.value = key;
    });
    
    tabs.appendChild(tab);
  });
  
  devicesTitleDiv.appendChild(tabs);
  devicesSection.appendChild(devicesTitleDiv);
  
  // Panel Wrapper
  const panelWrapper = document.createElement('div');
  panelWrapper.className = 'section__panel-wrapper';
  
  // Create panels
  TABS_KEYS.forEach(key => {
    const panel = document.createElement('div');
    panel.setAttribute('role', 'tabpanel');
    panel.className = 'section__panel' + (key === 'all' ? '' : ' section__panel_hidden');
    panel.setAttribute('aria-hidden', key === 'all' ? 'false' : 'true');
    panel.id = `panel_${key}`;
    panel.setAttribute('aria-labelledby', `tab_${key}`);
    
    const panelList = document.createElement('ul');
    panelList.className = 'section__panel-list';
    
    TABS[key].items.forEach((item, index) => {
      panelList.appendChild(createEvent(item));
    });
    
    panel.appendChild(panelList);
    panelWrapper.appendChild(panel);
  });
  
  // Arrow for scrolling
  const arrow = document.createElement('div');
  arrow.className = 'section__arrow';
  arrow.style.display = 'none';
  
  arrow.addEventListener('click', () => {
    const activePanel = panelWrapper.querySelector('.section__panel:not(.section__panel_hidden)');
    if (activePanel) {
      activePanel.scrollTo({
        left: activePanel.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  });
  
  panelWrapper.appendChild(arrow);
  devicesSection.appendChild(panelWrapper);
  main.appendChild(devicesSection);
  
  // Check for right scroll
  function checkRightScroll() {
    const panels = panelWrapper.querySelectorAll('.section__panel');
    let hasRightScroll = false;
    
    panels.forEach(panel => {
      if (!panel.classList.contains('section__panel_hidden')) {
        const sumWidth = Array.from(panel.querySelectorAll('.event')).reduce((acc, item) => {
          return acc + item.offsetWidth;
        }, 0);
        
        hasRightScroll = sumWidth > panelWrapper.offsetWidth;
      }
    });
    
    arrow.style.display = hasRightScroll ? 'block' : 'none';
  }
  
  // Initial check
  setTimeout(checkRightScroll, 100);
  
  // Add resize listener
  window.addEventListener('resize', checkRightScroll);
  
  return main;
}

// Helper function to create device items
function createDeviceItems(count) {
  const icons = ['light2', 'light', 'temp', 'light', 'light2', 'light', 'light', 'light2'];
  const titles = [
    'Xiaomi Yeelight LED Smart Bulb',
    'D-Link Omna 180 Cam',
    'Elgato Eve Degree Connected',
    'LIFX Mini Day & Dusk A60 E27',
    'Xiaomi Mi Air Purifier 2S',
    'Philips Zhirui',
    'Philips Zhirui',
    'Xiaomi Mi Air Purifier 2S'
  ];
  const subtitles = [
    'Включено',
    'Включится в 17:00',
    'Выключено до 17:00',
    'Включится в 17:00',
    'Включено',
    'Включено',
    'Включено',
    'Включено'
  ];
  
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      icon: icons[i % icons.length],
      iconLabel: ['Освещение', 'Освещение', 'Температура', 'Освещение', 'Освещение'][i % 5],
      title: titles[i % titles.length],
      subtitle: subtitles[i % subtitles.length]
    });
  }
  
  return items;
}

// Event Component
function createEvent(props) {
  const event = document.createElement('li');
  event.className = 'event' + (props.slim ? ' event_slim' : '');
  
  const button = document.createElement('button');
  button.className = 'event__button';
  
  const icon = document.createElement('span');
  icon.className = `event__icon event__icon_${props.icon}`;
  icon.setAttribute('role', 'img');
  icon.setAttribute('aria-label', props.iconLabel);
  button.appendChild(icon);
  
  const title = document.createElement('h4');
  title.className = 'event__title';
  title.textContent = props.title;
  button.appendChild(title);
  
  if (props.subtitle) {
    const subtitle = document.createElement('span');
    subtitle.className = 'event__subtitle';
    subtitle.textContent = props.subtitle;
    button.appendChild(subtitle);
  }
  
  event.appendChild(button);
  
  // Size reporting (simplified)
  if (props.onSize) {
    setTimeout(() => {
      props.onSize({
        width: event.offsetWidth,
        height: event.offsetHeight
      });
    }, 0);
  }
  
  return event;
}

// Update active tab
function updateActiveTab(activeTab, panelWrapper, TABS_KEYS) {
  // Update tabs
  const tabs = panelWrapper.parentElement.querySelectorAll('[role="tab"]');
  tabs.forEach(tab => {
    const isActive = tab.id === `tab_${activeTab}`;
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.tabIndex = isActive ? '0' : undefined;
    tab.classList.toggle('section__tab_active', isActive);
  });
  
  // Update panels
  const panels = panelWrapper.querySelectorAll('[role="tabpanel"]');
  panels.forEach(panel => {
    const isActive = panel.id === `panel_${activeTab}`;
    panel.classList.toggle('section__panel_hidden', !isActive);
    panel.setAttribute('aria-hidden', !isActive ? 'true' : 'false');
  });
  
  // Check scroll after tab change
  setTimeout(() => {
    const arrow = panelWrapper.querySelector('.section__arrow');
    const activePanel = panelWrapper.querySelector('.section__panel:not(.section__panel_hidden)');
    
    if (activePanel) {
      const sumWidth = Array.from(activePanel.querySelectorAll('.event')).reduce((acc, item) => {
        return acc + item.offsetWidth;
      }, 0);
      
      const hasRightScroll = sumWidth > panelWrapper.offsetWidth;
      arrow.style.display = hasRightScroll ? 'block' : 'none';
    }
  }, 100);
}