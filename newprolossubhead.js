/**
 * 
 */
function setKannadaName() {

    var select =
        document.getElementById("main_head");

    var selectedOption =
        select.options[select.selectedIndex];

    var kannada =
        selectedOption.getAttribute("data-kannam");

    document.getElementById("knd").value =
        kannada || "";
}