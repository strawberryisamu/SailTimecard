import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import moment from 'moment'

const Home = () => {
  var now = moment().toString();
  
  return (
    <div className={styles.container} >
      <text>現在時刻は　＝＝＝{now}＝＝＝　です。</text>
      <div>
        <input type="number" />
      </div>
      <div className = {styles.buttons} >
        <button>出勤</button>
        <button>退勤</button>
        <button>休憩</button>
        <button>戻る</button>
      </div>
    </div>
  )
}

export default Home