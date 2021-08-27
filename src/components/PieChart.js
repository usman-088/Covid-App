import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
// import { useEffect, useState } from "react";



function PieChart({c}) {
    // console.log(c.todayCases);
    // c?<h1>.....Loading</h1>  
    
    const  alldata = [c.cases ,c.deaths ,c.recovered ]
    
const state = {
    labels: [ 'Confirm Cases', 'Confirm Death', 'Confirm Recovered'],
    datasets: [
      {
        label: 'Covid',
        backgroundColor: [
          'blue',
          'red',
          'green',
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        ],
        data: [...alldata]  
    }
]
}



    return (
      <div style={{width:'70%',height:'5%',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'15%'}}>
        <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
            //   text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
                display:true,
                position:'right'
              },
          }}
        />
        </div>
        <div>

        {/* <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
        </div>
      </div>
    );
  }

  export default PieChart;