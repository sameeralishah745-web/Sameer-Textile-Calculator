
/* ========== HOME NAVIGATION ========== */

function goHome(){
    document.querySelector(".container").style.display = "block";

    let screens = [
        "simpleGSM",
        "fabricGSM",
        "weightScreen",
        "yarnScreen",
        "consumptionScreen",
        "warpWeftScreen"
    ];

    screens.forEach(id => {
        let el = document.getElementById(id);
        if(el){
            el.style.display = "none";
        }
    });
}

/* ========== OPEN SCREENS ========== */

function openSimpleGSM(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("simpleGSM").style.display = "block";
}

function openFabricGSM(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("fabricGSM").style.display = "block";
}

function openWeight(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("weightScreen").style.display = "block";
}

function openYarn(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("yarnScreen").style.display = "block";
}

function openConsumption(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("consumptionScreen").style.display = "block";
}

function openWarpWeft(){
    goHome();
    document.querySelector(".container").style.display = "none";
    document.getElementById("warpWeftScreen").style.display = "block";
}

/* ========== SIMPLE GSM ========== */

function calculateSimpleGSM(){

    let weight = parseFloat(document.getElementById("weight").value);
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    if(isNaN(weight) || isNaN(length) || isNaN(width)){
        document.getElementById("simpleResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let gsm = (weight * 10000) / (length * width);

    document.getElementById("simpleResult").innerHTML =
    "📊 GSM = " + gsm.toFixed(2);
}

/* ========== FABRIC GSM ========== */

function calculateFabricGSM(){

    let warp = parseFloat(document.getElementById("warp").value);
    let weft = parseFloat(document.getElementById("weft").value);
    let ppi = parseFloat(document.getElementById("ppi").value);
    let rpi = parseFloat(document.getElementById("rpi").value);

    if(isNaN(warp) || isNaN(weft) || isNaN(ppi) || isNaN(rpi)){
        document.getElementById("fabricResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let gsm = (warp * ppi) + (weft * rpi);

    document.getElementById("fabricResult").innerHTML =
    "🧵 Fabric GSM = " + gsm.toFixed(2);
}

/* ========== FABRIC WEIGHT ========== */

function calculateWeight(){

    let gsm = parseFloat(document.getElementById("fw_gsm").value);
    let length = parseFloat(document.getElementById("fw_length").value);
    let width = parseFloat(document.getElementById("fw_width").value);

    if(isNaN(gsm) || isNaN(length) || isNaN(width)){
        document.getElementById("weightResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let weight = (gsm * length * width) / 10000;

    document.getElementById("weightResult").innerHTML =
    "⚖ Weight = " + weight.toFixed(2) + " KG";
}

/* ========== YARN COUNT ========== */

function calculateYarn(){

    let weight = parseFloat(document.getElementById("yarn_weight").value);
    let length = parseFloat(document.getElementById("yarn_length").value);

    if(isNaN(weight) || isNaN(length)){
        document.getElementById("yarnResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let yarnCount = (length / weight) * 0.59;

    document.getElementById("yarnResult").innerHTML =
    "🧵 Yarn Count = " + yarnCount.toFixed(2);
}

/* ========== CONSUMPTION ========== */

function calculateConsumption(){

    let gsm = parseFloat(document.getElementById("con_gsm").value);
    let length = parseFloat(document.getElementById("con_length").value);
    let pieces = parseFloat(document.getElementById("con_pieces").value);

    if(isNaN(gsm) || isNaN(length) || isNaN(pieces)){
        document.getElementById("conResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let consumption = (gsm * length * pieces) / 1000;

    document.getElementById("conResult").innerHTML =
    "📦 Total Consumption = " + consumption.toFixed(2) + " KG";
}

/* ========== WARP & WEFT ========== */

function calculateWarp(){

    let ends = parseFloat(document.getElementById("warp_ends").value);
    let length = parseFloat(document.getElementById("warp_length").value);
    let count = parseFloat(document.getElementById("warp_count").value);

    if(isNaN(ends) || isNaN(length) || isNaN(count)){
        document.getElementById("warpResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let result = (ends * length) / (count * 1693);

    document.getElementById("warpResult").innerHTML =
    "🧵 Warp Yarn = " + result.toFixed(2) + " KG";
}

function calculateWeft(){

    let picks = parseFloat(document.getElementById("weft_picks").value);
    let width = parseFloat(document.getElementById("fabric_width").value);
    let count = parseFloat(document.getElementById("weft_count").value);

    if(isNaN(picks) || isNaN(width) || isNaN(count)){
        document.getElementById("weftResult").innerHTML = "⚠ Fill all fields";
        return;
    }

    let result = (picks * width) / (count * 100);

    document.getElementById("weftResult").innerHTML =
    "🧵 Weft Yarn = " + result.toFixed(2);
}