import logo from './logo.svg';
import React,{ useState,useEffect } from 'react';
import './App.css';
import {Chart,Tooltip,Title,ArcElement,Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(Tooltip,Title,ArcElement,Legend);
function App() {
  const [charData,setCharData]=useState({
    datasets:[],
  });
  const [charData1,setCharData1]=useState({
    datasets:[],
  });
  const [charData2,setCharData2]=useState({
    datasets:[],
  });
  const [charData3,setCharData3]=useState({
    datasets:[],
  });

  const [chartOptions,setChartOptions]=useState({});
 const [chartOptions1,setChartOptions1]=useState({});
 const [chartOptions2,setChartOptions2]=useState({});
 const [chartOptions3,setChartOptions3]=useState({});
  useEffect(()=>{
     
  
      setCharData({
          labels :["PV Direct","PV decharge","PV réseau"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
              data:[,,]
            }
          ]
        });
        setChartOptions({
          responsive : true,
          plugins : {
            legend : {
              position : "bottom"
            },
            title : {
              display : true,
              text : "PV-AutoSuffisance",
              color : "red",
              align : "center",
              font : 	{weight: 'bold', size : "20px"},
              padding : 20
            },
            
      
          }
        })
        setCharData1({
          labels :["PV Direct","PV charge","PV injection"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
              data:[,,]
            }
          ]
        });
    
        setChartOptions1({
          responsive : true,
          plugins : {
            legend : {
              position : "bottom"
            },
            title : {
              display : true,
              text : "PV-Autoconsommation",
              color : "red",
              align : "center",
              font : 	{weight: 'bold', size : "20px"},
              padding : 20
            }
      
          }
        });
        setCharData2({
          labels :["PV Direct","PV charge","PV injection"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
              data:[,,]
            }
          ]
        });
    
        setChartOptions2({
          responsive : true,
          plugins : {
            legend : {
              position : "bottom"
            },
            title : {
              display : true,
              text : "TH-Autosuffisance",
              color : "red",
              align : "center",
              font : 	{weight: 'bold', size : "20px"},
              padding : 20
            }
      
          }
        });
        setCharData3({
          labels :["PV Direct","PV charge","PV injection"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
              data:[,,]
            }
          ]
        });
    
        setChartOptions3({
          responsive : true,
          plugins : {
            legend : {
              position : "bottom"
            },
            title : {
              display : true,
              text : "TH-Autoconsommation",
              color : "red",
              align : "center",
              font : 	{weight: 'bold', size : "20px"},
              padding : 20
            }
          }
        })

      },[]);
  
 

   
   
   
 
const [consoPV,setconsoPV]=useState('');
const [consoTH,setconsoTH]=useState('');

const [generatedPV,setgeneratedPV]=useState('');
const [generatedTH,setgeneratedTH]=useState('');
const [pvstockage,setpvstockage]=useState('');

//erreur
const [consoPVErr,setconsoPVErr]=useState({});
const [consoTHErr,setconsoTHErr]=useState({});

var sty1=document.getElementById('hiden1');
var sty2=document.getElementById('hiden2');
var sty3=document.getElementById('hiden3');
var sty4=document.getElementById('hiden4');
 
const onSubmit=(e)=>{
  e.preventDefault();


var GPV=generatedPV;
var pv_direct=GPV*0.7;
var stockagepv=pvstockage;
var pv_decharge=pvstockage*0.1;
var pv_reseau=consoPV-(pv_direct+pv_decharge);
var pr_pvd=parseInt((pv_direct*100)/consoPV);
var pr_decharge=parseInt((pv_decharge*100)/consoPV);
var pr_reseau=parseInt((pv_reseau*100)/consoPV);




  charData.datasets[0].data[0]=pr_pvd;
  charData.datasets[0].data[1]=pr_decharge;
  charData.datasets[0].data[2]=pr_reseau;











  //2



  charData1.datasets[0].data[0]=consoPV;
  charData1.datasets[0].data[1]=consoTH;
  charData1.datasets[0].data[2]=generatedPV;

  //3
  charData2.datasets[0].data[0]=consoPV;
  charData2.datasets[0].data[1]=consoTH;
  charData2.datasets[0].data[2]=generatedPV;
  //4
  charData3.datasets[0].data[0]=consoPV;
  charData3.datasets[0].data[1]=consoTH;
  charData3.datasets[0].data[2]=generatedPV;

  sty1.style.display="block";
  sty2.style.display="block";
  sty3.style.display="block";
  sty4.style.display="block";


   

  const isValid=formValidation();
  
  
  
}



