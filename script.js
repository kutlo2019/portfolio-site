$(document).ready(function() {

    // check for available theme on local storage
    let theme = localStorage.getItem('theme');

    if (theme == null) {
        setTheme('light');
    } else {
        setTheme(theme);
    }

    // query the list of theme dots
    let themeDots = document.getElementsByClassName('theme-dot');

    // add click event listeners to each theme-dot
    for (let i = 0; themeDots.length > i; i++) {
        themeDots[i].addEventListener('click', function() {

            // set the mode to what the user chose
            let mode = this.dataset.mode;
            setTheme(mode);
        });
    }

    // function to set theme depending on the user choice
    function setTheme(mode) {
        if (mode == 'light') {
            document.getElementById('theme-style').href = 'default.css'
        }

        if (mode == 'blue') {
            document.getElementById('theme-style').href = 'blue.css'
        }

        if (mode == 'green') {
            document.getElementById('theme-style').href = 'green.css'
        }

        if (mode == 'purple') {
            document.getElementById('theme-style').href = 'purple.css'
        }
        localStorage.setItem('theme', mode);
    }

    // Animate the hovering of the preview boxes in the posts
    $('.post').hover(function() {
        console.log();

        // Animate the hovering of preview title
        let postPreview = $(this).children('.post-preview');
        postPreview.css({
            'visibility': 'visible',
            'transition': 'all 0.5s ease-in',
            'z-index': '100'
        });

        let shadow = $(this).children('.shadow');

        shadow.css('background-color', 'rgba(0,0,0,0)')
    }, function() {
        $('.post-preview').css({
            'visibility': 'hidden',
            'transition': 'all 0.5s ease-in'
        });

        let shadow = $(this).children('.shadow');
        
        shadow.css('background-color', 'rgba(0,0,0,0.6)')
    });
});
