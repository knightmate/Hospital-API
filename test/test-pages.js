var expect  = require('chai').expect;
var request = require('request');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

// it('Main page content', function(done) {
//     request('http://localhost:8000' , function(error, response, body) {
    
//        console.log(response);
//        console.log(body);

//        expect(response).to.equal(Object);

//         done();

//     });
// });
chai.use(chaiHttp);

describe('/Create_Patient', () => {
    let book = {
        phoneN:9049145390
    }
    it('It should return newly created patient', (done) => {
      chai.request('http://localhost:8000')
          .post('/doctor/register_patient')
          .send(book)
          .end((err, res) => {
            console.log(res.body);
                
                res.should.have.status(200);

                res.body.should.be.a('object');

               res.body.should.have.property('patient');
                 
               

                done();
            
                 
                 
         

          });
    });
});

 