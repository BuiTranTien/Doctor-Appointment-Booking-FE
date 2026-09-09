import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfor = async () => {
    const docInfor = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfor);
    console.log(docInfor);
  }

  useEffect(() => {
    fetchDocInfor();
  }, [docId, doctors]);

  return docInfo && (
    <div>
      {/* --------- Doctor Details ---------- */}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointment
