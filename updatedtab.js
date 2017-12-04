var tabIndex = 1;

function auto_submit() {
  // If the form is valid
  if( $("form#car-form").valid() == true ) {
    // Then make it submit, which should update the tab in the process.
    $("form#car-form").submit();
  }
}

function validate() {
  $("#car-form").validate({
    // Rules for validating the form.
    rules: {
      car: {
        number: true,
        min: 0,
        max: 100000,
        required: true
      },
      fuel: {
        number: true,
        min: 0,
        max: 100,
        required: true
      },
    },

    // Messages that appear if a rule isn't valid.
    messages: {
      car: {
        number: "ERROR: you did not enter a valid number.<br/>Please enter a number between 0 and 100000 for the Horizontal start.",
        min: "ERROR: number entered is too small.<br/>Please enter a number greater than or equal to 100000 for the Horizontal start.",
        max: "ERROR: number entered is too large.<br/>Please enter a number less than or equal to 100000 for the Horizontal start.",
        required: "ERROR: no number was entered.<br/>A number between 0 and 100000 is required for the Horizontal start."
      },
      fuel: {
        number: "ERROR: you did not enter a valid number.<br/>Please enter a number between 0 and 100 for the Horizontal start.",
        min: "ERROR: number entered is too small.<br/>Please enter a number greater than or equal to 100 for the Horizontal start.",
        max: "ERROR: number entered is too large.<br/>Please enter a number less than or equal to 100 for the Horizontal start.",
        required: "ERROR: no number was entered.<br/>A number between 0 and 12 is required for the Horizontal start."
      },
    },

    // This gets called when the form is submitted and valid.
    submitHandler: function() {
      table_calc();
      return false;
    },

    invalidHandler: function() {
      // Wipe the previous table / error messages
      // This way nothing will show up if a user tries to submit with an error.
      $("#warning_msg").empty();
    },

  
    errorElement: "div",
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    },

    onkeyup: function( element, event ) {
      auto_submit();
    }
  });
}
//Using the jQuery Validation Plugin
$(function validate(){
	//Table Price/Fuel consumption	
         $("#post").validate({
             rules:{
                 p1:{//price 1
                    required: true,
                    p1: true
                 },
                 p2: {//price 2
                    required: true,
                    p2: true
             },
			       p3: {//price 3
                    required: true,
                    p3: true
                 
             },
					p4: {//price 4
                    required: true,
                    p4: true
                 
             },
			     p5: {//price 5
                  required: true,
                    p5: true
                 
             },
			C1: {//mpg 1
                    required: true,
                    C1: true
                 
             },
			 C2: {//mpg 2
                    required: true,
                    C2: true
                 
             },
	 
			C3: {//mpg 3
                    required: true,
                    C3: true
                 
             },			      
			 C4: {//mpg 4
                    required: true,
                    C4: true
                 
             },
			 C5: {//mpg 5
                    required: true,
                    C5: true
                 
             },
			  mily: {//Total mile
                    required: true,
                    mily: true
             },
			 messages: {//message for price and mpg when required/not filled in
                 p1: {
                    required: 'Please enter the price/gallon.',
                    p1: 'Please eneter anything above 0.'
                 },
                 p2: {//message for price and mpg when required/not filled in
                    required: 'Please enter the price/gallon.',
                    p2: 'Please eneter anything above 0.'
                 },
                 p3: {//message for price and mpg when required/not filled in
                    required: 'Please enter the price/gallon.',
                    p3: 'Please eneter anything above 0.'
                 },
				 p4: {//message for price and mpg when required/not filled in
                    required: 'Please enter the price/gallon.',
                    p4: 'Please eneter anything above 0.'
                 },
				 p5: {//message for price and mpg when required/not filled in
                    required: 'Please enter the price/gallon.',
                    p5: 'Please eneter anything above 0.'
                 },
				 C1: {//message for price and mpg when required/not filled in
                    required: 'Please enter the miles/gallon.',
                    C1: 'Please eneter anything above 0.'
                 },
				 C2: {//message for price and mpg when required/not filled in
                    required: 'Please enter the miles/gallon.',
                    C2: 'Please eneter anything above 0.'
                 },
				 C3: {//message for price and mpg when required/not filled in
                    required: 'Please enter the miles/gallon.',
                    C3: 'Please eneter anything above 0.'
                 },
				 C4: {//message for price and mpg when required/not filled in
                    required: 'Please enter the miles/gallon.',
                    C4: 'Please eneter anything above 0.'
                 },
				 C5: {//message for price and mpg when required/not filled in
                    required: 'Please enter the miles/gallon.',
                    C5: 'Please eneter anything above 0.'
                 },
				 mily: {//message for price and mpg when required/not filled in
                    required: 'Please enter the total miles.',
                    mily: 'Please eneter anything above 0.'
                 }
				}
			 }
		}); 
	  });
	 
