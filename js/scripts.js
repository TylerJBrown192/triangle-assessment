var triangle = function(side_length) {
  var side1 = side_length[0]
  var side2 = side_length[1]
  var side3 = side_length[2]

  if ((side1 === side2) && (side2 === side3) && (side3 === side1)) {
    return "Equilateral Triangle"
  } else if ((side1 === side2) || (side2 === side3) || (side3 === side1)) {
    return "Isosceles Triangle"
  } else if (((side1 + side2) !== side3) && ((side2 + side3) !== side1) && ((side3 + side1) !== side2)) {
    return "This isn't a triangle!"
  } else if ((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
    return "Scalene Triangle"
  };
};

$(document).ready(function() {
  $("form#tri-sides").submit(function(event) {
    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());

    var result = triangle([length1, length2, length3]);

    if (result === "This isn't a triangle!") {
      $(".no-tri").text("This isn't a triangle!");
    } else if (result !== "This isn't a triangle!") {
      $(".no-tri").text("The lengths you've put in creates a ");
      $(".tri-result").text(result);
    }

    $("#result").show();
    event.preventDefault();
  });
});
