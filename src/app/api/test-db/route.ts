import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("heliCorp");

  const result = await db.collection("test").insertOne({
    hello: "world",
    time: new Date(),
  });

  return Response.json(result);
}