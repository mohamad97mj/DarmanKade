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