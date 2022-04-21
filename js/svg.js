let map = document.querySelectorAll('.map path');
let locationName = document.querySelector(".name");
let title = document.querySelector(".title");
let countryName = document.querySelector(".countryName");
let currentCountry = ["Myanmar", "Thailand", "Japan", "USA"]
//for mouseover
map.forEach((p) => {
    p.addEventListener("mouseover", () => {
        map.forEach(c => {
            c.classList.remove("active")
        })
        p.classList.add("active");
        countryName.innerText = p.getAttribute("title");
        document.querySelector(".placeName").innerText = p.getAttribute("title");
        if (!currentCountry.includes(p.getAttribute("title"))) {
            document.querySelector(".placeName").innerText = p.getAttribute("title");
        }
        else {
            document.querySelector(".placeName").innerText = "";
        }
    });

    //for click
    p.addEventListener("click", () => {
        let e = document.querySelector('.map').children[0];
        let myanmar = document.querySelector('.map').children[1];
        let thailand = document.querySelector('.map').children[2];
        let us = document.querySelector('.map').children[3];
        let japan = document.querySelector('.map').children[4];

        let cd = document.querySelector('.box').children[1];
        let hd = document.querySelector('.earth').children[0];
        let yn = document.querySelector('.earth').children[2];
        let countries = [thailand, myanmar, us, japan];

        e.classList.add("clear");
        countries.forEach((country) => {
            if (country.classList[0].toString() == p.getAttribute("title").toLocaleLowerCase()) {
                country.classList.add("display");
                cd.classList.add("display");
                hd.classList.add("clear");
                yn.classList.add("clear");
            }
            if (currentCountry.includes(p.getAttribute("title"))) {
                document.querySelector(".countryDescription").children[0].innerText = p.getAttribute("title");
            }
        });

    })

});
document.querySelector("[title='Myanmar']").classList.add("active");
countryName.innerText = "Myanmar";


