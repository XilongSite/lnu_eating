var foods = new Array(
"友园","桃李园","三四","魔饭堂","老汤拉面"
,"咖喱饭","河南烩面","简单味道","烤肉饭","魔蜀冒菜"
,"牛肉汤","三杯鸡","味恋客","一碗好饭","萌锅蒸饭"
,"蒸饺"
);
function Roll() {
    result = document.getElementById("result");
    randNum = Math.floor(Math.random() * foods.length);
    result.innerHTML = foods[randNum];

    button = document.getElementById("button");
    button.innerHTML = "重来";
}