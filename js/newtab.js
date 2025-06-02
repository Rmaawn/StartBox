document.addEventListener('DOMContentLoaded', function() {
    // تمرکز روی سرچ بار مرورگر
    window.focus();
    
    // ارسال کلید Tab به مرورگر برای انتقال تمرکز به سرچ بار
    const tabEvent = new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        which: 9,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(tabEvent);
    
    // نمایش تاریخ و زمان
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // نمایش نقل قول تصادفی
    displayRandomQuote();
});

// تابع به‌روزرسانی تاریخ و زمان
function updateDateTime() {
    const now = new Date();
    
    // نمایش زمان
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // نمایش تاریخ
    const options = {
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    
    const persianDate = now.toLocaleDateString('fa-IR', options);
    document.getElementById('date').textContent = persianDate;
}

// نقل قول‌های انگیزشی
const quotes = [
    { text: "یک مسابقه همیشه چیزایی بیشتری از صرفا برنده شدن داره", author: "Lightning mcqueen" },
    { text: "ذهن‌تون همیشه باز باشه، اما نه اون‌قدر که مغزتون بریزه بیرون", author: "Groucho marx" },
    { text: "چیز های بد یا خیلی طولانی نیستن یا خیلی بد نیستن", author: "Epicure" },
    { text: "آدم های متکبر هیچوقت شک نمیکنن", author: "Thanos" },
    { text: "افراد بد رو داخل زندان میندازن و افراد بد داخل زندان رو به انفرادی، بدترین شکنجه برای انسان تنهاییه", author: "Wise man" },
    { text: "به خاطر داشته باش حتی زمانی که پادشاهان و خدایان تو را هدایت میکنند، روح تو تنها در اختیار خودت است", author: "Baldwin iv" },
    { text: "کار سخت ممکنه همیشه به موفقیت منجر نشه، اما هیچوقت باعث پشیمونی نمیشه", author: "Brad pitt" },
    { text: "قانون اول رهبری، همچیز تقصیر توعه", author: "Bugs Life" },
    { text: "بزدلی بزرگترین گناه است", author: "mikhail bulgakov" },
    { text: "اتفاقی که تو تاریکی میوفته با نور روشن میشه", author: "Trevor philips" },
    { text: "اگر در جایی انسان های کوچک سایه های بزرگی داشتند یعنی خورشید آنجا درحال غروب است", author: "Confucius" },
    { text: "Better be safe than sorry", author: "Joe barbaro" },
    { text: "Nothing is written", author: "Wise man" },
    { text: "فراموش نکن پرت شدت از تقوا تدریجیه ", author: "Jadi" },
    { text: "هیچکس نمیتونه مثل یک سوزن از دل یک جامعه بزنه بیرون، هرچقد اطرافمون با سوادتر باشن ماهم باهاشون میایم بالا ", author: "Jadi" },
    { text: "جامعه خوب از یک رهبر قوی و بقیه پشت سرش تشکیل نمیشه بلکه از آدم های مستقل و قوی تشکیل میشه", author: "Jadi" },
    { text: "من گور کسانی رو دیده ام که برای حق خود نجنگیدند، مبادا کشته شوند", author: "Ernesto che guevara" },
    { text: "برای دیکتاتور ها مردم ۲ دسته اند اونایی که باید گول بخورند و اونایی که باید گلوله بخورند", author: "George orwell" },
    { text: "قبل از اولین مسابقه ام به عنوان مربی من یونایتد برای دعا به کلیسا رفتم، بعد ازینکه اون بازیو باختیم فهمیدم مربی حریف هم به کلیسا رفته بود، از اون پس تصمیم گرفتم روی خودم حساب باز کنم ", author: "Sir Alex Ferguson" },
    { text: "قانون پرواز با کایت میگه به هرکجا که نگاه بکنی فرود میای، مهم نیس باد از چه طرف میاد یا تواناییت چقدره به هرکجا که نگاه کنی میرسی", author: "Wise man" },
    { text: "تا وقتی دست و پا بزنی غرق نمیشی", author: "Wise man" },
    { text: "ی مرد قوی از خودش محافظت میکنه ی مرد قویتر از بقیه", author: "Wise man" },
    { text: "من استعدادی نداشتم پس صبح ها زودتر بیدار میشدم", author: "Henry rollins" },
    { text: "رستگاری یک امر جمعیه نه فردی", author: "Wise man" },
    { text: "غیرممکنه بتونید چیزی بسازید که «ضداحمق» باشه. چون احمق‌ها بسیار مبتکر و خلاقن", author: "Groucho marx" },
    { text: "بالاترین چیز در دنیا اینه که قدرت بخشیدن رو پیدا کنیم", author: "Silco" },
];

// نمایش نقل قول تصادفی
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('author').textContent = `— ${quote.author}`;
}