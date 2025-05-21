document.addEventListener('DOMContentLoaded', function () {
    var checkoutItemsElement = document.getElementById('checkoutItems');
    var checkoutTotalElement = document.getElementById('checkoutTotal');

    // Function to display cart items on the checkout page
    function displayCheckoutItems() {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        var totalPrice = 0;
        var html = '<ul>';

        cartItems.forEach(function (item) {
            html += '<li>' + item.name + ' - $' + item.total + '</li>';
            totalPrice += item.total;
        });

        html += '</ul>';
        checkoutItemsElement.innerHTML = html;
        checkoutTotalElement.textContent = totalPrice + '$';

        if (cartItems.length === 0) {
            // Show a popup message if cart is empty
            alert('Your cart is empty. Please add some products before checkout.');
        }
    }

    // Display checkout items when the page loads
    displayCheckoutItems();
});
