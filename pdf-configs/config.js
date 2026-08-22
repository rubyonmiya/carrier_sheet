module.exports = {
  stylesheet: "./docs/style.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    "format": "A4",
    "margin": "16mm 14mm 18mm 14mm",
    "printBackground": true,
    "headerTemplate": "<span></span>",
    "footerTemplate": "<div style=\"font-size:9px; color:#9ca3af; width:100%; text-align:right; padding-right:14mm;\"><span class=\"pageNumber\"></span> / <span class=\"totalPages\"></span></div>"
  },
  stylesheet_encoding: "utf-8",
};
