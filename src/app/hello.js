// let age: number = 50;
//
// console.log("hello")
//
// let sales: number = 18754;
// let course: string = 'TypeScript';
// let is_published: any = true;
// let level;
// level = 1;
//
//
// function render(document: any) {
//     console.log(document)
// }
//
// let numbers = [1, 2, 3];
//
// let user = [1, 'Mosh'];
//
// user.push(1);
//
// console.log(user.toString())
//
// //enums
//
//
// const small = 1;
// const medium = 2;
// const large = 3;
//
// enum Size {Small = 1, Medium, Large}
//
// let mySize: Size = Size.Medium;
// console.log(mySize)
//
//
// // fonksiyonlar
//
// function calculateText(income: number, taxYear: number) {
//     if (taxYear < 2022)
//         return income * 1.2;
//
//     return income * 1.3;
// }
//
//
// console.log(calculateText(10000, 2022))
//
// // objects
//
// let employee = {
//         id: 1,
//         name: undefined,
//
//    }
// ;
// employee.id=3;
//
//  class Invoie  {
//
//   client :string;
//   details :string ;
//
//
//   public amount :number;
//
//   constructor(c:string,d: string, a: number) {
//
//     this.client=c;
//     this.details=d;
//     this.amount=a;
//
//   }
//
//   format () {
//     return `${this.client} owes $ ${this.amount} for ${this.details} `
//   }
//
//  }
//  const  inVove =new Invoie('mario','work on th emario ',250)
//  const  inVtwo =new Invoie('luigi','work on th luugiu ',500)
//
//
// console.log(inVove)
// console.log(inVtwo)
//
//
// let invoices :Invoie[] =[];
// invoices.push(inVove)
//
//
// invoices.forEach(inv =>  {
//
//   console.log(inv.client,inv.details,inv.amount,inv.format())
//
// })
//
//
//
//exğport //
var LikebuttoncomponentComponent = /** @class */ (function () {
    function LikebuttoncomponentComponent(initialLikes) {
        if (initialLikes === void 0) { initialLikes = 0; }
        this.likes = initialLikes;
        this.isSelected = false;
    }
    Object.defineProperty(LikebuttoncomponentComponent.prototype, "Likes", {
        get: function () {
            return this.likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikebuttoncomponentComponent.prototype, "isselected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: false,
        configurable: true
    });
    LikebuttoncomponentComponent.prototype.buttonLike = function () {
        if (this.isSelected) {
            this.likes--;
        }
        else
            this.likes++;
        this.isSelected = !this.isSelected;
    };
    return LikebuttoncomponentComponent;
}());
console.log("Denek");
var likeButton = new LikebuttoncomponentComponent(10);
console.log("Initial State - Number of Likes: ".concat(likeButton.likes, ", Is Liked: ").concat(likeButton.isSelected));
likeButton.buttonLike();
console.log("After Clicking - Number of Likes: ".concat(likeButton.likes, ", Is Liked: ").concat(likeButton.isSelected));
likeButton.buttonLike();
console.log("After Clicking - Number of Likes: ".concat(likeButton.likes, ", Is Liked: ").concat(likeButton.isSelected));
