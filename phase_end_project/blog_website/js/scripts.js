window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
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
    onPageInit();
})

function onPageInit() {
    if (localStorage.getItem('data') == null) {
        document.querySelector('.post-preview').innerHTML = `<h1>No blogs posted yet</h1>`
    }
    else {
        let userData = JSON.parse(localStorage.getItem('data'));
        userData.forEach((i) => {
            document.querySelector('.post-preview').innerHTML += ` <a href="post.html">
            <h2 id="postTitle" class="post-title">${i.title}</h2>
            <h3 id="postMainContent" class="post-subtitle">${i.mainContent}</h3>
        </a>
        <p class="post-meta">
            Posted by
            <a href="#!">${i.postedBy}</a>
            on ${i.cDate}
        </p>
        <hr class="my-4" />`
        })
    }
}

var onSubmit = document.querySelector('#subButton');
onSubmit.addEventListener('click', () => {
    let postedBy = document.querySelector('#postedBy').value;
    let title = document.querySelector('#blogTitle').value;
    let content = document.querySelector('#blogContent').value;
    let mainContent = document.querySelector('#blogMainContent').value;
    var myDate = new Date();
    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();

    let today = `${month} ${date}, ${year}`;
    if (title == '' && mainContent == '' && postedBy == '') {
        triggerToast();
        return;
    }
    if (localStorage.getItem('data') == null) {
        let userData = [{ title: title, content: content, mainContent: mainContent, postedBy: postedBy, cDate: today }]
        localStorage.setItem('data', JSON.stringify(userData));
    } else {
        let userData = JSON.parse(localStorage.getItem('data'));
        userData.push({ title: title, content: content, mainContent: mainContent, postedBy: postedBy, cDate: today});
        localStorage.setItem('data', JSON.stringify(userData));
    }
    window.location.href="index.html";
})

function triggerToast() {
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}


