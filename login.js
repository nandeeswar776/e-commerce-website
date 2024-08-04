document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');
    
    // Dummy validation for username and password
    if (username === 'user' && password === 'password') {
        loginMessage.textContent = 'Login successful! Redirecting...';
        loginMessage.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        loginMessage.textContent = 'Invalid username or password';
        loginMessage.style.color = 'red';
    }
});
