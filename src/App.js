import logo from './logo.svg';
import React,{ useState,useEffect } from 'react';
import './App.css';
import {Chart,Tooltip,Title,ArcElement,Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register( 
  Tooltip,Title,ArcElement,Legend);



 
   
 

 
 

 

function App() {
  const [charData,setCharData]=useState({
    datasets:[],
  });
  const [chartOptions,setChartOptions]=useState({});
 
  useEffect(()=>{
  
    setCharData({
      labels :["consoPV","consoTH","generatedTH"],
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
          data:[consoPV,consoTH,generatedPV]
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
          text : "PV-AutoSuffisance"
        }
  
      }
    })
  },[]);
   
   
   
 
const [consoPV,setconsoPV]=useState('');
const [consoTH,setconsoTH]=useState('');
const [generatedPV,setgeneratedPV]=useState('');
const [generatedTH,setgeneratedTH]=useState('');
//erreur
const [consoPVErr,setconsoPVErr]=useState({});
const [consoTHErr,setconsoTHErr]=useState({});
var sty=document.getElementById('hiden');
 
const onSubmit=(e)=>{
  e.preventDefault();
  const dat=[consoPV,consoPVErr,generatedPV];
   
  //setCharData.datasets[0].data[0]=consoPV;
  //setCharData.datasets[0].data[1]=consoTH;
  //setCharData.datasets[0].data[2]=generatedPV;
  
  //console.log(useEffect.setCharData.datasets[0].data[0]);
  

 
  const isValid=formValidation();
  
  
  
}



//Validation 

        const formValidation = () =>{

  const consoPVErr={};
  const consoTHErr={};
let isValid=true;
if(consoPV.trim().length===0){consoPVErr.isEmpty="veuiller remplir la case de consomation electrique"; isValid=false;}


setconsoPVErr(consoPVErr);
return isValid;


                      }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md py-10 w-full mx-auto font-bold text-2xl">Calculateur d'autonomie énergetique</div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        
        
        <form onSubmit={onSubmit} className="space-y-6" name="form">
          
          <div>

            <label className="text-sm font-bold text-gray-600 block" >Consomation éléctrique annulle</label>
            
            <input type="text" name="consoPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoPV} onChange={(e)=>setconsoPV(e.target.value)} ></input>
            {Object.keys(consoPVErr).map((key)=>{

              return <div style={ {color : "red"} }>  {consoPVErr[key]}  </div>
            })}
            
            <label className="text-sm font-bold text-gray-600 block" >Consomation thérmique annulle</label>
            <input type="text"  name="consoTH"className="w-full p-2 border border-gray-300 rounded mt-1"  value={consoTH} onChange={(e)=>setconsoTH(e.target
              .value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Generation PV</label>
            <input type="text" name="generatedPV" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedPV} onChange={(e)=>setgeneratedPV(e.target.value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Generation TH</label>
            <input type="text" name="generatedTH" className="w-full p-2 border border-gray-300 rounded mt-1"  value={generatedTH} onChange={(e)=>setgeneratedTH(e.target.value)}></input>
            <label className="text-sm font-bold text-gray-600 block" >Stockage PV</label> 
            <input type="text" name="stockagePV" className="w-full p-2 border border-gray-300 rounded mt-1"></input>
            <label className="text-sm font-bold text-gray-600 block" >Stockage TH</label>
            <input type="text" name="stockageTH" className="w-full p-2 border border-gray-300 rounded mt-1"></input>
          </div>
          <button type="submit" id="baz" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>
          
          </form>
        
        </div>
        

<div className='grille' style={ { width : '80%',height:'80%',margin:'30px auto', border:'1px solid #333'}}>
        
            
          
          <div className="display py-20  px-10" id="hiden1" style={ {  width:'35%' ,height:'30%'}}>
          
          <Doughnut options={chartOptions} data={charData}/>
           
          </div>

          </div>

          
      </div>

   
  );
}


export default App;
