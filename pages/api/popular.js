import data from "../api/data";

export default function handlebar(req, res) {
  const { Popular } = data;
  if (Popular) return res.status(200).json(Popular);
  return res.status(4040).json({ error: "data not found" });
}
