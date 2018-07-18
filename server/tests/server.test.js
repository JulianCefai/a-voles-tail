const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {audioFile} = require('./../Models/audiofile')

//describe block

beforeEach((done) => {
  audioFile.remove({}).then(() => {
    done());
  });
});

describe('POST /todos',() => {
  it('Should create a new audiofile', (done) => {
    var audioFileID = 'Test todo  text';

    request(app)
    .post('/audioFilePlayed')
    .send({audioFileID})
    .expect(200)
    .expect((res) => {
      expect(res.body.audioFileID).toBe(audioFileID)
    }).end((err,res) => {
      if (err) {
        return done(err)
      }
      audioFile.find().then((audioFiles) =>{
        expecr(audioFiles.length).toBe(1);
        expect(audioFiles[0].audioFileID).toBe(audioFileID)
      }).catch(e) => done(e));
    });
  });

  it('should not create todo with invalid body data', (done) => {

  });
});
