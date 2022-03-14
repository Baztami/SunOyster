
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
                'rgba(0,191,255)',
                'rgba(255,105,180)',
                'rgba(176,196,222)',
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
                'rgba(0,191,255)',
                'rgba(255,105,180)',
                'rgba(176,196,222)',
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
          labels :["TH Direct","TH décharge","TH autre"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(0,191,255)',
                'rgba(255,105,180)',
                'rgba(176,196,222)',
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
          labels :["TH charge","TH Direct","TH injection"],
          datasets:[
            {
              label :  "fld,sdml,f",
              backgroundColor: [
                'rgba(0,191,255)',
                'rgba(255,105,180)',
                'rgba(176,196,222)',
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
const [thstockage,setthstockage]=useState('');

//erreur
const [consoPVErr,setconsoPVErr]=useState({});
const [consoTHErr,setconsoTHErr]=useState({});
const [generatedPVErr,setgeneratedPVErr]=useState({});
const [generatedTHErr,setgeneratedTHErr]=useState({});

var sty1=document.getElementById('hiden1');
var sty2=document.getElementById('hiden2');
var sty3=document.getElementById('hiden3');
var sty4=document.getElementById('hiden4');
 
const onSubmit=(e)=>{
  e.preventDefault();
//representation du PV-AutoSuffisance

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











  //representation du PV-AutoConsommation

  var pvc_direct=pv_direct;
  var pvc_charge=pvstockage*0.3;
  var pvc_injection=GPV-(pvc_direct+pvc_charge);

  var pr_pvc_direct=(pvc_direct*100)/generatedPV;
  var pr_pvc_charge=(pvc_charge*100)/generatedPV;
  var pr_pvc_injected=(pvc_injection*100)/generatedPV;




  charData1.datasets[0].data[0]=Math.round(pr_pvc_direct);
  charData1.datasets[0].data[1]=Math.round(pr_pvc_charge);
  charData1.datasets[0].data[2]=Math.round(pr_pvc_injected);

  //representation du TH-Consommation

  var GTH=generatedTH;
  var th_direct=GTH*0.7;
  var th_decharge=thstockage*0.25;
  var th_others=consoTH-(th_decharge+th_direct);

  var thc_charge=th_decharge;
  var thc_injection=generatedTH-(thc_charge+th_direct);
  //pourcentage
 var prth_direct=Math.round((th_direct*100)/consoTH);
 var prth_decharge=Math.round((th_decharge*100)/consoTH);
var prth_others=Math.round((th_others*100)/consoTH);




  
  //autosuffisance _th

  var thc_injection=generatedTH-(thc_charge+th_direct);
  console.log(generatedTH);
  console.log(thc_charge);
  console.log(th_direct);
  var pr_th_direct=Math.round((th_direct*100)/generatedTH);
  var pr_thc_charge=Math.round((thc_charge*100)/generatedTH);
  var pr_thc_injection=Math.round((thc_injection*100)/generatedTH);

  charData3.datasets[0].data[0]=pr_thc_charge;
  charData3.datasets[0].data[1]=pr_th_direct;
  charData3.datasets[0].data[2]=pr_thc_injection;


  charData2.datasets[0].data[0]=prth_direct;
  charData2.datasets[0].data[1]=prth_decharge              ;
  charData2.datasets[0].data[2]= prth_others      ;




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
  let isValid2=true;

  let isValid3=true;
  let isValid4=true;
  let isValid5=true;
  const regex=new RegExp("[+-]?([0-9]*[.])?[0-9]+");

   
  if (consoPV.trim().length===0 || !consoPV.match(regex))
   { consoPVErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid=false;  
  setconsoPVErr(consoPVErr);
  
  sty1.style.display="none";
  sty2.style.display="none";
  sty3.style.display="none";
  sty4.style.display="none";


  
  return isValid;}
  if (consoTH.trim().length===0 || !consoTH.match(regex))
   { consoTHErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid1=false;  
  setconsoTHErr(consoTHErr);
  
  sty1.style.display="none";
  sty2.style.display="none";
  sty3.style.display="none";
  sty4.style.display="none";


  
  return isValid1;}
  if (generatedPV.trim().length===0 || !generatedPV.match(regex))
  { generatedPVErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid2=false;  
 setgeneratedPVErr(generatedPVErr);
 
 sty1.style.display="none";
 sty2.style.display="none";
 sty3.style.display="none";
 sty4.style.display="none";


 
 return isValid2;}

 if (generatedTH.trim().length===0 || !generatedTH.match(regex))
  { generatedTHErr.isEmpty="veuiller remplir correctement la case de consommation thermique"; isValid3=false;  
 setgeneratedTHErr(generatedTHErr);
 
 sty1.style.display="none";
 sty2.style.display="none";
 sty3.style.display="none";
 sty4.style.display="none";


 
 return isValid3;}


 


                      }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md py-10 w-full mx-auto font-bold text-2xl">Calculateur d'autonomie énergetique</div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        
        
        <form onSubmit={onSubmit} className="space-y-6" name="form">
          
          <div>

            <label className="text-sm font-bold text-gray-600 block" >Consommation éléctrique annuelle</label>
            
            <input type="text" name="consoPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoPV} onChange={(e)=>setconsoPV(e.target.value)} ></input>
            {Object.keys(consoPVErr).map((key)=>{

              return <div style={ {color : "red",fontFamily: "bold"} }>  {consoPVErr[key]}  </div>
            })}
            
            <label className="text-sm font-bold text-gray-600 block" >Consommation thérmique annuelle</label>
            <input type="text"  name="consoTH"className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoTH} onChange={(e)=>setconsoTH(e.target
              .value)}></input>
               {Object.keys(consoTHErr).map((key)=>{

              return <div style={ {color : "red",fontFamily: "bold"} }>  {consoTHErr[key]}  </div>
            })}
                
            <label className="text-sm font-bold text-gray-600 block" >Generation PV</label>
            <input type="text" name="generatedPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedPV} onChange={(e)=>setgeneratedPV(e.target.value)}></input>
            {Object.keys(generatedPVErr).map((key)=>{

            return <div style={ {color : "red",fontFamily: "bold"} }>  {generatedPVErr[key]}  </div>
              })}
            <label className="text-sm font-bold text-gray-600 block" >Generation TH</label>
            <input type="text" name="generatedTH" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedTH} onChange={(e)=>setgeneratedTH(e.target.value)}></input>
            {Object.keys(generatedTHErr).map((key)=>{

            return <div style={ {color : "red",fontFamily: "bold"} }>  {generatedTHErr[key]}  </div>
            })}
            
            <label className="text-sm font-bold text-gray-600 block" >Stockage PV</label> 
            <input type="text" name="stockagePV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={pvstockage} onChange={(e)=>setpvstockage(e.target.value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Stockage TH</label>
            <input type="text" name="stockageTH" className="w-full p-2 border border-gray-300 rounded mt-1" value={thstockage} onChange={(e)=>setthstockage(e.target.value)}></input>
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
