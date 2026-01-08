
export function displayDialogue(text: string, OnDisplayEnd = () => { }) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
    const imgBoxContainer = document.querySelector(
        ".imgBox-container"
    ) as HTMLDivElement;

    dialogueUI!.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogue!.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 1);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick() {
        OnDisplayEnd();
        dialogueUI!.style.display = "none";
        dialogue!.innerHTML = "";
        clearInterval(intervalRef);
        imgBoxContainer.style.display = "none";
        const imgBox = document.getElementById("ImgBox")!;
        imgBox.innerHTML = "";





        closeBtn!.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn?.addEventListener("click", onCloseBtnClick);

    const playButton = document.getElementById("play");


    function onPlayButtonClick() {
        const imgBox = document.getElementById("ImgBox");

        if (!playButton || !imgBox) return;

        playButton.style.display = "none";

        const iframe = document.createElement("iframe");
        iframe.src =
            "https://playclassic.games/games/first-person-shooter-dos-games-online/play-doom-online/";
        iframe.allow = "fullscreen; autoplay";
        iframe.allowFullscreen = true;

        iframe.style.width = "600px";
        iframe.style.height = "800px";
        iframe.style.border = "none";
        iframe.style.overflow = "hidden";

        imgBox.innerHTML = "";
        imgBox.appendChild(iframe);

    }




    playButton?.addEventListener("click", onPlayButtonClick);

    addEventListener("keypress", (key) => {
        if (key.code === "Enter") {
            closeBtn!.click();
        }
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setCamScale(k: any) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
    } else {
        k.camScale(k.vec2(1.5));
    }
}