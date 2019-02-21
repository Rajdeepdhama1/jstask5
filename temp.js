//function for inserting temp values
function insert() {
    a = [5]
    a[0] = 22
    a[1] = 24
    a[2] = 24
    a[3] = 17
    a[4] = 34
    console.log(a)
}
insert()

//function to get max of all temp values
function get_max() {
    var d = 0;
    for (var i = 0; i < a.length; i++) {

        if (d < a[i])
            d = a[i];
    }
    console.log("maximum temp", d)
}
get_max()

//function to get min of all temp values
function get_min() {
    minimum = a[0];
    for (var c = 0; c < a.length; c++) {
        if (a[c] < minimum) {
            minimum = a[c];
        }
    }
    console.log("minimum temp", minimum)
}
get_min()

//function to get average of all temp values
function get_mean() {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    var avg = total / a.length;
    console.log("average of temp", avg)
}
get_mean()

//function to get mode of all temp values
function get_mode() {
    var maxCount = 0;
    var maxvalue = 0;
    var count = 0;
    for (let i = 0; i < a.length; i++) {


        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) { count++; }


            if (count > maxCount) {
                maxCount = count;
                maxValue = a[i];
            }
        }
    } 
    console.log("mode of all temp", maxValue)

}
get_mode()


