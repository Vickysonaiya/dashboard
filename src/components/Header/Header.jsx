import React from 'react';

const Header = ({ sidebarVisible, setSidebarVisible }) => {
  return (
    <header className="border-bottom d-flex justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
        <button
          className="btn d-md-none me-2"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <i className="bi bi-list"></i>
        </button>
        <i className="bi bi-grid me-2"></i>
        <h1 className="h4 mb-0">Dashboard</h1>
      </div>

      <div className="col-md-5 ms-11">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="position-relative me-3 badges">
          <i className="bi bi-bell fs-5"></i>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px'
            }}
          >3</span>
        </div>
        <div className='badges'><span><i className="bi bi-gear fs-5 me-3"></i></span></div>
        <div className='badges'><span><i className="bi bi-question-circle fs-5 me-3"></i></span></div>

        <div className="d-flex align-items-center">
          <div className='badges'
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1e3a38',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '8px',
              fontWeight: 'bold'
            }}
          >JD</div>
          <div>
            <div className="fw-medium badges">John Doe</div>
            <div className="small text-muted badges">Campus Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
