import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("#answerSymptomButton").click(function(event){
    event.preventDefault();
    const problem = $("#symptoms").val();
    const name = $("#doctorName").val();
    $("#symptoms").val("");
    $("#doctorName").val("");

    (async () => {
      let doctorService = new DoctorService();
      const answer = await doctorService.getDoctorProblem(problem);
      getAnswer(answer);
    })();



    function getAnswer(answer) {
      $("#yourSymptoms").text(`Your Symptoms: ${problem}`)
      $('#doctor').text(`Doctor: ${answer.data[1].profile.first_name} ${answer.data[1].profile.last_name}`);
      $('#doctorAddress').text(`Address: ${answer.data[1].practices[0].visit_address.street} ${answer.data[1].practices[0].visit_address.city} ${answer.data[1].practices[0].visit_address.state} ${answer.data[1].practices[0].visit_address.zip}`);
      $('#doctornumber').text(`Phone number: ${answer.data[1].practices[0].phones[0].number}`);
      $('#doctorWebsite').text(`Website: ${answer.data[1].practices[0].website}`);
      $('#doctorAccept').text(`Accepting new patients: ${answer.data[1].practices[0].accepts_new_patients}`);
    }

  });

  $("#answerNameButton").click(function(event){
    event.preventDefault();

    (async () => {
      let doctorNameService = new DoctorService();
      const answer = await doctorNameService.getDoctorName(name);
      getNameAnswer(answer);
    })();

    function getNameAnswer(answer) {
      $('#doctor1').text(`Doctor: ${answer.data[1].profile.first_name} ${answer.data[1].profile.last_name}`);
      $('#doctorAddress1').text(`Address: ${answer.data[1].practices[0].visit_address.street} ${answer.data[1].practices[0].visit_address.city} ${answer.data[1].practices[0].visit_address.state} ${answer.data[1].practices[0].visit_address.zip}`);
      $('#doctornumber1').text(`Phone number: ${answer.data[1].practices[0].phones[0].number}`);
      $('#doctorWebsite1').text(`Website: ${answer.data[1].practices[0].website}`);
      $('#doctorAccept1').text(`Accepting new patients: ${answer.data[1].practices[0].accepts_new_patients}`);
    }
  });

  // player.setPopUp();

  $("button.restart").click(function(){
    location.reload();
  });
});
