import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("#specificDoctor").click(function(event){
    event.preventDefault();
    $("#nameCard").show();
    $("#firstPage").hide();
  });

  $("#symptomDoctor").click(function(event){
    event.preventDefault();
    $("#symptomCard").show();
    $("#firstPage").hide();
  });

  $("#answerSymptomButton").click(function(event){
    event.preventDefault();
    const problem = $("#symptoms").val();
    $("#symptoms").val("");

    (async () => {
      let doctorService = new DoctorService();
      const answer = await doctorService.getDoctorProblem(problem);
      getAnswer(answer);
    })();

    function getAnswer(answer) {
      if (answer.data.length === 0) {
        $('#listOfDoctors').text("Couldnt find any doctors that specialize in your symptoms. Maybe try wording them different.");
      }else {
        $('#listOfDoctors').text("");
        for (var i = 0; i < answer.data.length; i++) {
          $('#listOfDoctors').append(`Doctor: ${answer.data[i].profile.first_name} ${answer.data[i].profile.last_name} <br>`);
          $('#listOfDoctors').append(`Address: ${answer.data[i].practices[0].visit_address.street} ${answer.data[i].practices[0].visit_address.city} ${answer.data[i].practices[0].visit_address.state} ${answer.data[i].practices[0].visit_address.zip} <br>`);
          $('#listOfDoctors').append(`Phone number: ${answer.data[i].practices[0].phones[0].number} <br>`);
          if (answer.data[i].practices[0].website === undefined) {
            $('#listOfDoctors').append("Website: Currently Unavailable <br>");
          }else {
            $('#listOfDoctors').append(`Website: ${answer.data[i].practices[0].website} <br>`);
          }
          if (answer.data[i].practices[0].accepts_new_patients === true) {
            $('#listOfDoctors').append(`We are accepting new patients <br>`);
          }else {
            $('#listOfDoctors').append(`We are not accepting new patients <br>`);
          }
          $('#listOfDoctors').append("<br>");
        }
      }
    }
  });
  $("#answerNameButton").click(function(event){
    event.preventDefault();
    const name = $("#doctorName").val();
    $("#doctorName").val("");

    (async () => {
      let doctorNameService = new DoctorService();
      const nameAnswer = await doctorNameService.getDoctorName(name);
      getNameAnswer(nameAnswer);
    })();

    function getNameAnswer(nameAnswer) {
      if (nameAnswer.data.length === 0) {
        $('#originalDoctor').text("You need to enter a legitimate doctor.");
      }else {
        $('#originalDoctor').text("");
        $('#originalDoctor').append(`Doctor: ${nameAnswer.data[0].profile.first_name} ${nameAnswer.data[0].profile.last_name} <br>`);
        $('#originalDoctor').append(`Address: ${nameAnswer.data[0].practices[0].visit_address.street} ${nameAnswer.data[0].practices[0].visit_address.city} ${nameAnswer.data[0].practices[0].visit_address.state} ${nameAnswer.data[0].practices[0].visit_address.zip} <br>`);
        $('#originalDoctor').append(`Phone number: ${nameAnswer.data[0].practices[0].phones[0].number} <br>`);
        if (nameAnswer.data[0].practices[0].website === undefined) {
          $('#originalDoctor').append("Website: Currently Unavailable <br>");
        }else {
          $('#originalDoctor').append(`Website: ${nameAnswer.data[0].practices[0].website} <br>`);
        }
        if (nameAnswer.data[0].practices[0].accepts_new_patients === true) {
          $('#originalDoctor').append(`We are accepting new patients <br>`);
        }else {
          $('#originalDoctor').append(`We are not accepting new patients <br>`);
        }

      }
    }
  });

  $("button.restart").click(function(){
    location.reload();
  });
});
