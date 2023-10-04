function showLoading() {
    const div = document.createElement('div')
    div.classList.add("lds-spinner", "centralize")
   
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const div5 = document.createElement("div")
    const div6 = document.createElement("div")
    const div7 = document.createElement("div")
    const div8 = document.createElement("div")
    const div9 = document.createElement("div")
    const div10 = document.createElement("div")
    const div11 = document.createElement("div")
    const div12 = document.createElement("div")

    div.appendChild(div1)
    div.appendChild(div2)
    div.appendChild(div3)
    div.appendChild(div4)
    div.appendChild(div5)
    div.appendChild(div6)
    div.appendChild(div7)
    div.appendChild(div8)
    div.appendChild(div9)
    div.appendChild(div10)
    div.appendChild(div11)
    div.appendChild(div12)
    
    document.body.appendChild(div)
}

function hideLoading() {
    const loadings = document.getElementsByClassName('lds-spinner');
    if (loadings.length) {
        loadings[0].remove();
    }
}