import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyExpo from "./MyExpo";

const queryProvider = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryProvider}>
      <MyExpo />
    </QueryClientProvider>
  );
}
