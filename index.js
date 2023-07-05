 
let gen = document.getElementById('generate');
let para = document.getElementById('para');
let bes = document.querySelector(".beshify-section");
        
gen.addEventListener('click', function(){
let input = document.getElementById('inputs').value;
let borg = input;
let newborg = borg.replaceAll(" ", "🤸")
console.log(input);
para.textContent = newborg;
bes.style.display = 'block';
bes.style.marginTop = '30px';
})


 function copyToClipboard() {
    let cop = document.getElementById('copied');
    var copyText = document.getElementById("para").textContent;
    console.log(copyText);
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard!");
    });
  }
