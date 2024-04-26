const movie = {
    title: "Puff the Magic Dragon", 
    duration: 30 ,
    star: {
        name: "Puff",
        country: "Uganda", 
        age: 45
    }
}


console.log("Movie Title:", movie.title);
console.log("Duration:", movie.duration, "minutes");
console.log("Star:", movie.star.name, "from", movie.star.country, "Age:", movie.star.age)
movie.displayInfo();