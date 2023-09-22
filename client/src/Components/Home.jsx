import React from 'react'
import { useState } from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({}) {
  const [createDashboard, setCreateDashboard] = useState(false)
  return(
    <>
      <div className="HomePage">
        <Container>
          <Row className='row' xs={12} md={8}>
           <h1 className='Headliner'>Welcome to Your Data Dashboard: Unlocking Insights for Your Business!</h1>
            <h2 className="Guts">
            Hey there, business trailblazer! We're thrilled to introduce you to our Data Dashboard services, designed to supercharge your decision-making process. No need for a data science degree or decoding cryptic spreadsheets—our approach is all about simplicity and results. Let's dive in and discover how your business can ride the data wave to success.
            </h2>
          </Row>
          <Row className='row'>
            <h2 className='Headliners'>Why Data Dashboard Services Matter:</h2>
              <h3 className="Bullets">Business Reviews: 
              </h3>
                  <p className="Guts">Say goodbye to guesswork! Our Data Dashboard gives you a bird's-eye view of your business's performance. Easily track metrics like revenue, customer satisfaction, and operational efficiency to gauge how you're doing.
                 </p>
              <h3 className="Bullets">Opportunity Radar:
              </h3>
                  <p  className="Guts">Spotting opportunities is our specialty. Our dashboard doesn't just show you what's happening; it pinpoints areas ripe for growth and improvement. You'll be amazed at the untapped potential right under your nose.
                  </p>

              <h3 className="Bullets">Market and Product Gaps
              </h3>
                  <p  className="Guts">Ever wondered why some products or services aren't flying off the shelves? Our dashboard can help you identify gaps in your offerings, making it easier to fine-tune your products or services to match customer demand.
                  </p>
            <h2 className='Headliners'>How Our Data-Driven Recommendations Work:</h2>
              <h3 className="Bullets">implified Insights: 
              </h3>
                <p className="Guts">We're all about keeping it simple. No complex algorithms or jargon-filled reports. Our Data Dashboard provides straightforward insights, making it easy for you to understand what's working and what needs attention.
                </p>
              <h3 className="Bullets">Customized Guidance:
              </h3>
                <p className="Guts">Not all businesses are the same, and we get that. Our recommendations are tailored to your specific needs and goals. No one-size-fits-all solutions here!
                </p>
              <h3 className="Bullets">Real-Time Updates:
              </h3>
                <p className="Guts"> Time is money, and we won't waste yours. Our dashboard updates in real time, ensuring you always have the latest information at your fingertips. No more waiting for monthly reports to see how you're doing.
                </p>
          </Row>
          <Col className='row'>
            <h2 className='Headliner'>Benefits You Can Expect:</h2>
            <h2 className='Headliners'></h2>Informed Decision-Making: 
              <h3 className='Bullets'>When you make data-driven decisions, you're more likely to see a positive impact on your bottom line. Discover where to invest and where to cut back for maximum returns.
              </h3>
                <p className="Guts">Goodbye, gut feeling decisions! With our Data Dashboard, you'll have solid data backing every choice you make. It's like having a crystal ball for your business.
                </p>
                <h3 className='Bullets'>Competitive Edge:
              </h3>
                <p className="Guts">Stay ahead of the curve by staying in the know. Our dashboard helps you identify trends, customer preferences, and emerging competitors so you can adapt and thrive.
                </p>
              <h3 className='Bullets'>Efficiency Boost:
              </h3>
                <p className="Guts">Streamline your operations and save time and resources. Identify bottlenecks, automate routine tasks, and ensure your team is focused on what matters most.
                </p>
              <h3 className='Bullets'>Improved ROI:
              </h3>
                <p className="Guts">When you make data-driven decisions, you're more likely to see a positive impact on your bottom line. Discover where to invest and where to cut back for maximum returns.
                </p>
          </Col>
          <Col>
            <h2 className='Headliner'>How to Use Our Data Dashboard:</h2>
              <h3 className='Bullets'>Log In:
              </h3>
                <p className="Guts">Simply log in to your personalized dashboard using your unique credentials. Security is a top priority, so rest assured your data is safe with us.
                </p>
              <h3 className='Bullets'>Choose Your Metrics: 
              </h3>
                <p className="Guts">Select the key performance indicators (KPIs) that matter most to your business. Whether it's sales, customer retention, or website traffic, you're in control.
                </p>
              <h3 className='Bullets'> Visualize Your Data:
              </h3>
                <p className="Guts">Our intuitive charts and graphs make it easy to grasp complex data at a glance. No more staring at endless rows of numbers!
                </p>
                <h3 className='Bullets'> Get Recommendations: 
              </h3>
                <p className="Guts">Our smart algorithms will provide you with actionable recommendations based on your data. These suggestions are your roadmap to business success.
                </p>
              <h3 className='Bullets'>Track Progress:
              </h3>
                <p className="Guts">Monitor the impact of your decisions by checking back regularly. See how your business evolves in response to the changes you implement.
                </p>
                <h3 className='Bullets'>Adapt and Thrive:
              </h3>
                <p className="Guts">With the insights gained from our Data Dashboard, you'll be well-equipped to adapt to market shifts and continuously improve your business.
                </p>
          </Col>
          <Col>
            <h2 className='Headliners'>Start Your Data-Driven Journey Today:</h2>
                <p className="Guts">
                  Ready to take the guesswork out of business decisions? Join the ranks of savvy entrepreneurs who are harnessing the power of data to drive success. Our Data Dashboard is your secret weapon for business growth, so don't miss out. Sign up today and watch your business thrive like never before!
                </p>
                <p className="Guts">
                  Remember, simplicity, customization, and results are at the core of our Data Dashboard services. Say hello to informed decision-making and bid farewell to uncertainty. Your business deserves nothing less than the best, and that's exactly what we deliver.
                </p>

                <p className="Guts">
                  Still have questions or want to see our Data Dashboard in action? Contact our friendly team today for a personalized demo and discover how we can transform your business. Let's embark on this data-driven journey together!
                </p>
          </Col>
        </Container>
      </div>
    </>  
  );
}

export default Home;            






// {/* <button className="btn btn-primary"onClick={handleClick}>View or Create Your Preferred Dashboards Here</button>
      
//             <button onClick={handleClick}>{createDashboard?"View or Create Your Preferred Dashboard":"Login"}</button> */}
      

//         {/* ============================ ADD MINI SAMPLE DASHBOARDS ON HOME PAGE ========================= */}