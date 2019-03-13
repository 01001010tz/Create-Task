function start(){

}

function GPAQPA(){
  var credits[] = getElementsByClassName("GQS").getAttribute("value");
  var grades[] = getElementsByClassName("GQG").innerHTML;
  let creditSum;
  let gradeSum;
  for (let x = 0; x < credits.length; x++) {
      let weightedGrade = weight(grades[x]);
      gradeSum += weightedGrade * credits[x];
      creditSum += credits[x];
  }

  let weightedGPA = gradesum/creditSum;
  console.log(weightedGPA);
}

function classAverage(){

}

function generalAverage(){

}

function weight(grade){
  if (grade >= 97) {
    return 4;
  } else if (grade >= 94 && grade < 97) {
    return 4;
  } else if (grade >= 90 && grade < 94) {
    return 3.7;
  }else if (grade >= 87 && grade < 90) {
    return 3.3;
  }else if (grade >= 84 && grade < 87) {
    return 3.0;
  }else if (grade >= 80 && grade < 84) {
    return 2.7;
  }else if (grade >= 77 && grade < 80) {
    return 2.3;
  }else if (grade >= 74 && grade < 77) {
    return 2.0;
  }else if (grade >= 70 && grade < 74) {
    return 1.7;
  }else if (grade >= 67 && grade < 70) {
    return 1.3;
  }else if (grade >= 64 && grade < 67) {
    return 1.0;
  }else if (grade >= 60 && grade < 64) {
    return 0.7;
  }else if (grade > 60) {
    return 0;
  }
}
