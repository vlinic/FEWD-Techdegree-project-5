
//Define variables

const form =    `<form>
                    <input type="text" name="search" id="search" placeholder="Search">
                </form>`;
const $links;                

//append input form to header

$(".header").html(form);

//Search function

$links = $("a"); 

$("input").on("keyup", event => {
  let val = event.target.value;
  for (let i = 0; i < $links.length; i += 1) {
    var $submition = $links[i].getAttribute("data-title");
    if ($submition.toLowerCase().indexOf(val.toLowerCase()) != -1) {
      $links[i].style.display = "block";
    } else {
      $links[i].style.display = "none";
    }
  }
});