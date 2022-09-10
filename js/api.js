
const img1 = document.getElementById("dog_image1");
const img2 = document.getElementById("dog_image2");
const image_file = "https://dog.ceo/api/breeds/image/random";

// getting the images
fetch(image_file)
.then (x => x.json())
.then (image => {
    img1.src = image.message;
    img2.src = image.message;
});

// on submit function
const submite = (element) => {
    element.addEventListener('click', (event) => {
        const name = document.getElementById("input").value;

        const gender_file = "https://api.genderize.io/?name=" + name; 
        const age_file = "https://api.agify.io/?name=" + name;
        const nationality_file = "https://api.nationalize.io/?name=" + name;

        document.getElementById("name").innerHTML = "Name: " + name;

        // getting the gender details
        fetch(gender_file)
        .then (x => x.json())
        .then (gender => {
            gender_type = gender.gender;
            probabilty = Math.round(gender.probability * 100); 
            count = gender.count;
            document.getElementById("gender").innerHTML = "Gender: " + gender_type;
            document.getElementById("gender_probability").innerHTML = "Probability: " + probabilty + "%";
            document.getElementById("gender_count").innerHTML = "Count: " + count;
        });

        // getting the age details
        fetch(age_file)
        .then (x => x.json())
        .then (ages => {
            age = ages.age;
            count = ages.count;
            document.getElementById("age").innerHTML = "Age: " + age;
            document.getElementById("age_count").innerHTML = "Count: " + count;
        });
        // getting the nationality details
        fetch(nationality_file)
        .then (x => x.json())
        .then (nationality => {
            nationality_1 = nationality.country[0].country_id;
            probabilty_1 = Math.round(nationality.country[0].probability * 100); 
            nationality_2 = nationality.country[1].country_id;
            probabilty_2 = Math.round(nationality.country[1].probability * 100); 
            document.getElementById("country1").innerHTML = "Country 1: " + nationality_1;
            document.getElementById("nationality_probability1").innerHTML = "Probability: " + probabilty_1 + "%";
            document.getElementById("country2").innerHTML = "Country 2: " + nationality_2;
            document.getElementById("nationality_probability2").innerHTML = "Probability: " + probabilty_2 + "%";
        });
    })
}

// calling on submit function
submite(document.getElementById("submit"))

