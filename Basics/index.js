console.log("JS file loaded");
/*
window.onload = function () {
    // This ensures that the entire document has been loaded before accessing the DOM
    var a = document.getElementById('h21');
    if (a) {
        a.style.color = 'red';
    } else {
        console.error("Element with id 'h21' not found.");
    }
};


var _wfx_interval = setInterval(function () {
    _wfx_country = document.querySelector('[id="page"]>[id="top"] [name="PR"]').contentDocument.querySelector('[id="Initial Reporter State"]');
    _wfx_state = document.querySelector('[id="page"]>[id="top"] [name="PR"]').contentDocument.querySelector('[id="comboSelInitial Reporter Country"]');
    if (_wfx_country && _wfx_state) {
        if (_wfx_country.value == 13226 && _wfx_state.value.length != 0) {
            window.E_InitialReporter_Country_State = true;
            console.log('changes and E_InitialReporter_Country_State true');
        } else {
            window.E_InitialReporter_Country_State = false;
            console.log('changes and E_InitialReporter_Country_State False');
        }
        clearInterval(_wfx_interval);
    } else if (_wfx_counter < 20) {
        _wfx_counter++;
    } else {

    }
}, 500);

*/

document.querySelectorAll('h2')[0].style.color = 'red'
console.log("JS file ended");
