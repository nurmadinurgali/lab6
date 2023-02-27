function circle_area(radius) {
    let area = 3.14 * radius
    return area
}

console.log(circle_area(5))
console.log(circle_area(26))

function even_or_odd(number) {
    if(number%2==0) {
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(even_or_odd(24))
console.log(even_or_odd(37))

function greatest_number(a, b, c){
    if(a>=b){
        if(a>= c){
            return a
        }
        else{
            return c
        }
    }
    else if(b>=c){
        return b
    }
    else{
        return c
    }
}
console.log(greatest_number(2,5,3))
console.log(greatest_number(1, 7, 10))
console.log(greatest_number(19, 8, 15))