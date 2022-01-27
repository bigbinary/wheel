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
    <div className="flex h-full w-full flex-row items-start justify-start">
      <div className="m-auto w-3/5">
        <div className="m-auto mb-8 max-w-sm">
          <img src={image} />
        </div>
        <h2 className="mb-4 text-center text-2xl font-medium">{title}</h2>
        <p className="mb-8 text-center text-base font-normal leading-relaxed text-gray-600">
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
