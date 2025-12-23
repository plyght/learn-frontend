"use client";

import dynamic from "next/dynamic";

interface DynamicComponentProps {
  dayId: string;
}

export function DynamicComponent({ dayId }: DynamicComponentProps) {
  const Component = dynamic(
    () => import(`@/app/${dayId}/Component`).then((mod) => mod.default),
    {
      loading: () => (
        <div className="p-8 text-gray-500">Loading component...</div>
      ),
    },
  );

  return <Component />;
}


