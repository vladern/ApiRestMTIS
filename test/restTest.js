var supertest = require("supertest");
var should = require("should");
var chai = chai = require('chai');
var expect = chai.expect;
var assert = require('assert')

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3001");
var idMongoDB="";
var idMongoDB1="";
// UNIT test begin

describe("Tests Unitarios",function(){

  // #1 debe devolver html

  it("/login devuelve html",function(done){

    // calling home page api
    server
    .get("/login")
    .expect("Content-type",/html/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });
  // #2 debe devolver 500 ya que ya esta registrado

  it("/api/signup devuelve status:500 , ya que ya estas registrado,sino vuelve a ejecutar el test",function(done){

    server
    .post("/api/signup")
    .send({email:'vladys.3234@gmail.com',displayName:'vladernn',password:'secret'})
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(500);
      expect(res.body.message).to.be.a("string");
      done();
    });
  });

  // #3 debe devolver status:200 y el token

  it("/api/signin debe devolver status:200 y el token",function(done){
    server
    .post("/api/signin")
    .send({email:'vladys.3234@gmail.com',password:'secret'})
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.message.should.equal('Te has logeado correctamente');
      expect(res.body.token).to.be.a("string");
      done();
    });
  });
  // #4 Testeando el producto
  it("/api/producto hago el post de un producto y me devuelve el objeto creado en MongoDB sino pasa volver a pasar el test",function(done){
    server
    .post("/api/producto")
    .send(
      {
        'id' : 1,
        'nombre' : 'pastelito',
        'cantidad' : 1,
        'precio' : 120 
      }
    )
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
  // #5 Testeando el producto
  it("/api/producto/:id el producto con la id solicitada",function(done){
    server
    .get("/api/producto/1")
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.producto.id.should.equal(1);
      res.body.producto.nombre.should.equal('pastelito');
      res.body.producto.cantidad.should.equal(1);
      res.body.producto.precio.should.equal(120);
      idMongoDB=res.body.producto._id;
      // #6 testeo el put aqui ya que el codigo es asincrono
      server
      .put('/api/producto/1')
      .send({'nombre':'PASTELAZO'})
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        done()
      })
    });
  });
  // #7 Testeando el producto devuelve un array con todos los productos
  it("/api/productos devuelve un array con todos los productos",function(done){
    console.log(idMongoDB)
    server
    .get(`/api/productos`)
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      expect(res.body.producto).to.be.an("array");
      done();
    });
  });
  // #8 Testeando el producto borro el prodcuto de la BDD
  it("/api/producto/${idMongoDB} borro el prodcuto de la BDD ",function(done){
    console.log(idMongoDB)
    server
    .delete(`/api/producto/${idMongoDB}`)
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal('el producto ha sido eliminado');
      done();
    });
  });

  

  // #9 Testeando el post de la factura
  it("/api/factura hago el post de una factura y me devuelve el objeto creado en MongoDB sino pasa volver a pasar el test",function(done){
    server
    .post("/api/factura")
    .send(
      {
        'id' : 1,
        'productos' : [{'id' : 1,'nombre' : 'pastelito','cantidad' : 1,'precio' : 120 }],
        'precioTotal' : 120,
        'cliente' : "Vladyslav Kuchmenko"
      }
    )
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      idMongoDB1=res.body.factura._id;
      done();
    });
  });
  // #10 Testeando testeando el get de la factura
  it("/api/factura/:id devuelve la factura",function(done){
    server
    .get("/api/factura/1")
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.factura.id.should.equal(1);
      expect(res.body.factura.productos).to.be.an("array");
      res.body.factura.precioTotal.should.equal(120);
      res.body.factura.cliente.should.equal("Vladyslav Kuchmenko");
      done();
    });
  });

  // #11 Testeando el delete la factura
  it("/api/factura/${idMongoDB1} borro la factura de la BDD ",function(done){
    server
    .delete(`/api/factura/${idMongoDB1}`)
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal('la factura ha sido eliminada');
      done();
    });
  });
});