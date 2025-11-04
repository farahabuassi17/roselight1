window.onload= function() {
  alert("Welcome to Roselight!");
};

// 2. تعريف متغيرات بأنواع مختلفة باستخدام var
var brandName = "Roselight";     // String
var productCount = 8;            // Number
var isAvailable = true;          // Boolean

console.log("Brand:", brandName);
console.log("Count:", productCount);
console.log("Available:", isAvailable);
// استخدام مصفوفة وتكرار عناصرها
var products = ["Candles Beautiful", 
    "Flower Basket ", "Flower Beautiful Pink Variable "
    ,"Candle Pink Variable","Candles Rose"
    ,"Rose-Scented Candle","Flower Vase With A Candle"
    ,"Bouquet Of Roses"];
for (var i = 0; i < products.length; i++) {
  console.log("Product " + (i + 1) + ": " + products[i]);
}
// عملية حسابية
  // تعريف المتغيرات
var price1 = 80;
var price2 = 120;

// العمليات الحسابية
var sum = price1 + price2;
var difference = price2 - price1;
var product = price1 * price2;
var division = price2 / price1;

// طباعة النتائج باستخدام document.write()
document.write(`
  <div style="margin: 30px auto; max-width: 500px; background-color: #fff0f5; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); padding: 20px; text-align: center; font-family: Arial;">
    <h2 style="color: preventDefault ; margin-bottom: 20px;">Arithmetic Operations</h2>
    <p style="font-size: 16px;">Addition: ${price1} + ${price2} = <strong>${sum}</strong></p>
    <p style="font-size: 16px;">Subtraction: ${price2} - ${price1} = <strong>${difference}</strong></p>
    <p style="font-size: 16px;">Multiplication: ${price1} × ${price2} = <strong>${product}</strong></p>
    <p style="font-size: 16px;">Division: ${price2} ÷ ${price1} = <strong>${division.toFixed(2)}</strong></p>
  </div>
`);
//  الصفحة الرئسية console طبعة من 1 ل 10 في 
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// تغير لون الخلفية الي الزهري 
function changeBackgroundColor() {
  document.body.style.backgroundColor =
  document.body.style.backgroundColor === "lightpink" ? "white" : "lightpink";
}

