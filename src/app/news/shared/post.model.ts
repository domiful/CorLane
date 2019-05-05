export class Post {
    id: string;
    name: string;
    hasAC: boolean;
    seats: string;
    luggage: number;
    class: string;
    doors: number;
    price: number;
    transmission: string;
    imageUrl: string;
    imageStoragePath: string;
    dateCreated: string;
    summary: string;
    tag: string;
    author: string;
    content: string;
    checkedIn: string;

    constructor(options: any) {
        this.id = options.id;
        this.name = options.Title;
        this.hasAC = options.hasAC;
        this.seats = options.seats;
        this.luggage = Number(options.luggage);
        this.class = options.class;
        this.doors = Number(options.doors);
        this.price = Number(options.price);
        this.transmission = options.transmission;
        this.imageUrl = "https://picsum.photos/200/300/?blur=2";
        this.imageStoragePath = options.imageStoragePath;
        this.dateCreated = new Date(options.PublicationDate).toDateString();
        this.summary = options.Summary;
        this.tag = options.UrlName;
        this.author = options.Author === "" ? "Jane Smith" : options.Author;
        this.content = options.Content;
        this.checkedIn = options.checkedIn;
    }
}
