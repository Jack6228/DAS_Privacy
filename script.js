// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Scientific results page loaded.");

    // You could add JavaScript interactions here if needed in the future.
    // For example, to handle custom play buttons, or to load data dynamically.
    // For now, the HTML audio element with 'controls' is sufficient.

    const audioPlayers = document.querySelectorAll('audio');
    audioPlayers.forEach(player => {
        player.addEventListener('play', () => {
            // Example: Pause other players when one starts playing
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
            console.log(`Playing: ${player.src}`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const clips = document.querySelectorAll('.result-block');
    clips.forEach((clip, i) => {
        setTimeout(() => {
            clip.classList.add('fade-in');
        }, i * 600); // staggered fade-in, 200ms apart
    });
});