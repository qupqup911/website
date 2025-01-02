document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 防止頁面重新加載

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            responseMessage.textContent = `謝謝您的留言，${name}！我們會盡快聯繫您。`;
            responseMessage.style.color = 'green';
            contactForm.reset(); // 清空表單
        } else {
            responseMessage.textContent = '請填寫所有欄位。';
            responseMessage.style.color = 'red';
        }
    });
});