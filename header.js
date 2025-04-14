header = document.createElement('div')
header.id = "header"

function setup_header(){
    for (let link of ["Home", "Projects", "About"]){
        let element = document.createElement('div')
        element.className = "header_link"
        element.innerHTML = `<p class='header_link_text'>${link}</p>`
        element.setAttribute('links-to', `${link}`)
        element.onclick = function(){
            load_content.call(this)
        }
        header.appendChild(element)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setup_page()
})

function setup_page(){
    document.body.appendChild(header)
    let icon = document.createElement('img')
    icon.id = "dualonn-icon"
    icon.setAttribute('links-to', "Home")
    icon.src = "dualonn-icon.png"
    icon.onclick = load_content
    header.appendChild(icon)
    setup_header()
}