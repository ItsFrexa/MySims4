// JavaScript für das Erstellen und Anzeigen des Stammbaues

document.getElementById("stammbaum-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das automatische Abschicken des Formulars
  
  // Sammeln der Eingaben
  const name = document.getElementById("name").value;
  const beziehung = document.getElementById("beziehung").value;

  // Generierung des Stammbaues
  const stammbaumContainer = document.getElementById("stammbaum-container");

  // Erstellen eines neuen Divs für jedes Familienmitglied
  const familienMitgliedDiv = document.createElement("div");
  familienMitgliedDiv.classList.add("mitglied");
  familienMitgliedDiv.innerHTML = `<p><strong>Name:</strong> ${name} <br> <strong>Beziehung:</strong> ${beziehung}</p>`;

  // Anhängen des neuen Familienmitglieds an den Stammbaum-Container
  stammbaumContainer.appendChild(familienMitgliedDiv);

  // Zurücksetzen der Formulareingaben
  document.getElementById("name").value = "";
  document.getElementById("beziehung").value = "";
});
