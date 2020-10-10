var askingPrice = 1420;
var bedroomInput0 = 'Efficiency'
var bedroomInput1 = 'One-Bedroom'
var bedroomInput2 = 'Two-Bedroom'
var bedroomInput3 = 'Three-Bedroom'
var bedroomInput4 = 'Four-Bedroom'
var zipCode = ''


$(document).ready(function () {
    // Get value on button click and show alert
    $(".submitBtn").click(function(){
        var str = $("#search").val().trim();
       zipCode = str

        console.log (str)
    

  


    var airApiKey = "CB15C17F-69EA-4423-9893-864F339C43FA";
    var environmentalZipCode = 19149;
    var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.airnowapi.org/aq/observation/zipCode/historical/?format=text/csv&zipCode=" +
    zipCode +
    "&date=2015-10-05T00-0000&distance=25&API_KEY=CB15C17F-69EA-4423-9893-864F339C43FA";

    // Performing our AJAX GET request
        $.ajax({
        url: queryURL,
        method: "GET",
        })
        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.ReportingArea;
            // console.log(response[0].ReportingArea);
            console.log(response);

            var xhttp = new XMLHttpRequest();
            var url =
            "https://cors-anywhere.herokuapp.com/https://www.huduser.gov/hudapi/public/fmr/data/METRO37980M37980?year=2018";
            $.ajax({
                url,
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4MmM4ZmJmNWUzMmJmYTVhNjg1YzE0OWE5N2UyNjBmZjZjODcxZTgzMjYxNWFjNDg5MWEzZDNhY2VhN2Y2NTA0YTBmMzUzMjhmNzhiMmNkIn0.eyJhdWQiOiI2IiwianRpIjoiNzgyYzhmYmY1ZTMyYmZhNWE2ODVjMTQ5YTk3ZTI2MGZmNmM4NzFlODMyNjE1YWM0ODkxYTNkM2FjZWE3ZjY1MDRhMGYzNTMyOGY3OGIyY2QiLCJpYXQiOjE2MDIwMjM0MzEsIm5iZiI6MTYwMjAyMzQzMSwiZXhwIjoxOTE3NTU2MjMxLCJzdWIiOiI5NzUwIiwic2NvcGVzIjpbXX0.U_HzN_NuOd_bTARXe-tgMLeSzwVIRg8G7nNxow-keMgSH6KM4NFrbrVLn89XH8B8ZpdrzE5a2rwHkyD-Kn48pw",
                },
            }).then(function (response1) {
                console.log(response1.data);
                console.log(zipCode);
                for (var i = 0; i < response1.data.basicdata.length; i++) {
                    //if zipcode matches user input and bedroom choice === response1.data.basicdata['One-Bedroom'] then compare price vs price listed in response1.data.basicdata['One-Bedroom']. 

                        //Studio apartment
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput0 === 'Efficiency' && askingPrice < response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        alert('Good studio deal! all me, this is a very great deal. Probably the best deal in history D.T');


                    
                    } else if(response1.data.basicdata[i].zip_code === zipCode && bedroomInput0 === 'Efficiency' && askingPrice > response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        alert('Bad studio deal, not very good. A disaster! D.T');


                    
                    }else if(response1.data.basicdata[i].zip_code === zipCode && bedroomInput0 === 'Efficiency' && askingPrice === response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        alert('It is an okay deal, I could have done better. D.T');


                    
                    }   //One Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput1 === 'One-Bedroom' && askingPrice < response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        alert('Good one-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                    
                       
                        
                    } else if (response1.data.basicdata[i].zip_code === zipCode &&  bedroomInput1 === 'One-Bedroom' && askingPrice > response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        alert('Bad one-bedroom deal, not very good. A disaster! D.T');

              
                            
                    }else if (response1.data.basicdata[i].zip_code === zipCode &&  bedroomInput1 === 'One-Bedroom' && askingPrice === response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        alert('It is an okay deal, I could have done better. D.T');


                      
                    }  //Two Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput2 === 'Two-Bedroom' && askingPrice < response1.data.basicdata[i]['Two-Bedroom']) {
                        alert('Good two-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput2 === 'Two-Bedroom' && askingPrice > response1.data.basicdata[i]['Two-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        alert('Bad two-bedroom deal, not very good. A disaster! D.T');

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput2 === 'Two-Bedroom' && askingPrice === response1.data.basicdata[i]['Two-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        alert('It is an okay deal, I could have done better. D.T');

                        
                    }   
                        //Three Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput3 === 'Three-Bedroom' && askingPrice < response1.data.basicdata[i]['Three-Bedroom']) {
                        alert('Good three-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput3 === 'Three-Bedroom' && askingPrice > response1.data.basicdata[i]['Three-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        alert('Bad three-bedroom deal, not very good. A disaster! D.T');

                        
                    }else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput3 === 'Three-Bedroom' && askingPrice === response1.data.basicdata[i]['Three-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        alert('It is an okay deal, I could have done better. D.T');

                        //Four Bedroom
                    }if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput4 === 'Four-Bedroom' && askingPrice < response1.data.basicdata[i]['Four-Bedroom']) {
                        alert('Good Four-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput4 === 'Four-Bedroom' && askingPrice > response1.data.basicdata[i]['Four-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                        alert('Bad Four-bedroom deal, not very good. A disaster! D.T');

                    }else if (response1.data.basicdata[i].zip_code === zipCode && bedroomInput4 === 'Four-Bedroom' && askingPrice === response1.data.basicdata[i]['Four-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                        alert('It is an okay deal, I could have done better. D.T');
                    }
                    
                }
            
            });
        });
    });
})
