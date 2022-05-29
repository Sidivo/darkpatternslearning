import React from 'react'
import '../css-components/Account.css';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import Frame from './Frame'
import { useState } from 'react';
import Barchart from './Barchart';

function AccountForm() {

  const [info, setInfo] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  const getHistory = (e) => {

    const btn = document.getElementById('btn');
    btn.style.display = 'none';

    e.preventDefault()
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(element => {
          var data = element.data();
          setInfo(arr => [...arr, data]);
        })

      });
  };


  let testID = 0;

  let hidden = {
    show: false,
  }

  const state = {
    labels: [],
    datasets: [
      {
        label: 'Rezultatas',
        backgroundColor: 'rgba(238, 238, 238, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
  }


  return (
    <div className='accountBackground'>
      <div className='accountContainer'>
        <form>
          <h5>Atliktų testų istorija</h5>
          <div className='historyButton'>
            <button id='btn' onClick={getHistory}>Rodyti istoriją</button>
          </div>
          {
            info.map((data) => (
              state.labels[testID] = testID + 1 + ".",
              state.datasets[0].data[testID] = parseInt((data.Rezultatas).charAt(0)),
              testID++,
              hidden.show = true,
              <Frame
                TestoPavadinimas={data.TestoPavadinimas}
                testID={testID}
                Data={data.Data}
                Rezultatas={data.Rezultatas} />
            ))
          }
          {hidden.show && <Barchart state={state} />}
        </form>
      </div>
    </div>
  )

}

export default AccountForm