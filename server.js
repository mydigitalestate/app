import { join } from "https://deno.land/std/path/mod.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

const currentDirectory = Deno.cwd();
Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname.startsWith("/manifest.json") && url.searchParams.get("a")) {
    manifest.start_url = "/?a=" + url.searchParams.get("a");
    return new Response(JSON.stringify(manifest));
  }
  if (req.method === "GET" && !url.pathname.includes(".")) {
    console.log(url.pathname, "url.pathname dynamic");
    return serveFile(req, join(currentDirectory, "/index.html"));
  }

  // Serve static files
  if (req.method === "GET" && req.url !== "/") {
    console.log(url.pathname, "url.pathname static");
    return serveFile(req, join(currentDirectory, url.pathname));
  }
});
const manifest = {
  short_name: "MyDigitalEstate",
  name: "MyDigitalEstate",
  background_color: "#f4f6f8",
  theme_color: "#f4f6f8",
  display_override: [
    "window-controls-overlay",
    "standalone",
    "fullscreen",
    "minimal-ui",
    "browser",
  ],
  display: "standalone",
  orientation: "portrait",
  categories: ["business", "finance", "misc"],
  description:
    "MyDigitalEstate is a platform for investing in AirBnB properties.",
  edge_side_panel: {
    preferred_width: 400,
  },
  handle_links: "preferred",
  icons: [
    {
      src: "favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
      purpose: "any",
    },
    {
      src: "logo.png",
      sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  launch_handler: {
    client_mode: ["navigate-existing, auto"],
  },

  start_url: ".",
  scope: ".",
  id: "./VEWl7tUZUPlectHcM3V4",
  prefer_related_applications: true,
  related_applications: [
    {
      platform: "webapp",
      url: "mydigitalestate.app",
      id: "mydigitalestate.app/VEWl7tUZUPlectHcM3V4",
    },
  ],
  scope_extensions: [{ origin: "*.mydigitalestate.app" }],
  share_target: {
    action: "/",
    method: "GET",
    params: {
      title: "title",
      url: "url",
    },
  },
  shortcuts: [
    {
      name: "Market",
      url: "/market",
      description: "List of available houses",
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      description: "MyDigitalEstate Dashboard ",
    },
  ],
  widgets: [
    {
      name: "MyDigitalEstate",
      description: "Widget of MyDigitalEstate",
      tag: "mde",
      template: "mde-template",
      ms_ac_template: "widgets/template.json",
      data: "widgets/data.json",
      type: "application/json",
      screenshots: [
        {
          src: "./screenshot-widget.png",
          sizes: "600x400",
          label: "MDE widget",
        },
      ],
      icons: [
        {
          src: "./favicon-16.png",
          sizes: "16x16",
        },
      ],
      auth: true,
      update: 864000,
    },
  ],
  dir: "ltr",
  lang: "en-US",
  iarc_rating_id: "e0f8f1e0-4f6a-4a1a-8c5c-0c1b0c4f7b5b",
  protocol_handlers: [
    {
      protocol: "web+mydigitalestate",
      url: "/%s",
    },
  ],
  screenshots: [
    {
      src: "/Users/andreafuturi/Downloads/screenshots/1280x800-screenshot.png",
      sizes: "1280x800",
      type: "image/png",
    },
    {
      src: "/Users/andreafuturi/Downloads/screenshots/750x1334-screenshot.png",
      sizes: "750x1334",
      type: "image/png",
    },
  ],
};
