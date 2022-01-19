import React from "react";

import { Button } from "neetoui";

import { FEATURE_LIST } from "./constants";

const Features = ({ features }) => {
  return (
    <ul className="list-disc">
      {features.map((feature, index) => (
        <li key={index} className="py-3 border-b border-gray-100 last:border-0">
          {feature}
        </li>
      ))}
    </ul>
  );
};

const Hero = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="m-auto flex max-w-3xl flex-col items-center justify-center p-8">
        <h1 className="mb-3 text-4xl font-bold">Wheel</h1>
        <p className="mx-auto mb-6 text-center text-lg text-gray-800">
          Don&apos;t reinvent the wheel. Use sane defaults to bootstrap your
          react-rails project!
        </p>
        <Features features={FEATURE_LIST} />
        <div className="flex items-center justify-center mt-6">
          <Button size="large" type="primary" to="/login" label="Login" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
