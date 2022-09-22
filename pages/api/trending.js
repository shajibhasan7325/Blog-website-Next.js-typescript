import data from "../api/data";
export default function handlebar(req, res) {
  const { Trending } = data;
  if (Trending) {
    return res.status(200).json(Trending);
  }
  return res.status(404).json({ error: "data not load" });
}
