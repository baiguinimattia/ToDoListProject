// $("input").keypress(function(event){
//     if ( event.which === 13){
//             console.log("tttt");
//             $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
//             $("input").val("");
//     }
// });

$("input").on("keypress" , function(event){
    if ( event.which === 13){
        console.log("tttt");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
        $("input").val("");
}
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click" , "span" , function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#plusIcon").click(function(){
        $("input").toggleClass("display");
});