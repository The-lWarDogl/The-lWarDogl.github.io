const inputs = document.querySelectorAll('.smscode-input');
const hiddenInput = document.getElementById('smslogin-code');

function updateHiddenInput() 
{
    let code = '';
    inputs.forEach(input => { code += input.value; });
    hiddenInput.value = code;
}

inputs.forEach((input, index) => 
{
    input.addEventListener('input', function() 
    {
        updateHiddenInput();

        if (this.value.length === this.maxLength) {
            const nextInput = inputs[index + 1];
            if (nextInput) {
            nextInput.focus();
            }
        }
    });

    input.addEventListener('keydown', function(e) 
    {
        if (e.key === 'Backspace' && this.value === '' && index > 0) 
        { inputs[index - 1].focus(); }
    });
});