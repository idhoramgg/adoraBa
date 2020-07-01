//declare form

// let data = []

let clock = (event) => {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    
    if(name.length < 4){
        alert('name terlalu singkat, minimal 4 karakter')
    }
    else if(email.length < 6){
        alert('masukan email')
    }
    else if(subject.length < 5){
        alert('subjek terlalu singkat')
    }
    else if(message.length < 6){
        alert('message terlalu singkat')
    } else {
        alert(`terimakasih, pesan telah di submit`)
    } 
    event.preventDefault()
}
// ngasih button fungsi onclick
