
const submite = (element) => {
    element.addEventListener('click', (event) => {
        console.log("jawad")
        const name = document.getElementById("input").value;

        const image = "https://dog.ceo/api/breeds/image/random";
        const gender_file = "https://api.genderize.io/?name=" + name; 
        const age_file = "https://api.agify.io/?name=" + name;
        const nationality_file = "https://api.nationalize.io/?name=" + name;

        document.getElementById("name").append(name);

        fetch(gender_file)
        .then (x => x.json())
        .then (gender => {
            gender_type = gender.gender;
            probabilty = gender.probability;
            count = gender.count;
            document.getElementById("gender").innerHTML = gender_type;
            document.getElementById("gender_probability").innerHTML = probabilty;
            document.getElementById("gender_count").innerHTML = count;
        });

        fetch(age_file)
        .then (x => x.json())
        .then (ages => {
            age = ages.age;
            count = ages.count;
            document.getElementById("age").innerHTML = age;
            document.getElementById("age_count").innerHTML = count;
        });

        fetch(nationality_file)
        .then (x => x.json())
        .then (nationality => {
            nationality_1 = nationality.country[0].country_id;
            probabilty_1 = nationality.country[0].probability;
            nationality_2 = nationality.country[1].country_id;
            probabilty_2 = nationality.country[1].probability;
            document.getElementById("country1").innerHTML = nationality_1;
            document.getElementById("nationality_probability1").innerHTML = probabilty_1;
            document.getElementById("country2").innerHTML = nationality_2;
            document.getElementById("nationality_probability2").innerHTML = probabilty_1;
        });
    })
}

// const image = "https://dog.ceo/api/breeds/image/random";
// const gender_file = "https://api.genderize.io/?name=" + name; 
// const age_file = "https://api.agify.io/?name=jawad";
// const nationality_file = "https://api.nationalize.io/?name=jawad";

submite(document.getElementById("submit"))



// fetch(gender_file)
// .then (x => x.json())
// .then (gender => {
//     gender_type = gender.gender;
//     probabilty = gender.probability;
//     count = gender.count;
//     document.getElementById("gender").innerHTML = gender_type;
//     document.getElementById("gender_probability").innerHTML = probabilty;
//     document.getElementById("gender_count").innerHTML = count;
// });

// fetch(age_file)
// .then (x => x.json())
// .then (ages => {
//     age = ages.age;
//     count = ages.count;
//     document.getElementById("age").innerHTML = age;
//     document.getElementById("age_count").innerHTML = count;
// });

// fetch(nationality_file)
// .then (x => x.json())
// .then (nationality => {
//     nationality_1 = nationality.country[0].country_id;
//     probabilty_1 = nationality.country[0].probability;
//     nationality_2 = nationality.country[1].country_id;
//     probabilty_2 = nationality.country[1].probability;
//     document.getElementById("country1").innerHTML = nationality_1;
//     document.getElementById("nationality_probability1").innerHTML = probabilty_1;
//     document.getElementById("country2").innerHTML = nationality_2;
//     document.getElementById("nationality_probability2").innerHTML = probabilty_1;
// });
