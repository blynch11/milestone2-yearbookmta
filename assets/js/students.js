
    $(document).ready(function(){
        $("i").css("display", "none");
        
     
    });
console.log(12345);
// button click events
function readChange(id, quote) {
    let textVal = document.getElementById(id).innerText;
    if (textVal === 'Read More'){
        document.getElementById(id).innerText = 'Read less';
        document.getElementById(quote).style.display = 'block';
    }
    else{
        document.getElementById(id).innerText = 'Read More';
        document.getElementById(quote).style.display = 'none';
    }
}




// button click events  


    
// button toggle to read-less



    


