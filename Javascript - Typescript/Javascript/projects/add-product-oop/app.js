class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {

        const productList = document.getElementById('product-list');

        const element = document.createElement('div');

        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong>: ${product.name}
                <strong>Product Price</strong>: ${product.price}
                <strong>Product Year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;

        productList.appendChild(element);
    }

    deleteProduct(element) {
        // El elemento (boton) tiene como padre los divs, y hasta llegar al div inicial, seguimos llamando al parentElement
        if(element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
        }
        this.showMessage('Product Deleted','info');
    }

    showMessage(message, cssClass) {
        //Con el querySelector, podemos referirnos a las clases o a los id de los elementos que empiecen con la palabra introducida dentro del metodo.
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        // Indicams que dentro del container, insertamos el div pero antes del div con el id app.
        container.insertBefore(div,app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }
}

// DOM

document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name,price,year);

        const ui = new UI();

        //Si entra en el if, al poner un return, deja de leer el resto del codigo, si no pusiesemos el return, seguiria leyendo el codigo siguiente.
        if(name === '' || price === '' || year === '') {
            return ui.showMessage('Complete fields','danger')
        }

        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Product Added', 'success');

        //preventDefault -> cancela el refresh del formulario al clicar en el submit
        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
})