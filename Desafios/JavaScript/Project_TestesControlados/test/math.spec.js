const { describe } = require("mocha");
const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon');

const Math = require('../src/math.js')// importa da classe math
const MathAsyncrono = require('../src/math_asyncrono.js');


describe('Math class', function(){// SÍNCRONO
   it('Sum two numbers', function(){// descreve oq sera feito(teste)
        const math = new Math();

        try{
            assert.equal(math.sum(5,5), 10);
        }catch(err){
            console.log(err)
        }       
    });

    it('Sum two numbers', function(done){// descreve oq sera feito ASSÍNCRONO
        const mathAsyncrono = new MathAsyncrono();

        const obj ={
            name: 'Abreu'
        };

        expect(obj)
        .to.have.property('name') //verificando se esta propriedade existe
        .equal('Abreu'); //verifica se a prop é igual a Abreu.

        mathAsyncrono.sum(5, 5, (value) =>{
            expect(value).to.equal(10)
            done(); // so considera o teste finalizado dps de executar o done();
        })
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();
        math.printSum(req, res, 5 ,5);

        expect(res.load.calledOnce).to.be.true;
    });
})
