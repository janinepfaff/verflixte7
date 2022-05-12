let summeS1 = 0,
    summeS2 = 0
let wuerfeS1 = 0,
    wuerfeS2 = 0
let spielerAnDerReihe = 1

function wuerfeln(){
    if (spielerAnDerReihe === 1) {

        let wurf1 = Math.floor(Math.random() * 5 + 1)
        let wurf2 = Math.floor(Math.random() * 5 + 1)

        document.getElementById("wuerfeln1").innerHTML = "" + wurf1
        document.getElementById("wuerfeln2").innerHTML = "" + wurf2

        wuerfeS1 = wuerfeS1 + 1
        document.getElementById("anzahlwürfe1").innerHTML = wuerfeS1


        summeS1 += wurf1 + wurf2
        document.getElementById("summespieler1").innerHTML = summeS1
    } if (wurf1 + wurf2 === 7){
        spielerAnDerReihe = 2
        wuerfeS1 ++
        summeS1 = summeS1 - 7

    } else {
        wurf1 = Math.floor(Math.random() * 5 + 1)
        wurf2 = Math.floor(Math.random() * 5 + 1)

        document.getElementById("wuerfeln1").innerHTML = "" + wurf1
        document.getElementById("wuerfeln2").innerHTML = "" + wurf2

        wuerfeS2 = wuerfeS2 + 1
        document.getElementById("anzahlwürfe2").innerHTML = wuerfeS2

        summeS2 += wurf1 + wurf2
        document.getElementById("summespieler2").innerHTML = summeS2
    } if (wurf1 + wurf2 === 7) {
        
    }


}