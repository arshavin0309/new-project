// Если title нет, он будет установлен
let page = document.location.pathname;

function createTitle() {

    if (!document.title) {

        if (lang == 'ru') { // страница на русском

            if (page === '/') { document.title = 'Главная' };
            if (page === '/start.html') { document.title = 'С чего начать?' };
            if (page === '/404.html') { document.title = 'Страница не найдена' };
            if (page === '/terms.html') { document.title = 'Условия торговли' };
            if (page === '/terms-of-trade.html') { document.title = 'Условия торговли' };
            if (page === '/platform.html') { document.title = 'Торговая платформа' };
            if (page === '/strategies.html') { document.title = 'Торговые стратегии' };
            if (page === '/schedule.html') { document.title = 'Часы работы рынка' };
            if (page === '/analytics.html') { document.title = 'Аналитика рынка' };
            if (page === '/review.html') { document.title = 'Обзор рынка' };
            if (page === '/overview.html') { document.title = 'Обзор рынка' };
            if (page === '/condition.html') { document.title = 'Состояние рынка' };
            if (page === '/calendar.html') { document.title = 'Экономический календарь' };
            if (page === '/news.html') { document.title = 'Новости рынка' };
            if (page === '/forecasts.html') { document.title = 'Прогнозы рынка' };
            if (page === '/currencies.html') { document.title = 'Валюты' };
            if (page === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
            if (page === '/stocks.html') { document.title = 'Акции' };
            if (page === '/indices.html') { document.title = 'Индексы' };
            if (page === '/raw-materials.html' ||
                page === '/commodities.html') { document.title = 'Сырье' };
            if (page === '/history.html') { document.title = 'История компании' };
            if (page === '/why.html') { document.title = 'Почему мы?' };
            if (page === '/documents.html') { document.title = 'Документы' };
            if (page === '/about.html') { document.title = 'О нас' };
            if (page === '/contacts.html') { document.title = 'Контакты' };
            if (page === '/instruments.html') { document.title = 'Торговые инструменты' };

        } else { // страница на других языках

            if (page === '/') { document.title = 'Main page' };
            if (page === '/start.html') { document.title = 'Where to start?' };
            if (page === '/404.html') { document.title = 'Page not found' };
            if (page === '/terms.html') { document.title = 'Trading terms' };
            if (page === '/terms-of-trade.html') { document.title = 'Trading terms' };
            if (page === '/platform.html') { document.title = 'Trading platform' };
            if (page === '/strategies.html') { document.title = 'Trading strategies' };
            if (page === '/schedule.html') { document.title = 'Market hours' };
            if (page === '/analytics.html') { document.title = 'Market analytics' };
            if (page === '/review.html') { document.title = 'Market overview' };
            if (page === '/overview.html') { document.title = 'Market overview' };
            if (page === '/condition.html') { document.title = 'State of the market' };
            if (page === '/calendar.html') { document.title = 'Economic calendar' };
            if (page === '/news.html') { document.title = 'Market news' };
            if (page === '/forecasts.html') { document.title = 'Market forecasts' };
            if (page === '/currencies.html') { document.title = 'Currencies' };
            if (page === '/cryptocurrencies.html') { document.title = 'Cryptocurrencies' };
            if (page === '/stocks.html') { document.title = 'Stocks' };
            if (page === '/indices.html') { document.title = 'Indices' };
            if (page === '/raw-materials.html' ||
                page === '/commodities.html') { document.title = 'Сommodities' };
            if (page === '/history.html') { document.title = 'Company history' };
            if (page === '/why.html') { document.title = 'Why us?' };
            if (page === '/documents.html') { document.title = 'Documents' };
            if (page === '/about.html') { document.title = 'About us' };
            if (page === '/contacts.html') { document.title = 'Contacts' };
            if (page === '/instruments.html') { document.title = 'Trading instruments' };

        }
    }
}

createTitle();
