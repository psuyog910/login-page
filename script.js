function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    fetch('https://your-backend-url/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful! Please login.');
        } else {
            alert('Signup failed: ' + data.message);
        }
    });
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch('https://your-backend-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('welcome-message').style.display = 'block';
        } else {
            alert('Login failed: ' + data.message);
        }
    });
}
