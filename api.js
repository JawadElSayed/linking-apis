
const name = document.getElementById("input");

const gender_file = "https://api.genderize.io/?name=jawad";

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
