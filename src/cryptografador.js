const texto_normal = document.getElementById("txtNormal")

const chave_cryptografar = document.getElementById("keyCrypt")

const texto_crypto = document.getElementById("txtCrypt")
const chave_decryptografar = document.getElementById("keyDecrypt")


function Encripta(){
    var encrypted = CryptoJS.AES.encrypt(String(texto_normal.value).trim(), chave_cryptografar.value);
    texto_crypto.value = encrypted.toString()
    texto_normal.value = ""
    chave_cryptografar.value = ""
    texto_crypto.focus()
}
function Descripta(){
    var decrypted = CryptoJS.AES.decrypt(String(texto_crypto.value).trim(), chave_decryptografar.value);
    texto_normal.value = decrypted.toString(CryptoJS.enc.Utf8)
    texto_crypto.value =""
    chave_decryptografar=""
    texto_normal.focus()
}
