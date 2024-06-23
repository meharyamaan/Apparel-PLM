import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/keyprocdetails.css'
import Card from './Additionals/CardDetails';
import MainCard from './Additionals/MainCard'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  });
  


export default function KeyProcDetail() {


// const { projectId, cardName } = useParams();
const cardName = "CUTTING";
const projectId = "1000";
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/keyprocess/${projectId}/${cardName}`); 
        console.log(response.data);
        setCardDetails(response.data);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchCardDetails();
  }, [projectId, cardName]);




  return (
    <div style={{backgroundColor: 'black'}}>
      <MainCard title={cardName} />
      <div className="container"> 
        <section className="page-contain">
          <div className="row">
            {cardDetails && cardDetails.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
