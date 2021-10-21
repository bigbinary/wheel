import React from "react";

import { Button } from "neetoui";

export default function EmptyState({
  image,
  title,
  subtitle,
  primaryAction,
  primaryActionLabel,
}) {
  return (
    <div className="flex flex-row items-start justify-start w-full h-full">
      <div className="w-3/5 m-auto">
        <div className="max-w-sm m-auto mb-8">
          <img src={image} />
        </div>
        <h2 className="mb-4 text-2xl font-medium text-center">{title}</h2>
        <p className="mb-8 text-base font-normal leading-relaxed text-center text-gray-600">
          {subtitle}
        </p>
        <div className="flex flex-row items-center justify-center">
          {primaryAction && (
            <Button
              type="primary"
              icon="ri-add-fill"
              onClick={primaryAction}
              label={primaryActionLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
}
