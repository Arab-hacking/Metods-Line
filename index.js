console.log(12)
const log = console.log.bind()
console.log(Date.parse("2025-11-12T13:07"))


// str.toLowerCase(), str.toUpperCase() - Изменение региста
var str = "араб"
log((str[0].toUpperCase()+str.slice(1)))
log('Interface'.toLowerCase())


var str = 'Widget with id'
log(str.indexOf('Widget'))
log(str.indexOf('widget'))
log(str.indexOf('id'))


log(str.indexOf('id', 2))


// includes() - ищет элемент, если находит true иначе false
var str = "Добро поаловать Араб Добро"
log(str.includes("Араб")) // true
log(str.includes("Мага")) // false
log(str.includes("Добро", 4)) // true (поиск после 4 индекса)


// startsWith() - ищет подстроку в начале строки
// endsWith() - ищет подстроку с конца строки
var str = "Widget"
log(str.startsWith("id")) // false

var str = "id Widget"
log(str.startsWith("id")) // true

var str = "id Widget"
log(str.endsWith("id")) // false

var str = "id Widget id"
log(str.endsWith("id")) // true


// substring, substr и slice = Полечение подстроки

var str = "Arab id widget"
log(str.substring(0, 3)) // Ara

// slice() - возвращает часть строки между start и end (не включая) end
log(str.slice(-6)) // widget
log(str.slice(0,4)) // Arab


// str.substr(start [, length]) (старт, [длина])

log(str.substr(3, 4)) // b id

// concat(str1, str2) - Обьединение строк
let str2 = "Maga"
let str3 = "Чанга"
let str4 = "Монга"
log("Привет ".concat(str2," ", str3))
 
// split(delim) - Разделить строку на подстроки и вернет в виде массивыа
var str = "Араб добро пожаловать"
log(str.split(" ")) // ['Араб', 'добро', 'пожаловать']

// repeat () - повторить строку
log(str.repeat(3)) // Араб добро пожаловатьАраб добро пожаловатьАраб добро пожаловать


// replace(substr, substr2), replaceAll(substr, substr2) - заменить подстроку
var str = "Араб добро пожаловать Араб"
log(str.replace("Араб", "Alex")) // Alex добро пожаловать Араб
log(str.replaceAll("Араб", "Alex")) // Alex добро пожаловать Alex


// padEnd() - добавляет в конец строки элементы
console.log(str.padEnd(40, '*')); // Выведет: '0'


// trim(), trimEnd(), trimStart() - удалить пробелы в строке
var str = "     Араб добро пожаловать Араб       "
log(str.trimStart())
var str = "     Араб добро пожаловать Араб       "
log(str.trimEnd())
var str = "     Араб добро пожаловать Араб       "
log(str.trim())
