// $('#submit').on('click', function(event) {
//   event.preventDefault();
// // store user survey inputs
//   var userInput = {
//     name: $('#user-name').val().trim(),
//     photo: $('#user-photo').val().trim(),
//     scores:[
//       $("#question-one").val(),
//       $("#question-two").val(),
//       $("#question-three").val(),
//       $("question-four").val(),
//       $("question-five").val(),
//       $("question-six").val(),
//       $("question-seven").val(),
//       $("question-eight").val(),
//       $("question-nine").val(),
//       $("question-ten").val()
//     ]
//   };
//   console.log('userInput = ' + userInput);
// // add userInput to friendDataArr
//   $.post("/api/friends", userInput)
//       .done(function(data) {

//         $("#match-name").html(data.matchName);
//       $("#match-image").attr("src", data.matchImage);
//       // Pop open the modal dialog
//         $('#modal-1').modal('open');
//       });
// });