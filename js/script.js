document.addEventListener('DOMContentLoaded', () => {
    // Модальное окно автопарковки
    const parkingPromo = document.getElementById('parkingPromo');
    const parkingModal = document.getElementById('parkingModal');
    const closeParking = document.getElementById('closeParking');

    // Модальное окно каталога Instagram (ищем по вашему ID)
    const catalogOpen = document.getElementById('catalogOpen');
    const catalogModal = document.getElementById('catalogModal');
    const closeCatalog = document.getElementById('closeCatalog');

    // Логика для баннера парковки
    if (parkingPromo && parkingModal) {
        parkingPromo.addEventListener('click', () => parkingModal.classList.add('active'));
    }
    
    // Логика для вашей кнопки Instagram-каталога
    if (catalogOpen && catalogModal) {
        catalogOpen.addEventListener('click', (e) => {
            e.preventDefault(); // Останавливаем мгновенный переход по ссылке
            catalogModal.classList.add('active'); // Открываем модальное окно
        });
    }

    // Закрытие окон по крестику
    if (closeParking && parkingModal) {
        closeParking.addEventListener('click', () => parkingModal.classList.remove('active'));
    }
    if (closeCatalog && catalogModal) {
        closeCatalog.addEventListener('click', () => catalogModal.classList.remove('active'));
    }

    // Закрытие окон по клику на темный фон
    window.addEventListener('click', (e) => {
        if (e.target === parkingModal) parkingModal.classList.remove('active');
        if (e.target === catalogModal) catalogModal.classList.remove('active');
    });
});

