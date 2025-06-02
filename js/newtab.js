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
    { text: "زندگی آن چیزی نیست که برایت اتفاق می‌افتد، بلکه آن چیزی است که تو با اتفاقات می‌سازی.", author: "سقراط" },
    { text: "هر روز را طوری زندگی کن که گویی آخرین روز زندگی توست.", author: "مارکوس اورلیوس" },
    { text: "آنچه ما را می‌کشد، رویاهای تحقق نیافته نیست، بلکه رویاهایی است که هرگز دنبال نکردیم.", author: "مولانا" },
    { text: "موفقیت، رفتن از شکست به شکست بدون از دست دادن اشتیاق است.", author: "وینستون چرچیل" },
    { text: "بزرگترین خطر در زندگی این نیست که هدف بلندی داشته باشیم و به آن نرسیم، بلکه این است که هدف کوچکی داشته باشیم و به آن برسیم.", author: "میکل آنژ" },
    { text: "آینده متعلق به کسانی است که به زیبایی رویاهایشان ایمان دارند.", author: "النور روزولت" },
    { text: "تنها راه انجام کار بزرگ، عشق به کاری است که انجام می‌دهید.", author: "استیو جابز" },
    { text: "زندگی یا یک ماجراجویی جسورانه است یا هیچ.", author: "هلن کلر" },
    { text: "آنچه ذهن انسان می‌تواند تصور کند و باور کند، می‌تواند به آن دست یابد.", author: "ناپلئون هیل" },
    { text: "هر کس که می‌خواهد دنیا را تغییر دهد، باید ابتدا خودش را تغییر دهد.", author: "سقراط" }
];

// نمایش نقل قول تصادفی
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('author').textContent = `— ${quote.author}`;
}