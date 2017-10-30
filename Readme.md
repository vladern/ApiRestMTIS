# MongoDB y NodeJS endpoints

**//login
* 'https://apirestadi-2018.herokuapp.com/login'

**//conseguir un producto con un id concreto**
* GET 'https://apirestadi-2018.herokuapp.com/api/producto/:id'

**//conseguir todos los productos de la bd**
* GET 'https://apirestadi-2018.herokuapp.com/api/productos'

**//gurdar un producto en la bd**
* POST 'https://apirestadi-2018.herokuapp.com/api/producto'

**//borrar un producto de la bd(Ojo que la id es la _id es decir de la MongoDB no la que nosotros le ponemos)**
* DELETE 'https://apirestadi-2018.herokuapp.com/api/producto/:id'

**//actualizar un producto que ya esta en la bd**
* PUT  'https://apirestadi-2018.herokuapp.com/api/producto/:id'

**//Para el resto de objetos es igual pero cambiando /producto/ por el objeto en cuestión**
- /producto/
- /factura/
- /oferta/
- /venta/
- /informe/