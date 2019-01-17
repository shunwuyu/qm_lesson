// globalContext = {
//   VO: {
//     data: [],
//     i: 3
//   }
// }
var data = [];

for (let  i = 0; i < 3; i++) {
  // data[0]Context = {
  //   Scope: [AO, globalContext] 
  // }
  // data[1]Context = {
  //   Scope: [AO, globalContext] 
  // }
  // data[2]Context = {
  //   Scope: [AO, globalContext] 
  // }
  data[i] =  function() {
      console.log(i);
    }
  
}

data[0]();
data[1]();
data[2]();