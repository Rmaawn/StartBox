document.addEventListener('DOMContentLoaded', function() {
    // نمایش تاریخ و زمان
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // بارگذاری نشانک‌ها
    loadBookmarks();
    
    // بارگذاری لینک‌های سریع
    loadQuickLinks();
    
    // بارگذاری یادداشت‌ها
    loadNotes();
    
    // ذخیره یادداشت‌ها
    document.getElementById('save-notes').addEventListener('click', saveNotes);
});

// تابع به‌روزرسانی تاریخ و زمان
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const persianDate = now.toLocaleDateString('fa-IR', options);
    document.getElementById('date-time').textContent = persianDate;
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