import { useAppDispatch, useAppSelector } from "@/app/store";
import { navSelector, statusSelector } from "../model/authSelectors";

export const useContent = () => {
  const nav = useAppSelector(navSelector);
  const status = useAppSelector(statusSelector);
  const dispatch = useAppDispatch();

  return {
    nav,
    status,
    dispatch,
  };
};
