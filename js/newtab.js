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
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
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

// بارگذاری نشانک‌های پرکاربرد
function loadBookmarks() {
    // در نسخه واقعی از chrome.bookmarks.getRecent استفاده می‌شود
    // اینجا برای نمونه داده‌های ثابت قرار می‌دهیم
    const sampleBookmarks = [
        { title: 'گوگل', url: 'https://www.google.com', favicon: 'https://www.google.com/favicon.ico' },
        { title: 'یوتیوب', url: 'https://www.youtube.com', favicon: 'https://www.youtube.com/favicon.ico' },
        { title: 'گیت‌هاب', url: 'https://github.com', favicon: 'https://github.com/favicon.ico' },
        { title: 'توییتر', url: 'https://twitter.com', favicon: 'https://twitter.com/favicon.ico' },
        { title: 'لینکدین', url: 'https://www.linkedin.com', favicon: 'https://www.linkedin.com/favicon.ico' }
    ];
    
    const bookmarksContainer = document.getElementById('bookmarks-list');
    
    sampleBookmarks.forEach(bookmark => {
        const bookmarkElement = document.createElement('a');
        bookmarkElement.className = 'bookmark-item';
        bookmarkElement.href = bookmark.url;
        
        const iconElement = document.createElement('div');
        iconElement.className = 'bookmark-icon';
        
        const img = document.createElement('img');
        img.src = bookmark.favicon;
        img.alt = bookmark.title;
        img.width = 24;
        img.height = 24;
        
        iconElement.appendChild(img);
        
        const titleElement = document.createElement('span');
        titleElement.textContent = bookmark.title;
        
        bookmarkElement.appendChild(iconElement);
        bookmarkElement.appendChild(titleElement);
        
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

// بارگذاری لینک‌های سریع
function loadQuickLinks() {
    const quickLinks = [
        { title: 'ایمیل', url: 'https://mail.google.com' },
        { title: 'اخبار', url: 'https://news.google.com' },
        { title: 'ترجمه', url: 'https://translate.google.com' },
        { title: 'نقشه', url: 'https://maps.google.com' },
        { title: 'تقویم', url: 'https://calendar.google.com' },
        { title: 'درایو', url: 'https://drive.google.com' }
    ];
    
    const linksContainer = document.getElementById('quick-links');
    
    quickLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'quick-link';
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        
        linksContainer.appendChild(linkElement);
    });
}

// بارگذاری یادداشت‌ها از حافظه محلی
function loadNotes() {
    chrome.storage.sync.get(['notes'], function(result) {
        if (result.notes) {
            document.getElementById('notes').value = result.notes;
        }
    });
}

// ذخیره یادداشت‌ها در حافظه محلی
function saveNotes() {
    const notes = document.getElementById('notes').value;
    
    chrome.storage.sync.set({ notes: notes }, function() {
        // نمایش پیام موفقیت‌آمیز بودن ذخیره
        const saveButton = document.getElementById('save-notes');
        const originalText = saveButton.textContent;
        
        saveButton.textContent = 'ذخیره شد!';
        saveButton.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            saveButton.textContent = originalText;
            saveButton.style.backgroundColor = '#2ecc71';
        }, 2000);
    });
}