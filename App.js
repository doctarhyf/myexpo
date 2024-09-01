import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyExpo from "./MyExpo";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyExpo />
    </QueryClientProvider>
  );
}
