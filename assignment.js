//feetToMile
function feetToMile(mile) {
    var feet = mile / 5280;
    return feet;
}

//woodCalculator
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 2;
    var tableCount = table * 5;
    var bedCount = bed * 7;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

//tinyFriend
function tinyFriend(name) {
    var tiny = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName < tiny) {
            tiny = currentName;
        }
    }
    return tiny;
}