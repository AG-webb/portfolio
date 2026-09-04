export interface contentState {
  nav: navItem[] | null;
  status?: "idle" | "loading" | "loaded";
}

export interface GetNavResponse {
  nav: navItem[] | null;
}

export interface navItem {
  id: number;
  name: string;
}
