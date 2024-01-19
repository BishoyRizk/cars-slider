$("img").on("click",function(e){
 let currentsrc =   $(e.target).attr('src');
    $('#mainone').attr('src',currentsrc)
    
    

})