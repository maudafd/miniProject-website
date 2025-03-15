document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua item dengan class 'sort-item'
    const sortItems = document.querySelectorAll('.sort-item');

    // Tambahkan event listener untuk setiap item
    sortItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hapus class 'active' dari semua item
            sortItems.forEach(sortItem => sortItem.classList.remove('active'));
            // Tambahkan class 'active' ke item yang diklik
            this.classList.add('active');
        });
    });
});