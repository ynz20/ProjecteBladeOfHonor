import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", // Directori de sortida per al build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Pàgina principal
        login: path.resolve(__dirname, "src/login.html"),
        charity: path.resolve(__dirname, "src/charityworkpage.html"),
        contactus: path.resolve(__dirname, "src/contactus.html"),
        dojo: path.resolve(__dirname, "src/dojo.html"),
        dojoquotes: path.resolve(__dirname, "src/dojoquotes.html"),
        home: path.resolve(__dirname, "src/home.html"),
        realkatanas: path.resolve(__dirname, "src/realkatanas.html"),
        signup: path.resolve(__dirname, "src/signup.html"),
        aboutus: path.resolve(__dirname, "src/aboutus.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});
