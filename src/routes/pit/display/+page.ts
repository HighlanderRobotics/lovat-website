import type { PageData } from "./$types";

export type CardMatch = PageData["analysis"]["matches"]["next"] & { title?: string };
