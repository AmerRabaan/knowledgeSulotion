import React from 'react';
import { Helmet } from 'react-helmet';

const BookingPage = () => {
  return (
    <div>
      <h2 style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className='text-center text-4xl font-bold pt-5'>Book a Session</h2>
      <Helmet>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Helmet>
      
      
      <div class="calendly-inline-widget" data-url="https://calendly.com/info-nee/quick-discussion" style={{ minWidth: '320px', height: '700px' }}></div>
    </div>
  );
};



export default BookingPage;
