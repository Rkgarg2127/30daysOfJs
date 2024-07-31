//Activity 1:
//TAsk 1: Create an object representing a book eit title no of pages etc
var book={
    title:"30DaysOfJS", 
    noOfPages:30,
    author:"OCD",
    year:2024,
    
};
console.log( book);

//Task 2: Access and log title and author of book
console.log(`\n logging author and title`);
console.log(`Title:${book.title}\nAuthor:${book.author}`);


//TAsk 3: Write a method which return title and author in a string
console.log(`\n logging author and title using object method`);
book.details= function(){
    return `Title: ${this.title} \nAuthor:${this.author}`;
}
console.log(book.details());


//Task 4: Write a method that updates the year and log the updated object
book.updateYear=function(newYear){
    this.year=newYear;
    console.log(this);
    return `Updated year is ${newYear}`;
}
book.updateYear(2023);


//TAsk 5: Create a nested object library with name and an array of books with title and author
const lib={
    name:"OCD Library",
    books:[
        {
            title:"book1",
            author:"Author 1"
        },
        {
            title:"book2",
            author:"Author 2"
        },
        {
            title:"book3",
            author:"Author 3"
        },
        {
            title:"book4",
            author:"Author 4"
        }

    ]
}

console.log(`\n library :\n `, lib);


//task 6:- Acess and log the name of library and title of all the books
lib.allBooks=function(){
    console.log(`\n Libray name ${this.name}`)
    console.log(`Name of all the books:`)
    for(let i=0;i<this.books.length;i++){
        console.log(`${this.books[i].title}`);
    }
} 

lib.allBooks();


//Activity 4:-
//TAsk 7:- Add a method to the book object using the this keyword to return a string of book name and title of publish
book.displayYear= function(){
    return `Title:${this.title}\n Year:${this.year}`;
}
console.log(`\n`+book.displayYear());


//Activity 5:-
//TAsk 9: USe obj.keys and obj.value to display all the keys and value of object
console.log(`\nBook Keys:`+ Object.keys(book));
console.log(`\nBook Values:`+ Object.values(book)); 