let idk = localStorage.getItem("title")
function setTitle(value) {document.title = value || "Google";}
if (idk === null) {
    setTitle("Google")
} else {
    setTitle(idk);
    console.log("the title set is:", idk, "you can change it in the settings");
}