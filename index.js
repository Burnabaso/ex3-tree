window.onload= function(){
    const headline = document.createElement("div");
    headline.innerHTML = `
        <h1 class="gold">*</h1>
        <h1>It this time of the year</h1>
        <h1 class="gold">*</h1>
    `
    headline.classList.add("headline");
    document.body.appendChild(headline);
    const input = document.createElement("div");
    input.innerHTML = `
        <label for="size">What is the size of your tree?</label>
        <input type="text" name="size" id="size">
        <button>Draw Tree</button>
    `
    input.classList.add("input");
    document.body.appendChild(input);
    
}
const userInput = document.getElementById("size");
// Example how treee will be drawn
{/* <div class="gold">*</div>
<div class="green">* | *</div>
<div class="red">* | | | *</div>
<div class="green">* | | | | | *</div> */}