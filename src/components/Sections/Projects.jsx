import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Health Services for You</h1>
            <p className="font13">
              Period days are never easy. Here’s our simple healthcare to make them easier.
              <br />
              Share your location and get to the nearest doctor's clinic.
            </p>
          </HeaderInfo>
          <ProjectGrid className="row textCenter">
            <ProjectColumn>
              <Link to={"/appointment"}>
                <ProjectBox
                  img="https://previews.123rf.com/images/artinspiring/artinspiring2003/artinspiring200300513/142303595-young-woman-have-in-vitro-fertilization-treatment-in-fertility-clinic-gynecologist-doctor-take-a-wom.jpg"
                  title="Get Gynaecologist's Care"
                  text="Take an appointment from the nearest gynaecologist."
                />
              </Link>
            </ProjectColumn>
            <ProjectColumn>
              <Link to={"/"}>
                <ProjectBox
                  img="https://img.freepik.com/free-vector/feminine-hygiene-products_23-2148658416.jpg?w=740&t=st=1673089781~exp=1673090381~hmac=43f454c7e68293446a5009ad018440a2ca8d45114ccc712873fd84b75570af43"
                  title="Get PILLs and PADs"
                  text="Get to the nearest medical store for pills or pads."
                />
              </Link>
            </ProjectColumn>
            <ProjectColumn>
              <Link to={"/track"}>
                <ProjectBox
                  img="https://img.freepik.com/free-vector/creative-menstrual-calendar-concept-illustrated_23-2148662282.jpg?w=740&t=st=1673051551~exp=1673052151~hmac=cc8dc3c63a9c7145f0fb7e473fb5ccd6ecd8692f5a841a58c8dedd9a689d9db7"
                  title="Period Tracker"
                  text="Get complete details of your period cycles, mood swings, diet chart, and sleep cycle."
                />
              </Link>
            </ProjectColumn>
            <ProjectColumn>
              <Link to={"/signup"}>
                <ProjectBox
                  img="https://img.freepik.com/free-vector/messaging-fun-concept-illustration_114360-1563.jpg?t=st=1673089953~exp=1673090553~hmac=bc161ad549e1ec1594195cc081b58200698d41165d0ab281e5b3a4c2e0262395"
                  title="Mood Tracker"
                  text="Track your mood and period cycles for better insights."
                />
              </Link>
            </ProjectColumn>
          </ProjectGrid>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0; // Added padding for better spacing
`;

const HeaderInfo = styled.div`
  text-align: center; // Centered header text for improved presentation
  margin-bottom: 30px; // Added margin for spacing
  @media (max-width: 860px) {
    margin-bottom: 20px;
  }
`;

const ProjectGrid = styled.div`
  display: flex; // Use flexbox for layout
  flex-wrap: wrap; // Allow items to wrap to the next line
  justify-content: center; // Center the grid items
`;

const ProjectColumn = styled.div`
  flex: 0 0 25%; // Set a base width of 25% for larger screens
  max-width: 25%; // Ensure max width does not exceed 25%
  padding: 15px; // Add padding around the project box

  @media (max-width: 860px) {
    flex: 0 0 50%; // 50% width on medium screens
    max-width: 50%;
  }

  @media (max-width: 480px) {
    flex: 0 0 100%; // Full width on smaller screens
    max-width: 100%;
  }
`;
