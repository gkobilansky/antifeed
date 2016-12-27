(function(){
    setTimeout(function() {
      $(document).on("click", "#form-init", function(){
        $("#conversational").css({
      "display": "block",
      "opacity": 0
    });
        //  $(".conversational-form").addClass("conversational-form--show");
        if(!window.ConversationalForm){
          window.ConversationalForm = new cf.ConversationalForm({
            formEl: document.getElementById("conversational"),
            context: document.getElementById("form-outer")
          });
        }
      });
    }, 200);
  })();
