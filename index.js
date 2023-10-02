//creates global variable dateOfToday which is the current date in real time and is used when creating a loading blog posts to provide an accurate time.
var currentDate = new Date();
let dateOfToday = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + (currentDate.getDay() + 1);
var i = 0;

//global variable declaring if user is allowed to post set to false initially.
var access = false;

function openTab(evt, tabName) {
    // Declare all variables
    var tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
  }

  //if local storage is empty an array is created to be used later so we can avoid null and undefined errors when dealing with local storage and initial inputs later. upon deployment this section of code will only one time until "delete posts" feature is added
  if (localStorage.length === 0) {
    var jsonArray = [{0 : "post"}];
    localStorage.setItem("posts", JSON.stringify(jsonArray));
  }
  
  //function that logs text submitted from text-area and turns it into html element 'blogpost' and appends it to the body of the blogs tab
  function logValue() {
    //sets what we want to post and have submitted to a variable
    var textAreaValue = document.getElementById("posts").value;

    //retrieves the current array from local storage
    var retrievedData = localStorage.getItem("posts");
    var retrievedObj = JSON.parse(retrievedData);
    jsonArray = retrievedObj;

    // get the 'posts' object from what we just retrieved
    var keys = Object.keys(retrievedObj);

    // Get the last key from the array and increment i for the next key
    var lastKey = keys[keys.length - 1];

    //this is to avoid some weird errors with lastkey being a string that we need to increment
    lastKey = parseInt(lastKey);
    lastKey++;
    lastKey = lastKey.toString();

    //i is the key in the json array we are storing the value in the key item pair will be the value from the text-area we have submitted (example: {1 : "New blog post!"}) where 1 is i that will be incremented and the text is the var textAreaValue
    i = lastKey;
    
    //add new values to JSON array and set the new array to local storage replacing the old one with new array + 1 new item
    if (access) {
      jsonArray.push({[i] : textAreaValue});
      localStorage.setItem("posts", JSON.stringify(jsonArray));

      // Create a new html element plus styling for the post
      var p = document.createElement("p");
      p.style.border = '2px solid black';
      p.style.borderRadius = '10px';
      p.style.minHeight = '60px';
      p.style.background = 'linear-gradient(120deg, white, #D7CDCC)';
      p.innerHTML = dateOfToday + "<br>" + textAreaValue;

      // Append the new element to the body of the blog tab
      document.getElementById("blogpost").appendChild(p);
    }
  }

  //upon hitting the blog tab this line triggers the function to load all previous posts stored in local storage
  document.getElementById("blog").addEventListener("click", loadBlog());


  //this function loads the blog upon clicking on the blog tab and takes all values from the jsonarray in local storage and creates and html element for each post stored.
  function loadBlog() {
    //this block of code is used to find the last key in the array in local storage. first we use the key "posts" to get the value that is our array. Once we have the array we find the keys and then finally we locate the lastKey and convert it to type int
    var retrievedData = localStorage.getItem("posts");
    var retrievedObj = JSON.parse(retrievedData);
    var keys = Object.keys(retrievedObj);
    var lastKey = keys[keys.length - 1];
    lastKey = parseInt(lastKey);

    // for each item post blogpost with key
    // read each item from JSON array (each value)
    if (localStorage.length != 0) {
      var retrievedData = localStorage.getItem("posts");
      var retrievedObj = JSON.parse(retrievedData);

        //starts from 1 to avoid placeholder post item at index 0. goes until it has reached lastKey which is the last key in the array that stores our posts so that all posts are loaded.
        for (let j = lastKey; j > 0; j--) {
          var p = document.createElement("p");
          p.style.border = '2px solid black';
          p.style.borderRadius = '10px';
          p.style.minHeight = '60px';
          p.style.background = 'linear-gradient(120deg, white, #D7CDCC)';
          p.innerHTML = dateOfToday + "<br>" + retrievedObj[j][j];
          document.getElementById("blogpost").appendChild(p);
        }
      }
    }

    // function that removes the last post from the blog (password owners only)
    function deleteLastPost() {
      if (access) {
        var retrievedData = localStorage.getItem("posts");
        var retrievedObj = JSON.parse(retrievedData);
        retrievedObj.pop();
        localStorage.setItem("posts", JSON.stringify(retrievedObj));
        location.reload();
      }
    }

    //function that allows only users who have entered the right password to create a post
    function updateAccess() {
      //gets value entered from password form and compares it to set password
      var enteredPassword = document.getElementById("pwd").value;
      var password = "Oscar";
        if (enteredPassword == password) {
          access = true;
        }
    }
  

window.onload = openTab("tab", 'About Me');