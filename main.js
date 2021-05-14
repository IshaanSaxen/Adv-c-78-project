var images = [
"https://images-na.ssl-images-amazon.com/images/I/91mwDyvpUcL.jpg",
"win_20210511_20_39_34_Pro.jpg",
"download.jpg",
"ishaanpng.png",
];

var names = [
"Ishaan",
"Rahul",
"Kumkum"
];

var i=0;
function update(){
    i++;
    var numbers_of_family_member_in_arrays = 3;
    if(i > numbers_of_family_member_in_arrays){
        i = 0;
}
var updated_image = images[i];
var updated_name = names[i];
document.getElementById("family_member_images").src = updated_image;
document.getElementById("Family_member_name").src = updated_name;

}
