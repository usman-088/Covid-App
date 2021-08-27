import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PieChart from "./PieChart";
// import BarChart from './Barchart'
import ReactLoading from 'react-loading';


function Covidapp() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
            axios.get('https://disease.sh/v3/covid-19/countries')
      .then((res) => {
          dispatch({ type: "COVIDDATA", covid: (res.data) })
        })
    }, [])
    const [curState, setCurSate] = useState(0)
    const handlChange = (e) => {
        setCurSate(e.target.value)
    }

    const Loading = () => (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ReactLoading type='spin' color='black' height={'20%'} width={'20%'}  />
        </div>
    );


    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1%'}}>
            <h1>COVID-19 TRACKER</h1>
            </div>
            <div className='d-flex justify-content-end' style={{ marginRight: '6%' }} >
         {state.covid[curState] ? <img style={{ width: '6%', height: '40%',marginRight:'10px' }} src={state.covid[curState].countryInfo.flag} /> : 'undefined'}
                <select onChange={handlChange} className='rounded  ' style={{ padding: '1%', backgroundColor: 'grey', color: '#fff', }} >
                    {
                        state.covid.map((v, i) => {
                            return <option key={i} value={i}>{v.country}</option>
                        })
                    }
                </select>

            </div>
            <div className="  " style={{ width: '10', display: "flex", justifyContent: "space-around", marginTop: '2%' }}>
                <div className="shadow p-3 mb-5 bg-white rounded w-25 border border-primary cursor-pointer" >
                    <span>Current Cases</span>
                    {state.covid[curState] ? <h2> {state.covid[curState].todayCases}</h2> : 'undefined'}
                    {state.covid[curState] ? <h2>{state.covid[curState].cases} <span style={{ fontSize: 20, color: "blue" }}>Total</span> </h2> : 'undefined'}
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded w-25 border border-success cursor-pointer">
                <span>Current Recovered</span>
                    {state.covid[curState] ? <h2>{state.covid[curState].todayRecovered}</h2> : 'undefined'}
                    {state.covid[curState] ? <h2>{state.covid[curState].recovered} <span style={{ fontSize: 20, color: "green" }}>Total</span> </h2> : 'undefined'}
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded w-25 border border-danger cursor-pointer">
                <span>Current Deaths</span>
                    {state.covid[curState] ? <h2>{state.covid[curState].todayDeaths}</h2> : 'undefined'}
                    {state.covid[curState] ? <h2>{state.covid[curState].deaths} <span style={{ fontSize: 20, color: "red" }}>Total</span> </h2> : 'undefined'}
                </div >
            </div>

                        {/* <BarChart c={state.covid[curState]} /> */}
                        {/* <PieChart c={state.covid[curState]}/> */}
                        {state.covid[curState] ? <PieChart c={state.covid[curState]}/> : <Loading/>}

        </div>
    )
}

export default Covidapp;