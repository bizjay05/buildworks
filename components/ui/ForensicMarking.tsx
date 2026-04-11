'use client';

import React from 'react';

const ForensicMarking: React.FC = () => {
  const fingerprint = `BW-0301-TRACE-${Buffer.from('buildingworks-auth').toString('base64')}`;
  const commentHtml = `\n<!-- \n  [PROPRIETARY & CONFIDENTIAL]\n  Identity Trace ID: ${fingerprint}\n  Authorized for: BuildingWorks Official Service\n-->\n`;

  return (
    <div aria-hidden="true" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: commentHtml }} />
  );
};

export default ForensicMarking;
