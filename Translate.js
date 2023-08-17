// Переводы для разных языков
const translations = {
    en: {
        "Create fighter": "Create Fighter"
    },
    ru: {
        "Create fighter": "Создать бойца"
    }
};

// Изначально установленный язык
let currentLanguage = 'en';

// Функция для переключения языка
function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
    updateTranslations();
}

// Обновление текстов на странице
function updateTranslations() {
    const buttons = document.querySelectorAll('.btn-new');
    
    buttons.forEach(button => {
        const translationKey = button.textContent.trim();
        button.textContent = translations[currentLanguage][translationKey];
    });
}

// Отслеживаем клики по кнопке переключения языка
const toggleButton = document.getElementById('toggleLanguage');
toggleButton.addEventListener('click', toggleLanguage);

// Инициализация переводов при загрузке страницы
updateTranslations();