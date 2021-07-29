const inviteUrl = document.getElementById('invite-url');
const copyBtn = document.getElementById('copy-btn')

copyBtn.addEventListener('click', () => {
    let range = new Range();
    const selection = window.getSelection()
    selection.removeAllRanges();

    range.setStart(inviteUrl.firstChild, 0);
    range.setEnd(inviteUrl.firstChild, inviteUrl.textContent.length - 1);

    selection.addRange(range);

    document.execCommand("copy")

    copyBtn.textContent = "copiado!"
})