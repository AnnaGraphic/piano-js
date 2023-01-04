const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {
    console.log("newUrl", newUrl);
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    console.log('i', i)
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    console.log("number", number)
    const newUrl = 'assets/key' + number + '.mp3';

    pianoKey.addEventListener('click', () => playSound(newUrl))
})

console.log(newUrl);console.log(newUrl);