function myFunction() {
		var month = Number($('#month').val());
		var P1 = Number($('#R1').val());
		var P2 = Number($('#R2').val());
		var P3 = Number($('#R3').val());
		var P4 = Number($('#R4').val());
		var P5 = Number($('#R5').val());
		
	if (P1==null || P1=="" || P2==null || P2=="" || P3==null || P3=="" || P4==null || P4==""|| P5==null || P5=="")
        {
            alert("Please Fill All Required Field");
            return false;
        }
		var MPG1 = Number($('#C1').val());
		var MPG2 = Number($('#C2').val());
		var MPG3 = Number($('#C3').val());
		var MPG4 = Number($('#C4').val());
		var MPG5 = Number($('#C5').val());

	if (MPG1==null || MPG1=="" || MPG2==null || MPG2=="" || MPG3==null || MPG3=="" || MPG4==null || MPG4==""|| MPG5==null || MPG5=="")
        {
            alert("Please Fill All Required Field");
            return false;
        }
		
		//Calculating per mile cost ....
		var mile11 = P1 / MPG1;
		var mile12 = P2 / MPG1;
		var mile13 = P3 / MPG1;
		var mile14 = P4 / MPG1;
		var mile15 = P5 / MPG1;
		var mile = [mile11.toFixed(2), mile12.toFixed(2), mile13.toFixed(2), mile14.toFixed(2), mile15.toFixed(2)]

		//Calculating per mile cost ....
		var mile21 = P1 / MPG2;
		var mile22 = P2 / MPG2;
		var mile23 = P3 / MPG2;
		var mile24 = P4 / MPG2;
		var mile25 = P5 / MPG2;
		var mile1 = [mile21.toFixed(2), mile22.toFixed(2), mile23.toFixed(2), mile24.toFixed(2), mile25.toFixed(2)]

		//Calculating per mile cost ....
		var mile31 = P1 / MPG3;
		var mile32 = P2 / MPG3;
		var mile33 = P3 / MPG3;
		var mile34 = P4 / MPG3;
		var mile35 = P5 / MPG3;
		var mile2 = [mile31.toFixed(2), mile32.toFixed(2), mile33.toFixed(2), mile34.toFixed(2), mile35.toFixed(2)]

		//Calculating per mile cost ....
		var mile41 = P1 / MPG4;
		var mile42 = P2 / MPG4;
		var mile43 = P3 / MPG4;
		var mile44 = P4 / MPG4;
		var mile45 = P5 / MPG4;
		var mile3 = [mile41.toFixed(2), mile42.toFixed(2), mile43.toFixed(2), mile44.toFixed(2), mile45.toFixed(2)]

		//Calculating per mile cost ....
		var mile51 = P1 / MPG5;
		var mile52 = P2 / MPG5;
		var mile53 = P3 / MPG5;
		var mile54 = P4 / MPG5;
		var mile55 = P5 / MPG5;
		var mile4 = [mile51.toFixed(2), mile52.toFixed(2), mile53.toFixed(2), mile54.toFixed(2), mile55.toFixed(2)]

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[1].cells;
	x[i].innerHTML = "$" + mile[i-1] + "/mi" + " : $" + (mile[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[2].cells;
	x[i].innerHTML = "$" + mile1[i-1] + "/mi" + " : $" + (mile1[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[3].cells;
	x[i].innerHTML = "$" + mile2[i-1] + "/mi" + " : $" + (mile2[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[4].cells;
	x[i].innerHTML = "$" + mile3[i-1] + "/mi" + " : $" + (mile3[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[5].cells;
	x[i].innerHTML = "$" + mile4[i-1] + "/mi" + " : $" + (mile4[i-1] * month).toFixed(2) + "/mo";
	}
}

function AddData(){
  var tabCount = $("#tabs li").length + 1;
  console.log("Current tab count is: " + tabCount);

  if(tabCount > 24) {
    alert("Sorry, only 24 tables may be saved at the same time. Please delete one to save another table.");
    return false;
  }

  // This should initialize the jQuery UI tabs.
  $( "#tabs" ).tabs();
  
	var x = document.getElementById("fuel").value;
	var y = document.getElementById("car").value;
		if (x==null || x=="" || y==null || y=="")
        {
            alert("Please Fill All Required Field");
            return false;
        }
		
	if((parseInt(x)!=(x))&&(y==parseInt(y))){
		alert("Wrong Value Entered");
	}
	else{
		var rows = "";
		var name = document.getElementById("car").value;
		var fuel = document.getElementById("fuel").value;

  tabIndex++;   // Increment the index each time we add a new tab.
  // Create the title bar, this will be a string to send to .append()
  var title = "<li class='tab'><a href='#tab-" + tabIndex + "'>" + name +
              " and " + fuel  + "</a>" +
              "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";

  // Add a new Title bar.
  $( "div#tabs ul" ).append( title );

  // Add the current multiplication table.
  $( "div#tabs" ).append('<div id="tab-' + tabIndex + '">' + "Car Price: $" + name + " & Fuel Consumption: " + fuel + '</div>');

  // Refresh the tabs div so that the new tab shows up.
  $( "#tabs" ).tabs("refresh");

  // Make the new tab active, so that the user knows it updated.
  $( "#tabs" ).tabs("option", "active", -1);

		}
		
		 // Add a remove button, from jQuery UI's webpage: https://jqueryui.com/tabs/#manipulation
  $( "#tabs" ).delegate( "span.ui-icon-close", "click", function() {
      var panelID = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelID ).remove();

      // Refresh the tabs!
      // Using try / catch to prevent exceptions from appearing in the console.
      // I think the destroy kind of breaks some of the jQuery UI stuff but
      // it
      try {
        $( "#tabs" ).tabs("refresh");
      }
      catch (e) {
        //console.log(e);
      }

      // If this is the last tab, let's reset the page to way it was before.
      // URL: https://api.jqueryui.com/tabs/#method-destroy
      if( $('div#tabs ul li.tab').length == 0) {
        try {
          $("#tabs").tabs("destroy");
        }
        catch (e) {
          //console.log(e);
        }

        return false;   // This may prevent default behavior from occurring.
      }
  });
}


function ResetForm(){
		document.getElementById("car-form").reset();
}


function slider() {

  // The slider code is based off of jQuery's UI page.
  // URL: https://jqueryui.com/slider/#hotelrooms

  // Horizontal Start Slider
  $("#slider_hor_start").slider({
    min: 0,
    max: 100000,
    slide: function(event, ui) {
      $("#car").val(ui.value);
      auto_submit();  // Call the auto submit function on slide.
    }
  });
  $("#car").on("keyup", function() {
    $("#slider_hor_start").slider("value", this.value);
    auto_submit();  // Call the auto submit function on keyup as well.
  });

  // Vertical Start Slider
  $("#slider_vert_start").slider({
    min: 0,
    max: 100,
    slide: function(event, ui) {
      $("#fuel").val(ui.value);
      auto_submit();  // Call the auto submit function on slide.
    }
  });
  $("#fuel").on("keyup", function() {
    $("#slider_vert_start").slider("value", this.value);
    auto_submit();  // Call the auto submit function on keyup as well.
  });

}

