window.addEventListener("scroll", () => {
    const elemen = document.querySelector(".animasi")
    let windowHeight = window.innerHeight;
    let elementTop = elemen.getBoundingClientRect().top;
    const elemenPoint = 150
    
    if(elementTop < windowHeight - elemenPoint){
        elemen.classList.add("active")
        
    }else{
        elemen.classList.remove("active")
    }
})

const navbarNav = document.querySelectorAll(".bar > a")
const cards = document.querySelectorAll(".skills > .container > .row > .col-md-12 > .card")
navbarNav.forEach(nav => {
    nav.addEventListener("click", (e) => {
        e.preventDefault()
        
        navbarNav.forEach(nav => {
            nav.classList.remove("active")
        })
        const target = e.target; 
        if(target){
            target.classList.add("active")
        }

        cards.forEach(card => {
            card.classList.remove("active")
        })

        
        const targetCard = target.dataset.card;
        const card = document.querySelector(targetCard)
        if(card){
            card.classList.add("active")
        }


    })
})

/* 

border-bottom: 1px solid rgba(4, 4, 185, 0.753);

               



                 <div class="card-body">
                          <h5 class="card-title">Web tol</h5>
                          <h6 class="card-subtitle mb-3" style="color:  rgba(0, 162, 255, 0.616);">2023-2024</h6>
                          <p class="card-text mb-2">Ahli dalam membangun desain web yang sepenuhnya responsif, saya memastikan situs Anda tampil sempurna dan memberikan pengalaman optimal di desktop, tablet, hingga smartphone.</p>
                        </div>

*/