//Validation 

        const formValidation = () =>{

  const consoPVErr={};
  const consoTHErr={};
  const generatedPVErr={};
  let isValid=true;
  let isValid1=true;
  const regex="[+-]?([0-9]*[.])?[0-9]+";

  //if (consoTH.trim().length===0 ) { consoTHErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid=false;  
  //setconsoTHErr(consoTHErr);
  
  //return isValid;}
  //else(consoPV.trim().length===0 )
  // { consoTHErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid=false;  
  //setconsoTHErr(consoTHErr);
  
  //return isValid;}
 
 


                      }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md py-10 w-full mx-auto font-bold text-2xl">Calculateur d'autonomie énergetique</div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        
        
        <form onSubmit={onSubmit} className="space-y-6" name="form">
          
          <div>

            <label className="text-sm font-bold text-gray-600 block" >Consommation éléctrique annulle</label>
            
            <input type="text" name="consoPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoPV} onChange={(e)=>setconsoPV(e.target.value)} ></input>
            {Object.keys(consoPVErr).map((key)=>{

              return <div style={ {color : "red",fontFamily: "bold"} }>  {consoPVErr[key]}  </div>
            })}
            
            <label className="text-sm font-bold text-gray-600 block" >Consommation thérmique annulle</label>
            <input type="text"  name="consoTH"className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoTH} onChange={(e)=>setconsoTH(e.target
              .value)}></input>
                
            <label className="text-sm font-bold text-gray-600 block" >Generation PV</label>
            <input type="text" name="generatedPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedPV} onChange={(e)=>setgeneratedPV(e.target.value)}></input>
           
            <label className="text-sm font-bold text-gray-600 block" >Generation TH</label>
            <input type="text" name="generatedTH" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedTH} onChange={(e)=>setgeneratedTH(e.target.value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Stockage PV</label> 
            <input type="text" name="stockagePV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={pvstockage} onChange={(e)=>setpvstockage(e.target.value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Stockage TH</label>
            <input type="text" name="stockageTH" className="w-full p-2 border border-gray-300 rounded mt-1"></input>
          </div>
          <button type="submit" id="baz" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>
          
          </form>
          
        </div>
        

<div className='grille' style={ { width : '80%',height:'80%',margin:'30px auto', border:'1px solid #333'}}>
        
            
          
          <div className="display py-20  px-10" id="hiden1" style={ { display : "none" , width:'35%' ,height:'30%'}}>
          
          <Doughnut options={chartOptions} data={charData}/>
           
          </div>



          <div className="display py-20  px-10" id="hiden2" style={ {display : "none" ,  width:'35%' ,height:'30%'}}>
          
          <Doughnut options={chartOptions1} data={charData1}/>
           
          </div>
          <div className="display py-20  px-10" id="hiden3" style={ { display : "none" , width:'35%' ,height:'30%'}}>
          
          <Doughnut options={chartOptions2} data={charData2}/>
           
          </div>
          <div className="display py-20  px-10" id="hiden4" style={ {display : "none" ,  width:'35%' ,height:'30%'}}>
          
          <Doughnut options={chartOptions3} data={charData3}/>
           
          </div>
          </div>

          
      </div>

   
  );
}


export default App;
