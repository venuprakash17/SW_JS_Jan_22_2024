function listingTag_timer(){
    var lang = location.pathname.split('/')[2];
    var parner_ID;
    if(lang=='en'){
        parner_ID=52930;
        return parner_ID;
    }else if(lang == 'de'){
        parner_ID=85306;
        return parner_ID;
    }else if(lang == 'es'){
        parner_ID=89719;
        return parner_ID;
    }else if(lang == 'Fr'){
        var parner_ID=58529;
        return parner_ID;
    }
}