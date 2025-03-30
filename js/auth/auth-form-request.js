document.getElementById(formId).addEventListener("submit", function(e) 
{
  e.preventDefault(); 
  const errorContainer = document.getElementById("error-message"); errorContainer.innerText = "";

  let formIsValid = true;
  const requiredElements = this.querySelectorAll("input[required-field]");
  requiredElements.forEach(el => 
  {
    if (!el.value || el.value.trim() === "") 
    { el.classList.add("inputbox_error"); formIsValid = false; } 
    else { el.classList.remove("inputbox_error"); }
  });
  if (!formIsValid) { errorContainer.innerText = "Пожалуйста, заполните все обязательные поля."; return; }

  const formData = new FormData(this);
  const jsonData = {};
  formData.forEach((value, key) => 
  {
    if (key && key.trim() !== "") 
    { jsonData[key] = value; }
  });

  // if (Telegram.WebApp && Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) 
  // { jsonData.userData = Telegram.WebApp.initDataUnsafe.user; }

  if (window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) 
  { 
    errorContainer.innerText = JSON.stringify(window.Telegram.WebApp.initDataUnsafe.user);
  }

  // const endpoint = this.action;
  // fetch(endpoint, 
  // {
  //   method: "POST",
  //   headers: 
  //   {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(jsonData)
  // })
  // .then(response => 
  // {
  //   const resBody = response.json();
  //   if (!response.ok) 
  //   { 
  //     if (resBody.errorDelay) 
  //     {
  //       const submitButton = document.getElementById("submit-button");
  //       const originalText = submitButton.innerHTML;
  //       submitButton.disabled = true;
        
  //       let remaining = Math.floor((resBody.errorDelay - Date.now()) / 1000);
  //       if (remaining < 0) { remaining = 0; }
        
  //       submitButton.innerHTML = `Повторная попытка через ${formatTimeMMSS(remaining)} мин.`;
        
  //       const timerInterval = setInterval(() => 
  //       {
  //         remaining = Math.floor((resBody.errorDelay - Date.now()) / 1000);
  //         if (remaining <= 0) 
  //         { clearInterval(timerInterval); submitButton.disabled = false; submitButton.innerHTML = originalText; } 
  //         else { submitButton.innerHTML = `Повторная попытка через ${formatTimeMMSS(remaining)} мин.`; }
  //       }, 1000);
  //     }
  //     if (resBody.error) { throw new Error(resBody.error);  }
  //     throw new Error("Ошибка сервера (" + response.status + ")");
  //   }
  //   return resBody;
  // })
  // .then(data => 
  // { 
  //   if (data.redirectUrl) { window.location.href = data.redirectUrl; }
  //   if (data.outform) { if (Telegram.WebApp && Telegram.WebApp.close) { Telegram.WebApp.close(); } }
  // })
  // .catch(error => { errorContainer.innerText = error.message; });
});