"use client";
import React, { useEffect } from 'react';
import { CloudLogger } from "@viovnl/cloudlogger";

const LogButton = () => {
  useEffect(() => {
    CloudLogger.Create('your_project_secret');
  }, []);

  const clickHandler = () => {
    try {
      CloudLogger.Log([
        { Name: "Date", Value: "22-10-1994" },
        { Name: "Country", Value: "Netherlands" },
      ]);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <button onClick={clickHandler}>Click to send log</button>
  );
};

export default LogButton;
