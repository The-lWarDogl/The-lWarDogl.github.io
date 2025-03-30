$(document).ready(function () 
{
    $('#show-pwd').on('click', function (){
        if($(this).hasClass('button__addons_1wz5e__active')) {
            $(this).removeClass('button__addons_1wz5e__active');
            $('#login-password').attr('type', 'text');
        }else{
            $(this).addClass('button__addons_1wz5e__active');
            $('#login-password').attr('type', 'password');
        }
    })
});