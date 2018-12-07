/*
- Author: Wanderson Sousa
- Language: Javascript
- Github: https://github.com/Wanderson3004
*/

for (i = 1;i <= 100; i++){
    if (i % 3 === 0) 
        console.log('Cats')
    else if (i % 5 === 0)
        console.log('Bats');
    else if (i % 3 && i % 5)
        console.log('Spiders')
    else 
        console.log(i);             
}


