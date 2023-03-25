
//filter function start
function myFunction(id/*string*/,carousel_item_number/*int*/){
  // Get the checkbox
  var checkBox = document.getElementById(id);
  // Get the item
  var item = document.getElementsByClassName("filterable")[carousel_item_number-1];//array starts from 0

  // If the checkbox is checked, display the item
  if (checkBox.checked == true){
    addClass(item,"carousel-item");
    removeClass(item,"d-none");
    var first_visible_item = document.getElementsByClassName("carousel-item")[0]
    if(first_visible_item){//if it exists
      var first_active_item = document.getElementsByClassName("carousel-item active")[0]
      if(first_active_item){//if it exists
        removeClass(first_active_item,"active");//so that no two items become active
      }
      addClass(first_visible_item,"active");
    }
  } else {
    addClass(item,"d-none");
    removeClass(item,"carousel-item");
    if(hasClass(item,"active")){
      removeClass(item,"active");//deactivate
      var first_visible_item = document.getElementsByClassName("carousel-item")[0]
      if(first_visible_item){//if it exists
          addClass(first_visible_item,"active");
      }
    }
  }
}

function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}//utility for checking if a class exist in the given element

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}//utility for adding a class to the given element

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}//utility for removing a class to the given element
//filter function end


//bootstrap tooltip (mostly for mobile, not important for desktop)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//bootstrap tooltip