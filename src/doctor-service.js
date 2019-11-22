export class DoctorService {
  async getDoctorAnswer(name) {
    try {
      let answer = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.3479%2C122.6806&sort=full-name-asc&skip=0&limit=10&user_key=d5c618cfc74fc64f2dc55f25ec3f7c4d`);
      let doctorList = await answer.json();
      return doctorList;
    }catch(error) {
      alert("There was an error:" + error.message);
    }
  }
}
