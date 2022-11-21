import { useAppSelector } from "../../strore/hooks";

export function useUser() {
  const { email, name } = useAppSelector((state) => state.user);

  return {
    email,
    name,
  };
}
