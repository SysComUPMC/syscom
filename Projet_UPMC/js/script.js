var temp = [];
var humi = [];
var comT = 0, comH = 0;
window.onload = function() {
    humidity();
    temperature();
    afficher();
    setInterval(afficher,1000);
};

function updateT(){
    rand = Math.floor(Math.random() * (50 - 10) + 10);
    if(temp.length > 10){
        temp.shift();
        comT++;
    }
    temp.push(rand); 
    console.log(rand);
    console.log(temp);
    temperature();
    

}

function updateH(){
    rand = Math.floor(Math.random() * (50 - 10) + 10);
    if(humi.length > 10){
        humi.shift();
        comH++;
    }
    humi.push(rand);
    console.log(rand);
    console.log(humi);
    humidity();
    
}

function resetH(){
    humi = [];
    comH = 0;
    console.log(humi);
    humidity();

    
}
function resetT(){
    temp = [];
    comT = 0;
    console.log(temp);
    temperature();
    
}

function afficher() {
    var offsetUTC = +12,
    lD = new Date();
    document.getElementById("date").innerHTML = lD.toLocaleString().substr(0,10) + " - " + lD.toLocaleString().substr(12);
}
   

function login(){
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    if((name == "walid" && pass == "upmc10") || (name == "kaci" && pass == "upmc15") || (name == "omar" && pass == "upmc"))
    {
        document.getElementById("iderrone").innerHTML = "";
        main();
    }else{
        document.getElementById("iderrone").innerHTML = "Identifiants erron&eacute;s";
        document.getElementById("name").value = "";
        document.getElementById("pass").value = "";
        name = "";
        pass = "";
    }
 
}



function main(){
    window.location.href="./html/main.html";
}

function scrtop(){
    window.scrollTo(0, 0);   
}

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

function humidity(){
    Highcharts.chart('canvasH', {
        
            title: {
                text: 'Humidité à temps réel'
            },
        
            yAxis: {
                title: {
                    text: 'Humidité'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: comH,
                    animation: false
                }
            },
        
            series: [{
                name: 'Humidité',
                data: humi
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
}


function temperature(){
    Highcharts.chart('canvasT', {
        
            title: {
                text: 'Temperature à temps réel'
            },
        
            yAxis: {
                title: {
                    text: 'Temperature'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: comT,
                    animation: false
                }
            },
        
            series: [{
                name: 'Temperature',
                data: temp
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
}

