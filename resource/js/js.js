function login()
{
    window.open('login.html', '_self');
}

function doctors()
{
    window.open('doctors.html', '_self');
}

function doctor_instance()
{
    window.open('doctor.html?hello-hello', '_self');
}

function specialities()
{
    window.open('medical-specialities.html', '_self');
}

const redirect = function (url) {
    location.href = url;
};

const myfetch = async (url2fetch) => {
    try {
        let response = await fetch(url2fetch);
        // console.log(response)
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

const addElementBeforeEnd = (targetId, html2insert) => {
    let parent = document.getElementById(targetId);
    parent.insertAdjacentHTML('beforeend', html2insert);
}
