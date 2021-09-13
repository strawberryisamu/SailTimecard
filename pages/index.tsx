import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { timeSlice } from '../store/slice/userSlice'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../store/store'



const Home = () => {
  const [name, setName] = useState<string>();
  const [date, getDate] = useState<string>("");
  const [ontime, setOntime] = useState<number>(0);
  const [offtime, setOfftime] = useState<number>(0);
  const [worktime, timecard] = useState<number>(0);
  const d = new Date();
 
  const nowon = Date.now();
  const nowoff = Date.now();
  const onWork = () => {
    const dispatch = useDispatch();
    const action = timeSlice.actions.onwork({
      name: name,
      date: date,
      onwork: ontime,
    });
    dispatch(action);
  };
  const offWork = () => {
    const dispatch = useDispatch();
    const action = timeSlice.actions.onwork({
      name: name,
      date: date,
      offwork: offtime,
    });
    dispatch(action);
  };
  const setworktime = () => {
    const dispatch = useDispatch();
    const action = timeSlice.actions.onwork({
      name: name,
      date: date,
      worktime: worktime,
    });
    dispatch(action);
  };

  
  return (
    <div className={styles.container} >
      <text>日付は</text>
      <button onClick={() => getDate(date + d.toDateString())}>＝＝＝{date}＝＝＝</button>
      <text>です。</text>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className = {styles.buttons} >
        <button onClick={() => setOntime(nowon + ontime)}>出勤</button>
        <text>{ontime}</text>
      </div>
      <div>
        <button onClick={() => setOfftime(nowoff + offtime)}>退勤</button>
        <text>{offtime}</text>
      </div>
      <div>
        <button onClick={() => timecard((worktime + offtime - ontime)/3600000)}> 算出 </button>
      </div>
      <div>出勤時間: {worktime} h</div>
      {/* <button onClick={onWork}>出勤記録</button>
      <button onClick={onWork}>退勤記録</button>
      <button onClick={onWork}>勤務時間記録</button> */}
    </div>
  )
}

export default Home