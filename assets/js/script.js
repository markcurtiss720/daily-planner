//Variables to interact with the DOM
var reset = $("#reset")
var saveBtn = $(".saveBtn");
var textArea = $(".description")







//Function to save content in text area
$(function saveContent() {

//Clears all content on page and in local storage.
reset.on('click', function() {
  localStorage.clear();
  textArea.val("")
  console.log(textArea)
})


//sets data inputed into textarea into localstorage
saveBtn.on('click', function() {
  var text = $(this).parents().children("textarea").val()
  var textTime = $(this).parents().attr("id")
  console.log(text)
  console.log(textTime)

  localStorage.setItem(textTime, text)
});


function pastPresent(){
  var hour = dayjs().format('H');
  $(".time-block").each(function (){
    var time = parseInt($(this).attr("id").split("hour")[1]);
    console.log(time)

    if(time < hour) {
      $(this).removeClass("future")
      $(this).removeClass("present")
      $(this).addClass("past")
    } else if (time == hour) {
      $(this).removeClass("future")
      $(this).addClass("present")
      $(this).removeClass("past")
    } else if (time > hour) {
      $(this).addClass("future")
      $(this).removeClass("present")
      $(this).removeClass("past")
    }
  });
};



//Sets content from local storage into correct box.
$('#hour9 .description').val(localStorage.getItem("hour9"));
$('#hour10 .description').val(localStorage.getItem("hour10"));
$('#hour11 .description').val(localStorage.getItem("hour11"));
$('#hour12 .description').val(localStorage.getItem("hour12"));
$('#hour13 .description').val(localStorage.getItem("hour13"));
$('#hour14 .description').val(localStorage.getItem("hour14"));
$('#hour15 .description').val(localStorage.getItem("hour15"));
$('#hour16 .description').val(localStorage.getItem("hour16"));
$('#hour17 .description').val(localStorage.getItem("hour17"));

//Display current date
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('dddd, MMMM D'));



//runs function to determine if the current hours box is highlighted correctly depending on where it is according to your present time.
pastPresent();
});


