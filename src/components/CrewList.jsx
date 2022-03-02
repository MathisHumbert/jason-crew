import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';

const CrewList = () => {
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    const colRef = collection(db, 'crew');
    onSnapshot(colRef, (snapchot) => {
      let tempCrew = [];
      snapchot.docs.forEach((doc) => {
        tempCrew.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      setCrewList(tempCrew);
    });
  }, []);

  return (
    <section className='crew-container'>
      {crewList.map((item) => {
        return (
          <div key={item.id} className='crew-name'>
            {item.name}
          </div>
        );
      })}
    </section>
  );
};

export default CrewList;
