function changeFocusCounty(id) {
  var data = {
    antrim: {
      "fawm-map-header": "Antrim County",
      "poverty-rate":	"14.2%",
      "food-insecurity-rate":	"12.3%",
      "child-food-insecurity-rate":	"20.1%",
      "num-food-insecure-people":	"2,870",
      "num-meals-required":	"514,600",
      "num-meals-distributed":	"517,059",
      "num-fawm-agencies":	"9"
    },
    charlevoix: {
      "fawm-map-header": "Charlevoix County",
      "poverty-rate":	"11.6%",
      "food-insecurity-rate":	"11.5%",
      "child-food-insecurity-rate":	"16.5%",
      "num-food-insecure-people":	"2,990",
      "num-meals-required":	"536,200",
      "num-meals-distributed":	"327,454",
      "num-fawm-agencies":	"14"
    },
    emmet: {
      "fawm-map-header": "Emmet County",
      "poverty-rate":	"11.0%",
      "food-insecurity-rate":	"12.2%",
      "child-food-insecurity-rate":	"16.7%",
      "num-food-insecure-people":	"4,030",
      "num-meals-required":	"722,600",
      "num-meals-distributed":	"682,466",
      "num-fawm-agencies":	"18"
    }
  }
  var countyData = data[id]
  
  if (countyData) {
    Object.keys(countyData).forEach(function(key) {
      var element = document.getElementById(key)
      element.innerText = countyData[key]
    })
  }
}

$(document).ready(function() {
  var elements = document.getElementsByClassName('fawm-map-county--active')

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
      return changeFocusCounty(e.currentTarget.id)
    });
  }

  changeFocusCounty('emmet')
})