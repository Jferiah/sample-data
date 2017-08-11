function activateVideo()
{
    var btnVideo = document.getElementById('btn-video');
    var btnQuizz = document.getElementById('btn-quizz');

    showVideo('initial');
    showQuizz('none');
    btnQuizz.classList.remove("checked");
    btnVideo.classList.add("checked");
}

function activateQuizz()
{
    var btnVideo = document.getElementById('btn-video');
    var btnQuizz = document.getElementById('btn-quizz');

    showVideo('none');
    showQuizz('initial');
    btnQuizz.classList.add("checked");
    btnVideo.classList.remove("checked");
}

function showVideo(display)
{
    var video = document.getElementById('video');
    video.style.display = display;
}

function showQuizz(display)
{
    var quizz = document.getElementById('quizz');
    quizz.style.display = display;
}