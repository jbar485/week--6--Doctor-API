export class DoctorService {
  async getDoctorProblem(problem) {
    try {
      let answer = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.3479%2C122.6806&query=${problem}&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let doctorList = await answer.json();
      return doctorList;
    }catch(error) {
      alert("There was an error:" + error.message);
    }
  }

  async getDoctorName(name) {
    try {
      let answer = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?&name=${name}&location=or-portland&user_location=45.3479%2C122.6806&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let doctorList = await answer.json();
      return doctorList;
    }catch(error) {
      alert("There was an error:" + error.message);
    }
  }
}
