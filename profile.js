// Sample booking history data
const bookingHistory = [
    {
        destination: 'Goa',
        date: '2024-06-15',
        price: 3000
    },
    {
        destination: 'Wayanad',
        date: '2024-05-20',
        price: 2500
    },
    {
        destination: 'Varkala',
        date: '2024-04-10',
        price: 2000
    }
];

// Function to load user profile details
function loadProfile() {
    // Simulated user profile data
    const userName = 'Muniyandi';
    const userEmail = 'muniyandi4756@gmail.com';
    const userPhone = '8028712996';

    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-email').textContent = userEmail;
    document.getElementById('user-phone').textContent = userPhone;

    // Load booking history
    const bookingHistoryList = document.getElementById('booking-history');
    bookingHistory.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Destination:</strong> ${booking.destination}<br>
            <strong>Date:</strong> ${booking.date}<br>
            <strong>Price:</strong> ₹${booking.price}
        `;
        bookingHistoryList.appendChild(listItem);
    });
}

// Function to show the edit profile form
function editProfile() {
    document.getElementById('edit-profile').style.display = 'block';
}

// Function to save the edited profile details
function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    document.getElementById('user-name').textContent = name;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-phone').textContent = phone;

    // Hide the edit profile form
    document.getElementById('edit-profile').style.display = 'none';
}

// Load profile data on page load
window.onload = loadProfile;
