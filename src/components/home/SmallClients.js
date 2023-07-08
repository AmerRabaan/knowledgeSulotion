import React from 'react';

const SmallClients = () => {
  const clients = [
    {
      name: "Client 1",
      logo: require('../../assets/images/frimex.png'),
    },
    {
      name: "Client 2",
      logo: require('../../assets/images/inzagr.png'),
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '15px',
      }}
    >
      {clients.map((client, index) => (
        <div
          key={index}
          style={{ margin: '0 10px' }}
        >
          <img
            src={client.logo}
            alt={client.name}
            style={{
              maxWidth: '120px',
              maxHeight: '50px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SmallClients;
