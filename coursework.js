var cartId = "cart";

var localAdapter = {

    saveCart: function(object) {

        var stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;

    },
    getCart: function() {

        return JSON.parse(localStorage.getItem(cartId));

    },
    clearCart: function() {

        localStorage.removeItem(cartId);

    }

};

var ajaxAdapter = {

    saveCart: function(object) {

        var stringified = JSON.stringify(object);
        // do an ajax request here

    },
    getCart: function() {

        // do an ajax request -- recognize user by cookie / ip / session
        return JSON.parse(data);

    },
    clearCart: function() {

        //do an ajax request here

    }

};

var storage = localAdapter;

var helpers = {

    getHtml: function(id) {

        return document.getElementById(id).innerHTML;

    },
    setHtml: function(id, html) {

        document.getElementById(id).innerHTML = html;
        return true;

    },
    itemData: function(object) {

        var count = object.querySelector(".count"),
            patt = new RegExp("^[1-9]([0-9]+)?$");
        count.value = (patt.test(count.value) === true) ? parseInt(count.value) : 1;

        var item = {

            name: object.getAttribute('data-name'),
            price: object.getAttribute('data-price'),
            id: object.getAttribute('data-id'),
            count: count.value,
            total: parseInt(object.getAttribute('data-price')) * parseInt(count.value)

        };
        return item;

    },
    updateView: function() {

        var items = cart.getItems(),
            template = this.getHtml('cartT'),
            compiled = _.template(template, {
                items: items
            });
        this.setHtml('cartItems', compiled);
        this.updateTotal();

    },
    emptyView: function() {

        this.setHtml('cartItems', '<p>Nothing to see here</p>');
        this.updateTotal();

    },
    updateTotal: function() {

        this.setHtml('totalPrice', cart.total + '$');

    }

};

var cart = {

    count: 0,
    total: 0,
    items: [],
    getItems: function() {

        return this.items;

    },
    setItems: function(items) {

        this.items = items;
        for (var i = 0; i < this.items.length; i++) {
            var _item = this.items[i];
            this.total += _item.total;
        }

    },
    clearItems: function() {

        this.items = [];
        this.total = 0;
        storage.clearCart();
        helpers.emptyView();

    },
    addItem: function(item) {

        if (this.containsItem(item.id) === false) {

            this.items.push({
                id: item.id,
                name: item.name,
                price: item.price,
                count: item.count,
                total: item.price * item.count
            });

            storage.saveCart(this.items);


        } else {

            this.updateItem(item);

        }
        this.total += item.price * item.count;
        this.count += item.count;
        helpers.updateView();

    },
    containsItem: function(id) {

        if (this.items === undefined) {
            return false;
        }

        for (var i = 0; i < this.items.length; i++) {

            var _item = this.items[i];

            if (id == _item.id) {
                return true;
            }

        }
        return false;

    },
    updateItem: function(object) {

        for (var i = 0; i < this.items.length; i++) {

            var _item = this.items[i];

            if (object.id === _item.id) {

                _item.count = parseInt(object.count) + parseInt(_item.count);
                _item.total = parseInt(object.total) + parseInt(_item.total);
                this.items[i] = _item;
                storage.saveCart(this.items);

            }

        }

    }

};

document.addEventListener('DOMContentLoaded', function() {

    if (storage.getCart()) {

        cart.setItems(storage.getCart());
        helpers.updateView();

    } else {

        helpers.emptyView();

    }
    var products = document.querySelectorAll('.product button');
    [].forEach.call(products, function(product) {

        product.addEventListener('click', function(e) {

            var item = helpers.itemData(this.parentNode);
            cart.addItem(item);


        });

    });

    document.querySelector('#clear').addEventListener('click', function(e) {

        cart.clearItems();

    });


});

var navlink = document.getElementById("navlink");

// show menu 
function showmenu() {
    document.getElementById("navlink").style.right = "0";
}

function hidemenu() {
    document.getElementById("navlink").style.right = "-290px";
}

window.addEventListener('scroll', function() {
    var element = document.querySelector('.content');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
});



//opening popup when click on image and closing it with a cross 
var popUp = document.getElementById("popUp");
var popupImage = document.getElementById("popupImage");

var priceElement = document.getElementById("price");

var description = [
    "A luxurious modern house with a spacious front yard.",
    "A house with a lot of windows and lots of plants.",
    "A sustainable bulding's rooftop covered with green vegetation, showcasing the concept of green roofs for energy efficiency and environmental benefits.",
    "A futuristic concept for remote ecological luxury homes which are good for the earth, conservation, and environment. It uses renewable energy and blend in with nature.",
    "Beautiful organic Spanish modern revival kitchen interior with arched walkways sustainable furniture.",
    "A nature-inspired gym design that integrates living green walls, natural wood accents, and large windows to create a refreshing and energizing workout space.",
    "Green, sustainable and eco-friendly office or workspace interior with natural light. Modern architecture and business.",

];

function openPopUp(image, desc) {
    popUp.style.display = "flex";
    popupImage.src = image;
    productDetails.textContent = desc;
}

function closePopUp() {
    popUp.style.display = "none";
}


// splash screen
window.addEventListener(`load`, () => {
    const splashScreen = document.getElementById("intro");
    setTimeout(() => {
            splashScreen.style.display = "none";
        }, 30000) // set so that splash screen disapears after 30 seconds
});

var exit = document.getElementById("exitSplashButton");
var splashTest = document.getElementById("splashText");

function exitSplash() {
    var splashScreen = document.getElementById("intro");
    splash.style.display = "none";
}

//exit the splashscreen when the exit button is pressed 
exit.addEventListener(`click`, exitSplash);