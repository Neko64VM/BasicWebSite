const discordID = "neko64v";
const notice = document.getElementById("notice");

document.getElementById("discord_id").addEventListener("click", async () => {
try {
    await navigator.clipboard.writeText(discordID);

    notice.classList.add("show")
    setTimeout(() => {
        notice.classList.remove("show");
    }, 3000);

    console.log("テキストのコピーに成功");
}  catch (err) {
    console.error("テキストのコピーに失敗", err);
}
});