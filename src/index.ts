
import { questao1 } from "./01-condicional/questao1.js"
import { questao2 } from "./01-condicional/questao2.js"
import { questao3 } from "./01-condicional/questao3.js"
import { questao4 } from "./01-condicional/questao4.js"


import { questao5 } from "./02-repeticao/questao5.js"
import { questao6 } from "./02-repeticao/questao6.js"
import { questao7 } from "./02-repeticao/questao7.js"
import { questao8 } from "./02-repeticao/questao8.js"
import { questao9 } from "./02-repeticao/questao9.js"


import { questao10 } from "./03-funcoes/questao10.js"
import { questao11 } from "./03-funcoes/questao11.js"
import { questao12 } from "./03-funcoes/questao12.js"
import { questao13 } from "./03-funcoes/questao13.js"
import { questao14 } from "./03-funcoes/questao14.js"
import { questao15 } from "./03-funcoes/questao15.js"
import { questao16 } from "./03-funcoes/questao16.js"
import { questao17 } from "./03-funcoes/questao17.js"
import { questao18 } from "./03-funcoes/questao18.js"
import { questao19 } from "./03-funcoes/questao19.js"


import { questao20 } from "./04-arrays/questao20.js"
import { questao21 } from "./04-arrays/questao21.js"
import { questao22 } from "./04-arrays/questao22.js"
import { questao23 } from "./04-arrays/questao23.js"
import { questao24 } from "./04-arrays/questao24.js"
import { questao25 } from "./04-arrays/questao25.js"
import { questao26 } from "./04-arrays/questao26.js"
import { questao27 } from "./04-arrays/questao27.js"
import { questao28 } from "./04-arrays/questao28.js"


document.getElementById("cond1")?.addEventListener("click", questao1)
document.getElementById("cond2")?.addEventListener("click", questao2)
document.getElementById("cond3")?.addEventListener("click", questao3)
document.getElementById("cond4")?.addEventListener("click", questao4)


document.getElementById("rep5")?.addEventListener("click", questao5)
document.getElementById("rep6")?.addEventListener("click", questao6)
document.getElementById("rep7")?.addEventListener("click", questao7)
document.getElementById("rep8")?.addEventListener("click", questao8)
document.getElementById("rep9")?.addEventListener("click", questao9)

document.getElementById("func10")?.addEventListener("click", () => questao10(10))
document.getElementById("func11")?.addEventListener("click", questao11)
document.getElementById("func12")?.addEventListener("click", () => questao12(5))
document.getElementById("func13")?.addEventListener("click", () => questao13(2))
document.getElementById("func14")?.addEventListener("click", () => questao14(1, 30))
document.getElementById("func15")?.addEventListener("click", questao15)
document.getElementById("func16")?.addEventListener("click", questao16)
document.getElementById("func17")?.addEventListener("click", questao17)
document.getElementById("func18")?.addEventListener("click", questao18)
document.getElementById("func19")?.addEventListener("click", questao19)

document.getElementById("arr20")?.addEventListener("click", questao20)
document.getElementById("arr21")?.addEventListener("click", questao21)
document.getElementById("arr22")?.addEventListener("click", questao22)
document.getElementById("arr23")?.addEventListener("click", () => questao23([7, 8, 9]))
document.getElementById("arr25")?.addEventListener("click", questao25)
document.getElementById("arr26")?.addEventListener("click", questao26)
document.getElementById("arr27")?.addEventListener("click", questao27)
document.getElementById("arr28")?.addEventListener("click", () => questao28(1, 10, 18))