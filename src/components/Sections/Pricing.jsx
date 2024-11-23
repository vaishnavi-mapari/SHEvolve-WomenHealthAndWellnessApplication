import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Explore our pricing plans that offer flexible options to meet your needs.
              <br />
              Choose the right plan for you and enjoy our services.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$29.99/mo"
                title="Starter"
                text="A great option to get started with essential features."
                offers={[
                  { name: "Basic Support", checked: true },
                  { name: "Access to Resources", checked: true },
                  { name: "Advanced Features", checked: false },
                  { name: "Custom Integrations", checked: false },
                  { name: "Personalized Support", checked: false },
                ]}
                action={() => alert("Starter plan selected!")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$49.99/mo"
                title="Basic"
                text="Perfect for small teams looking for more features."
                offers={[
                  { name: "Priority Support", checked: true },
                  { name: "Access to Resources", checked: true },
                  { name: "Advanced Features", checked: true },
                  { name: "Custom Integrations", checked: true },
                  { name: "Personalized Support", checked: false },
                ]}
                action={() => alert("Basic plan selected!")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59.99/mo"
                title="Golden"
                text="Comprehensive features for large organizations."
                offers={[
                  { name: "24/7 Support", checked: true },
                  { name: "Access to All Resources", checked: true },
                  { name: "Advanced Features", checked: true },
                  { name: "Custom Integrations", checked: true },
                  { name: "Personalized Support", checked: true },
                ]}
                action={() => alert("Golden plan selected!")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center; // Center-aligning header text for better visual appearance
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const TablesWrapper = styled.div`
  display: flex; // Ensuring that the tables display in a flex layout
  justify-content: space-between; // Adding space between table boxes
  @media (max-width: 860px) {
    flex-direction: column; // Stacking tables on smaller screens
    align-items: center; // Centering the tables on smaller screens
  }
`;

const TableBox = styled.div`
  width: 31%; // Defining a percentage width for responsiveness
  @media (max-width: 860px) {
    width: 100%; // Full width on smaller screens
    max-width: 370px; // Limiting max width for better aesthetics
    margin: 0 auto; // Centering the table box
  }
`;
