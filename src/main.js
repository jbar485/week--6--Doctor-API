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
      const answer = await doctorService.getDoctorAnswer(problem, specificDoctor);
      getAnswer(answer);
      console.log(doctorService);
    })();



    function getAnswer(answer) {
      let randomDoctor = (`${answer.data[1].profile.first_name}`);
      $("#yourSymptoms").text(`Your Symptoms: ${problem}`)
      $('#doctor').text(`Doctor: ${answer.data[1].profile.first_name} ${answer.data[1].profile.last_name}`);
      $('#doctorAddress').text(`Address: ${answer.data[1].practices[0].visit_address.street} ${answer.data[1].practices[0].visit_address.city} ${answer.data[1].practices[0].visit_address.state}  ${answer.data[1].practices[0].visit_address.zip}`);
      $('#doctornumber').text(`Phone number: ${answer.data[1].practices[0].phones[0].number}`);
      $('#doctorWebsite').text(`Website: ${answer.data[1].practices[0].website}`);
      $('#doctorAccept').text(`Accepting new patients: ${answer.data[1].practices[0].accepts_new_patients}`);
      console.log(randomDoctor);
    }

  });

  // player.setPopUp();

  $("button.restart").click(function(){
    location.reload();
  });
});
