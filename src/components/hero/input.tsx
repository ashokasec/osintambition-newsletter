"use client"

import React, { useEffect } from 'react';

const SubstackWidget = () => {
  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "chakravyu.substack.com",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    //   theme: "purple",
    //   colors: {
    //     primary: "#FFFFFF",
    //     input: "#334155",
    //     email: "#FFFFFF",
    //     text: "#000000",
    //   },
    };

    const script = document.createElement('script');

    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="custom-substack-embed"></div>
  );
};

export default SubstackWidget;