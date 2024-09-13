let id1 = document.querySelector(".id");
let img = document.querySelector(".img");
let name1 = document.querySelector(".name");
let type = document.querySelector(".type");
let damage = document.querySelector(".damage");
let hpp = document.querySelector(".hp");
let value = document.querySelector(".value");
let attacks = document.querySelector(".attacks");



let id2 = document.querySelector(".id2");
let img2 = document.querySelector(".img2");
let name2 = document.querySelector(".name2");
let type2 = document.querySelector(".type2");
let damage2 = document.querySelector(".damage2");
let hpp2 = document.querySelector(".hp2");
let value2 = document.querySelector(".value2");
let attacks2 = document.querySelector(".attacks2");



let com = document.querySelector(".comp");
let use = document.querySelector(".user");

let chancehtml = document.querySelector(".chance");
let h3 = document.querySelector("h3");
let play = document.querySelector(".play");
let show = document.querySelector(".show");
let btn = document.querySelector(".btn");
let para = document.querySelector(".points");
let count = 0;


let inp = document.querySelector(".inp");

const url = `https://api.tcgdex.net/v2/en/sets/swsh3/`;
let points;
let hp, hp2;
let res, data, res2, data2, idd1, idd2, imgg1, imgg2;
let damage1, damage22;
let value11, value22;
let typ1, typ2;
let name11, name22;
let effect1, effect2;
let h1, h2;

let user = 0;
let comp = 0;


const cards = async () => {
    let id = Math.floor(Math.random() * 100);
    let res = await fetch(url + id);
    let data = await res.json();
    console.log(data);
    hp = data["hp"];
    idd1 = data.id;
    console.log(hp);
    damage1 = data.attacks[0].damage;
    value11 = data.dexId[0];
    typ1 = data.types[0];
    name11 = data.name;
    effect1 = data.description;
    imgg1 = data.image;




    let id2 = Math.floor(Math.random() * 100);
    let res2 = await fetch(url + id2);
    let data2 = await res2.json();
    console.log(data2);
    hp2 = data2["hp"];
    idd2 = data2.id;
    damage22 = data2.attacks[0].damage;
    value22 = data2.dexId[0];
    typ2 = data2.types[0];
    effect2 = data2.description;
    name22 = data2.name;
    imgg2 = data2.image;



    console.log(idd2);


}


let chance = 0;
let remaining = 4;
let reverse = remaining - 1;
let check = 0;
function ch() {
    check = 1;
}
//check

show.addEventListener("click", async () => {

    if (check == 0) {
        ch();
        //set the null value in card 2
        hpp2.innerHTML = `Hp=?`;
        damage2.innerHTML = `Damage=?`;
        value2.innerHTML = `Value=?`;
        attacks2.innerHTML = `Type=?`;
        id2.innerHTML = `ID=?`;

        //
        await cards();
        // img.src=imgg1;

        hpp.innerHTML = `Hp=${hp}`;
        damage.innerHTML = `Damage=${damage1}`;
        value.innerHTML = `Value=${value11}`;
        type.innerHTML = `${typ1}-type`;
        id1.innerHTML = `ID=${idd1}`;
        name1.innerHTML = `${name11}`;
        if (effect1 == undefined) {
            attacks1.innerHTML = "Data not show because server error";
        } else {
            attacks.innerHTML = `${effect1}`;
        }


        console.log("show=" + check);
    }


})


function errorchecking() {
    if (hp && hp2 && damage1 && damage22 && value11 && value22 != undefined && value11) {
        chance++;
        reverse--;
    }

}


function er() {
    if (hp && hp2 && damage1 && damage22 && value11 && value22 != undefined) {
        count++;
        user++;
        use.innerText = `User point
                      ${user} `;
    }
}

function compf() {

    if (hp && hp2 && damage1 && damage22 && value11 && value22 != undefined) {
        comp++;
        com.innerText = `Comp point
                                ${comp}`;
    }
}
play.addEventListener("click", () => {
    chancehtml.innerText = `Chance remaining=${reverse}`;
    if (check == 1) {
        errorchecking();
        console.log(chance);
        name2.innerHTML = `${name22}`;
        type2.innerHTML = `${typ2}-type`;
        hpp2.innerHTML = `Hp=${hp2}`;
        damage2.innerHTML = `Damage=${damage22}`;
        value2.innerHTML = `Value=${value22}`;
        attacks2.innerHTML = `Type=${typ2}`;
        id2.innerHTML = `ID=${idd2}`;
        if (effect2 == undefined) {
            attacks2.innerHTML = "Data not show because server error";
        } else {
            attacks2.innerHTML = `${effect2}`;
        }

        console.log(hp);
        console.log(hp2);

        if (inp.value == "hp") {
            if (hp > hp2) {
                h3.innerText = "You won";
                console.log("You won");
                er();
            } else {
                compf();
                h3.innerText = "You loose";
                console.log("You loose");
            }
        } else if (inp.value == "damage") {
            if (damage1 > damage22) {
                h3.innerText = "You won";
                console.log("You won");
                er();
            } else {
                compf();
                h3.innerText = "You loose";
                console.log("You loose");
            }
        } else if (inp.value == "value") {
            if (value11 > value22) {
                h3.innerText = "You won";
                console.log("You won");
                er();
            } else {
                compf();
                h3.innerText = "You loose";
                console.log("You loose");
            }
        } else {
            h3.innerText = "Please enter vaild element";
            console.log("Please enter vaild element");
        }
        para.innerText = `Points=${count}`;
        console.log("play" + check);
    }

    check = 0;
    checkpoint();
});



function winer() {
    if (user > comp) {
        h3.innerText = "You win the mach";
        console.log("You win the mach");
    } else {
        console.log("You lose the mach");
        h3.innerText = "You lost the mach";
    }

}



function checkpoint() {
    if (chance == remaining) {
        winer();

        play.disabled = true;
        show.disabled = true;

    }
    console.log(`${user}
    ${comp}`);
}



