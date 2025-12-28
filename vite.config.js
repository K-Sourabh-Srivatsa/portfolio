import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Pass a callback function to defineConfig to access 'mode'
export default defineConfig(({ mode }) => {
  // 1. Load the environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      // 2. Access the variable from the 'env' object
      port: parseInt(env.VITE_PORT) || 5173,
      strictPort: true,
    },
  };
});
