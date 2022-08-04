$('th').css( {    
    display: 'flex';
    flex-'direction: row';
    align-'items: center';
    margin-right: '350px';
    margin-top: '5px';
    margin-bottom: '5px';})
$(function () {

    $("#button").on("click", function () {
        // console.log("button works");
        const newSkill = $("input:text").val();
        // console.log(newSkill);
        const template = `
        <tr>
        <td><button class="btn btn-xs btn-danger">X</button>${newSkill}</td>
        </tr>
        `;
        $(".skill-list > tbody").append(template);
        $('.input').val('');
    });
});
$(".skill-list > tbody").on('click', 'button', function() {
    $(this).closest('tr').remove(), function() {
        $(this).remove();
    };
});

// $('.skill-list tbody').on('click', 'button', function(){
//     console.log("button works");
//     $(this).closest('tr').fadeOut(1000), function() {
//         $(this).remove();
//     };
// });

// //`
// <li>${newSkill}</li>`
//<button class="btn btn-xs btn-danger">X</button>