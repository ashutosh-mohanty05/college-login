import { MongoClient } from 'mongodb';

export async function POST(request) {
  try {
    const { username, email, password, photo, isLogin } = await request.json();

    const client = await MongoClient.connect('mongodb+srv://ashutoshmohanty005:poMOi8AZrrN0gUqy@users.laigmoq.mongodb.net/');
    const db = client.db('users');
    const users = db.collection('users');

    if (isLogin) {
      // Login user
      const user = await users.findOne({ email, password });
      if (!user) {
        return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 401 });
      }
      return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
    } else {
      // Register user
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        return new Response(JSON.stringify({ message: 'Email already registered' }), { status: 400 });
      }
      await users.insertOne({ username, email, password, photo });
      return new Response(JSON.stringify({ message: 'User registered' }), { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error connecting to database' }), { status: 500 });
  }
}