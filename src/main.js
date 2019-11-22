import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("#answerButton").click(function(event){
    event.preventDefault();
    const problem = $("#symptoms").val();
    const specificDoctor = $("#doctorName").val();
    $("#symptoms").val("");
    $("#doctorName").val("");

    (async () => {
      let doctorService = new DoctorService();
      const answer = await doctorService.getDoctorAnswer(problem);
      getAnswer(answer);
      console.log(doctorService);
    })();



    function getAnswer(answer) {
      let randomDoctor = (`${answer.data[1].profile.first_name}`);
      $("#yourSymptons").text(`Your Symptoms: ${problem}`)
      $('.doctor').text(`Doctor: ${answer.data[1].profile.first_name} ${answer.data[1].profile.last_name}`);
      console.log(randomDoctor);
    }

  });

  // player.setPopUp();

  $("button.restart").click(function(){
    location.reload();
  });
});
