/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    onPageInit();
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function onPageInit() {
    if (localStorage.getItem('data') == null) {
        console.log('on page Init works here')
        document.querySelector('.post-preview').innerHTML = `<h1>No blogs posted yet</h1>`
    }
    else {
        let info = JSON.parse(localStorage.getItem('data'));
        info.forEach((i) => {
            document.querySelector('.post-preview').innerHTML += ` <a href="post.html">
            <h2 id="postTitle" class="post-title">${i.title}</h2>
            <h3 id="postMainContent" class="post-subtitle">${i.mainContent}</h3>
        </a>
        <p class="post-meta">
            Posted by
            <a href="#!">${i.postedBy}</a>
            on September 24, 2021
        </p>
        <hr class="my-4" />`
        })
    }
}

let onSubmit = document.querySelector('#subButton')
onSubmit.addEventListener('click', () => {
    let postedBy = document.querySelector('#postedBy').value;
    let title = document.querySelector('#blogTitle').value;
    let content = document.querySelector('#blogContent').value;
    let mainContent = document.querySelector('#blogMainContent').value;
    if(title == '' && mainContent == ' ' && postedBy == '') {
        /* document.querySelector('.post-preview').innerHTML = `<h1>No blogs posted yet</h1>` */
        return;
    }
    if (localStorage.getItem('data') == null) {
        console.log('Nothing here')
        let info = [{ title: title, content: content, mainContent: mainContent, postedBy: postedBy }]
        localStorage.setItem('data', JSON.stringify(info));
    } else {
        let info = JSON.parse(localStorage.getItem('data'));
        info.push({ title: title, content: content, mainContent: mainContent, postedBy: postedBy})
        console.log(info);
        localStorage.setItem('data', JSON.stringify(info));
    }
    window.location.href="index.html";
})



