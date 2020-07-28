function first_name (name) {
    console.log("Hello " + name);
}
function full_name(callback) {
    var name = "Alexis";
    callback(name);
  }
  
full_name(first_name);