import React from 'react';
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

  const featureLists = features.map((feature, index) => (
    <li key={index}>{feature}</li>
  ));

  return (
    <div className="flex flex-col items-center max-w-screen-xl mt-10 mx-auto pt-8 px-4">
      <div className="text-center">
        <p className="mt-1 text-4xl font-medium">
          Wheel
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-800">
          Don't reinvent the wheel. Use sane defaults to bootstrap your react-rails project!
        </p>
      </div>
      <ul className="list-disc ml-12 mt-6 text-gray-600 leading-relaxed tracking-wide">
        {featureLists}
      </ul>
      <div className="mt-6 flex justify-center items-center">
        <Button
          className="ml-2"
          type="primary"
          onClick={() => { window.location.href = "/login" }}
          label="Login"
        />
      </div>
    </div>
  )
}
