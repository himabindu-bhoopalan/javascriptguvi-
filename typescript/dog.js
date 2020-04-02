var dog = /** @class */ (function () {
    function dog(name) {
        var _this = this;
        this.name = name;
        var dogimg = document.createElement('img');
        dogimg.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-that-don-t-shed-bedlington-terrier-1583350322.jpg?crop=0.668xw:1.00xh;0.259xw,0.00260xh&resize=768:*";
        dogimg.style.width = "100px";
        dogimg.style.height = "100px";
        dogimg.onclick = function () { return alert(_this.name + ' says BOW!'); };
        document.body.appendChild(dogimg);
    }
    return dog;
}());
var cat = /** @class */ (function () {
    function cat(name) {
        var _this = this;
        this.name = name;
        var catimg = document.createElement('img');
        catimg.src = "https://cdn.britannica.com/s:800x1000/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg";
        catimg.style.width = "100px";
        catimg.style.height = "100px";
        catimg.onclick = function () { return alert(_this.name + ' says MEOW!'); };
        document.body.appendChild(catimg);
    }
    return cat;
}());
var Createdog = function () {
    var name = prompt("Enter a name:");
    new dog(name);
};
var Createcat = function () {
    var name = prompt("Enter a name:");
    new cat(name);
};
