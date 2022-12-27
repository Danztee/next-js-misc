export default function handler(req, res) {
  res.setPreviewData({ user: "Daniel" });
  res.redirect(req.query.redirect);
}
