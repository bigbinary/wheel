import React from "react";

import { Button } from "neetoui";

function Hero() {
  const features = [
    "Uses Rails, React, Tailwind CSS and Webpacker.",
    "Uses Devise, Honeybadger, Sidekiq, PostgreSQL, ActiveAdmin.",
    "Heroku ready. Push to Heroku and it will work.",
    "Uses slim for cleaner syntax over erb and better performance over haml.",
    "Intercepts all outgoing emails in non production environment using gem mail_interceptor.",
    "Uses SemaphoreCI for continuous testing.",
    "Content compression via Rack::Deflater.",
    "Auto-formats Ruby code with rubocop.",
    "Auto-formats JavaScript and CSS code with prettier.",
    "Performs background job processing 'inline' for heroku env. It means heroku can deliver emails.",
    "Letter opener gem for development.",
  ];

  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="m-auto flex max-w-3xl flex-col items-center justify-center p-8">
        <h1 className="mb-3 text-4xl font-bold">Wheel</h1>
        <p className="mx-auto mb-6 text-center text-lg text-gray-800">
          Don&apos;t reinvent the wheel. Use sane defaults to bootstrap your
          react-rails project!
        </p>
        <Features features={features} />
        <div className="mt-6 flex items-center justify-center">
          <Button size="large" type="primary" to="/login" label="Login" />
        </div>
      </div>
    </div>
  );
}

const Features = ({ features }) => {
  return (
    <ul className="list-disc">
      {features.map((feature, index) => (
        <li key={index} className="border-b border-gray-100 py-3 last:border-0">
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default Hero;
