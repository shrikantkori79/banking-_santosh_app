/**
 * 
 */

const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get("status");

if (status === "success") {

    alert("Saved successfully!");

} else if (status === "duplicate") {

    alert("Name already exists!");

} else if (status === "failed") {

    alert("Data not saved!");
}