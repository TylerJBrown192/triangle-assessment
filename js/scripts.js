var triangle = function(side_length) {
  var side1 = side_length[0]
  var side2 = side_length[1]
  var side3 = side_length[2]

  if ((side1 === side2) && (side2 === side3) && (side3 === side1)) {
    return "Equilateral Triangle"
  } else if { ((side1 === side2) || (side2 === side3) || (side3 === side1))
    return "Isosceles Triangle"
  } else if { ((side1 !== side2) && (side2 !== side3) && (side3 !== side1))
    return "Scalene Triangle"
  } else if { (((side1 + side2) !== side3) || ((side2 + side3) !== side1) || ((side3 + side1) !== side2))
    return "This isn't a triangle!"
  }

};
