
import React ,{useEffect} from "react"
import '../card.css';
import MOCK_DATA from '../MOCK_DATA.json';
export default function Card() {
  return (
     <div className="container">
      <h1>User Profiles</h1>
      <div className="card-list">
        {MOCK_DATA.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.first_name} {item.last_name}</h2>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
