window.addEventListener("keydown", event => update(event));

const update = event => {
    const eveCode = event.code;
    const eveKeyCode = event.keyCode;
    const eveKey = event.key;

    const elmMainKeyCode = document.getElementById("mainKeyCode");
    elmMainKeyCode.innerHTML = eveKeyCode;

    const elmCode = document.getElementById("codeID");
    elmCode.innerHTML = "event.code : " + eveCode;

    const elmKeyCode = document.getElementById("keyCodeID");
    elmKeyCode.innerHTML = "event.keyCode : " + eveKeyCode;

    const elmKey = document.getElementById("keyID");
    elmKey.innerHTML = "event.key : " + eveKey;
};
