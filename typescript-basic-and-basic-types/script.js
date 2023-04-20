function userInfo(name, currentYear, birthYear) {
    return "".concat(name, " is ").concat(currentYear - birthYear, " years old.");
}
console.log(userInfo("Aung Thu Zaw", 2023, 2002));
function gender(is_male) {
    return is_male ? "He is a male." : "She is a female.";
}
console.log(gender(true));
var person = {
    name: "Aung Thu Zaw",
    age: 21,
    gender: "male",
    hobbies: [
        "listening to music",
        "watching movies",
        "learning new something about technology.",
    ],
    role: [2, "writer"],
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var type;
(function (type) {
    type["GOLDEN"] = "GOLDEN";
    type["HUSKY"] = "HUSKY";
})(type || (type = {}));
var pet = {
    name: "chilly",
    age: 1,
    gender: "male",
    type: type.GOLDEN,
};
console.log(pet.type);
function isAdmin(answer) {
    return answer;
}
console.log(isAdmin("true"));
// Different Between undefined and void
function greetingOne(name) {
    console.log("Hi, " + name);
    // return; void can use this syntax.
}
function greetingTwo(name) {
    console.log("Hi, " + name);
    return;
}
greetingOne("Mr.Aung Thu Zaw");
greetingTwo("Mr.Aung Thu Zaw");
function add(num1, num2) {
    return num1 + num2;
}
var combineValues;
combineValues = add;
console.log(combineValues(1, 2));
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndHandle(1, 2, function (result) {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Server Error", 500);
