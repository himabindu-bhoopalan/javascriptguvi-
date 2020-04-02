class dog{
        name;
    constructor(name){
        this.name=name;
        let dogimg=document.createElement('img')
        
        dogimg.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-that-don-t-shed-bedlington-terrier-1583350322.jpg?crop=0.668xw:1.00xh;0.259xw,0.00260xh&resize=768:*";
        dogimg.style.width="100px";
        dogimg.style.height="100px";
        dogimg.onclick= ()=> {return alert(this.name+' says BOW!')}
        document.body.appendChild(dogimg);
        
    }
    
}
class cat{
        name;
    constructor(name){
        this.name=name
        let catimg=document.createElement('img')
        
        catimg.src="https://cdn.britannica.com/s:800x1000/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg";
        catimg.style.width="100px";
        catimg.style.height="100px";
        catimg.onclick= ()=> {return alert(this.name+' says MEOW!')}
        document.body.appendChild(catimg);   
    }
    
}

let Createdog=()=>{  
    let name=prompt("Enter a name:");
    new dog(name);
}
let Createcat=()=>{  
    let name=prompt("Enter a name:")
    new cat(name);
}