
const name = document.getElementById("input");

const image = "https://dog.ceo/api/breeds/image/random";
const gender_file = "https://api.genderize.io/?name=jawad";
const age_file = "https://api.agify.io/?name=jawad";
const nationality_file = "https://api.nationalize.io/?name=jawad";



fetch(gender_file)
.then (x => x.json())
.then (gender => {
    gender_type = gender.gender
    probabilty = gender.probability
    count = gender.count
    document.getElementById("gender").innerHTML = gender_type
    document.getElementById("gender_probability").innerHTML = probabilty
    document.getElementById("gender_count").innerHTML = count
});

fetch(age_file)
.then (x => x.json())
.then (ages => {
    age = ages.age
    count = ages.count
    document.getElementById("age").innerHTML = age
    document.getElementById("age_count").innerHTML = count
});
