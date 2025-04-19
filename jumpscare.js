function showcontent(){
    const clearTab = document.querySelectorAll('.hide_content');
    clearTab.forEach(tab => tab.classList.remove('show_content'))
    document.getElementById("ghost").classList.add('show_content');

    const jumpSound = document.getElementById('ghost_sound');
    jumpSound.play();
}