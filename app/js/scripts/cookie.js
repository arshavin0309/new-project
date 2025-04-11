// окно с предупреждением о куки

function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options,
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue
        }
    }

    document.cookie = updatedCookie
}

if (!getCookie('cookies')) {
    document.querySelector('.cookies').style = 'display: flex'
}

document.querySelector('.cookies .btn').addEventListener('click', () => {
    document.querySelector('.cookies').style = 'display: none'
    setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
})

let lang = document.documentElement.lang;

if (lang == 'ru' || lang == 'ru_RU' || lang == 'ru-RU') {
    $('.cookies__info').html('Мы используем файлы cookie, чтобы больше узнать о том, как вы пользуетесь нашим сайтом, и что мы можем улучшить.');
    $('.cookies .btn').html('Принять');
} else {
    $('.cookies__info').html('We use cookies to learn more about how you use our website and what we can improve.');
    $('.cookies .btn').html('Accept');
}