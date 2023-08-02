fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    let divHTML = ''    
    users.forEach(element => {
        let elementHTML = `<div class="box" >
                                <div class="avatar">
                                    <img src="image/avatar.png" alt="">
                                </div>
                                <label for="">${element.name}</label>
                                @${element.username} |${element.email} 
                                <span>${element.website}</span>
                                <span>${element.phone}</span>
                                <div class="show_more" id="showmore">
                                    <div class="adresse">
                                        <label for="">Street :${element.address.street}</label>
                                        <label for="">Suite :${element.address.suite}</label>
                                        <label for="">City :${element.address.city}</label>
                                        <label for="">Zipcode :${element.address.zipcode}</label>
                                        <label for="">Geo 
                                            <ul>
                                                <li>lat :${element.address.geo.lat}</li>
                                                <li>lng :${element.address.geo.lng}</li>
                                            </ul>
                                        </label>
                                    </div>
                                    <div class="company">
                                        <label for="">Name        :</label>${element.company.name}
                                        <label for="">CatchPhrase :</label>${element.company.catchPhrase}
                                        <label for="">Bs          :</label>${element.company.bs}
                                    </div>
                                </div>
                                <button id="showContent">Show more</button>
                            </div>`
        divHTML += elementHTML
    }); 
    document.getElementById('id_box').innerHTML = divHTML
    let cacher = document.querySelectorAll("#showmore")
    let arrayCacher = Array.from(cacher)
    let btn = document.querySelectorAll("button")
    let Arraybtn = Array.from(btn)
    Arraybtn.forEach((element,index)=> {
        element.addEventListener('click',()=>{
            if(getComputedStyle(arrayCacher[index]).display == "none"){
                cacher[index].style.display = "inline"
            }
            else{
                cacher[index].style.display = " none"
                btn[index].style.content = "Show less"
            }
        })
    })
})
