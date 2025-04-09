if (page == '/') {
    $('.hero__heading').html('VertexTrade — your path to success on the financial markets!');
    $('.hero__title').html('Trade with VertexTrade — discover the world of financial opportunities');
    $('.hero__info').css('display', 'none');
    $('.hero__btn span').html('sign up now');
}

if (page == '/platform.html') {
    $('.hero__heading').html('Trading Platform');
    $('.hero__title').html('VertexTrade: your gateway to smart trading');
    $('.hero__info').html('The key to earning in the financial markets with instant server connection on any device — PC, smartphone, or tablet.');
    $('.hero__btn span').html('start trading now');
    $('.terms-steps .heading .h1').html('04');
    $('.main-form .heading .h1').html('05');
}

if (page == '/terms.html') {
    $('.hero__heading').html('Trading terms');
    $('.hero__title').html('Invest confidently and reach your financial goals faster with VertexTrade');
    $('.hero__info').css('display', 'none');
    $('.hero__btn span').html('sign up now');

    $('.main-plans .heading .h1').html('01');
    $('.terms-steps .heading .h1').html('02');
    $('.main-advantages .heading .h1').html('03');
    $('.main-form .heading .h1').html('04');
}

if (page == '/instruments.html') {
    $('.hero__heading').html('Trading instruments');
    $('.hero__title').html('Explore VertexTrade\'s powerful trading instruments');
    $('.hero__info').css('display', 'none');
    $('.hero__btn span').html('sign up now');
    $('.main-advantages .heading .h1').html('03');
    $('.main-advantages .btn span').html('start trading');
    $('.main-form .heading .h1').html('04');
}

if (page == '/calendar.html') {
    $('.hero__heading').html('Economic calendar');
    $('.hero__title').html('Stay ahead of the market with the Economic calendar');
    $('.hero__info').html('Keep track of key financial events that impact the markets with our real-time Economic calendar. Whether you\'re a day trader, investor, or market analyst, staying on top of upcoming economic releases and global financial reports is essential to making smart trading decisions.');
    $('.hero__btn span').html('sign up now');
    $('.terms-steps .heading .h1').html('02');
    $('.main-advantages .heading .h1').html('03');
    $('.main-advantages .btn span').html('start trading');
    $('.main-form .heading .h1').html('04');
}

if (page == '/404.html') {
    $('.hero__heading').html('It looks like the page you\'re looking for doesn\'t exist or has been moved');
    $('.hero__title').html('Oops! Page not found (404)');
    $('.hero__info').css('display', 'none');
    $('.hero__btn span').html('Return to the homepage');
}

if (page == '/overview.html') {
    $('.hero__heading').html('Market Trends');
    $('.hero__title').html('Market overview — stay ahead with VertexTrade');
    $('.hero__info').html('With VertexTrade, you’re always up to date with key news, trends, and events shaping the global financial markets.');
    $('.hero__btn span').html('Open an Account');
    $('.main-form .heading .h1').html('05');
}