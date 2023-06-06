QUANTUM TECNO

Descripción:
    Proyecto final correspondiente al curso de Fullstack developer de la academia Rolling Code School.
    Este proyecto es un e-commerce desarrollado con React que permite a los usuarios explorar productos, agregarlos al carrito de compras y realizar pedidos.

Características:
    Registrarse como usuario e ingresar con cuenta propia.
    Explorar productos por categorías.
    Ver productos destacados.
    Ver detalles de un producto específico.
    Agregar productos al carrito de compras.
    Realizar pedidos y finalizar la compra.
    Administrar el inventario de productos al loguearse como administrador.
    Administrar la lista de usuarios registrados al loguearse como administrador.

Instalación:
    1-Clona este repositorio en tu máquina local.
        bash: git clone https://github.com/tu-usuario/tu-repositorio.git
    
    2-Navega al directorio del proyecto.
        bash: cd ecommerce-react
    
    3-Instala las dependencias del proyecto.
        npm install
    
    4-Inicia la aplicación.
        npm start

Tecnologías utilizadas:
    React
    HTML
    CSS
    JavaScript

Estructura de archivos:
|── public
│   ├── index.html
│   └── logo.jpg
├── src
|   ├── assets
|   |   ├──images
|   |   ├──advertisement
|   |   ├──extras
|   |   ├──ediosDePago
|   |   ├──products
|   |   ├──logo.jpg
|   |   ├──logo.png 
|   |   ├──qrcode.npg
|   |   └─user_icon.png
|   |
│   ├── components
│   │   ├── admin
|   |   |   ├──perfil
|   |   |   |   ├─ perfil.css
|   |   |   |   └─ Perfiluser.js
|   |   |   |
|   |   |   ├──table
|   |   |   |   ├─ modals
|   |   |   |   |   ├─createModal.js
|   |   |   |   |   ├─deleteModal.js
|   |   |   |   |   ├─editModal.js
|   |   |   |   |   └─modals.css
|   |   |   |   ├─ tableBody
|   |   |   |   |   ├─tableBody.css
|   |   |   |   |   └─ tableBody.js
|   |   |   |   ├─ tableForm
|   |   |   |   |   ├─editingForm.css
|   |   |   |   |   └─editingForm.js
|   |   |   |   ├─ UsersTable.css
|   |   |   |   └─ UsersTable.js
|   |   |   |
|   |   |   ├──user
|   |   |   |   └─Usuarios.js
|   |   |   |
|   |   |   └─Administrator.js
|   |   |
│   │   ├─ advertisement
|   |   |   ├─ advertisement.css
|   |   |   └─ Advertisement.js
|   |   |
│   │   ├── cards
|   |   |   ├─ buttonGroup.css
|   |   |   ├─ cards.css
|   |   |   └─ Cards.js
|   |   |
|   |   ├── cartPage
|   |   |   ├─ cartPage.css
|   |   |   └─ CartPage.js
|   |   |
|   |   ├── error
|   |   |   ├─ error404.css
|   |   |   └─ Error404.js
|   |   |
|   |   ├── featured
|   |   |   ├─ featured.css
|   |   |   └─ Featured.js
|   |   |
|   |   ├── footer
|   |   |   ├─ footer.css
|   |   |   └─ Footer.js
|   |   |
|   |   ├── form
|   |   |   ├─ account
|   |   |   |   ├─ editpassword
|   |   |   |   |   ├─EditPassUser.js
|   |   |   |   |   └─editpassword.css
|   |   |   |   ├─  recoveri.css
|   |   |   |   └─  RecoverPassword.js
|   |   |   |
|   |   |   ├─ login
|   |   |   |   ├─ login.css
|   |   |   |   └─LoginForm.js
|   |   |   |
|   |   |   ├─ Modal
|   |   |   |   ├─ modallogin.css
|   |   |   |   └─ ModalLogin.js
|   |   |   |
|   |   |   └─ register
|   |   |      ├─ registerForm.css
|   |   |      └─ RegisterForm.js
|   |   |
|   |   ├── header
|   |   |   ├─ header.css
|   |   |   └─ Header.js
|   |   |
|   |   ├── home
|   |   |   ├─ home.css
|   |   |   └─ Home.js
|   |   |
|   |   ├── productPage
|   |   |   ├─ productPage.css
|   |   |   └─ ProductPage.js
|   |   |
|   |   ├──productPageSell
|   |   |   ├─ productPageSell.css
|   |   |   └─ ProductPageSell.js
|   |   |
|   |   ├──sellPage
|   |   |   ├─ sellPage.css
|   |   |   └─ SellPage.js
|   |   |
|   |   ├──slider
|   |   |   ├─ Slider.css
|   |   |   └─ Slider.js
|   |   |
|   |   ├──table
|   |   |   ├─ modals
|   |   |   |   ├─ createModal.js
|   |   |   |   ├─ deleteModal.js
|   |   |   |   ├─ editModal.js
|   |   |   |   └─ modals.js
|   |   |   |
|   |   |   ├─ tableBody
|   |   |   |   ├─ tableBody.css
|   |   |   |   └─ tableBody.js
|   |   |   |
|   |   |   ├─ tableForm
|   |   |   |   ├─ editingForm.css
|   |   |   |   └─ editingForm.js
|   |   |   |
|   |   |   ├─ table.css
|   |   |   └─ Table.js
|   |   |
|   |   └─ util
|   |       ├─ loader
|   |       |   ├─ loader.css
|   |       |   └─ Loader.js
|   |       |
|   |       ├─ menu
|   |       |   ├─ menu.css
|   |       |   └─ Menu.js
|   |       |
|   |       └─ searchbar
|   |           ├─ searchbar.css
|   |           └─ Searchbar.js
|   ├── config
|   |    └─ axiosInit.js
|   |
|   ├── context
|   |    └─ cartContext.js
|   |
│   ├── pages
│   │   ├─ homePage
|   |   |   └─ homePage.js
|   |   |
│   │   └─ hotItemsPage
|   |       └─ hotItemsPage.js
|   |
│   ├── App.js
|   |
|   ├── index.css
|   |
│   └── index.js
|
└── Readme.txt

Autores:
    -José Ignacio Fernández Cano
    -Ariel David Gomez
    -Martin Gomez
    -Cintya Alexia Tonin Elias 

Licencia:
    Todos los derechos de autor de los recursos utilizados en este proyecto, como imágenes, logotipos y marcas registradas, pertenecen a sus respectivos dueños. Estos recursos se utilizan únicamente con fines ilustrativos y para mejorar la experiencia del usuario. Si crees que se han infringido tus derechos de autor, por favor contáctanos y tomaremos las medidas correspondientes.

Recursos adicionales:
    Repositorio Backend: https://github.com/NachoFernandezCano/backProyectofinal.git
