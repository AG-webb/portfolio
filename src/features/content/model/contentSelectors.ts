import type { RootState } from "@/app/store";

export const navSelector = (state: RootState) => state.content.nav;
export const statusSelector = (state: RootState) => state.content.status;