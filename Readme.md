# MongoDB y NodeJS endpoints

**//conseguir un producto con un id concreto**
* GET 'http://apirestmtis-2017.herokuapp.com/api/producto/:id'

**//conseguir todos los productos de la bd**
* GET 'http://apirestmtis-2017.herokuapp.com/api/productos'

**//gurdar un producto en la bd**
* POST 'http://apirestmtis-2017.herokuapp.com/api/producto'

**//borrar un producto de la bd(Ojo que la id es la _id es decir de la MongoDB no la que nosotros le ponemos)**
* DELETE 'http://apirestmtis-2017.herokuapp.com/api/producto/:id'

**//actualizar un producto que ya esta en la bd**
* PUT  'http://apirestmtis-2017.herokuapp.com/api/producto/:id'

**//Para el resto de objetos es igual pero cambiando /producto/ por el objeto en cuestión**
- /producto/
- /factura/
- /oferta/
- /venta/
- /informe/