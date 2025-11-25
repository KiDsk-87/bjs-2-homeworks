//Задача №1.
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state(newState){
        if(newState < 0){
            this._state = 0;
        } else if(newState > 100){
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
 
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача №2.
class Library{
    constructor(name){
        this.name = name;
        this.books = [];    
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return this.books.find((book) => book[type] === value) || null;
    }

    giveBookByName(bookName){
        const index = this.books.findIndex((item) => item.name = bookName);
        if(index === -1){
            return null;
        }
        return this.books.splice(index, 1)[0];
    }
}

const library = new Library("Московская библиотека");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("Аллен Карр", "Легкий способ бросить курить", 1919, 222));

const oldBook = library.findBookBy("releaseDate", 1919);
console.log(`Нашлась книга 1919 г.: ${oldBook ? oldBook.name : "ничего не смогли нашли"}`);

console.log("Количество книг ДО выдачи:", library.books.length); // 5
const issued = library.giveBookByName("Улисс");
console.log("Количество книг ПОСЛЕ выдачи:", library.books.length); // 4
console.log("Выдана книга:", issued.name);

issued.state = 40;        
console.log("Состояние книги после повреждения:", issued.state);

issued.fix();               
console.log("Состояние книги после восстановления:", issued.state);

console.log("Попытка вернуть книгу");
library.addBook(issued);