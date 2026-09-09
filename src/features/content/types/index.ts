import type { Status } from "@/types";

export interface contentState {
  nav: navItem[] | null;
  status?: Status;
}

export interface GetNavResponse {
  nav: navItem[] | null;
}

export interface navItem {
  id: number;
  name: string;
}
