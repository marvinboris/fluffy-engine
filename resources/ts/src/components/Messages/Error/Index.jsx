import React from 'react';

const Error = ({ err }) => (err ? <div className="alert alert-danger">{err.message ? err.message : err}</div> : null);

export default Error;