import React from "react";
import { Button } from "neetoui";

export default function Hero() {
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
    <div className="flex flex-col items-center justify-center h-screen max-w-3xl p-8 m-auto">
      <h1 className="mb-3 text-4xl font-bold">Wheel</h1>
      <p className="mx-auto mb-6 text-lg text-center text-gray-800">
        Don&apos;t reinvent the wheel. Use sane defaults to bootstrap your
        react-rails project!
      </p>
      <Features features={features} />
      <div className="flex items-center justify-center mt-6">
        <Button size="large" type="primary" to="/login" label="Login" />
      </div>
    </div>
  );
}

const Features = ({ features }) => {
  return (
    <ul className="list-disc">
      {features.map((feature, index) => (
        <li key={index} className="py-4 border-b border-gray-100 last:border-0">
          {feature}
        </li>
      ))}
    </ul>
  );
};
