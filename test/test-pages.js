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

/*describe('/Create_Patient', () => {
    let book = {
        phoneNo:9049145390
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
});*/




/*describe('Post/Create_Report', () => {
     const id='5eb7074d599c761906e2d5b8';

     var body={
         
          createdBy:"Meghraj",
          status:'positive',


     }

    it('It should create new report and return object of created report', (done) => {
      chai.request('http://localhost:8000')
          .post(`/patient/${id}/create_report`)
          .send(body)
          .end((err, res) => {
            console.log(res);
                
            
                res.should.have.status(200);

                res.body.should.be.a('object');
                res.body.should.have.property('success')===true;
                
               

                done();
            
                 
                 
         

          });
    });
});
*/
describe('Post/getallReport', () => {
    const id='5eb7074d599c761906e2d5b8';

   

   it('Return all the reports of patient , patient id is sent to request', (done) => {
     chai.request('http://localhost:8000')
         .post("/patient/"+id+"/all_report") // (` patient/$(id)/all_report  `) we can also send req using interpolate in string
         .end((err, res) => {
           console.log(res.body.data);
               
           
               res.should.have.status(200);

               res.body.should.be.a('object');
               res.body.should.have.property('success')===true;
               
              

               done();
           
                
                
        

         });
   });
});

 