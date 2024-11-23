// MenstrualDiseases.js
import React from 'react';

const diseases = [
  {
    name: "Dysmenorrhea",
    description: "Severe menstrual cramps that can interfere with daily activities.",
  },
  {
    name: "Premenstrual Syndrome (PMS)",
    description: "A group of symptoms occurring in the weeks before menstruation, including mood swings and fatigue.",
  },
  {
    name: "Endometriosis",
    description: "A condition where tissue similar to the lining inside the uterus grows outside it, causing pain and discomfort.",
  },
  {
    name: "Polycystic Ovary Syndrome (PCOS)",
    description: "A hormonal disorder causing enlarged ovaries with small cysts on the outer edges.",
  },
  {
    name: "Menorrhagia",
    description: "Heavy menstrual bleeding that can be prolonged and cause anemia.",
  },
];

const MenstrualDiseases = () => {
  return (
    <div className="container-fluid">
      <h2 className="my-4">Menstrual Diseases</h2>
      <div className="row">
        {diseases.map((disease, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card bg-light shadow-light-lg border-light rounded-2">
              <div className="card-body">
                <h5 className="card-title">{disease.name}</h5>
                <p className="card-text">{disease.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenstrualDiseases;
