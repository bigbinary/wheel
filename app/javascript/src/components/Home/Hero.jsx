import React from 'react';
import { Button } from "neetoui";

export default function Hero() {

  const bullet =`\u2022`;

  const features = [
    <li>{bullet} Uses Rails, React, Tailwind CSS.</li>,
    <li>{bullet} Uses Devise, Honeybadger, Sidekiq, PostgreSQL, ActiveAdmin</li>,
    <li>{bullet} Heroku ready. Push to Heroku and it will work.</li>,
    <li>{bullet} Uses slim for cleaner syntax over erb and better performance over haml.</li>,
    <li>{bullet} Intercepts all outgoing emails in non production environment using gem mail_interceptor.</li>,
    <li>{bullet} Uses SemaphoreCI for continuous testing.</li>,
    <li>{bullet} Content compression via Rack::Deflater.</li>,
    <li>{bullet} Auto-formats Ruby code with rubocop.</li>,
    <li>{bullet} Auto-formats JavaScript and CSS code with prettier.</li>,
    <li>{bullet} Performs background job processing 'inline' for heroku env. It means heroku can deliver emails.</li>,
    <li>{bullet} Letter opener gem for development.</li>,
  ]

  return (
    <div className="flex flex-col items-center max-w-screen-xl mx-auto pt-8 px-4">
      <div className="text-center">
        <p className="mt-1 text-4xl font-medium">
          Wheel
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-800">
          Don't reinvent the wheel. Use sane defaults to bootstrap your react-rails project!
        </p>
      </div>
      <ul className="ml-12 mt-6 text-gray-600 leading-relaxed tracking-wide">
        {features}
      </ul>
      <div className="mt-6 flex justify-center items-center">
        <Button
          className="ml-2"
          type="primary"
          onClick={() => {window.location.href= "/login"}}
          label="Login"
        />
      </div>
    </div>
  )
}
