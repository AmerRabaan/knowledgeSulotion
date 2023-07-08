import React from 'react';
import { Link } from 'react-router-dom';
import { RiShakeHandsFill } from 'react-icons/ri';

function CareerButton() {
  return (
    <Link
      to="/career"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '26px',
        backgroundColor: '#009FFD',
        color: '#FFF',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        border: 'none',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      <RiShakeHandsFill  size={24} />
    </Link>
  );
}

export default CareerButton;
