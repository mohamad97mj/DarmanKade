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


var firstTime = true
var details = new Array(7);
var copy = new Array(7);
var sorted = new Array(7);


function login() {
    window.open('login.html', '_self');
}

function doctors() {
    window.open('doctors.html', '_self');
}


function getDoctors() {

    const Http = new XMLHttpRequest();
    const url = 'https://intense-ravine-40625.herokuapp.com/doctors';
    Http.open("GET", url, true);
    Http.send();


    Http.onreadystatechange = function () {
        //window.alert(firstTime,"lefirst time")


        if (this.status == 200 && this.readyState == 4) {//&& this.staus==200
            details = JSON.parse(Http.responseText)
            //    console.log(details[2])
            // result = response.results

            console.log(details)

            for (var i = 0; i < details.length; i++)
                addCart(i + 1)


        }
    }

}

function compare(a, b) {
    if (a.user_percent < b.user_percent) {
        return 1;
    }
    if (a.user_percent > b.user_percent) {
        return -1;
    }
    return 0;
}


function wantedSort() {

    /*
    for (let i = 0; i < 7; i++)
        copy[i] = details[i].user_percent

    for (let j = 0; j < 7; j++) {
        let idx = 0
        let max = 0
        for (let i = 0; i < 7; i++) {
            if (copy[i] > max) {
                max = copy[i]
                idx = i
            }
        }
        copy[idx] = -1
        sorted[6 - j] = idx


    }
    console.log('sorted indices')
    console.log(sorted)
    for (let i = 0; i < 7; i++) {
        addCart(sorted[6 - i])
    }
    alert('i did')

     */

    details.sort(compare);
    console.log('post')
    console.log(details)


    for (var i = 0; i < details.length; i++)
        addCart(i + 1)


    for (var i = 0; i < details.length; i++) {
        document.getElementById('dsc'+(i+1)).innerText = ""
        st='#dsc'+(i+1)
        console.log(details[i].stars)
        for (var j = 0; j < details[i].stars; j++)
            document.querySelector(st).innerHTML += '<svg style="fill:#1780df; color: #1780df; " xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  lass="feather feather-star" data-v-41e50536="" data-v-50fd7d5a=""><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-41e50536="" data-v-50fd7d5a=""></polygon></svg>';
    }


}


function select(i) {

    let el = document.getElementById('cb' + i)
    if (i === 1)
        el.className = 'selected-sort-buttons'

    else
        el.className = 'selected-sort-buttonl'


    if (i !== 1)
        document.getElementById('cb1').className = 'un-selected-sort-button'

    if (i !== 2)
        document.getElementById('cb2').className = 'un-selected-sort-button'

    if (i !== 3)
        document.getElementById('cb3').className = 'un-selected-sort-button'

    if (i == 2) {
        wantedSort()
    }

}


function addCart(i) {
    /*
    var star=<svg style="fill:#1780df; color: #1780df; margin-right: 6px; "
         xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" class="feather feather-star" data-v-41e50536=""
         data-v-50fd7d5a="">
        <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            data-v-41e50536="" data-v-50fd7d5a=""></polygon>
    </svg>
    */
    //document.querySelector('#header-container').innerHTML +='<svg style="fill:#1780df; color: #1780df; " xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  lass="feather feather-star" data-v-41e50536="" data-v-50fd7d5a=""><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-41e50536="" data-v-50fd7d5a=""></polygon></svg>';

    //document.querySelector('dsc2').innerHTML +='<svg style="fill:#1780df; color: #1780df; " xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  lass="feather feather-star" data-v-41e50536="" data-v-50fd7d5a=""><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-41e50536="" data-v-50fd7d5a=""></polygon></svg>';

    //document.querySelector('#dsc1').innerHTML +='<svg style="fill:#1780df; color: #1780df; " xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  lass="feather feather-star" data-v-41e50536="" data-v-50fd7d5a=""><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-41e50536="" data-v-50fd7d5a=""></polygon></svg>';


    document.getElementById('dcp' + i).innerText = details[i - 1].comment_text
    document.getElementById('dc' + i).innerText = '( ' + details[i - 1].comments + ' نظر )'
    document.getElementById('de' + i).innerText = details[i - 1].experience_years + ' سال تجربه کاری'
    document.getElementById('dw' + i).innerText = details[i - 1].user_percent + ' درصد رضایت کاربران'
    document.getElementById('dl' + i).innerText = details[i - 1].location
    document.getElementById('dn' + i).innerText = details[i - 1].name
    document.getElementById('da' + i).innerText = details[i - 1].first_empty_date

    let a = 'doctor' + i + '-image-container'
    let b = details[i - 1].avatar
    let c = b.substr(0, b.length)
    let st = 'url(' + b + ')'
    document.getElementById(a).style.backgroundImage = 'url(' + c + ')'


}