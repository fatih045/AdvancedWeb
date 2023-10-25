
class LikebuttoncomponentComponent {


  public  likes: number;
  public isSelected: boolean;


  constructor(initialLikes: number = 0) {
    this.likes = initialLikes;
    this.isSelected = false;
  }

  get Likes() {
    return this.likes;
  }

  get isselected(): boolean {

    return this.isSelected;
  }


  buttonLike(): void {
    if (this.isSelected) {

      this.likes--;
    } else this.likes++;

    this.isSelected = !this.isSelected;

  }


}
console.log("Denek")
const likeButton= new LikebuttoncomponentComponent(10);



console.log(`Initial State - Number of Likes: ${likeButton.likes}, Is Liked: ${likeButton.isSelected}`)

likeButton.buttonLike();
console.log(`After Clicking - Number of Likes: ${likeButton.likes}, Is Liked: ${likeButton.isSelected}`);

likeButton.buttonLike();
console.log(`After Clicking - Number of Likes: ${likeButton.likes}, Is Liked: ${likeButton.isSelected}`);




