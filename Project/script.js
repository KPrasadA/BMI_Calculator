function bmiCalculate()
{
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let calculatedBmi = weight  /(height ** 2);
   let BMI = parseFloat(calculatedBmi).toFixed(2);
    console.log(BMI);
    if(calculatedBmi < 18.5)
    {
        //alert('Underweight');
        document.getElementById("outputBox").innerHTML = ("Underweight!! :Your BMI is " + BMI);

    }
    else if((calculatedBmi > 18.5) && (calculatedBmi < 24.9)  )
    {
        //alert ('Normal Weight');
        document.getElementById("outputBox").innerHTML = ("Normal Weight 👍👍 :Your BMI is " + BMI);
    }
    else if((calculatedBmi > 24.9) && (calculatedBmi < 29.9)  )
    {
       // alert ('Pre-Obesity');
       document.getElementById("outputBox").innerHTML = ("Pre-Obesity :Your BMI is " + BMI);
    }
    else if((calculatedBmi > 29.9) && (calculatedBmi < 34.9)  )
    {
        //alert ('Obesity Class 1');
        document.getElementById("outputBox").innerHTML = ("Obesity Class 1 :Your BMI is " + BMI);
    }
    else if((calculatedBmi > 34.9) && (calculatedBmi < 39.9)  )
    {
       // alert ('Obesity Class 2');
       document.getElementById("outputBox").innerHTML = ("Obesity Class 2 :Your BMI is " + BMI);
    }
    else if( calculatedBmi > 40  )
    {
        //alert ('Obsity class 3');
        document.getElementById("outputBox").innerHTML = ("Obesity Class 2 :Your BMI is " + BMI);
    }

}
