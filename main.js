
document.addEventListener("DOMContentLoaded",function(){
    function calculate() {
        var height = parseFloat(document.getElementById("height").value);
        var weight = parseFloat(document.getElementById("weight").value);
        height = height / 100;
        var BMI = weight / (height * height);
        document.getElementById("result").innerHTML = BMI.toFixed(2);
        if (BMI < 18.5) {
            document.getElementById("message").innerHTML = '<h1 class="text-danger  w-50 my-3 text-center rounded ms-4">You are underweight</h1> <h4 class="text-white bg-danger-subtle w-50 text-center ms-4 rounded">Time to Grab a Bite ! </h4> <p class="w-50 text-center"> Your body is your home treat it with kindness. Fuel it well, move with purpose, and rest when needed.</p>';
        }
        else if (BMI>=18.5&&BMI<=24.9){
            document.getElementById("message").innerHTML = '<h1 class="bg-success text-white w-50 my-3 text-center rounded ms-4"> Great Your are in heathy shape </h1> <p class="w-50 text-center ms-4">Being healthy is a blessing keep nurturing your body and mind! Your commitment to a balanced lifestyle is an investment in a happier, longer, and more energetic life. </p>';
        }
        else if (BMI>=25&&BMI<=29.9){
            document.getElementById("message").innerHTML = '<h1 class="bg-warning text-white  w-50 my-3 text-center rounded ms-4"> You are Overweight </h1> <p class="w-50 text-center ms-4">walk a little more, drink more water, eat mindfully. Progress is progress, no matter how small! You are capable, strong, and deserving of good health.  </p>.';
        }
        else document.getElementById("message").innerHTML = '<h1 class="bg-warning text-white  w-50 my-3 text-center rounded ms-4"> Obese </h1> <h2 class="bg-danger-subtle w-50 text-center text-white ms-4">Time To Run!</h2> <p class="w-50 text-center ms-4"> You deserve to feel strong, confident, and full of energy. Progress may take time, but every step forward is a step toward a healthier, happier you. Keep pushing you have got this! </P> ';

    }

    document.getElementById("calculate").addEventListener("click",function(){
        calculate();
    });
});