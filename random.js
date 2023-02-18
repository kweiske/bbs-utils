// Print one of text/menu/random*.*, picked at random
// e.g. random1.asc, random2.asc, random3.asc, etc.
var random_list = directory(system.text_dir + "menu/random*.*");

// if(random_list.length)
// bbs.menu(file_getname(random_list[random(random_list.length)]).slice(0,-4));
// printf("g"+(random_list[random(random_list.length)]).slice(0,-4));

//if(random_list.length > 0) {
//   var f = file_getname(random_list[random(random_list.length)]).slice(0,-4);
//    if(f.length > 0)
//        bbs.menu(f);
// }      

var f = new File('/sbbs/text/taglines');  
f.open('r');  
var lines = f.readAll();  
f.close();  
var line = lines[Math.floor(Math.random() * lines.length)];  
printf("\n");
printf (line);

