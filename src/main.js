import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    (async () => {
      let doctorService = new DoctorService();
      const answer = await doctorService.getDoctorAnswer();
      getAnswer(answer);
      console.log(doctorService);
    })();



    function getAnswer(answer) {
      let randomDoctor = (`${answer.data[1].profile.first_name}`);
      console.log(randomDoctor);
    }

  });

  // player.setPopUp();

  $("button.restart").click(function(){
    location.reload();
  });
});
