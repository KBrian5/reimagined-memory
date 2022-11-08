$(function () {
    //regular expression of only letters
    let alphaRegex = /^[a-zA-Z]*$/;
  

    //Creates submit button
      $( ":submit" ).css( "background", "green" );
  
  
   
  // Function to submit form. Takes first and last name and says thank you
  
      $( ":submit" ).click( function(e) {
  
        e.preventDefualt; 
      
        console.log('did we click the bbutton? yes!') ; 
  
        let greetingOutput = 'Thank you for your business  ';
        greetingOutput += $("#fname").val(); 
      
        $("#formOutput").text(greetingOutput); 
      
      }); 
  
  
  
   
  
    console.log("user name: " + $("#noSpaces").val());
  
    // end of doc ready f/n
  });