"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  if (!setActive) return;

  setActive({ organization: params.organizationId as string });

  useEffect(() => {}, [setActive, params.organizationId]);

  return null;
};
