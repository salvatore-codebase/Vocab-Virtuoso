import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type WordResponse, wordQuerySchema } from "@shared/schema";
import { z } from "zod";

// Fetch a random word based on criteria
export function useRandomWord(params: z.infer<typeof wordQuerySchema>, enabled: boolean) {
  const queryParams = new URLSearchParams(params).toString();
  return useQuery({
    queryKey: [api.words.random.path, params],
    queryFn: async () => {
      const res = await fetch(`${api.words.random.path}?${queryParams}`);
      if (!res.ok) throw new Error("Failed to fetch word");
      // Use the Zod schema from routes to validate response
      return api.words.random.responses[200].parse(await res.json());
    },
    enabled,
    refetchOnWindowFocus: false,
  });
}

// Background themes config
export const BACKGROUNDS = [
  { id: 'city', name: 'Busy City', gradient: 'from-blue-200 via-purple-200 to-pink-200' },
  { id: 'beach', name: 'Sunny Beach', gradient: 'from-cyan-300 via-blue-200 to-yellow-100' },
  { id: 'forest', name: 'Enchanted Forest', gradient: 'from-green-800 via-green-600 to-emerald-400' },
  { id: 'egypt', name: 'Egyptian Desert', gradient: 'from-orange-200 via-amber-200 to-yellow-100' },
  { id: 'snow', name: 'Winter Wonderland', gradient: 'from-slate-200 via-blue-100 to-white' },
  { id: 'space', name: 'Outer Space', gradient: 'from-indigo-950 via-purple-900 to-slate-900' },
] as const;

export type ThemeId = typeof BACKGROUNDS[number]['id'];
