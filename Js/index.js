console.log('Connected');




const btnSubmit = document.getElementById("btn3").addEventListener('click', function (event) {
    event.preventDefault();
    console.log('clicked');
    const text = document.getElementById("plain-text").value;
    const sKey = document.getElementById("secretKey").value;
    const resultContainer = document.getElementById("result");
    // console.log(text,sKey);
    const encrypted = CryptoJS.AES.encrypt(text, sKey);
    resultContainer.innerText = encrypted;
    // localStorage.setItem("cipher", encrypted);
    // localStorage.setItem("key", sKey);

});



